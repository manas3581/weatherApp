import { useState, useEffect } from 'react'
import styled from 'styled-components'
import searchIcon from "../public/search.png"
import axios from "axios"
import weather from './data'
import WeatherCard from './component/WeatherCard'
import Background from "../public/background.jpg"

const Wrapper = styled.div`
width: 100;
height: 100%;
display: flex;
background-image: url(Background);
  background-repeat: no-repeat;
  background-size: cover !important;
 
flex-direction: column;


`


const Top = styled.div`
margin: 2rem;
display: flex;
justify-content: space-between;
@media screen and (max-width:1400px) {
   margin: 10px;
  }

`
const Middle = styled.div`
display: flex;
justify-content: center;
margin-top: 3rem;
width: 100%;
@media screen and (max-width:700px) {
   display: block;
   width: 50%;
   margin-left: 3rem;
  }
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.h2`
margin-left:2rem;
@media screen and (max-width:700px) {
   font-size: 12px;
  }

`


const SearchDiv = styled.div`
position: relative;

`
const SerachInput = styled.input`
width: 120%;
padding: 0.9em;
outline: none;
border: none;
border-radius: 5px;
font-size: 1.3rem;
font-weight: 650;
border-radius: 12px;
color: white;
background: #24343D;
box-shadow: 10px 10px 30px 0px rgba(36, 52, 61, 0.60) inset;
@media screen and (max-width:700px) {
  font-size: 16px;
}

`


const Icon = styled.img`
position: absolute;
z-index: 999;
width: 35px;
top: 20%;
right: -90px;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
@media screen and (max-width:700px) {
   right: -50px;
   width: 28px;
  }

`


function App() {
  const [place, setPlace] = useState({city:"New Delhi"})
  const [data , setData] = useState()
  
  const handleChange = (event)=>{
    setPlace({ ...place, city: event.target.value });
  }


  // Handiling Api
  const handleClick = ()=>{
    // axios.post(`http://127.0.0.1:5112/weather`,{city:place.city})  Use this When Running on Local Machine 
    axios.post("https://omnify-backend.azurewebsites.net/weather",{city:place.city} )
    .then((response)=>{
      setData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleEnterKey = (event) => {
    // Check if Enter key (key code 13) is pressed
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  useEffect(() => {
   handleClick();
}, [])

  return (
    <>
     <Wrapper>
    <Top>
      <Logo> Omnify Weather App</Logo>

    </Top>
    <Middle>
      <SearchDiv>
        <SerachInput type='text' onKeyDown={handleEnterKey}  onChange={handleChange} placeholder='Place Name...' />
        <Icon src={searchIcon} onClick={handleClick}/>
      </SearchDiv>
    </Middle>
    <Bottom>
    <WeatherCard data={data} />
      
    </Bottom>
     </Wrapper>
    </>
  )
}

export default App
