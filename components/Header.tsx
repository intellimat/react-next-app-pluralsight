import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import WithAuth from "./HOC/WithAuth";
import { LoginStateProps } from "./LoginModel";

interface HeaderProps extends LoginStateProps {}

export function Header({ loggedInUser, setLoggedInUser }: HeaderProps) {
  const { theme } = useContext(ThemeContext);

  function LoggedIn({ loggedInUser, setLoggedInUser }: LoginStateProps) {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoggedInUser("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  function LoggedOut({ setLoggedInUser }: LoginStateProps) {
    return (
      <button
        className="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          const username = window.prompt("Enter Login Name: ", "");
          setLoggedInUser(username ?? "");
        }}
      >
        Login
      </button>
    );
  }

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <Image
              alt="SVCC Home Page"
              width={65}
              height={20}
              src="/images/SVCCLogo.png"
            />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={(theme === "dark" && "text-light") || "text-dark"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <LoggedIn
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            ) : (
              <LoggedOut
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithAuth(Header);
