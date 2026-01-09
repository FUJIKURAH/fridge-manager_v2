import { useState } from "react";

function useSearchUser() {
  const [searchUsers, setSearchUsers] = useState<string[]>([]);

  const emailGet = async (email: string): Promise<void> => {
    try {
      const res = await fetch(
        `/api/users/search?email=${encodeURIComponent(email)}`,
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("ユーザーが見つかりません");
      }

      const data = await res.json();
      setSearchUsers((prev) => [...prev, data.email]);
    } catch {
      setSearchUsers([]);
    }
  };
  return { searchUsers, emailGet };
}

export default useSearchUser;
