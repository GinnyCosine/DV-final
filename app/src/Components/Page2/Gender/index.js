import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const GenderBarChart = (props) => {
  const { data } = props;
  const legend = [
    {
      text: 'Male',
      color: '#bfe9ff',
    },
    {
      text: 'Female',
      color: '#f2c2c6',
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        backgroundColor: '#bfe9ff',
        borderColor: '#8cd8ff',
        borderWidth: 2,
        hoverBackgroundColor: '#8cd8ff',
        label: `Male`,
        data: data[0]
      },
      {
        backgroundColor: '#f2c2c6',
        borderColor: '#f19ca2',
        borderWidth: 2,
        hoverBackgroundColor: '#f19ca2',
        label: `Female`,
        data: data[1]
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
          text: 'Number',
          align: 'end',
          font: {
            family: 'Nunito'
          }
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
        <ChartTitle>性別</ChartTitle>
        <Legend list={legend} />
        <div>
          <Chart
            type="bar"
            data={chartData}
            width={600}
            height={400}
            options={option}
          />
        </div>
      </ChartBlock>
  );
};

export default GenderBarChart;