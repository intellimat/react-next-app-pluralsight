import { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

interface SpeakersProps {
  theme: string;
  setTheme: Function;
}

function Speakers({ theme, setTheme }: SpeakersProps) {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <SpeakersToolbar
        setShowSessions={setShowSessions}
        showSessions={showSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default Speakers;
