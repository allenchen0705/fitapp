import "./ThankYou.css";
import { ChevronRight } from "react-feather";
import { ReactComponent as Logo } from "./assets/logo.svg";

function ThankYou() {
  return (
    <body>
      <header>
        <a href="/">
          <Logo className="logo" />
        </a>
      </header>
      <div className="center">
        <h1 className="Thanks">
          Thank you for sharing your experience with the world!
        </h1>
        <a className="goHome" href="/">
          Click here to view others' stories{" "}
        </a>
        <ChevronRight size="30" color="#213FF8" />
      </div>
    </body>
  );
}

export default ThankYou;
