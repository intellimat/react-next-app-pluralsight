import useRequestSpeakers from "./hooks/useRequestSpeakers";
import SpeakerComponent from "./Speaker/Speaker";

interface SpeakersProps {
  showSessions: boolean;
}
function SpeakersList({ showSessions }: SpeakersProps): JSX.Element {
  const { hasErrored, error, isLoading, speakersData, onFavoriteToggle } =
    useRequestSpeakers(2000);

  if (hasErrored)
    return (
      <div className="text-danger">
        {" "}
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => (
          <SpeakerComponent
            onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
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
