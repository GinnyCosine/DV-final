import React from 'react';
import ReactSvgZoomMap from 'react-svg-zoom-map';
import styled from 'styled-components';
import Button from '../../Themes/Components/Button';
import Title from '../../Themes/Components/Title';
import "./Map.css";

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
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 3px ${(props) => props.theme.gray};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;



class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        county: ""
      }
    }

    clickMap(newArea, e) {
      const newCounty = newArea[0];
      this.setState({ county: newCounty });
      const countyList = document.querySelectorAll(".map-item-path");
      for (let i = 0; i < countyList.length; i++) {
        const title = countyList[i].innerHTML;
        if (title.includes(newCounty)) {
          countyList[i].classList.add("map-path-select");
        }
        else {
          if (countyList[i].classList.contains("map-path-select")) {
            countyList[i].classList.remove("map-path-select");
          }
        }
      }
    }

    render() {
      const { county } = this.state;
      return (
        <div>
          <Wrapper>
            <ReactSvgZoomMap
              countyJsonSrc="https://raw.githubusercontent.com/GinnyCosine/DV-final/master/taiwan.json"
              townJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-town.json"
              villageJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-village.json"
              onAreaClick={(newArea, e) => { this.clickMap(newArea, e); }}
            />
            {
              county !== '' &&
              <DescriptionWrapper>
                <Title>{county}</Title>
                <Description>
                  <ButtonWrapper>
                    <Button>Age</Button>
                    <Button>Death Toll</Button>
                    <Button>Accident Type</Button>
                    <Button>Weather</Button>
                  </ButtonWrapper>
                </Description>
              </DescriptionWrapper>
            }
          </Wrapper>
            
        </div>
      );
    }
}

export default Page;
