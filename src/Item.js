import React from "react";
// import { Waypoint } from "react-waypoint";

const itemStyle = {
  lineHeight: "100px"
};

const Item = ({ item }) => {
  return <div style={itemStyle}>{item.Email}</div>;
};

//const Item = React.forwardRef((item, ref) => <div ref={ref}>{item.Email}</div>);

export default Item;
