import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const WhetherBarChart = (props) => {
  const { data } = props;
  const legend = [
    {
      text: '晴',
      color: '#ffe9cd',
    },
    {
      text: '陰',
      color: '#bfe9ff',
    },
    {
      text: '雨',
      color: '#e6edc5',
    },
    {
      text: '暴雨',
      color: '#f8d7d0',
    },
    {
      text: '風沙',
      color: '#f0b1b6',
    },
    {
      text: '霧或煙',
      color: '#d8d3f0',
    }
  ];
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        backgroundColor: ['#ffe9cd', '#bfe9ff', '#e6edc5', '#f8d7d0', '#f0b1b6', '#d8d3f0'],
        borderColor: ['#fccd92', '#8cd8ff', '#d9e892', '#f5b4a6', '#f19ca2', '#bfbad5'],
        hoverBackgroundColor: ['#fccd92', '#8cd8ff', '#d9e892', '#f5b4a6', '#f19ca2', '#bfbad5'],
        borderWidth: 2,
        data: Object.values(data)
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
        }
      }
    }
  };
  
  return (
      <ChartBlock>
        <ChartTitle>天氣類型</ChartTitle>
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

export default WhetherBarChart;
