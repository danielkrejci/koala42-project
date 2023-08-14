import { create } from 'zustand'
import { SpacemanData } from '../models/SpacemanModel'
import { loadSpacemanData } from '../helpers/dataHelper'
import json from '../../json/jsonData.json'

interface DataStore {
    data: SpacemanData[]
    deleteSpaceman: (spacemanIdx: number) => void
    deleteNemesis: (spacemanIdx: number, nemesisIdx: number) => void
    deleteSecrets: (spacemanIdx: number, nemesisIdx: number, secretsIdx: number) => void
}

export const useDataStore = create<DataStore>((set, get) => ({
    data: loadSpacemanData(json),

    deleteSpaceman: spacemanIdx => {
        set(state => ({
            data: state.data.filter(item => item.data.id !== spacemanIdx),
        }))
    },

    deleteNemesis: (spacemanIdx, nemesisIdx) => {
        const updatedData = [...get().data]
        const spacemanData = updatedData.find(item => item.data.id === spacemanIdx)

        if (spacemanData) {
            const spacemanDataId = updatedData.indexOf(spacemanData)
            updatedData[spacemanDataId].nemesis = updatedData[spacemanDataId].nemesis.filter(item => item.data.id !== nemesisIdx)
        }

        set(() => ({ data: updatedData }))
    },

    deleteSecrets: (spacemanIdx, nemesisIdx, secretsIdx) => {
        const updatedData = [...get().data]
        const spacemanData = updatedData.find(item => item.data.id === spacemanIdx)
        const nemesisData = spacemanData?.nemesis.find(item => item.data.id === nemesisIdx)

        if (spacemanData && nemesisData) {
            const spacemanDataId = updatedData.indexOf(spacemanData)
            const nemesisDataId = spacemanData.nemesis.indexOf(nemesisData)

            updatedData[spacemanDataId].nemesis[nemesisDataId].secrets = updatedData[spacemanDataId].nemesis[nemesisDataId].secrets.filter(
                item => item.data.id !== secretsIdx
            )
        }

        set(() => ({ data: updatedData }))
    },
}))
