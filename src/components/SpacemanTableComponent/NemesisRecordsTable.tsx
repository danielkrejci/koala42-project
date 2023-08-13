import { SecreteRecord } from "../../types";
import "../../index.css";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ChevronDown, ChevronUp } from "react-feather";

export function NemesisRecordsTable(props: {
  recordsData?: SecreteRecord[];
  spacemanIndex: number;
  nemesisIndex: number;
}) {
  
  return (
    <tr>
      <td colSpan={7}>
        <table className="table w-full shadow-md">
          <RecordsHeader />
          <tbody>
            {props.recordsData?.map((item, index) => {
              return (
                /* Nemesis Records Item */
                <NemesisRecordsItem
                  data={item.data}
                  key={index}
                  nemesisIndex={props.nemesisIndex}
                  spacemanIndex={props.spacemanIndex}
                  nemesisCodesIndex={index}
                />
              );
            })}
          </tbody>
        </table>
      </td>
    </tr>
  );
}

/*-------------------------------------- Records Header -------------------------------------- */

function RecordsHeader() {
  return (
    <thead className="bg-primary">
      <tr>
        <th className="w-10"></th>
        <th>ID</th>
        <th>Nemesis ID</th>
        <th>Secrete Code</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

/*-------------------------------------- Records Item -------------------------------------- */

function NemesisRecordsItem(props: {
  data: SecreteRecord["data"];
  spacemanIndex: number;
  nemesisIndex: number;
  nemesisCodesIndex: number;
}) {
  const {
    ID,
    "Nemesis ID": nemesisID,
    "Secrete Code": secreteCode,
  } = props.data;

  /* TO-DO if Records have childrens */
  /* const [isExpanded,setIsExpanded] = useState(false) */

  return (
    <tr>
      <td>
        <label className="btn btn-circle bg-transparent border-transparent swap swap-rotate">
          <input
            /* onClick={() => {
              setIsExpanded((state) => {
                return !state;
              });
            }} */
            type="checkbox"
          />
          <ChevronDown className="swap-off" size={20} />
          <ChevronUp className="swap-on" size={20} />
        </label>
      </td>
      <th>{ID}</th>
      <th>{nemesisID}</th>
      <th>{secreteCode}</th>
      <th>
        <DeleteButton
          nemesisIndex={props.nemesisIndex}
          spacemanIndex={props.spacemanIndex}
          nemesisSecretsIndex={props.nemesisCodesIndex}
          type="nemesicCodes"
        />
      </th>
    </tr>
  );
}
