import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { theme } = useContext(ThemeContext);
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
            Hello Mr. Smith &nbsp;&nbsp;
            <span>
              <a href="#">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
