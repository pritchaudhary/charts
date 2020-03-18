/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,80],
  [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,80],
  [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,80],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,80],
  [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,80],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,80],
  [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,80],
  [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,80],
  [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,80],
  [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,80],
  [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,80],
  [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,80],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,80]
];
class BarChartLabelColor extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart6",
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
          ["data1",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //JAN
          ["data2",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data3",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data4",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data5",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data6",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data7",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data8",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data9",  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data11", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data12", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data13", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        order: null,
        labels: {
          // format: function(value, ratio, i, j) {
          //   return value + "%";
          // }
          format: function(value, ratio, i, j) {
            if (ratio !== undefined) {
              //console.log(JSON.stringify(value)+" ratio :"+ratio+" i :"+i+" j :"+j);
              if (arr[i] !== undefined) {
                //console.log(arr[i][j]);
                return arr[i][j] +"%";
              }
            }
            //return value + "%";
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
          data12: "bar",
          data13: "bar"
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
            "data13",

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
          data12: "y2",
          data13: "y2"
        }
      },
      axis: {
        rotated: true,
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
        <div id="chart6"></div>
      </>
    );
  }
}

export default BarChartLabelColor;
