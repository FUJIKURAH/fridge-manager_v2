import type { Status } from "@/types/Status";

interface Props {
  fridges: number[];
  removeStatus: Status;
  removeFunc: (id: number) => Promise<void>;
}

function FridgeRemoveAllLink({ fridges, removeStatus, removeFunc }: Props) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await Promise.all(fridges.map((fridge) => removeFunc(fridge)));
  };

  return (
    <button
      type="button"
      className="m-fridge__remove-all-btn"
      onClick={handleClick}
      disabled={removeStatus === "loading"}
    >
      一括削除
    </button>
  );
}
export default FridgeRemoveAllLink;
