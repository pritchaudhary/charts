/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";

class SubBarChart extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart3",
      size: {
        height: 480,
        width: 200
      },
      tooltip: {
        grouped: true // Default true
      },

      point: {
        show: true // for line chart points show/hide
      },
      color:{
        pattern:["#BBE5F9"]
      },
      bar: {
        width: {
          ratio: 0.7 // this makes bar width 50% of length between ticks
        } // or//width: 100 // this makes bar width 100px
      },
      data: {
        columns: [["data1", 100, 30, 50, 150, 80, 10, 80, 55, 40, 10, 30, 6, 100, 30, 50, 150, 80, 10, 80, 55, 40, 10, 30, 6]],
        axes: {
          data1: "y2"
        },
        types: {
          data1: "bar"
        },
        labels: true // to display value,
      },
      legend: {
        show: false
      },
      axis: {
        rotated: true,
        
        y2: {
          max: 100,
          //min: 0,
          show: true,
          reversed: true,
          label: {
            text: "Y2 Label",
            position: "outer-left",

          },
          padding: { top: 0, bottom: 0 }
        },
        y: {
          show: false
        },
        x: {
          tick:{
            centered: true
          },
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
            "DEC",
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
        lines: {
          front: false
        },
        x: {
          show: true,
          lines: [
            {value: 'JAN', axis: 'x', position: 'start'},
            {value: 'FEB', axis: 'x', position: 'start'},
            {value: 'MAR', axis: 'x', position: 'bottom'}
        ]
        },
        y: {
          show: false
        },
        y2:{
          show: true
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
        <div className="heatmap-bar" id="chart3"></div>
      </>
    );
  }
}

export default SubBarChart;
