// import { data } from "../../../SpeakerData";
import path from "path";
import fs from "fs";
import { Speaker } from "../../../Speaker.model";

const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req: any, res: any) {
  //   res.status(200).send(JSON.stringify(data, null, 2));

  const method: String = req?.method;
  const id: String = req?.query.id;
  const recordFromBody: Partial<Speaker> = req?.body; // assuming client always puts all data besides id

  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  const jsonFile = path.resolve("./", "db.json");

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers as Speaker[];
      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
        return;
      }
      const idNew =
        speakers
          .map((speaker) => parseInt(speaker.id))
          .reduce(
            (accumulator, currentId) =>
              currentId > accumulator ? currentId : accumulator,
            0
          ) + 1;

      const newSpeakerRec = {
        ...recordFromBody,
        id: idNew.toString(),
      } as Speaker;

      speakers.push(newSpeakerRec);
      writeFile(jsonFile, JSON.stringify({ speakers }, null, 2));
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));
      console.log(`POST /api/speakers/${id} status: 200`);
    } catch (e) {
      res
        .status(500)
        .send(`POST /api/speakers/${id} status: 500 unexpected error`);
      console.log(`POST /api/speakers/${id} error status: 500`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers: Speaker[] = JSON.parse(readFileData).speakers;
      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
        return;
      }
      const newSpeakersArray = speakers.filter(
        (record: Speaker) => record.id !== id
      );
      writeFile(
        jsonFile,
        JSON.stringify({ speakers: newSpeakersArray }, null, 2)
      );
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(
        JSON.stringify(
          speakers.find((rec: Speaker) => rec.id === id),
          null,
          2
        )
      );
      console.log(`DELETE /api/speakers/${id} status: 200`);
    } catch (e) {
      res
        .status(500)
        .send(`DELETE /api/speakers/${id} status: 500 unexpected error`);
      console.log(`DELETE /api/speakers/${id} error status: 500`, e);
    }
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
        return;
      }
      const newSpeakersArray = speakers.map((record: Speaker) =>
        record.id === id ? recordFromBody : record
      );
      writeFile(
        jsonFile,
        JSON.stringify({ speakers: newSpeakersArray }, null, 2)
      );
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(recordFromBody, null, 2));
      console.log(`PUT /api/speakers/${id} status: 200`);
    } catch (e) {
      res
        .status(500)
        .send(`PUT /api/speakers/${id} status: 500 unexpected error`);
      console.log(`PUT /api/speakers/${id} error status: 500`, e);
    }
  }
}
