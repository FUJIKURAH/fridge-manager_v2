import { useState } from "react";
import type { Status } from "@/types/Status";
interface RegisterFormProps {
  onSubmitFridge: (name: string) => Promise<void>;
  statusRegister: Status;
}

function FridgeRegisterForm({
  onSubmitFridge,
  statusRegister,
}: RegisterFormProps) {
  const [fridgeName, setFridgeName] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmitFridge(fridgeName);
  };

  return (
    <>
      {statusRegister !== "success" && (
        <form className="m-fridge-register-form">
          <div className="m-fridge-register-form__input">
            <label htmlFor="fridgeName">新しい冷蔵庫を追加</label>
            <input
              type="text"
              name="fridgeName"
              placeholder="冷蔵庫名を入力してください"
              value={fridgeName}
              onChange={(e) => {
                setFridgeName(e.target.value);
              }}
            ></input>
          </div>
          <button
            type="button"
            className="m-fridge-register-form__submit"
            onClick={handleClick}
          >
            追加
          </button>
        </form>
      )}
    </>
  );
}
export default FridgeRegisterForm;
