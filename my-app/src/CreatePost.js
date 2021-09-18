import './CreatePost.css';
import { ReactComponent as Logo } from "./assets/logo.svg";

function CreatePost() {
  return (
    <div className="CreatePost">
      <Logo className="logo" />
      <div className="title">
        <h1 className="inspire">Inspire others with your experiences</h1>
        <h3 className="choose">Choose a category of posts and use our templates to share your fitness experience with others.</h3>
        <h2 className="theme">What is the main theme of your experience?</h2>
        <a className="post" href="/thankyou">Post!</a>
      </div>


    </div>
  );
}

export default CreatePost;
