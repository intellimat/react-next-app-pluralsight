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
  updateRecord: (record: any, doneCallback?: any) => {},
  insertRecord: (record: any, doneCallback?: any) => {},
  deleteRecord: (record: any, doneCallback?: any) => {},
};
const SpeakerContext = createContext(defaultSpeakerContextValue);

interface SpeakerProviderProps {
  children: React.ReactNode;
  speaker: Speaker;
  updateRecord: (record: any) => void;
  insertRecord: (record: any) => void;
  deleteRecord: (record: any) => void;
}

function SpeakerProvider({
  children,
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}: SpeakerProviderProps) {
  return (
    <SpeakerContext.Provider
      value={{ speaker, updateRecord, insertRecord, deleteRecord }}
    >
      {children}
    </SpeakerContext.Provider>
  );
}

export { SpeakerContext, SpeakerProvider };
