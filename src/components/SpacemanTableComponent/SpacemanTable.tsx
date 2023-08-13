import { useStore } from "../../store/jsonState";
import { SpacemanTableItem } from "./SpacemanTableItem";

/* Table for The Hitchhiker's Guide to the Galaxy charakters */

export function SpacemanTable() {
  const json = useStore((state) => state.data);
  return (
    <table className="text-center table">
      {/* Table Header */}
      <SpacemanTableHeader />
       {/* Table Body */}
      <tbody>
        {json.map((item, index) => {
          return (
            <SpacemanTableItem
              spaceman={item.data}
              nemesis={
                item.children?.has_nemesis?.records
              }
              key={index}
              index={index}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function SpacemanTableHeader() {
  return (
    <thead className="text-xl shadow-lg bg-primary text-base-100 my-5">
      <tr>
        <th className="w-20"></th>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Abbility</th>
        <th>Minimal <br /> Distance</th>
        <th>Weight</th>
        <th>Born</th>
        <th>Time in Space</th>
        <th>Beer Consumpiton</th>
        <th>Knows <br /> the answer</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

