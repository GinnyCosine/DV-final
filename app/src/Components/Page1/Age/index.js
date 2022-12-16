import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const AgeBubbleChart = (props) => {
  const { data } = props;
  const ageRange = [ `0~16`, `17~25`, `26~39`, `40~64`, `65~74`, `75~`];
  const legend = [
    {
      text: '男',
      color: '#8cd8ff',
    },
    {
      text: '女',
      color: '#f5b4a6',
    }
  ];

  const chartData = {
    labels: data.time,
    datasets: [
      {
        backgroundColor: '#f5b4a6',
        hoverBackgroundColor: '#f8d7d0',
        label: `女`,
        data: data.female
      },
      {
        backgroundColor: '#8cd8ff',
        hoverBackgroundColor: '#bfe9ff',
        label: `男`,
        data: data.male
      }
    ]
  };
  const option = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 5,
        title: {
          display: true,
          text: 'Age',
          align: 'end',
          font: {
            family: 'Nunito'
          },
        },
        ticks: {
          font: {
            family: 'Nunito'
          },
          callback: function(value, index, ticks) {
            return ageRange[value];
          }
        }
      },
      x: {
        beginAtZero: true,
        suggestedMax: 24,
        title: {
          display: true,
          text: 'Time (H)',
          align: 'end',
          font: {
            family: 'Nunito'
          },
        },
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
          title: function(context) {
            console.log(context)
              return `Age: ${ageRange[context[0].raw.y]}\nTime: ${context[0].raw.x}H`;
            },
          label: 
            function(context) {
              const gender = context.datasetIndex > 0 ? '男' : '女';
              const num = context.raw.r / 2.5;
              return `${gender}: ${num}`;
            }
        }
      }
    }
  };
  
  return (
      <ChartBlock>
        <ChartTitle>發生時間與年齡區間</ChartTitle>
        <Legend list={legend} />
        <div>
          <Chart
            type="bubble"
            data={chartData}
            width={600}
            height={300}
            options={option}
          />
        </div>
      </ChartBlock>
  );
};

export default AgeBubbleChart;
