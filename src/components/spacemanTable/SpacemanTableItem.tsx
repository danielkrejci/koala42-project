import { useState } from 'react'
import { NemesisTable } from './NemesisTable'
import { DeleteButton } from '../button/DeleteButton'
import { SpacemanData } from '../../models/SpacemanModel'
import { parseCETDate } from '../../helpers/dateHelper'
import { ToggleButton } from '../button/ToggleButton'

interface SpacemanTableItemProps {
    data: SpacemanData
    spacemanIdx: number
}

export const SpacemanTableItem = (props: SpacemanTableItemProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false)

    const { id, name, gender, ability, minDistance, weight, born, inSpaceSince, beerConsumption, knowsAnswer } = props.data.data

    return (
        <>
            <tr className='hover:bg-base-200'>
                <td>
                    {props.data.nemesis.length > 0 && (
                        <ToggleButton isExpanded={isExpanded} setIsExpanded={isExpanded => setIsExpanded(isExpanded)} />
                    )}
                </td>
                <th>{id}</th>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{ability}</td>
                <td>{minDistance}</td>
                <td>{weight}</td>
                <td>{parseCETDate(born)}</td>
                <td>{parseCETDate(inSpaceSince)}</td>
                <td>{beerConsumption}</td>
                <td>{knowsAnswer}</td>
                <td>
                    <DeleteButton type='spaceman' spacemanIdx={id} onClick={() => setIsExpanded(false)} />
                </td>
            </tr>

            {isExpanded && props.data.nemesis.length > 0 && <NemesisTable data={props.data.nemesis} spacemanIdx={props.spacemanIdx} />}
        </>
    )
}
