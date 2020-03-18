/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";
const arr = [
  [1, 2, 3, 4, 5],
  [50, 60, 70, 80, 100],
  [10, 20, 30, 40, 66],
  [90, 80, 70, 60, 50],
  [30, 40, 50, 60, 90],
  [80, 70, 60, 50, 12]
];
class BarChartKeyVal extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart4",
      bar: {
        width: {
          ratio: 0.9 // this makes bar width 50% of length between ticks
        } // or//width: 100 // this makes bar width 100px
      },
      data: {
        json: [
          {
            "x-axis": "0",
            data1: 10,
            data2: 10,
            data3: 10,
            data4: 10,
            data5: 10,
            data6: 10
          },
          {
            "x-axis": "1",
            data1: 10,
            data2: 10,
            data3: 10,
            data4: 10,
            data5: 10,
            data6: 10
          },
          {
            "x-axis": "2",
            data1: 10,
            data2: 10,
            data3: 10,
            data4: 10,
            data5: 10,
            data6: 10
          },
          {
            "x-axis": "3",
            data1: 10,
            data2: 10,
            data3: 10,
            data4: 10,
            data5: 10,
            data6: 10
          }
        ],
        // etc etc
        keys: {
          x: "x-axis",
          //y: "y-axis",
          value: ["data1", "data2", "data3", "data4", "data6"]
        },
        groups: [["data1", "data2", "data3", "data4", "data6"]],
        axes: {
          data1: "y2",
          data2: "y2",
          data3: "y2",
          data4: "y2",
          data5: "y2",
          data6: "y2"
        },
        type: "bar",
        color: function(color, d) {
          if (typeof d === "object") {
            //console.log(JSON.stringify(d));
             // console.log(arr[d.x][d.i])
            // return '#'+Math.floor(Math.random()*16777215).toString(16);
          }
          return "#" + Math.floor(Math.random() * 16777215).toString(16);

          // return color;
        },
        labels: {
          format: function(value, ratio, i, j) {
            //console.log(JSON.stringify(value)+" ratio :"+ratio+" i :"+i+" j :"+j);
            // if (j !== undefined) {
            //   //console.log(arr[i][i]);

            //   return arr[i][j] + "%";
            // }
            if (j !== undefined) {
              //console.log(arr[i][i]);

              return arr[i][j] + "%";
            }

          }
        }
      },

      axis: {
        rotated: true,
        y: {
          show: false
        },
        y2: {
          max: 100,
          //min: 0,
          show: true,
          reversed: true,
          label: {
            text: "Y2 Label",
            position: "outer-middle"
          }
          // padding: { top: 200, bottom: 0 }
        }
      }
    });
  }
  render() {
    return (
      <>
        {" "}
        <div id="chart4"></div>
      </>
    );
  }
}

export default BarChartKeyVal;
