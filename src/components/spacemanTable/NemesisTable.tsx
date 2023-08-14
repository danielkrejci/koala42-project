import { NemesisData } from '../../models/SpacemanModel'
import { NemesisTableItem } from './NemesisTableItem'

interface NemesisTableProps {
    data: NemesisData[]
    spacemanIdx: number
}

export const NemesisTable = (props: NemesisTableProps): JSX.Element => {
    return (
        <tr>
            <td colSpan={8}>
                <table className='table w-full shadow-md'>
                    <thead className='bg-primary text-base-100'>
                        <tr>
                            <th className='w-20'></th>
                            <th>ID</th>
                            <th>Charakter ID</th>
                            <th>Is Alive?</th>
                            <th>Years</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.length > 0 ? (
                            props.data.map((item, idx) => (
                                <NemesisTableItem key={idx} spacemanIdx={props.spacemanIdx} nemesisIdx={item.data.id} data={item} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6}>No data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}
