import { NemesisData } from './NemesisModel'

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
