import { useEffect } from "react";
import Message from "@/components/Message";
import FridgeRegisterBloc from "@/components/fridgelist/FridgeRegisterBloc";
import useCurrentFridges from "@/hooks/fridgelist/useCurrentFridges";
import useRemoveFridges from "@/hooks/fridgelist/useRemoveFridges";
import useRegisterFridges from "@/hooks/fridgelist/useRegisterFridges";
import FridgeList from "@/components/fridgelist/FridgeList";

function FridgeArchivePage() {
  const { fridges, dataGet } = useCurrentFridges();
  const { removeStatus, remove } = useRemoveFridges();
  const { statusRegister, register } = useRegisterFridges();

  const message =
    removeStatus === "error" ? "冷蔵庫の削除に失敗しました" : null;

  useEffect(() => {
    dataGet();
  }, []);

  useEffect(() => {
    if (removeStatus === "success") {
      dataGet();
    }
  }, [removeStatus]);

  useEffect(() => {
    if (statusRegister === "success") {
      dataGet();
    }
  }, [statusRegister]);

  return (
    <div className="m-fridge">
      <h1 className="m-fridge__top-ttl">冷蔵庫一覧</h1>
      <FridgeRegisterBloc
        registerFunc={register}
        statusRegister={statusRegister}
      />
      <FridgeList
        fridgesData={fridges}
        removeStatus={removeStatus}
        removeFunc={remove}
      />
      {message && <Message message={message} />}
    </div>
  );
}

export default FridgeArchivePage;
