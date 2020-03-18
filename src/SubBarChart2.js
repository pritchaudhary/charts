/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import c3 from "c3";

class SubBarChart2 extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    c3.generate({
      bindto: "#chart03",
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
        columns: [["cohort", 2, 0, 0, 2, 0, 5, 2, 5, 2, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        axes: {cohort: "y2"},
        types: {cohort: "bar"},
        labels: true // to display value
      },
      legend: {
        show: false
      },
      axis: {
        rotated: true,
        y2: {
          label: {text: "Avg. First Month Spend", position: "outer-left"}
        },
        y: {
          show: false
        },
        x: {
          type: "category",
          categories: [
            "Jul 2016",
            "Aug 2016",
            "Sep 2016",
            "Oct 2016",
            "Nov 2016",
            "Dec 2016",
            "Jan 2017",
            "Feb 2017",
            "Mar 2017",
            "Apr 2017",
            "May 2017",
            "Jun 2017",
            "Jul 2017",
            "Aug 2017",
            "Sep 2017",
            "Oct 2017",
            "Nov 2017",
            "Dec 2017",
            "Jan 2018",
            "Feb 2018",
            "Mar 2018",
            "Apr 2018",
            "May 2018",
            "Jun 2018",
            "Jul 2018",
            "Aug 2018",
            "Sep 2018",
            "Oct 2018",
            "Nov 2018",
            "Dec 2018",
            "Jan 2019",
            "Feb 2019",
            "Mar 2019",
            "Apr 2019"
          ],
          label:{
            position: "outer-center",
            text: "Month" 
          },
          tick:{
            centered: true
          }
        },
      },
      grid: {
        x: {
          show: true
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
        <div className="heatmap-bar" id="chart03"></div>
      </>
    );
  }
}

export default SubBarChart2;
