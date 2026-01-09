type Props = {
  message: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
};

function Message({ message, icon, actions }: Props) {
  return (
    <>
      <div className="m-card">
        <p className="m-card__ttl">{message}</p>
        {icon ? icon : null}
        {actions ? actions : null}
      </div>
    </>
  );
}

export default Message;
