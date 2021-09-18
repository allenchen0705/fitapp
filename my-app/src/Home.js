import './Home.css';
import { ReactComponent as Logo } from "./assets/logo.svg";

function Home() {
  return (
    <body>
      <header className="container">
        <Logo className="logo" />
      </header>
      <div className="Home">
        This is the Home.
        <a href="/create">Create Post</a>
      </div>
    </body>

  );
}

export default Home;
