import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Speaker } from "../Speaker.model";

export enum REQUEST_STATUS {
  LOADING,
  SUCCESS,
  FAILURE,
}

const restUrl = "api/speakers";

function useRequestRest() {
  const [data, setData] = useState([] as Speaker[]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const result = await axios.get<Speaker[]>(restUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
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
        await axios.put(`${restUrl}/${recordUpdated.id}`, recordUpdated);
        if (doneCallback) doneCallback();
      } catch (e: any) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalRecords);
      }
    })();
  }

  function insertRecord(record: any, doneCallback?: any) {
    // Optimistic UI approach
    const originalRecords = [...data];
    // Local example. In real situations we call an API.
    const newRecords = [record, ...data];
    (async (): Promise<void> => {
      try {
        setData(newRecords);
        await axios.post(`${restUrl}/99999`, record);
        if (doneCallback) doneCallback();
      } catch (e: any) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalRecords);
      }
    })();
  }

  function deleteRecord(record: any, doneCallback?: any) {
    // Optimistic UI approach
    const originalRecords = [...data];
    // Local example. In real situations we call an API.
    const newRecords = data.filter((element) => element.id != record.id);
    (async (): Promise<void> => {
      try {
        setData(newRecords);
        await axios.delete(`${restUrl}/${record.id}`, record);
        if (doneCallback) doneCallback();
      } catch (e: any) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalRecords);
      }
    })();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
}

export default useRequestRest;
