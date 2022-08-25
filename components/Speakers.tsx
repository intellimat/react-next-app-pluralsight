import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { SpeakerFilterProvider } from "../Contexts/SpeakerFilterContext";

interface SpeakersProps {}

function Speakers({}: SpeakersProps) {
  return (
    <SpeakerFilterProvider
      startingShowSessions={false}
      startingEventYear={"2019"}
    >
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
