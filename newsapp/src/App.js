import './App.css';
import React from 'react'
import Navabar from './components/Navabar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';

 const App = ()=>{

  // state = {
  //   progress : 0
  // }
  const [progress, setProgress] = useState(0)

 const  setProgressbar= (progress) =>{
    setProgress(progress)
  }

  //  const apikey=process.env.REACT_APP_NEWS_API;
   const apikey='e217c1e1f57e46289989fd685a5f108b';

  
    return (
      <>
        <Router>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={progress}
      />
          <Navabar />
          <Switch>
            <Route exact path="/">
              <News setProgressbar={setProgressbar}  apikey={apikey}   key="gen" pagesize={9} category="general" />
            </Route>
            <Route exact path="/science">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="science" pagesize={9} category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgressbar={setProgressbar}  apikey={apikey}   key="sports" pagesize={9} category="sports" />
            </Route>
            <Route exact path="/business">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="business" pagesize={9} category="business" />
            </Route>
            <Route exact path="/general">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="general" pagesize={9} category="general" /> 
            </Route>
            <Route exact path="/technology">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="technology" pagesize={9} category="technology" /> 
            </Route>
            <Route exact path="/health">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="health" pagesize={9} category="health" /> 
            </Route>
            <Route exact path="/entertainment">
              <News setProgressbar={setProgressbar}  apikey={apikey}    key="entertainment" pagesize={9} category="entertainment" /> 
            </Route>
          </Switch>
        </Router>
      </>
    )
  
}

export default App;
