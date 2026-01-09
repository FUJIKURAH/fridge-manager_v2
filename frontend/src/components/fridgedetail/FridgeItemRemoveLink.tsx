// import { useState } from "react";
// import { useEffect } from "react";
// import type { Item } from "@/types/Item";
// import { FridgeItem } from "@/components/FridgeItem";

interface RemoveFuncArgs {
  fridgeId: number;
  itemId: number;
}
interface Props {
  fridgeId: number;
  itemId: number;
  onRemoveFridgeItem: (args: RemoveFuncArgs) => Promise<void>;
}

function FridgeItemRemoveLink({ fridgeId, itemId, onRemoveFridgeItem }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onRemoveFridgeItem({ fridgeId, itemId });
  };

  return (
    <button
      className="m-fridge-detail-item__remove-btn"
      type="button"
      onClick={handleClick}
      data-role="remove"
      // disabled={removeStatus === "loading"}
    >
      削除
    </button>
  );
}
export default FridgeItemRemoveLink;
