import React from 'react';
import ReactSvgZoomMap from 'react-svg-zoom-map';
import styled from 'styled-components';
import "./Map.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  border-radius: 10px;
  width: 50%;
  margin: 5%;
`;

const Title = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  color: ${(props) => props.theme.blue};
  font-size: 2.2em;
  font-weight: 500;
`;

class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        county: ""
      }
    }

    clickMap(newArea) {
      const newCounty = newArea[0];
      this.setState({ county: newCounty });
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
              onAreaClick={(newArea, e) => { this.clickMap(newArea); }}
            />
            {
              county !== '' &&
              <Description>
                <Title>{county}</Title>
              </Description>
            }
            
          </Wrapper>
        </div>
      );
    }
}

export default Page;
