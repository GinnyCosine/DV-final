import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const AccTypeBarChart = (props) => {
  const { data } = props;
  const legend = [
    {
      text: 'Death',
      color: '#ffe9cd',
    },
    {
      text: 'Injury',
      color: '#bfe9ff',
    },
    {
      text: 'Total',
      color: '#e6edc5',
    }
  ];

  const chartData = {
    labels: [`人和車`, `車和車`, `車本身`],
    datasets: [
      {
        backgroundColor: '#ffe9cd',
        borderColor: '#fccd92',
        borderWidth: 2,
        hoverBackgroundColor: '#fccd92',
        label: `Death`,
        data: [data["人與汽(機)車"].death, data["車與車"].death, data["汽(機)車本身"].death]
      },
      {
        backgroundColor: '#bfe9ff',
        borderColor: '#8cd8ff',
        borderWidth: 2,
        hoverBackgroundColor: '#8cd8ff',
        label: `Injury`,
        data: [data["人與汽(機)車"].injury, data["車與車"].injury, data["汽(機)車本身"].injury]
      },
      {
        backgroundColor: '#e6edc5',
        borderColor: '#d9e892',
        borderWidth: 2,
        hoverBackgroundColor: '#d9e892',
        label: `Total`,
        data: [data["人與汽(機)車"].total, data["車與車"].total, data["汽(機)車本身"].total]
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
        <ChartTitle>事故類型</ChartTitle>
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

export default AccTypeBarChart;
