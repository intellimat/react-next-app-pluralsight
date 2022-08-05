import type { NextPage } from "next";
import Speaker from "../components/Speaker/Speaker";
import { data } from "../SpeakerData";

const Home: NextPage = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => (
          <Speaker key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Home;
