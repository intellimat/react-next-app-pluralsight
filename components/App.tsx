import { useState } from "react";
import { Speaker } from "../Speaker.model";
import Header from "./Header";
import Speakers from "./Speakers";

interface AppProps {}

function App(props: AppProps) {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
