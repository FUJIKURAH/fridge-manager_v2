import { useState } from "react";
import type { Status } from "@/types/Status";
import FridgeRegisterForm from "@/components/fridgelist/FridgeRegisterForm";

interface Props {
  registerFunc: (name: string) => Promise<void>;
  statusRegister: Status;
}

function FridgeRegisterBloc({ registerFunc, statusRegister }: Props) {
  const [fridgeForm, setFridgeForm] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFridgeForm((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="m-fridge-register">
      {fridgeForm.map((form) => (
        <FridgeRegisterForm
          key={form}
          onSubmitFridge={registerFunc}
          statusRegister={statusRegister}
        />
      ))}
      <button
        type="button"
        className="m-fridge-register__show-btn"
        onClick={handleClick}
      >
        冷蔵庫を追加
      </button>
    </div>
  );
}
export default FridgeRegisterBloc;
