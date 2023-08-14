import { Trash } from 'react-feather'
import { useDataStore } from '../../store/DataStore'

interface DeleteButtonProps {
    type: 'spaceman' | 'nemesis' | 'secrets'
    spacemanIdx?: number
    nemesisIdx?: number
    nemesisSecretsIdx?: number
    onClick?: () => void
}

export const DeleteButton = (props: DeleteButtonProps) => {
    const { spacemanIdx, nemesisIdx, nemesisSecretsIdx, type } = props

    const deleteSpaceman = useDataStore(state => state.deleteSpaceman)
    const deleteHisNemesis = useDataStore(state => state.deleteNemesis)
    const deleteNemesisCodes = useDataStore(state => state.deleteSecrets)

    return (
        <button
            onClick={() => {
                type === 'spaceman' && spacemanIdx
                    ? deleteSpaceman(spacemanIdx)
                    : type === 'nemesis' && spacemanIdx && nemesisIdx
                    ? deleteHisNemesis(spacemanIdx, nemesisIdx)
                    : type === 'secrets' && spacemanIdx && nemesisIdx && nemesisSecretsIdx
                    ? deleteNemesisCodes(spacemanIdx, nemesisIdx, nemesisSecretsIdx)
                    : null

                if (props.onClick) {
                    props.onClick()
                }
            }}
            className='btn btn-circle bg-transparent border-none hover:border-none hover:text-base-100 hover:bg-red-500'>
            <Trash size={20} />
        </button>
    )
}
