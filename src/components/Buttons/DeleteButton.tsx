import { Trash } from "react-feather";
import { useStore } from "../../store/jsonState";

export function DeleteButton(props: {
  spacemanIndex?: number;
  nemesisIndex?: number;
  nemesisSecretsIndex?: number;
  type: "spaceman" | "nemesis" | "nemesicCodes";
  id?: string;
}) {
  const { spacemanIndex, nemesisIndex, nemesisSecretsIndex, type, id } = props;
  const deleteSpaceman = useStore((state) => state.deleteSpaceman);
  const deleteHisNemesis = useStore((state) => state.deleteHisNemesis);
  const deleteNemesisCodes = useStore((state) => state.deleteNemesisSecrets);

  console.log(nemesisSecretsIndex);
  return (
    <button
      onClick={() => {
        type === "spaceman"
          ? deleteSpaceman(id!)
          : type === "nemesis"
          ? deleteHisNemesis(spacemanIndex!, nemesisIndex!)
          : type === "nemesicCodes"
          ? deleteNemesisCodes(
              spacemanIndex!,
              nemesisIndex!,
              nemesisSecretsIndex!
            )
          : null;
      }}
      className="btn btn-circle bg-transparent border-transparent hover:bg-primary"
    >
      <Trash size={20} />
    </button>
  );
}
