import "./App.css";
import { Navbar } from "./compo/Navbar";
import { Posts } from "./compo/Posts";
import { User } from "./compo/User";
import { Notification } from "./compo/Notification";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Uploadbtn } from "./compo/Uploadbtn";
import { Upload } from "./compo/Upload";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/upload">
            < Upload />
            {/* <Uploadbtn /> */}
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
