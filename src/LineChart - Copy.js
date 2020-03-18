/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";
const maxSize = 500;
const data1 = [];
const data2 = [];
const yCount = [];
let xLast = 0;
let xLast2 = 0;

// const xCount = [...Array(maxSize).keys()].map(n =>
//   Math.floor(Math.random() * maxSize)
// );
const xCount = [...Array(maxSize).keys()].map(n => {
  if (n === 0) return 0;
  xLast = xLast + 10;
  return xLast;
});
const x2Count = [...Array(maxSize).keys()].map(n => {
  if (n === 0) return 0;
  if (n === 100) return 100;
  xLast2 = xLast2 + 10;
  return xLast2;
});

const data1Count = xCount.map((n, i) =>
  i === 0 ? 0 : Math.round((n / 1000) * 100)
);
const data2Count = x2Count.map((n, i) =>
  i === 0 ? 0 : Math.round((n / 1000) * (Math.round((n / 1000) * 100)))
);

class LineChart extends React.Component {
  componentDidMount = async () => {
    this._updateChart();
  };
  componentDidUpdate() {
    this._updateChart();
  }
  handleClick = async () => {
    this._updateChart();
  };
  _updateChart() {
    c3.generate({
      bindto: "#chart7",
      size: {
        //height: 480
        //width: 700
      },

      tooltip: {
        grouped: false // Default true
      },
      point: {
        show: false // for line chart points show/hide
      },
      data: {
        xs: {
          data1: "x1",
          data2: "x2"
        },
        columns: [
          ["x1", ...xCount],
          ["x2", ...x2Count],
          ["data1", ...data1Count],
          ["data2", ...data2Count]
          //data2
        ]
      },
      axis: {
        y: {
          max: 100,
          min: 0,
          label: {
            text: "Y Label",
            position: "outer-middle"
          },
          tick: {
            count: 6,
            values: [0, 20, 40, 60, 80, 100]
          }
        },
        x: {
          min: 0,
          max: 1000,
          tick: {
            count: 6,
            values: [0, 200, 400, 600, 800, 1000]
          }
        }
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: true
        }
      }
    });
  }
  render() {
    return (
      <>
        <div id="chart7"></div>
        <button onClick={this.handleClick}>Change Data</button>
      </>
    );
  }
}

export default LineChart;
