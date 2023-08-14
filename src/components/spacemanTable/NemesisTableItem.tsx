import { DeleteButton } from '../button/DeleteButton'
import { useState } from 'react'
import { NemesisData } from '../../models/NemesisModel'
import { SecretsTable } from './SecretsTable'
import { ToggleButton } from '../button/ToggleButton'

interface NemesisTableItemProps {
    spacemanIdx: number
    nemesisIdx: number
    data: NemesisData
}

export function NemesisTableItem(props: NemesisTableItemProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const { id, characterId, isAlive, years } = props.data.data

    return (
        <>
            <tr>
                <td>
                    {props.data.secrets.length > 0 && (
                        <ToggleButton isExpanded={isExpanded} setIsExpanded={isExpanded => setIsExpanded(isExpanded)} />
                    )}
                </td>
                <th>{id}</th>
                <td>{characterId}</td>
                <td>{isAlive}</td>
                <td>{years}</td>
                <td>
                    <DeleteButton
                        nemesisIdx={props.nemesisIdx}
                        spacemanIdx={props.spacemanIdx}
                        type='nemesis'
                        onClick={() => setIsExpanded(false)}
                    />
                </td>
            </tr>

            {isExpanded && props.data.secrets.length > 0 && (
                <SecretsTable data={props.data.secrets} spacemanIdx={props.spacemanIdx} nemesisIdx={props.nemesisIdx} />
            )}
        </>
    )
}
