/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";

// const arr = {
//   data1: [247.75,0,0,302.3,0,268.95],
//   data2: [247.75,0,0,318.75,0],
//   data3: [1247.75,0,0,413.25],
//   data4: [262.85,0,0],
//   data5: [214,0],
//   data6: [214]
// };
const arr = [
  ["data1",247.75,0,0,302.3,0,268.95],
  ["data2",247.75,0,0,318.75,0],
  ["data3",1247.75,0,0,413.25],
  ["data4",262.85,0,0],
  ["data5",214,0],
  ["data6",214]
];

class BarChartLiveData extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart2Live",
      size: {
        height: 480,
        width: 700
      },
      format: {
        title: function (d) { return 'Data ' + d; },
        value: function (value, ratio, id) {
            var format = id === 'data1' ?'data 1 test' : '$';
            return format(value);
        }
    },
      point: {
        show: true // for line chart points show/hide
      },
      bar: {
        width: {
          ratio: 1 // this makes bar width 50% of length between ticks
        } // or//width: 100 // this makes bar width 100px
      },

      data: {
        columns: [
          ["data0", 1, 1, 1, 1, 1, 1],
          ["data1", 1, 1, 1, 1, 1],
          ["data2", 1, 1, 1],
          ["data3", 1, 1],
          ["data4", 1]
        ],
        labels: {
          format: function(value, ratio, i, j) {
            if (ratio !== undefined) {
               console.log(arr[i][j]);
              if (arr[i] !== undefined) {
                j+=1;
                return arr[i][j] + "%";
              }
            }
            //return value + "%";
          }
        }, // to display value
        types: {
          data0: "bar",
          data1: "bar",
          data2: "bar",
          data3: "bar",
          data4: "bar"
        },
        groups: [
          [
            "data0",
            "data1",
            "data2",
            "data3",
            "data4"
          ] // showing sum value of group members
        ],
        order: false,
        axes: {
          data0:"y2",
          data1: "y2",
          data2: "y2",
          data3: "y2",
          data4: "y2"
        }
      },
      legend: {
        show: false
      },
      axis: {
        rotated: true,
        y2: {
          padding: {
            top: 300
          },
          //max: 10,
          //min: 0,
          show: true,
          //reversed: true,
          label: {
            text: "",
            position: "outer-middle"
          }
          
        },
        y: {
          show: false
        },
        x: {
          show: true,
          type: "category",
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUNE"
          ]
        }
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: false
        }
      }
      //   zoom: {
      //     enabled: true
      //   }
    });
  }
  render() {
    return (
      <>
        {" "}
        <div id="chart2Live"></div>
        <div id="range"></div>
      </>
    );
  }
}

export default BarChartLiveData;
