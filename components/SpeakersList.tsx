import { Speaker } from "../Speaker.model";
import useRequestDelay, { REQUEST_STATUS } from "../Hooks/useRequestDelay";
import SpeakerComponent from "./Speaker/Speaker";
import { data as MockedData } from "../SpeakerData";
import { SpeakerFilterContext } from "../Contexts/SpeakerFilterContext";
import { useContext } from "react";

interface SpeakersProps {}
function SpeakersList({}: SpeakersProps): JSX.Element {
  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);
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
        {data
          .filter(
            (speaker) =>
              speaker.firstName.toLowerCase().includes(searchQuery) ||
              speaker.lastName.toLowerCase().includes(searchQuery)
          )
          .filter((speaker) =>
            speaker.sessions.find(
              (session: { eventYear: string }) =>
                session.eventYear === eventYear
            )
          )
          .map((speaker: Speaker) => (
            <SpeakerComponent
              key={speaker.id}
              speaker={speaker}
              updateRecord={updateRecord}
            />
          ))}
      </div>
    </div>
  );
}

export default SpeakersList;
