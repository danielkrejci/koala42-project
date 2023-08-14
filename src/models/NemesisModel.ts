import { SecretsData } from './SecretsModel'

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
