/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";

class ChartDemo extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart",
      size: {
        height: 480
        // width: 700
      },
      tooltip: {
        grouped: true // Default true
      },
      point: {
        show: true // for line chart points show/hide
      },
      // color: {
      //   pattern: [
      //     "#1f77b4",
      //     "#aec7e8",
      //     "#ff7f0e",
      //     "#ffbb78",
      //     "#2ca02c",
      //     "#98df8a",
      //     "#d62728",
      //     "#ff9896",
      //     "#9467bd",
      //     "#c5b0d5",
      //     "#8c564b",
      //     "#c49c94",
      //     "#e377c2",
      //     "#f7b6d2",
      //     "#7f7f7f",
      //     "#c7c7c7",
      //     "#bcbd22",
      //     "#dbdb8d",
      //     "#17becf",
      //     "#9edae5"
      //   ]
      // },
      data: {
        columns: [
          ["data1", '', 200, 100, 150, 200, 210, 80, 55, -40, 10, -30, 6],
          ["data2", 25, 30, -150, 40, 50, -50, 80, 100, -100, 90, 25, 30],
          ["data3", 60, 10, -100, 40, 5, 70, 20, 55, 600, 30, -30, 66],
          ["data4", 10, 90, 600, 80, 30, 70, 40, 300, -50, 50, -60, 40],
          ["data5", 100, 200, 100, 150, 200, 210, 80, 55, -40, 10, -30, 6]
        ],
        axes: {
          data1: "y",
          data2: "y",
          data3: "y2",
          data4: "y2"
        },
        types: {
          data1: "bar",
          data2: "bar",
          data5: "spline"
        },
        groups: [
          ["data1", "data2"] // showing sum value of group members
        ]
      },
      axis: {
        y: {
          max: 800,
          min: -800,
          label: {
            text: "Y Label",
            position: "outer-middle"
          },
          padding: { top: 200, bottom: 0 }
        },
        y2: {
          max: 400,
          min: -400,
          show: true,
          label: {
            text: "Y2 Label",
            position: "outer-middle"
          },
          padding: { top: 200, bottom: 0 }
        },
        x: {
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
          show: true
        },
        y: {
          show: true
        }
      }
      //   zoom: {
      //     enabled: true
      //   }
    });
  }
  render() {
    return <div id="chart"></div>;
  }
}

export default ChartDemo;
