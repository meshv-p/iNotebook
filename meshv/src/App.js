// import logo from './logo.svg';
import './App.css';
import Navbar from './MyCompo/Navbar';
import Article from './MyCompo/Article';
import About from './MyCompo/About';
import Footer from './MyCompo/Footer';
import React, { useState } from 'react'
import Home from './MyCompo/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const setMode1 = ()=>{
      if(mode === 'light'){
          setMode('dark');
      }
      else{
          setMode('light');
      }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} setmode={setMode1}/>
        <Switch>
          <Route exact path="/article">
            <Article mode={mode} />
          </Route>
          <Route exact path="/footer">
            <Footer mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Home mode={mode}/>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
