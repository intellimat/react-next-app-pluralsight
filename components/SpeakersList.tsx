import { Speaker } from "../Speaker.model";
import useRequestDelay, { REQUEST_STATUS } from "../Hooks/useRequestDelay";
import SpeakerComponent from "./Speaker/Speaker";
import { data as MockedData } from "../SpeakerData";

interface SpeakersProps {
  showSessions: boolean;
}
function SpeakersList({ showSessions }: SpeakersProps): JSX.Element {
  const { error, requestStatus, data, updateRecord } = useRequestDelay(
    2000,
    MockedData
  );

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return (
      <div className="text-danger">
        {" "}
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );

  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker: Speaker) => (
          <SpeakerComponent
            onFavoriteToggle={(doneCallback: any) =>
              updateRecord(
                { ...speaker, favorite: !speaker.favorite },
                doneCallback
              )
            }
            key={speaker.id}
            speaker={speaker}
            showSessions={showSessions}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakersList;
