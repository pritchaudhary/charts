import React, { useState } from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

const About = () => {
  const [message, setMessage] = useState("Test");
  const _handleWaypointEnter = event => {
    setMessage("Enter");
    console.log("Waypoint enter " + JSON.stringify(event, 4));
  };
  const _handleWaypointLeave = () => {
    setMessage("Leave");
  };
  const _renderMessage = () => {
    if (!message) {
      return;
    }
    return <div className='message'>{message}</div>;
  };

  const _setMessage = msg => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>About</h1>
      <hr />
      <div>
        {_renderMessage()}
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='waypoint-line' />
        <div className='spacer'>pp</div>
        <div className=''>
          <p>Start waypoint</p>
          <Waypoint
            onEnter={_handleWaypointEnter}
            onLeave={_handleWaypointLeave}
            threshold={0}
            topOffset={0}
            bottomOffset={0}
          ></Waypoint>
          <p>End waypoint</p>
        </div>
        <div className='spacer'>DD</div>
        <div className='waypoint-line' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
        <div className='spacer' />
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
