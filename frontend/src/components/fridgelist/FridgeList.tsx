import { useState } from "react";
import { useEffect } from "react";
import type { Fridge } from "@/types/Fridge";
import type { Status } from "@/types/Status";
import FridgeListItem from "@/components/fridgelist/FridgeListItem";
import FridgeRemoveAllLink from "@/components/fridgelist/FridgeRemoveAllLink";

interface FridgeProps {
  fridgesData: Fridge[];
  removeStatus: Status;
  removeFunc: (id: number) => Promise<void>;
}

function FridgeList({ fridgesData, removeStatus, removeFunc }: FridgeProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const removeFridges = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((f) => f !== id)
    );
  };

  useEffect(() => {
    if (removeStatus === "success") {
      setSelectedIds([]);
    }
  }, [removeStatus]);

  return (
    <>
      {fridgesData.length > 0 ? (
        <ul className="m-fridge__list">
          {fridgesData.map((fridge) => (
            <FridgeListItem
              key={fridge.id}
              fridge={fridge}
              onCheck={removeFridges}
              isChecked={selectedIds.includes(fridge.id)}
              removeStatus={removeStatus}
              removeFunc={removeFunc}
            />
          ))}
        </ul>
      ) : null}
      <FridgeRemoveAllLink
        fridges={selectedIds}
        removeStatus={removeStatus}
        removeFunc={removeFunc}
      />
    </>
  );
}
export default FridgeList;
