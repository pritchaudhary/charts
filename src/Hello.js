import React from 'react'
import c3 from 'c3';

class Hello extends React.Component {
  
  renderChart() {
		this.chart = c3.generate({
			bindto:"#chart1",
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				]
			}
		});
	}
  
  
  
  render() {
  
  	this.renderChart()
    
    return <div id="chart1"></div>;
  }
}

export default Hello;
