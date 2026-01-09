import { useState } from "react";

function useShareUser() {
  const [shareUserState, setShareUserState] = useState(false);

  const emailPost = async (fridgeId: number, email: string): Promise<void> => {
    try {
      const res = await fetch(`/api/fridges/${fridgeId}/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("冷蔵庫の共有に失敗しました");
      }
      setShareUserState(true);
    } catch {
      setShareUserState(false);
    }
  };
  return { shareUserState, emailPost };
}

export default useShareUser;
