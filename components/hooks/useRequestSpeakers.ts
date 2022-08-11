import { useEffect, useState } from "react";
import { Speaker } from "../../Speaker.model";
import { data } from "../../SpeakerData";

function useRequestSpeakers(delaytime: number) {
  const [speakersData, setSpeakersData] = useState([] as Speaker[]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
  const delay = () => new Promise((resolve) => setTimeout(resolve, delaytime));

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await delay();
        // throw "Had Error.";
        setIsLoading(false);
        setSpeakersData(data);
      } catch (e: any) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e.toString());
      }
    })();
  }, []);

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

  return { speakersData, isLoading, hasErrored, error, onFavoriteToggle };
}

export default useRequestSpeakers;
