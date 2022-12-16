import React from 'react';

import ReactSvgZoomMap from 'react-svg-zoom-map';
import "./Map.css";

import styled from 'styled-components';
import Title from '../../Themes/Components/Title';

import ChartShower from './ChartShower';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  width: 50vw;
  padding-left: 10px;
  box-sizing: border-box;
`;

const Description = styled.div`
  width: 100%;
`;

const SelectBar = styled.div`
  display: flex;
  width: 100%;
`;

const SelectBarItem = styled.div`
  flex: 1;
  color: ${(props) => props.theme.green};
  font-size: 1em;
  text-align: center;
  cursor: pointer;
  :hover{
    opacity: 0.8;
    transition: all 0.3s;
  }
`;

const SelectSlider = styled.div`
  position: relative;
  margin-top: 5px;
  margin-bottom: 30px;
  width: 100%;
`;

const SelectSliderItem = styled.div`
  position: absolute;
  width: 25%;
  padding-top: 2px;
  border-radius: 3px;
  left: ${(props) => props.left}px;
  top: 0;
  background: ${(props) => props.theme.green};
  transition: all 0.5s;
`;

class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        county: "",
        chart: "accidentType",
        sliderLeft: 0
      }
      this.clickMap = this.clickMap.bind(this);
      this.selectChart = this.selectChart.bind(this);
    }

    clickMap(newArea) {
      const newCounty = newArea[0];
      this.setState({ county: newCounty });
      const countyList = document.querySelectorAll(".map-item-path");
      for (let i = 0; i < countyList.length; i++) {
        const title = countyList[i].innerHTML;
        if (title.includes(newCounty)) {
          countyList[i].classList.add("map-path-select");
        }
        else if (countyList[i].classList.contains("map-path-select")) {
          countyList[i].classList.remove("map-path-select");
        }
      }
    }

    selectChart(chart) {
      const left = document.getElementById(`page1-${chart}-item`).getBoundingClientRect().left;
      const leftMost = document.getElementById(`page1-slider`).getBoundingClientRect().left;
      this.setState({ chart: chart, sliderLeft: left - leftMost });
    }
    render() {
      const { county, sliderLeft, chart } = this.state;
      return (
        <div>
          <Wrapper>
            <ReactSvgZoomMap
              countyJsonSrc="https://raw.githubusercontent.com/GinnyCosine/DV-final/master/taiwan.json"
              townJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-town.json"
              villageJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-village.json"
              onAreaClick={(newArea) => { this.clickMap(newArea); }}
            />
            {
              county === '' ?
              <DescriptionWrapper>請點選左方地圖選擇縣市</DescriptionWrapper>
              :
              <DescriptionWrapper>
                <Title>{county}</Title>
                <Description>
                  <SelectBar>
                    <SelectBarItem
                      id="page1-accidentType-item"
                      onClick={() => { this.selectChart("accidentType"); }}
                    >
                      Accident Type
                    </SelectBarItem>
                    <SelectBarItem
                      id="page1-carType-item"
                      onClick={() => { this.selectChart("carType"); }}
                    >
                      Vehicle Type
                    </SelectBarItem>

                    <SelectBarItem
                      id="page1-weather-item"
                      onClick={() => { this.selectChart("weather"); }}
                    >
                      Weather
                    </SelectBarItem>
                    <SelectBarItem
                      id="page1-age-item"
                      onClick={() => { this.selectChart("age"); }}
                    >
                      Age
                    </SelectBarItem>
                  </SelectBar>
                  <SelectSlider id="page1-slider">
                    <SelectSliderItem left={sliderLeft} />
                  </SelectSlider>
                  <ChartShower county={county} chartType={chart} />
                </Description>
              </DescriptionWrapper>
            }
          </Wrapper>
            
        </div>
      );
    }
}

export default Page;
