import { useEffect, useState } from "react";

export enum REQUEST_STATUS {
  LOADING,
  SUCCESS,
  FAILURE,
}

function useRequestDelay(delaytime: number, initialData = [] as any[]) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");
  const delay = () => new Promise((resolve) => setTimeout(resolve, delaytime));

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await delay();
        // throw "Had Error.";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (e: any) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e.toString());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateRecord(recordUpdated: any, doneCallback?: any) {
    // Optimistic UI approach
    const originalRecords = [...data];
    // Local example. In real situations we call an API.
    const newRecords = data.map((rec: { id: string }) =>
      rec.id === recordUpdated.id ? recordUpdated : rec
    );

    (async (): Promise<void> => {
      try {
        setData(newRecords);
        await delay();
        if (doneCallback) doneCallback();
      } catch (e: any) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalRecords);
      }
    })();
  }

  return { data, requestStatus, error, updateRecord };
}

export default useRequestDelay;
