import { SpacemanData, NemesisData, SecretsData } from '../models/SpacemanModel'

export const loadSpacemanData = (jsonData: object): SpacemanData[] => {
    const data: SpacemanData[] = []

    Object.values(jsonData).map(entry => {
        const hasNemesis = entry.children?.has_nemesis?.records?.length > 0

        data.push({
            data: {
                id: entry['data']['ID'],
                name: entry['data']['Name'],
                gender: entry['data']['Gender'],
                ability: entry['data']['Ability'],
                minDistance: entry['data']['Minimal distance'],
                weight: entry['data']['Weight'],
                born: entry['data']['Born'],
                inSpaceSince: entry['data']['In space since'],
                beerConsumption: entry['data']['Beer consumption (l/y)'],
                knowsAnswer: entry['data']['Knows the answer?'],
            },
            nemesis: hasNemesis ? loadNemesisData(entry['children']['has_nemesis']['records']) : [],
        })
    })

    return data
}

export const loadNemesisData = (jsonData: object): NemesisData[] => {
    const data: NemesisData[] = []

    Object.values(jsonData).map(entry => {
        const hasSecrete = entry.children?.has_secrete?.records?.length > 0

        data.push({
            data: {
                id: entry['data']['ID'],
                characterId: entry['data']['Character ID'],
                isAlive: entry['data']['Is alive?'],
                years: entry['data']['Years'],
            },
            secrets: hasSecrete ? loadSecreteData(entry['children']['has_secrete']['records']) : [],
        })
    })

    return data
}

export const loadSecreteData = (jsonData: object): SecretsData[] => {
    const data: SecretsData[] = []

    Object.values(jsonData).map(entry => {
        data.push({
            data: {
                id: entry['data']['ID'],
                nemesisId: entry['data']['Nemesis ID'],
                code: entry['data']['Secrete Code'],
            },
        })
    })

    return data
}
