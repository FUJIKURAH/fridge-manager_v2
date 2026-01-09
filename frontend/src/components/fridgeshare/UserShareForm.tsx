import useShareUser from "@/hooks/fridgeshare/useShareUser";

interface Props {
  fridgeId: number;
  searchUser: string;
}

function UserShareForm({ fridgeId, searchUser }: Props) {
  const { shareUserState, emailPost } = useShareUser();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailPost(fridgeId, searchUser);
  };

  return (
    <div className="m-share-search__result">
      <p className="m-share-search__shareuser">
        <span className="">{searchUser}</span>
      </p>
      <button
        type="button"
        className="m-share-search__add-btn"
        onClick={handleClick}
      >
        共有
      </button>
      {shareUserState && (
        <p className="m-share-search__complete">共有が完了しました</p>
      )}
    </div>
  );
}

export default UserShareForm;
