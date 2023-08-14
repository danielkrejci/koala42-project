import { DeleteButton } from '../button/DeleteButton'
import { SecretsData } from '../../models/SpacemanModel'

interface SecretsTableItemProps {
    data: SecretsData
    spacemanIdx: number
    nemesisIdx: number
}

export const SecretsTableItem = (props: SecretsTableItemProps) => {
    const { id, nemesisId, code } = props.data.data

    return (
        <>
            <tr>
                <th />
                <th>{id}</th>
                <td>{nemesisId}</td>
                <td>{code}</td>
                <td>
                    <DeleteButton nemesisIdx={props.nemesisIdx} spacemanIdx={props.spacemanIdx} nemesisSecretsIdx={id} type='secrets' />
                </td>
            </tr>
        </>
    )
}
