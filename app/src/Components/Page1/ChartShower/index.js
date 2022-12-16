import React, { useState } from 'react';
import { usePapaParse } from 'react-papaparse';
import AccTypeBarChart from '../AccidentType';
import WeatherBarChart from '../Weather';
import AgeBubbleChart from '../Age';
import CarTypeBarChart from '../CarType';

const ChartShower = (props) => {
  const { county, chartType } = props;
  const { readRemoteFile } = usePapaParse();
  const [data, setData] = useState(undefined);

  const getRemoteCsv = () => {
    readRemoteFile("https://raw.githubusercontent.com/GinnyCosine/DV-final/master/traffic-data.csv", {
      header: true,
      complete: (results) => {
        results.data.forEach((element, index) => {
          if (element["死亡受傷人數"] !== undefined && element["死亡受傷人數"].length > 0) {
            let strs = element["死亡受傷人數"].split(";");
            let death = Number(strs[0].split("死亡")[1]);
            let injury = Number(strs[1].split("受傷")[1]);
            let total = death + injury;
            results.data[index]['death'] = death;
            results.data[index]['injury'] = injury;
            results.data[index]['total'] = total;
          }
          else {
            results.data[index]['death'] = 0;
            results.data[index]['injury'] = 0;
            results.data[index]['total'] = 0;
          }
        });
        setData(results.data);
      }
    });
  };

  const getAccTypeData = (OriginalData) => {
    const chartData = {
      "人與汽(機)車": { death: 0, injury: 0, total: 0},
      "車與車": { death: 0, injury: 0, total: 0},
      "汽(機)車本身": { death: 0, injury: 0, total: 0}
    };

    OriginalData.forEach(element => {
      const type = element["事故類型及型態大類別名稱"];
      if (Object.keys(chartData).includes(type)) {
        chartData[type].death += element.death;
        chartData[type].injury += element.injury;
        chartData[type].total += element.total;
      }
    });

    return chartData;
  }

  const getWeatherData = (OriginalData) => {
    const chartData = {
      "晴": 0,
      "陰": 0,
      "雨": 0,
      "暴雨": 0,
      "風沙": 0,
      "霧或煙": 0
    };

    OriginalData.forEach(element => {
      const type = element["天候名稱"];
      if (Object.keys(chartData).includes(type)) {
        chartData[type] += element.total;
      }
    });

    return chartData;
  }

  const getAgeData = (OriginalData) => {
    const tmpData = {};
    const ageRange = [ 0, 17, 26, 40, 65, 75];
    OriginalData.forEach(element => {
      if (element["發生時間"] !== undefined &&
          element["當事者屬-性-別名稱"] !== undefined &&
          element["當事者事故發生時年齡"] !== undefined &&
          element["發生時間"].length > 0 &&
          element["當事者屬-性-別名稱"].length > 0 &&
          element["當事者屬-性-別名稱"] !== "無或物(動物、堆置物)" &&
          element["當事者事故發生時年齡"].length > 0
      ) {
        const time = Math.floor(Number(element["發生時間"]) / 10000);
        const age = Number(element["當事者事故發生時年齡"]);
        let ageIndex = 0;
        while (ageIndex + 1 < ageRange.length && age >= ageRange[ageIndex + 1]) {
          ageIndex += 1;
        }
        const gender = element["當事者屬-性-別名稱"];
        if (Object.keys(tmpData).includes(`${time}`)) {
          tmpData[time][gender][ageIndex] += 1;
        }
        else {
          tmpData[time] = { '男': [ 0, 0, 0, 0, 0, 0] , '女': [ 0, 0, 0, 0, 0, 0] };
          tmpData[time][gender][ageIndex] = 1;
        }
      }
    });
    
    const chartData = { female: [], male: [], time: Object.keys(tmpData) };
    Object.keys(tmpData).forEach((key) => {
      const time = Number(key);
      for (let idx = 0; idx < ageRange.length; idx++) {
        if (tmpData[time]['男'][idx] > 0) {
          chartData.male.push({ x: time, y:idx, r: tmpData[time]['男'][idx] * 2.5});
        }
        if (tmpData[time]['女'][idx] > 0) {
          chartData.female.push({ x: time, y:idx, r: tmpData[time]['女'][idx] * 2.5});
        }
      }
    });
    return chartData;
  }

  const getCarTypeData = (OriginalData) => {
    const chartData = {
      "人": { death: 0, injury: 0 },
      "大客車": { death: 0, injury: 0 },
      "小客車": { death: 0, injury: 0 },
      "小貨車": { death: 0, injury: 0 },
      "大貨車": { death: 0, injury: 0 },
      "半聯結車": { death: 0, injury: 0 },
      "慢車": { death: 0, injury: 0 },
      "機車": { death: 0, injury: 0 },
    };

    OriginalData.forEach(element => {
      const type = element["當事者區分-類別-大類別名稱-車種"];
      if (Object.keys(chartData).includes(type)) {
        chartData[type].death += element.death;
        chartData[type].injury += element.injury;
      }
    });
    console.log(chartData);
    const typeList = [
      "人", "大客車", "小客車", "小貨車", "大貨車", "半聯結車", "慢車", "機車"
    ];

    const deathData = [];
    const injuryData = [];
    typeList.forEach((e) => {
      console.log(e);
      deathData.push(chartData[e].death);
      injuryData.push(chartData[e].injury);
    });
    return { death: deathData, injury: injuryData, labels: typeList };
  }

  if (data === undefined) {
    getRemoteCsv();
  }

  let countyData;
  if (data !== undefined) {
    countyData = data.filter((each) => {
      return each["發生地點"] !== undefined && each["發生地點"].includes(county);
    });
  }

  if (countyData !== undefined) {
    if (chartType === "age") {
      return <AgeBubbleChart data={getAgeData(countyData)} />;
    }
    else if (chartType === "carType") {
      return <CarTypeBarChart data={getCarTypeData(countyData)}/>;
    }
    else if (chartType === "accidentType") {
      return <AccTypeBarChart data={getAccTypeData(countyData)}/>;
    }
    else if (chartType === "weather") {
      return <WeatherBarChart data={getWeatherData(countyData)}/>;
    }
  }

  return <div/>
}

export default ChartShower;
