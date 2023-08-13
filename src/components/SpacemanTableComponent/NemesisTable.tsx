import { NemesisRecord } from "../../types";
import "../../index.css";
import { DeleteButton } from "../Buttons/DeleteButton";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { NemesisRecordsTable } from "./NemesisRecordsTable";

export function NemesisTable(props: {
  nemesisData?: NemesisRecord[];
  index: number;
}) {
  return (
    <tr>
      <td colSpan={7}>
        <table className="table w-full shadow-md">
          <NemesisHeader />
          <tbody>
            {props.nemesisData?.map((item, index) => {
              const [isRecordsExpanded, setIsRecordsExpanded] = useState(false);

              return (
                <>
                 {/* Nemesis Item */}
                  <NemesisItem
                    data={item.data}
                    key={index}
                    nemesisIndex={index}
                    spacemanIndex={props.index}
                    state={setIsRecordsExpanded}
                    isRecords={props.nemesisData![index].children?.has_secrete?.records !== undefined}
                  />
                  {/* Nemesis Records Table */}
                  {isRecordsExpanded ? (
                    <NemesisRecordsTable
                      recordsData={
                        props.nemesisData![index].children?.has_secrete?.records
                      }
                      spacemanIndex={props.index}
                      nemesisIndex={index}
                      key={index}
                    />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </td>
    </tr>
  );
}

/*----------------------------------  Nemesis Header ---------------------------------- */

function NemesisHeader() {
  return (
    <thead className="bg-primary">
      <tr>
        <th className="w-10"></th>
        <th>ID</th>
        <th>Charakter ID</th>
        <th>Is Alive?</th>
        <th>Years</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

/*----------------------------------  Nemesis Item ---------------------------------- */

function NemesisItem(props: {
  data: NemesisRecord["data"];
  spacemanIndex: number;
  isRecords: boolean;
  nemesisIndex: number;
  state: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    ID,
    "Character ID": charakterID,
    "Is alive?": isAlive,
    Years,
  } = props.data;

  return (
    <tr>
      <td>
        {props.isRecords ? (
          <label className="btn btn-circle bg-transparent border-transparent swap swap-rotate">
            <input
              onClick={() => {
                props.state((state) => {
                  return !state;
                });
              }}
              type="checkbox"
            />
            <ChevronDown className="swap-off" size={20} />
            <ChevronUp className="swap-on" size={20} />
          </label>
        ) : (
          <></>
        )}
      </td>
      <th>{ID}</th>
      <th>{charakterID}</th>
      <th>{isAlive}</th>
      <th>{Years}</th>
      <th>
        <DeleteButton
          nemesisIndex={props.nemesisIndex}
          spacemanIndex={props.spacemanIndex}
          type="nemesis"
        />
      </th>
    </tr>
  );
}
