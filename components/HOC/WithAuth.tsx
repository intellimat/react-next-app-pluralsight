import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

function WithAuth(Component: any) {
  return function F(props: any) {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    return (
      <Component
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        {...props}
      ></Component>
    );
  };
}

export default WithAuth;
