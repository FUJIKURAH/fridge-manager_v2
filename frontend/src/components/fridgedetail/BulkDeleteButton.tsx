import type { Status } from "@/types/Status";

interface RemoveFuncArgs {
  fridgeId: number;
  itemId: number;
}

interface Props {
  fridgeId: number;
  fridgeItems: number[];
  statusRemove: Status;
  removeFunc: (args: RemoveFuncArgs) => Promise<void>;
}

function BulkDeleteButton({
  fridgeId,
  fridgeItems,
  statusRemove,
  removeFunc,
}: Props) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await Promise.all(
      fridgeItems.map((itemId) => removeFunc({ fridgeId, itemId }))
    );
  };

  return (
    <button
      type="button"
      className="m-fridge__remove-all-btn"
      onClick={handleClick}
      disabled={statusRemove === "loading"}
    >
      一括削除
    </button>
  );
}
export default BulkDeleteButton;
