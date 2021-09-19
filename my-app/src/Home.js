import "./Home.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ChevronDown } from "react-feather";

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
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="sort dropdown">
          <button class="dropbtn">Sort by</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Home;
