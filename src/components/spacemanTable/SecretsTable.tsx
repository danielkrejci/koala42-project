import { SecretsData } from '../../models/SecretsModel'
import { SecretsTableItem } from './SecretsTableItem'

interface SecretsTableProps {
    data: SecretsData[]
    spacemanIdx: number
    nemesisIdx: number
}

export const SecretsTable = (props: SecretsTableProps): JSX.Element => {
    return (
        <tr>
            <td colSpan={6}>
                <table className='table w-full shadow-md'>
                    <thead className='bg-primary text-base-100'>
                        <tr>
                            <th className='w-20' />
                            <th>ID</th>
                            <th>Nemesis ID</th>
                            <th>Secrete Code</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.length > 0 ? (
                            props.data.map((item, idx) => (
                                <SecretsTableItem key={idx} spacemanIdx={props.spacemanIdx} nemesisIdx={props.nemesisIdx} data={item} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>No data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}
