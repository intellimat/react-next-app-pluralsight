import { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

interface SpeakersProps {}

function Speakers(props: SpeakersProps) {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <SpeakersToolbar
        setShowSessions={setShowSessions}
        showSessions={showSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default Speakers;
