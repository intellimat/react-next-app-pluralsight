import type { NextPage } from "next";
import SpeakersList from "../components/SpeakersList";
import { data } from "../SpeakerData";

const Home: NextPage = () => {
  return <SpeakersList speakers={data} />;
};

export default Home;
