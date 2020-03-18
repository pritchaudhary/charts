import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import Item from "./Item";
import FancyButton from "./FancyButton";
const data = [
  { Email: "F0034_L0034@email.com" },
  { Email: "F0035_L0035@email.com" },
  { Email: "F0036_L0036@email.com" },
  { Email: "F0037_L0037@email.com" },
  { Email: "F0038_L0038@email.com" },
  { Email: "F0039_L0039@email.com" },
  { Email: "F0040_L0040@email.com" },
  { Email: "F0041_L0041@email.com" },
  { Email: "F0042_L0042@email.com" },
  { Email: "F0043_L0043@email.com" },
  { Email: "F0044_L0044@email.com" },
  { Email: "F0045_L0045@email.com" },
  { Email: "F0046_L0046@email.com" },
  { Email: "F0047_L0047@email.com" },
  { Email: "F0048_L0048@email.com" },
  { Email: "F0049_L0049@email.com" },
  { Email: "F0052_L0052@email.com" },
  { Email: "F0053_L0053@email.com" },
  { Email: "F0054_L0054@email.com" },
  { Email: "F0055_L0055@email.com" },
  { Email: "F0056_L0056@email.com" },
  { Email: "F0057_L0057@email.com" },
  { Email: "F0058_L0058@email.com" },
  { Email: "F0059_L0059@email.com" },
  { Email: "F0060_L0060@email.com" },
  { Email: "F0061_L0061@email.com" },
  { Email: "F0062_L0062@email.com" },
  { Email: "F0063_L0063@email.com" },
  { Email: "F0064_L0064@email.com" },
  { Email: "F0065_L0065@email.com" }
];
const divStyle = {
  // overflow: "scroll",
  // border: "1px solid red",
  // width: "500px",
  // float: "left",
  // height: "500px",
  // position: "relative"
};

const wayPointStyle = {
  border: "3px solid green"
};

const WaypointDemo = () => {
  return (
    <div style={divStyle}>
      {data.map((item, index) => (
        <React.Fragment key={item.Email}>
          <Item item={item} />
          {/* {index === 15 && (
            <Waypoint
              onEnter={e => {
                console.log(item.Email);
                // console.log(ref.current);
              }}
            />
          )} */}
          {/* <div style={wayPointStyle} /> */}
          <Waypoint
            onEnter={e => {
              console.log("Enter", item.Email);
              // console.log(ref.current);
            }}
            onLeave={e => {
              // console.log("Leave", item.Email);
              // console.log(ref.current);
            }}
            topOffset='49%'
            bottomOffset='50%'
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default WaypointDemo;
