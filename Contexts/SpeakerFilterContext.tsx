import { createContext } from "react";
import useSpeakerFilter from "../Hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext({
  showSessions: false,
  setShowSessions: (showSession: boolean) => {},
  eventYear: "",
  setEventYear: (eventYear: string) => {},
  searchQuery: "",
  setSearchQuery: (searchQuery: string) => {},
  EVENT_YEARS: [] as string[],
});

interface SpeakerFilterProviderProps {
  children: React.ReactNode;
  startingShowSessions: boolean;
  startingEventYear: string;
}

function SpeakerFilterProvider({
  children,
  startingShowSessions = false,
  startingEventYear,
}: SpeakerFilterProviderProps) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useSpeakerFilter(startingShowSessions, startingEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterContext, SpeakerFilterProvider };
