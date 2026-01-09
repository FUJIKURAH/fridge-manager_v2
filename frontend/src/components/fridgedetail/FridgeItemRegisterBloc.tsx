import { useState } from "react";
import FridgeItemRegisterForm from "@/components/fridgedetail/FridgeItemRegisterForm";

interface RegisterFormArgs {
  fridgeId: number;
  name: string;
  category: string;
  expirationDate: string;
  quantity: number;
}
interface RegisterFormProps {
  fridgeId: number;
  registerFunc: (args: RegisterFormArgs) => Promise<void>;
}

function FridgeItemRegisterBloc({ fridgeId, registerFunc }: RegisterFormProps) {
  const [fridgeItemForms, setFridgeItemForms] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFridgeItemForms((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
      <div className="m-fridge-detail-table__add-wrapper">
        <div className="m-fridge-detail-table__add">
          <button
            type="button"
            className="m-fridge-detail-table__add-btn"
            onClick={handleClick}
          >
            追加
          </button>
        </div>
        {fridgeItemForms.map((form) => (
          <FridgeItemRegisterForm
            key={form}
            onSubmitFridgeItem={registerFunc}
            fridgeId={fridgeId}
          />
        ))}
      </div>
    </>
  );
}
export default FridgeItemRegisterBloc;
