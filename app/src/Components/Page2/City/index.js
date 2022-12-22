import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Legend from '../../../Themes/Components/Legend';
import ChartTitle from '../../../Themes/Components/ChartTitle';
import ChartBlock from '../../../Themes/Components/ChartBlock';


const CityChart = (props) => {
  const { data } = props;
  const legend = [
    {
      text: '北部',
      color: '#ffe9cd',
    },
    {
      text: '中部',
      color: '#bfe9ff',
    },
    {
      text: '南部',
      color: '#e6edc5',
    },
    {
      text: '東部',
      color: '#f8d7d0',
    }
  ];

  const chartData = {
    
    labels:  ["宜蘭縣","基隆市","臺北市","新北市","桃園市","新竹縣","新竹市",
            "苗栗縣","臺中市", "彰化縣", "雲林縣", "南投縣",
            "嘉義市", "嘉義縣", "臺南市", "高雄市","屏東縣", "澎湖縣", "金門縣",
            "臺東縣", "花蓮縣"],
    datasets: [
      {
        backgroundColor: ['#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd',
        '#bfe9ff','#bfe9ff','#bfe9ff','#bfe9ff','#bfe9ff',
        '#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5',
        '#f8d7d0','#f8d7d0',],
        borderColor: ['#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd','#ffe9cd',
        '#bfe9ff','#bfe9ff','#bfe9ff','#bfe9ff','#bfe9ff',
        '#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5','#e6edc5',
        '#f8d7d0','#f8d7d0',],
        borderWidth: 2,
        label: `北部`,
        data: [data["宜蘭縣"],data["基隆市"],data["臺北市"],data["新北市"],
              data["桃園市"],data["新竹縣"],data["新竹市"],data["苗栗縣"],data["臺中市"], data["彰化縣"], data["雲林縣"],
              data["南投縣"],
              data["嘉義市"],  data["嘉義縣"], data["臺南市"],data["高雄市"],
              data["屏東縣"], data["澎湖縣"],data["金門縣"],
              data["臺東縣"], data["花蓮縣"],]
      },
    
    ],
  };
  console.log(chartData)
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
          display: true,
          text: "County",
          align: 'center',
          font: {
            family: 'Nunito'
          }
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
        <ChartTitle>各縣市車禍數量</ChartTitle>
        <Legend list={legend} />
        <div>
          <Chart
            type="bar"
            data={chartData}
            width={400}
            height={400}
            options={option}
          />
        </div>
      </ChartBlock>
  );
};
export default CityChart;
