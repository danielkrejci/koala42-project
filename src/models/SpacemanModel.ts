export interface SpacemanItem {
    id: number
    name: string
    gender: string
    ability: string
    minDistance: number
    weight: number
    born: string
    inSpaceSince: string
    beerConsumption: number
    knowsAnswer: boolean
}

export interface SpacemanData {
    data: SpacemanItem
    nemesis: NemesisData[]
}

export interface NemesisItem {
    id: number
    characterId: number
    isAlive: boolean
    years: number
}

export interface NemesisData {
    data: NemesisItem
    secrets: SecretsData[]
}

export interface SecretsItem {
    id: number
    nemesisId: number
    code: string
}

export interface SecretsData {
    data: SecretsItem
}
