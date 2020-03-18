/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";
const arr = [
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
];
class BarChartTest extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart5",
      size: {
        height: 480,
        width: 700
      },
      tooltip: {
        grouped: false // Default true
      },
      point: {
        show: true // for line chart points show/hide
      },
      bar: {
        width: {
          ratio: 0.9 // this makes bar width 50% of length between ticks
        } // or//width: 100 // this makes bar width 100px
      },

      data: {
        columns: [
          // ["data1", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], //JAN
          // ["data2", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data3", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data4", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data5", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data6", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data7", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data8", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data9", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data10", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data11", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // ["data12", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

          ["data1", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //JAN
          ["data2", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data3", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data4", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data5", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data6", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data7", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data8", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data9", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data11", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data12", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        labels: {
          format: function(value, ratio, i, j) {
            return value + "%";
          }
        }, 
        
        types: {
          data1: "bar",
          data2: "bar",
          data3: "bar",
          data4: "bar",
          data5: "bar",
          data6: "bar",
          data7: "bar",
          data8: "bar",
          data9: "bar",
          data10: "bar",
          data11: "bar",
          data12: "bar"
        },
        groups: [
          [
            "data1",
            "data2",
            "data3",
            "data4",
            "data5",
            "data6",
            "data7",
            "data8",
            "data9",
            "data10",
            "data11",
            "data12",

          ] // showing sum value of group members
        ],
        axes: {
          data1: "y2",
          data2: "y2",
          data3: "y2",
          data4: "y2",
          data5: "y2",
          data6: "y2",
          data7: "y2",
          data8: "y2",
          data9: "y2",
          data10: "y2",
          data11: "y2",
          data12: "y2"
        }
      },
      axis: {
        rotated: false,
        x: {
          max: 11,
          min: 0,
          show: true,
          label: {
            text: ""
          },
          type: "category",
          categories: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11"
          ]
        },
        y2: {
          // max:12,
          // min:0,
          show: true,
          label: {
            text: "Y2 Label",
            position: "outer-middle"
          },
          tick: {
            count: 10,
            values:[1,2,3,4,5,6,7,8,9,10,11,12]
          }
        },
        y: {
          show: false
        },
      },
      grid: {
        y2: {
          show: true,
         
        },
        x: {
          show: true
        }
      }
    });
  }
  render() {
    return (
      <>
        {" "}
        <div id="chart5"></div>
      </>
    );
  }
}

export default BarChartTest;
