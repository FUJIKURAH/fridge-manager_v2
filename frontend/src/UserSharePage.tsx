import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCurrentFridge from "@/hooks/fridgeshare/useCurrentFridge";
import useSearchUser from "@/hooks/fridgeshare/useSearchUser";
import ShareUserSearch from "@/components/fridgeshare/ShareUserSearch";
import UserShareForm from "@/components/fridgeshare/UserShareForm";

function UserSharePage() {
  const { fridgeName, fridgeNameGet } = useCurrentFridge();
  const { searchUsers, emailGet } = useSearchUser();
  const { fridgeId } = useParams<{ fridgeId: string }>();

  useEffect(() => {
    if (!fridgeId) return;
    fridgeNameGet(Number(fridgeId));
  }, [fridgeId]);

  return (
    <>
      <div className="m-share">
        <div className="m-share__head">
          <Link to="/fridges" className="m-share__back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="69.296"
              viewBox="0 0 200 69.296"
            >
              <path
                d="M127.794,268.963a7.693,7.693,0,0,0-4.3,13.878L176.1,322.866H14.31a7.694,7.694,0,1,0,0,15.388H198.919a7.693,7.693,0,0,0,4.662-13.815l-70.767-53.846A7.693,7.693,0,0,0,127.794,268.963Z"
                transform="translate(-6.616 -268.958)"
              />
            </svg>
          </Link>
          <h1 className="m-share__ttl">
            冷蔵庫を共有
            <br />
            <span>{fridgeName}</span>
          </h1>
        </div>
        <div className="m-share__main">
          <ShareUserSearch onSubmitProps={emailGet} />
          {searchUsers.map((user) => (
            <UserShareForm
              key={user}
              fridgeId={Number(fridgeId)}
              searchUser={user}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserSharePage;
