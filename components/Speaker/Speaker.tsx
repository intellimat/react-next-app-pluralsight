import { Speaker } from "../../Speaker.model";
import Sessions from "./speaker-subcomponents/Sessions";
import SpeakerDemographics from "./speaker-subcomponents/SpeakerDemographics";
import SpeakerImage from "./speaker-subcomponents/SpeakerImage";

export interface SpeakerProps {
  speaker: Speaker;
  showSessions: boolean;
  onFavoriteToggle: any; // function
}

function Speaker({
  speaker,
  showSessions,
  onFavoriteToggle,
}: SpeakerProps): JSX.Element {
  const { id, firstName, lastName, sessions } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} firstName={firstName} lastName={lastName} />
        <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle} />
        {showSessions && <Sessions sessions={sessions} />}
      </div>
    </div>
  );
}

export default Speaker;
