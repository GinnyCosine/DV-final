import React from 'react';
import 'chart.js/auto';
import ApexChart  from "react-apexcharts";
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const AgemapChart = (props) =>{
    const {data}=props;

    const series = [
          {
            name: "0-15",
            data: data[0]
          },
          {
            name: "16-30",
            data: data[1]
          },
          {
            name: "31-45",
            data: data[2]
          },
          {
            name: "46-60",
            data: data[3]
          },
          {
            name: ">60",
            data: data[4]
          },
        ];
    const options = {
          chart: {
            height: 350,
            type: 'line',
            dropShadow: {
              enabled: false,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#8cd8ff', '#fccd92','#a3c9b3','#bfbad5','#f19ca2'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth'
          },
          
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            title: {
              text: 'Month'
            }
          },
          yaxis: {
            title: {
              text: 'Number'
            },
            //min: 0
          },
          title: {
            text: 'Click the lable to show/hide curve',
            align: 'left'
          },
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            //floating: true,
            offsetY: -25,
            offsetX: -5
          },
        }
      return (
        <ChartBlock>
      <ChartTitle>年齡層分布</ChartTitle>
      {/* <Legend list={legend} /> */}
      
      <div >

      <ApexChart
      type='line'
      options={options}
      series={series}
      height={600}
      >
        </ApexChart> 
    </div>
    </ChartBlock>
);
};

export default AgemapChart