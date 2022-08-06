import { Speaker as SpeakerModel } from "../Speaker.model";
import Speaker from "./Speaker/Speaker";

export interface SpeakersProps {
  speakers: SpeakerModel[];
}

function SpeakersList({ speakers }: SpeakersProps): JSX.Element {
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakers.map((speaker) => (
          <Speaker key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}

export default SpeakersList;
