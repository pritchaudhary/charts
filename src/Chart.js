/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import C3Chart from 'react-c3js';

class Chart extends Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = C3Chart.generate({
      bindto: "#chart",
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      }
    });
  }
  render() {
    return <div id="chart">hi</div>;
  }
}


export default Chart;
