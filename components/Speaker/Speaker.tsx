import { Speaker } from "../../Speaker.model";
import Sessions from "./speaker-subcomponents/Sessions";
import SpeakerDemographics from "./speaker-subcomponents/SpeakerDemographics";
import SpeakerImage from "./speaker-subcomponents/SpeakerImage";

export interface SpeakerProps {
  speaker: Speaker;
}

function Speaker({ speaker }: SpeakerProps): JSX.Element {
  const { id, firstName, lastName, sessions } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} firstName={firstName} lastName={lastName} />
        <SpeakerDemographics {...speaker} />
        <Sessions sessions={sessions} />
      </div>
    </div>
  );
}

export default Speaker;