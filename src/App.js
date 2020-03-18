/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import C3Chart from "react-c3js";
import Chart from "react-c3js";
import "c3/c3.css";
import Hello from "./Hello";
import ChartDemo from "./ChartDemo";
import BarChart from "./BarChart";
import SubBarChart from "./SubBarChart";
import BarChartKeyVal from "./BarChartKeyVal";
import BarChartTest from "./BarChartTest";
import BarChartLabelColor from "./BarChartLabelColor";
import LineChart from "./LineChart";
import SubBarChart2 from "./SubBarChart2";
import BarChart2 from "./BarChart2";
import BarChartLiveData from "./BarChartLiveData";
import ChartDemoLive from "./ChartDemoLive";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CropImage from "./CropImage";
import WaypointDemo from "./WaypointDemo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='app-wrap'>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/waypoint'>WaypointDemo</Link>
                </li>
                <li>
                  <Link to='/crop'>Crop Image</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/about'>
                <About />
                <CropImage />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
              <Route path='/waypoint'>
                <WaypointDemo />
              </Route>
              <Route path='/crop'>
                <CropImage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
