import { useDataStore } from '../../store/DataStore'
import { SpacemanTableItem } from './SpacemanTableItem'

/* Table for The Hitchhiker's Guide to the Galaxy charakters */

export const SpacemanTable = (): JSX.Element => {
    const data = useDataStore(state => state.data)

    return (
        <table className='text-center table'>
            <thead className='text-xl shadow-lg bg-primary text-base-100 my-5'>
                <tr>
                    <th className='w-20'></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Abbility</th>
                    <th>
                        Minimal <br /> Distance
                    </th>
                    <th>Weight</th>
                    <th>Born</th>
                    <th>Time in Space</th>
                    <th>Beer Consumpiton</th>
                    <th>
                        Knows <br /> the answer
                    </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((item, idx) => <SpacemanTableItem key={idx} spacemanIdx={item.data.id} data={item} />)
                ) : (
                    <tr>
                        <td colSpan={12}>No data</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
