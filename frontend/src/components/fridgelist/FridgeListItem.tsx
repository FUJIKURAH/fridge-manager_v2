import { Link } from "react-router-dom";
import type { Fridge } from "@/types/Fridge";
import type { Status } from "@/types/Status";
import FridgeUser from "@/components/fridgelist/FridgeUser";
import FridgeRemoveLink from "@/components/fridgelist/FridgeRemoveLink";
import FridgeRemoveAllCheck from "@/components/fridgelist/FridgeRemoveAllCheck";

type OnCheck = (id: number, checked: boolean) => void;

interface FridgeProps {
  fridge: Fridge;
  onCheck: OnCheck;
  isChecked: boolean;
  removeStatus: Status;
  removeFunc: (id: number) => Promise<void>;
}

function FridgeListItem({
  fridge,
  onCheck,
  isChecked,
  removeStatus,
  removeFunc,
}: FridgeProps) {
  const ownerUsers = fridge.users.filter((user) => user.role === "OWNER");
  const memberUsers = fridge.users.filter((user) => user.role === "MEMBER");

  return (
    <li className="m-fridge-card">
      <FridgeRemoveAllCheck
        onCheckChange={(checked) => onCheck(fridge.id, checked)}
        checked={isChecked}
      />
      <Link to={`/fridges/${fridge.id}`} className="m-fridge-card__inner">
        <div className="m-fridge-card__head">
          <div className="m-fridge-card__outline">
            <p className="icn"></p>
            <p className="txts">
              <span className="m-fridge-card__name">{fridge.name}</span>
              <span className="m-fridge-card__items">
                {fridge.items.length}個の食材
              </span>
            </p>
          </div>
        </div>
        <div className="m-fridge-card__users">
          <div className="m-fridge-card__users-list">
            <div className="m-fridge-card__users-item">
              <p className="m-fridge-card__users-txt">オーナー：</p>
              {ownerUsers.map((owner) => (
                <FridgeUser
                  key={owner.id}
                  name={owner.username}
                  id={owner.id}
                  role={owner.role}
                  fridgeId={fridge.id}
                />
              ))}
            </div>
            <div className="m-fridge-card__users-item">
              <p className="m-fridge-card__users-txt">メンバー：</p>
              <div className="m-fridge-card__users-members">
                {memberUsers.map((member) => (
                  <FridgeUser
                    key={member.id}
                    name={member.username}
                    id={member.id}
                    role={member.role}
                    fridgeId={fridge.id}
                  />
                ))}
              </div>
            </div>
          </div>
          <Link
            to={`/fridges/${fridge.id}/share`}
            className="m-fridge-card__users-btn"
          >
            共有
          </Link>
        </div>
        <FridgeRemoveLink
          fridgeId={fridge.id}
          onRemoveFridge={removeFunc}
          removeStatus={removeStatus}
        />
      </Link>
    </li>
  );
}
export default FridgeListItem;
