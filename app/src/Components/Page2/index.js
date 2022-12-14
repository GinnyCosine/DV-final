import React from 'react';
import styled from 'styled-components';
import "./page2.css";
import Getdata from './Get_data';

const Wrapper = styled.div`
  align-items: center;
  align-self: center;
  margin: auto;
  padding: 5%;
  box-sizing: border-box;
`;

const DescriptionWrapper = styled.div`
  width: 60vw;
  padding-left: 80px;
  box-sizing: border-box;
  align-items: center;

`;

const Description = styled.div`
  width: 100%;
  align-items: center;
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
  margin-bottom: 50px;
  margin-left: 5px;
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

const FilterItem = styled.div`
  flex: 1;
  padding: 0 20px;
  span {
    background-color: #f2be5c;
    padding: 0 2px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const Arrow = styled.div`
  flex: 0;
  transform: translate(-3em, 0.2em);
  z-index: 1;
`;

const month_options = [
  { value:  'all', label: 'All' },
  { value:  "1", label: 'January' },
  { value:  "2", label: 'Feburary' },
  { value:  "3", label: 'March' },
  { value:  "4", label: 'April' },
  { value:  "5", label: 'May' },
  { value:  "6", label: 'June' },
  { value:  "7", label: 'July' },
  { value:  "8", label: 'Augest' },
  { value:  "9", label: 'September' },
  { value:  "10", label: 'October' },
  { value:  "11", label: 'November' },
  { value:  "12", label: 'December' },
  
];
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "all",
      cartype: "all",
      accidenttype: "all",
      weather:"all",
      sliderLeft: 0,
      chart: "heatmap"
    }
    this.selectmonth= this.selectmonth.bind(this);
    this.selectcartype= this.selectcartype.bind(this);
    this.selectaccidenttype= this.selectaccidenttype.bind(this);
    this.selectweather= this.selectweather.bind(this);
    this.selectChart = this.selectChart.bind(this);

  }
  selectmonth(e) {
    this.setState({ month: e.target.value });
  }
  selectcartype(e) {
    this.setState({ cartype: e.target.value });
  }
  selectaccidenttype(e) {
    this.setState({ accidenttype: e.target.value });
  }
  selectweather(e) {
    this.setState({ weather: e.target.value });
  }
 
  selectChart(chart) {
    const left = document.getElementById(`page2-${chart}-item`).getBoundingClientRect().left;
    const leftMost = document.getElementById(`page2-slider`).getBoundingClientRect().left;
    this.setState({ chart: chart, sliderLeft: left - leftMost  });
  }
  
  render() {
    const { month, cartype, accidenttype, weather, sliderLeft, chart} = this.state;
    

    return (
      <Description>
        <Wrapper>
          <div style={{ display: "flex", width: "100%" }}>
            <FilterItem><span></span>Month</FilterItem>
            <FilterItem><span></span>Vehicle Type</FilterItem>
            <FilterItem><span></span>Accident Type</FilterItem>
            <FilterItem><span></span>Weather</FilterItem>
          </div>
          <div class="filter">
            <select value={month} onChange={this.selectmonth}> 
              {month_options.map((option) => (
                  <option value={option.value}> {option.label} </option>
                ))}
            </select>
            <Arrow>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </Arrow>
            <select value={cartype} onChange={this.selectcartype}>
                <option value = "all">??????</option>
                <option value = "??????">??????</option>
                <option value = "?????????">?????????</option>
                <option value = "?????????">?????????</option>
                <option value = "?????????">?????????</option>
                <option value = "????????????">????????????</option>
            </select>
            <Arrow>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </Arrow>
            <select value={accidenttype} onChange={this.selectaccidenttype}>
                <option value = "all">??????</option>
                <option value = "?????????(???)???">???????????????</option>
                <option value = "???(???)?????????">???????????????</option>
                <option value = "?????????">?????????</option>
            </select> 
            <Arrow>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </Arrow>
            <select value={weather} onChange={this.selectweather}>
                <option value = "all">??????</option>
                <option value = "???">???</option>
                <option value = "???">???</option>
                <option value = "???">???</option>
                <option value = "?????????">?????????</option>
                <option value = "??????">??????</option>
                <option value = "??????">??????</option>
            </select>
            <Arrow>
              <span class="material-symbols-outlined">
                arrow_drop_down
              </span>
            </Arrow>
          </div>
        </Wrapper>
        <DescriptionWrapper>
          <SelectBar>
            <SelectBarItem
              id="page2-heatmap-item"
              onClick={() => { this.selectChart("heatmap"); }}
            >
              Hours & Weekdays Type
            </SelectBarItem>
            <SelectBarItem
              id="page2-city-item"
              onClick={() => { this.selectChart("city"); }}
            >
              City Type
            </SelectBarItem>

            <SelectBarItem
              id="page2-age-item"
              onClick={() => { this.selectChart("age"); }}
            >
              Age
            </SelectBarItem>
            <SelectBarItem
              id="page2-sex-item"
              onClick={() => { this.selectChart("sex"); }}
            >
              Sex
            </SelectBarItem>
          </SelectBar>
          <SelectSlider id="page2-slider">
            <SelectSliderItem left={sliderLeft} />
          </SelectSlider>
          <Getdata  month = {month} cartype = {cartype} accidenttype = {accidenttype} weather ={weather} chartType={chart} />
        </DescriptionWrapper>
      </Description>  
    );
  }
}

export default Page;
