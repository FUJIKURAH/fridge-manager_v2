import { useState } from "react";
// import { useEffect } from "react";
import type { Status } from "@/types/Status";
import type { Item } from "@/types/Item";
import FridgeItem from "@/components/fridgedetail/FridgeItem";
import BulkDeleteButton from "@/components/fridgedetail/BulkDeleteButton";

interface RemoveFuncArgs {
  fridgeId: number;
  itemId: number;
}
interface Props {
  fridgeDetails: Item[];
  fridgeId: number;
  removeFunc: (args: RemoveFuncArgs) => Promise<void>;
  statusRemove: Status;
  selectedCategories: string[];
  byDateAscend: boolean;
}

function FridgeItemList({
  fridgeDetails,
  fridgeId,
  removeFunc,
  statusRemove,
  selectedCategories,
  byDateAscend,
}: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const removeFridgeItems = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((f) => f !== id)
    );
  };

  const filteredDetails = fridgeDetails.filter((detail) => {
    if (
      selectedCategories.length === 0 ||
      selectedCategories.includes("全て")
    ) {
      return true;
    }
    return selectedCategories.includes(detail.category);
  });

  const sortedDetails = [...filteredDetails].sort((a, b) =>
    byDateAscend
      ? a.expirationDate.localeCompare(b.expirationDate)
      : b.expirationDate.localeCompare(a.expirationDate)
  );
  return (
    <>
      {sortedDetails.length > 0 ? (
        <div className="m-fridge-detail__list">
          {sortedDetails.map((detail) => (
            <FridgeItem
              key={detail.id}
              fridgeId={fridgeId}
              itemId={detail.id}
              itemName={detail.name}
              itemCategory={detail.category}
              itemExpirationDate={detail.expirationDate}
              itemQuantity={detail.quantity}
              removeFunc={removeFunc}
              onCheck={removeFridgeItems}
              isChecked={selectedIds.includes(detail.id)}
            />
          ))}
        </div>
      ) : null}
      <BulkDeleteButton
        fridgeId={fridgeId}
        fridgeItems={selectedIds}
        removeFunc={removeFunc}
        statusRemove={statusRemove}
      />
    </>
  );
}
export default FridgeItemList;
