import { useContext } from "react";
import { SpeakerContext } from "../../../Contexts/SpeakerContext";
import { SpeakerFilterContext } from "../../../Contexts/SpeakerFilterContext";
import Session from "./Session";

export interface SessionsProps {}

function Sessions({}: SessionsProps): JSX.Element {
  const { eventYear } = useContext(SpeakerFilterContext);
  const {
    speaker: { sessions },
  } = useContext(SpeakerContext);
  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter((session) => session.eventYear === eventYear)
        .map((session) => (
          <div className="session w-100" key={session.id}>
            <Session roomName={session.title} {...session}></Session>
          </div>
        ))}
    </div>
  );
}

export default Sessions;
