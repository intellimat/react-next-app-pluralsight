import Layout from "../Layouts/Layout";
import Header from "./Header";
import Speakers from "./Speakers";
import { AuthProvider } from "../Contexts/AuthContext";

interface AppProps {}

function App(props: AppProps) {
  return (
    <AuthProvider initialLoggedInUser={"Ronald"}>
      <Layout startingTheme={"light"}>
        <div>
          <Header />
          <Speakers />
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
