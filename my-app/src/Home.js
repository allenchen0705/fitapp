import "./Home.css";
import { ReactComponent as Logo } from "./assets/logo.svg";

function Home() {
  return (
    <body>
      <header>
        <a href="/">
          <Logo className="logo" />
        </a>
        <a href="/create" className="create">
          + Create a Post
        </a>
      </header>
      <div className="intro">
        <h1>Get inspired. Learn fitness</h1>
        <p>Explore all fitness posts from others around the world</p>
      </div>
      <section className="grid-home">
        <div className="search-bar">
          <p>Search ...</p>
        </div>
        <div className="categories dropdown">
          <p>Categories</p>
        </div>
        <div className="sort dropdown">
          <p>Sort by</p>
        </div>
      </section>
    </body>
  );
}

export default Home;
