import './ThankYou.css';
import { ChevronRight } from "react-feather";
import { ReactComponent as Logo } from "./assets/logo.svg";

function ThankYou() {
  return (
    <div className="ThankYou">
      <Logo className="logo" />
      <div className="center">
        <h1 className="Thanks">Thank you for sharing your experience with the world!</h1>
        <a className="goHome" href="/">Click here to view others' stories </a><ChevronRight size="30" color="#788BBF" />
      </div>
    </div>
  );
}



export default ThankYou;
