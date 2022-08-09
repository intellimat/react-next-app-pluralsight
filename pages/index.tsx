import type { NextPage } from "next";
import Speakers from "../components/App";
import { data } from "../SpeakerData";

const Home: NextPage = () => {
  return <Speakers speakers={data} />;
};

export default Home;
