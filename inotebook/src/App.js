import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './compo/Navbar';
import { About } from './compo/About';
import { Home } from './compo/Home';
import NoteState from './context/notes/NoteState';
import Login from './compo/Login';
import Signup from './compo/Signup';
function App() {
  return (
    <>
      <NoteState >
        <Router>
          <Navbar />
          <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
