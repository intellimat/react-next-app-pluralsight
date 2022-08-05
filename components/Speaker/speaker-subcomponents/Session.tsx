export interface SessionProps {
  title: string;
  roomName: string;
}

function Session({ title, roomName }: SessionProps): JSX.Element {
  return (
    <span className="session w-100">
      {title} <strong>{roomName}</strong>
    </span>
  );
}

export default Session;
