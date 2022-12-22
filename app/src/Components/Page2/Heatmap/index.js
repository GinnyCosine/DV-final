import React from 'react';
import 'chart.js/auto';
import ApexChart  from "react-apexcharts";
// import Legend from '../../../Themes/Components/Legend';
// import HeatMap from '@uiw/react-heat-map';

import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';
function generate(data) {
    let x,y;
    var series = [];
    let i = 0;
    while(i < 24)
   {
        x = i.toString()
        y = data[i]
        series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
    
    


const HeatmapChart = (props) => {
  const { data  } = props;
 
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hourLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(v => v.toString());

    const series = [
      {
          name: "Monday",
          data:  generate(data[1])
      },
      {
          name: "Tuesday",
          data:  generate(data[2])
      },
      {
          name: "Wednesday",
          data:  generate(data[3])
      },
      {
          name: "Thursday",
          data:  generate(data[4])
      },
      {
          name: "Friday",
          data:  generate(data[5])
      },
      {
          name: "Saturday",
          data:  generate(data[6])
      },
      {
          name: "Sunday",
          data:  generate(data[0])
      },
    ]   
    const options = {
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#aba99c']
        }
      },
      colors:  [
        "#5f9ea0",
          ],
      xaxis: {
        categories : hourLabels,
        title: {
                  display: true,
                  text: 'Hours',
                  font: {
                    family: 'Nunito'
                  },
                  align: 'center'
                }
      },
      yaxis:{
        categories : dayLabels,
        title: {
                  display: true,
                  text: 'Weekdays',
                  font: {
                    family: 'Nunito'
                  },
                  align: 'end'
                },
                ticks: {
                  font: {
                    family: 'Nunito'
                  }
                }
      },
      grid: {
        padding: {
          right: 20
        }
      },

  }
  return (
      <ChartBlock>
        <ChartTitle>星期與發生時段</ChartTitle>
        {/* <Legend list={legend} /> */}
        <div >

        <ApexChart
        type='heatmap'
        height = {400}
        options={options}
        series={series}
        >
          </ApexChart> 
      </div>
      </ChartBlock>
  );
};

export default HeatmapChart;


