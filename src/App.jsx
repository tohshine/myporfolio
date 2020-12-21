import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./dist/style.css";
import "./app.css";
import Welcome from "./components/welcome";
import Project from './components/projects'

const App = () => {
  return (
    <div className='app text-white flex   flex-col  '>
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/project' component={Project} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
