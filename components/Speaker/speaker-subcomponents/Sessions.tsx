import Session from "./Session";

export interface SessionsProps {
  sessions: any[];
}

function Sessions({ sessions }: SessionsProps): JSX.Element {
  return (
    <div className="sessionBox card h-250">
      <Session title={sessions[0].title} roomName={sessions[0].room.name} />
    </div>
  );
}

export default Sessions;
