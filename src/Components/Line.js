import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Line = ()=> {
  const [state, setState] = useState({
      options: {

        grid: {
            row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
                 },
              },

        stroke: 
        {
          curve: 'smooth'
        },

        markers: 
        {
          size: 0
        },

        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }
      },
      series: [{
          data: [30, 40, 25, 50, 49, 21, 70, 51]
        }]});
  return(
        <div className="line">
        <Chart options={state.options} series={state.series} type="line" width="595" height = "200"/>
        </div>);

}

export default Line;
