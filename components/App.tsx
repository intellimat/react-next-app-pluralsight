import Header from "./Header";
import Layout from "./Layouts/Layout";
import Speakers from "./Speakers";

interface AppProps {}

function App(props: AppProps) {
  return (
    <Layout startingTheme={"light"}>
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  );
}

export default App;
