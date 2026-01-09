interface Props {
  setFridgeItemForms: React.Dispatch<React.SetStateAction<number[]>>;
}

function FridgeItemRegisterButton({ setFridgeItemForms }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFridgeItemForms((prev) => [...prev, prev.length + 1]);
  };
  return (
    <button
      type="button"
      className="m-fridge-detail__register-btn"
      onClick={handleClick}
    >
      追加
    </button>
  );
}
export default FridgeItemRegisterButton;
