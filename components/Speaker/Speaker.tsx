import { useContext, memo } from "react";
import { SpeakerFilterContext } from "../../Contexts/SpeakerFilterContext";
import { Speaker as SpeakerNoErrorBoundary } from "../../Speaker.model";
import Sessions from "./speaker-subcomponents/Sessions";
import SpeakerDemographics from "./speaker-subcomponents/SpeakerDemographics";
import SpeakerImage from "./speaker-subcomponents/SpeakerImage";
import { SpeakerProvider } from "../../Contexts/SpeakerContext";
import SpeakerDelete from "./speaker-subcomponents/SpeakerDelete";
import ErrorBoundary from "../ErrorBoundary";
import Image from "next/image";

export interface SpeakerProps {
  speaker: SpeakerNoErrorBoundary;
  updateRecord: (record: any, doneCallback?: any) => void;
  insertRecord: (record: any, doneCallback?: any) => void;
  deleteRecord: (record: any, doneCallback?: any) => void;
}

interface SpeakerNoErrorBoundaryProps extends SpeakerProps {
  showErrorCard: boolean;
}

const SpeakerNoErrorBoundary = memo(function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
  showErrorCard,
}: SpeakerNoErrorBoundaryProps): JSX.Element {
  const { showSessions } = useContext(SpeakerFilterContext);

  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="card card-height p-4 mt-4">
          <Image
            src="/images/speaker-99999.jpg"
            alt=""
            width="300"
            height="300"
          />
          <div>
            <b>Error showing speaker</b>
          </div>
        </div>
      </div>
    );
  }

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
          <SpeakerDelete />
        </div>
      </div>
    </SpeakerProvider>
  );
},
areEqualSpeakers);

function Speaker(props: SpeakerProps) {
  return (
    <ErrorBoundary
      errorUI={
        <SpeakerNoErrorBoundary
          {...props}
          showErrorCard={true}
        ></SpeakerNoErrorBoundary>
      }
    >
      <SpeakerNoErrorBoundary {...props} showErrorCard={false} />
    </ErrorBoundary>
  );
}

function areEqualSpeakers(prevProps: SpeakerProps, nextProps: SpeakerProps) {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}

export default Speaker;
