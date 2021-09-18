// import logo from './logo.svg';
// import './App.css';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home.js"
import CreatePost from "./CreatePost.js"
import ThankYou from "./ThankYou.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={CreatePost}/>
        <Route path="/thankyou" component={ThankYou}/>
      </Switch>
    </Router>
  );
}

export default App;
