import './Home.css';
import { ReactComponent as Logo } from "./assets/logo.svg";

function Home() {
  return (
    <body>
      <header className="container navbar">
        <a href="/"><Logo className="logo"/></a>
        <a href="/" className="explore">Explore</a>
        <a href="/create" className="create">+ Create a Post</a>
      </header>
      <div className="title">
        <h2>Get inspired. Learn fitness</h2>
        <p>Explore all fitness posts from others around the world</p>
      </div>
      <section className="grid">
        <div className="search-bar"><p>Search ...</p></div>
        <div className="categories"><p>Categories</p></div>
        <div className="sort"><p>Sort by</p></div>
      </section>
    </body>

  );
}

export default Home;
