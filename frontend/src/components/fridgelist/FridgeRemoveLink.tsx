import type { Status } from "@/types/Status";

interface Props {
  fridgeId: number;
  onRemoveFridge: (fridgeId: number) => Promise<void>;
  removeStatus: Status;
}

function FridgeMoreLink({ fridgeId, onRemoveFridge, removeStatus }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onRemoveFridge(fridgeId);
  };

  return (
    <button
      type="button"
      className="m-fridge__remove-btn"
      onClick={handleClick}
      disabled={removeStatus === "loading"}
    >
      削除
    </button>
  );
}
export default FridgeMoreLink;
