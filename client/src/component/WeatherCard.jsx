import styled from "styled-components";
import WeatherLogo from "/weather.gif";
import HumidityIcon from "/humidity.gif";
import CloudIcon from "/cloud.gif";
import RainIcon from "/rain.gif";
import SunIcon from "/sun.gif";
import MainIcon from "/mainIcon.png"
const Wrapper = styled.div`
position: relative;
  width: 680px;
  height: 540px;
  border-radius: 20px;
  background: #24353e;
  box-shadow: 10px 9px 70px 0px rgba(36, 53, 62, 0.4);
  margin-top: 6rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width:700px) {
    width: 100vw;
    margin: 10px;
    height: 50vh;
    margin-top: 5rem;
  }
  @media screen and (max-width:1400px) {
    
    margin: 10px;
    height: 50vh;
    margin-top: 5rem;
  }
`;

const Name = styled.div`
  display: flex;
  font-size: 26px;
  @media screen and (max-width:700px) {
    font-size:16px;
  }
`;
const Icon = styled.img`
  color: white;
  width: 36px;
  @media screen and (max-width:700px) {
    width: 26px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 2rem;
`;

const Top = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;

`;
const Middle = styled.div`
display: flex;
margin-top: 2rem;
justify-content: center;
`;

const MainIconDiv = styled.img`
position: absolute;
top: -110px;
right: -60px;
z-index: 999;
width: 360px;
@media screen and (max-width:700px) {
    width: 200px;
    top: -70px;
    right: -40px;
  }
  @media screen and (max-width:1400px) {
    width: 280px;
    
  }
`

const WeatherCard = ({ data }) => {
  return (
    <>
      <Wrapper>
      {data && (
        <>
        <Top>
        <Name>
            City &nbsp; : {data.name} , {data.sys.country}{" "}
          </Name>
          
        </Top>
        <Middle>
        <Name>
          
          <Icon src={WeatherLogo}  /> &nbsp; &nbsp;
          {Math.round(data.main.temp - 273.15)}°C &nbsp; | &nbsp;{" "}
          <small>{data.weather[0].description}</small>
        </Name>
        </Middle>
        <Div>
          <Name>
            <Icon src={CloudIcon}  /> &nbsp; Condtion :&nbsp;{" "}
            {data.weather[0].main}
          </Name>

          <Name>
            <Icon src={HumidityIcon} /> &nbsp;Humidity : &nbsp;{" "}
            {data.main.humidity}
          </Name>
        </Div>
        
        </>
   ) }
   <MainIconDiv src={MainIcon}/>
      </Wrapper>
    </>
  );
};

export default WeatherCard;
