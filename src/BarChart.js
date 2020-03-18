/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";


class BarChart extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart2",
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
//            value: d3.format(',') // apply this format to both y and y2
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
          ["data0", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
          ["data1", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data2", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data3", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data4", 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["data5", 1, 1, 1, 1, 1, 1, 1, 1],
          ["data6", 1, 1, 1, 1, 1, 1, 1],
          ["data7", 1, 1, 1, 1, 1, 1],
          ["data8", 1, 1, 1, 1, 1]
        ],
        // color: function(color, d) {
        //   if (typeof d === "object") {
        //     //console.log(JSON.stringify(d));
        //     //console.log(arr[0].length);
        //   }
        //   // console.log(arr);
        //   var a = arr[d.id];
        //   if (a !== undefined) {
        //     // console.log(a[d.index]);

        //     return getColorForPercentage(a[d.index] / 96);
        //   }
        //   //return getColorForPercentage(Math.random());//"#" + Math.floor(Math.random() * 16777215).toString(16);

        //   // return color;
        // },
        labels: {
          format: function(value) {
            // if (ratio !== undefined) {
            //    //console.log(JSON.stringify(value)+" ratio :"+ratio+" i :"+i+" j :"+j);
            //   if (arr[i] !== undefined) {
            //     console.log(arr[i][j]);
            //     return arr[i][j] + "%";
            //   }
            // }
            return value + "%";
          }
        }, // to display value

        // To change the color (d => value)
        // color: function(color, d) {
        //   console.log(d.index);
        //   // if (d.value >= 0 && d.value <= 50)
        //   //   return "#2ca25fd";
        //   // if (d.value >= 51 && d.value <= 100)
        //   //   return "#beaed4";
        // },
        types: {
          data0: "bar",
          data1: "bar",
          data2: "bar",
          data3: "bar",
          data4: "bar",
          data5: "bar",
          data6: "bar",
          data7: "bar",
          data8: "bar"
        },
        groups: [
          [
            "data0",
            "data1",
            "data2",
            "data3",
            "data4",
            "data5",
            "data6",
            "data7",
            "data8"
          ] // showing sum value of group members
        ],
        order: false,
        axes: {
          data0:"y2",
          data1: "y2",
          data2: "y2",
          data3: "y2",
          data4: "y2",
          data5: "y2",
          data6: "y2",
          data7: "y2",
          data8: "y2"
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
          // tick: {
          //   count: 10,
          //   values:[0,1,2,3,4,5,6,7,8,9,10,11,12]
          // }
          // padding: { top: 200, bottom: 0 }
        },
        y: {
          show: false
        },
        x: {
          show: false,
          type: "category",
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
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
        <div id="chart2"></div>
        <div id="range"></div>
      </>
    );
  }
}

export default BarChart;
