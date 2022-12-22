import { elements } from 'chart.js';
import React, { useState } from 'react';
import { usePapaParse } from 'react-papaparse';
import CityChart from '../City';
import HeatmapChart from '../Heatmap';
import AgemapChart from '../Age';
import GenderBarChart from '../Gender'


const Getdata = (props) => {
  const {  month, cartype, accidenttype, weather, chartType } = props;
  const { readRemoteFile } = usePapaParse();
  const [data, setData] = useState(undefined);

  const getRemoteCsv = () => {
    readRemoteFile("https://raw.githubusercontent.com/GinnyCosine/DV-final/master/traffic-data.csv", {
      header: true,
      complete: (results) => {
        results.data.forEach((element, index) => {
          
            if (element["發生日期"] !== undefined && String(element["發生日期"])% 10 !== 0) {
                var each_day = [ -1,31,28,31,30,31,30,31,31,30,31,30,31 ];
                let m  = Number(String(element["發生日期"]).slice(4, 6));
                let d  = Number(String(element["發生日期"]).slice(6, 8));
                let i = 0, days = 0;
                for(i = 0; i < m; i++) days += each_day[i];
                let W =parseInt((days + d + 5) % 7);
                let T = parseInt(Number(element["發生時間"]) / 10000);
                results.data[index]['week'] = W;
                results.data[index]['time'] = T;
            }
        });
        setData(results.data);
      }
    });
  };

  const getheapmapData = (OriginalData) => {
    const chartData = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ,
    ]
    OriginalData.forEach(element => {
      if (element["week"] !== undefined ) {
        const type = element["week"];
        const time = Number(element["time"]);
        chartData[type][time] += 1;
    }
  });
    return chartData;
    
  }
  const getCityData = (OriginalData) => {
    const chartData = {
      "宜蘭縣": 0,
      "基隆市": 0,
      "臺北市": 0,
      "新北市": 0,
      "桃園市": 0,
      "新竹縣": 0,
      "新竹市": 0,
      "苗栗縣": 0,
      "臺中市": 0,
      "彰化縣": 0,
      "雲林縣": 0,
      "南投縣": 0,
      "嘉義縣": 0,
      "嘉義市": 0,
      "臺南市": 0,
      "高雄市": 0,
      "屏東縣": 0,
      "澎湖縣": 0,
      "金門縣": 0,
      "臺東縣": 0,
      "花蓮縣": 0,
    };
   

    OriginalData.forEach(element => {
      if (element["發生地點"] !== undefined) {
      const type = element["發生地點"].slice(0, 3);
      if (Object.keys(chartData).includes(type)) {
        chartData[type] += 1;
      }
    }
    }); 
    return chartData;
  }

  const getAgemapData = (OriginalData) => {
    const chartdata =[
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ]
    OriginalData.forEach(element =>{
      if (element["當事者事故發生時年齡"]!== undefined){
        let age=Number(element["當事者事故發生時年齡"]);
        const type = age<=15? 0: age<=30 ? 1: age<=45? 2: age<=60? 3:4;
        const month = Number(element["發生月份"])-1;
        chartdata[type][month] +=1;
      }
    });
    return chartdata
  }

  const getGenderData = (OriginalData) => {
    const chartdata =[
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ]
    OriginalData.forEach(element =>{
      if (element["當事者屬-性-別名稱"]!== undefined){
        let gender=element["當事者屬-性-別名稱"];
        const type = gender=="男"? 0:1;
        const month = Number(element["發生月份"])-1;
        chartdata[type][month] +=1;
      }
    });
    return chartdata
  }

  if (data === undefined) {
    getRemoteCsv();
  }

  let filterData;
  let value =[month, accidenttype, cartype , weather]
  if (data !== undefined) {
    filterData = data.filter((each) => {
      if (month === "all") value[0] = each["發生月份"];
      if (accidenttype === "all")  value[1] = each["事故類型及型態大類別名稱"]; 
      if (cartype === "all") value[2] = each["當事者區分-類別-大類別名稱-車種"];
      if (weather  === "all" )   value[3] = each["天候名稱"];
      if  (each["發生月份"] !== undefined && each["事故類型及型態大類別名稱"] !==undefined && each["當事者區分-類別-大類別名稱-車種"] !== undefined && each["天候名稱"] !== undefined) ;
        return  each["發生月份"] === value[0] && each["事故類型及型態大類別名稱"] === value[1] && each["當事者區分-類別-大類別名稱-車種"] === value[2]  && each["天候名稱"] === value[3] ;

    });
  }

  if (filterData !== undefined) {
      if (chartType === "heatmap") {
        return <HeatmapChart data={getheapmapData(filterData)} />;
      }
      else if (chartType === "city") {
        return <CityChart data={getCityData(filterData)} />;
      }
      else if (chartType === "age") {
        return <AgemapChart data={getAgemapData(filterData)}/>;
      }
      else if (chartType === "sex") {
         return <GenderBarChart data={getGenderData(filterData)}/>;
      }
    
  }

  return <div/>
}

export default Getdata;
