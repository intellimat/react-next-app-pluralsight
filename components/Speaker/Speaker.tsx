import { useContext } from "react";
import { SpeakerFilterContext } from "../../Contexts/SpeakerFilterContext";
import { Speaker } from "../../Speaker.model";
import Sessions from "./speaker-subcomponents/Sessions";
import SpeakerDemographics from "./speaker-subcomponents/SpeakerDemographics";
import SpeakerImage from "./speaker-subcomponents/SpeakerImage";
import { SpeakerProvider, SpeakerContext } from "../../Contexts/SpeakerContext";

export interface SpeakerProps {
  speaker: Speaker;
  updateRecord: (record: any, doneCallback?: any) => void;
  insertRecord: (record: any, doneCallback?: any) => void;
  deleteRecord: (record: any, doneCallback?: any) => void;
}

function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}: SpeakerProps): JSX.Element {
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerDemographics {...speaker} />
          {showSessions && <Sessions />}
        </div>
      </div>
    </SpeakerProvider>
  );
}

export default Speaker;
