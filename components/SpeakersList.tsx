import { useState } from "react";
import { data } from "../SpeakerData";
import Speaker from "./Speaker/Speaker";

export interface SpeakersProps {
  showSessions: boolean;
}

function SpeakersList({ showSessions }: SpeakersProps): JSX.Element {
  const [speakersData, setSpeakersData] = useState(data);

  function onFavoriteToggle(id: string) {
    const speakersRecPrevious = speakersData.find((rec) => rec.id === id)!;
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious!.favorite,
    };

    const speakersDataNew = speakersData.map((rec) =>
      rec.id === id ? speakerRecUpdated : rec
    );

    setSpeakersData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => (
          <Speaker
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
