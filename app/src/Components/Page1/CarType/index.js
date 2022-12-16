import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const CarTypeBarChart = (props) => {
  const { data } = props;
  const legend = [
    { text: "人", color: '#ffe9cd' },
    { text: "大客車", color: '#e6edc5' },
    { text: "小客車", color: '#daede2' },
    { text: "小貨車", color: '#bfd9de' },
    { text: "大貨車", color: '#bfe9ff' },
    { text: "半聯結車", color: '#d8d3f0' },
    { text: "慢車", color: '#f8d7d0' },
    { text: "機車", color: '#f2c2c6' }
  ];

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        backgroundColor: ['#ffe9cd', '#e6edc5', '#daede2', '#bfd9de', '#bfe9ff', '#d8d3f0', '#f8d7d0', '#f2c2c6'],
        borderColor: ['#fccd92', '#d9e892', '#a3c9b3', '#a3c8cf', '#8cd8ff', '#bfbad5', '#f5b4a6', '#f19ca2'],
        hoverBackgroundColor: ['#ffe9cd95', '#e6edc595', '#daede295', '#bfd9de95', '#bfe9ff95', '#d8d3f095', '#f8d7d095', '#f2c2c695'],
        borderWidth: 2,
        stack: 1,
        data: data.death
      },
      {
        backgroundColor: ['#fccd92', '#d9e892', '#a3c9b3', '#a3c8cf', '#8cd8ff', '#bfbad5', '#f5b4a6', '#f19ca2'],
        borderColor: ['#fccd92', '#d9e892', '#a3c9b3', '#a3c8cf', '#8cd8ff', '#bfbad5', '#f5b4a6', '#f19ca2'],
        hoverBackgroundColor: ['#fccd92d5', '#d9e892d5', '#a3c9b3d5', '#a3c8cfd5', '#8cd8ffd5', '#bfbad5d5', '#f5b4a6d5', '#f19ca2d5'],
        borderWidth: 2,
        stack: 1,
        data: data.injury
      }
    ]
  };
  const option = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Death and Injury Toll',
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
      x: {
        title: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        bodyFont: {
          family: 'Nunito'
        },
        callbacks: {
          label: 
            function(context) {
              const total = Number(context.formattedValue) + Number(context.formattedValue);
              if (context.datasetIndex > 0) {
                return `Injury: ${context.formattedValue} / ${total}`;
              }
              return `Death: ${context.formattedValue} / ${total}`;
            }
        }
      }
    }
  };
  
  return (
      <ChartBlock>
        <ChartTitle>當事者車種</ChartTitle>
        <Legend list={legend} />
        <div>
          <Chart
            type="bar"
            data={chartData}
            width={600}
            height={250}
            options={option}
          />
        </div>
      </ChartBlock>
  );
};

export default CarTypeBarChart;
