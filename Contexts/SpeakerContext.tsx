import { createContext } from "react";
import { Session, Speaker } from "../Speaker.model";
const defaultSpeakerContextValue = {
  speaker: {
    id: "",
    firstName: "",
    lastName: "",
    company: "",
    bio: "",
    twitterHandle: "",
    favorite: false,
    sessions: [] as Session[],
  } as Speaker,
  updateRecord: (newRecord: any, doneCallback?: any) => {},
};
const SpeakerContext = createContext(defaultSpeakerContextValue);

interface SpeakerProviderProps {
  children: React.ReactNode;
  speaker: Speaker;
  updateRecord: (newRecord: any) => void;
}

function SpeakerProvider({
  children,
  speaker,
  updateRecord,
}: SpeakerProviderProps) {
  return (
    <SpeakerContext.Provider value={{ speaker, updateRecord }}>
      {children}
    </SpeakerContext.Provider>
  );
}

export { SpeakerContext, SpeakerProvider };
