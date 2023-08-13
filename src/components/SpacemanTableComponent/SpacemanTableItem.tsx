import { useState } from "react";
import { Record, NemesisRecord } from "../../types";
import { NemesisTable } from "./NemesisTable";
import { ChevronDown, ChevronUp } from "react-feather";
import { DeleteButton } from "../Buttons/DeleteButton";

export function SpacemanTableItem(props: {
  spaceman: Record["data"];
  nemesis?: NemesisRecord[];
  key: number;
  index: number;
}) {
  const [isSpacemanExpanded, setIsSpacemanExpanded] = useState(false);

  return (
    <>
      {/* Spaceman item */}
      <ItemData
        spacemanData={props.spaceman}
        isNemesis={props.nemesis?.length !== 0 || props.nemesis !== undefined}
        state={setIsSpacemanExpanded}
        index={props.index}
      />
      {/* Spaceman nemesis table */}
      {isSpacemanExpanded ? (
        <NemesisTable nemesisData={props.nemesis} index={props.index} />
      ) : (
        <></>
      )}
    </>
  );
}

/*--------------------------------------------------  Spcaeman Item Component  -------------------------------------------------- */

function ItemData(props: {
  spacemanData: Record["data"];
  isNemesis: boolean;
  index: number;
  state: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    ID,
    Name,
    Gender,
    Ability,
    "Minimal distance": minDist,
    Weight,
    Born,
    "In space since": inSpaceSinc,
    "Beer consumption (l/y)": beerCons,
    "Knows the answer?": knowsTheAswer,
  } = props.spacemanData;

  return (
    <tr className="hover:bg-base-200">
      {
        /* Expanded button */
        props.isNemesis ? (
          <td>
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
          </td>
        ) : (
          <td></td>
        )
      }
      <th>{ID}</th>
      <td>{Name}</td>
      <td>{Gender}</td>
      <td>{Ability}</td>
      <td>{minDist}</td>
      <td>{Weight}</td>
      <td>{Born}</td>
      <td>{inSpaceSinc}</td>
      <td>{beerCons}</td>
      <td>{knowsTheAswer}</td>
      {/* Button for delete item */}
      <td>
        <DeleteButton type="spaceman" id={ID} />
      </td>
    </tr>
  );
}
