import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link } from "react-router-dom";
import '@splidejs/react-splide/css';

const StyledBox = styled.div`

overflow: hidden;
`
const StyledContainer = styled(Container)`
`
const TopContainer = styled.div`
 padding: 10px 0 0 10px;
`
const PropertyType = styled.p`
text-align: start;
margin: 20px 0 20px 0;
font-family: Sans-serif;
color: #383838;
font-weight: 400;
`
const CardContainer = styled.div`

`

const Card = styled(SplideSlide)`
width: 12rem;
height: 14rem;
margin: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
border-radius: 10px;
cursor: pointer;
`
const CardMedia = styled.div`
background-image: url("../images/lekki.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const PlaceDiv = styled.div`
display: flex;
 background-color:  #008080;
 align-items: center;
 justify-content: center;
 width: 50px;
 border-radius: 25px;
 padding: 2px 0 4px 0;
 height: 10px;
`
const Place = styled.p`
color: #ffffff;
text-align: start;
font-family: Sans-serif;
font-size: 0.8rem;
` 
const Location = styled.h3`
color: #ffffff;
text-align: start;
letter-spacing: 0.9px;
font-family: Sans-serif;
`
const CardTextContainer = styled.div`
height: 4rem;
margin: 0 10px;
text-align: start;
`
const CardText = styled.p`
font-family:    Sans-serif;
letter-spacing: 0.8px;
font-size: 0.9rem;
color: #494949;
`
const CardMedia2 = styled.div`
background-image: url("../images/victoria-island.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia3 = styled.div`
background-image: url("../images/ajah.jpeg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia4 = styled.div`
background-image: url("../images/ikeja.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia5 = styled.div`
background-image: url("../images/lagos_island.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia6 = styled.div`
background-image: url("../images/ikoyi.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia7 = styled.div`
background-image: url("../images/yaba.webp");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia8 = styled.div`
background-image: url("../images/banana-island.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia9 = styled.div`
background-image: url("../images/surulere.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const CardMedia10 = styled.div`
background-image: url("../images/sangotedo.jpg");
border-radius: 10px 10px 0 0;
background-size: 100% 100%;
height: 10rem;
`
const Links = styled(Link)`
margin-left: 5px;
font-weight: 600;
color: #007ea8;
text-decoration: none;
font-family: "Open Sans",sans-serif;
`
function NewForSale () {
  
  return (
    <StyledBox>
    <StyledContainer>
      <PropertyType>New properties<Links to='/buy'>For Sale</Links></PropertyType>
      <CardContainer>
      <Splide
      options={ {
        gap : '1rem',
        perPage: 5,
        speed: 2000,
        breakpoints: {
        1200: {  },
        1000: { perPage: 4 },
        768: {perPage: 3},
        600 : { perPage: 2 },
        300 : { perPage: 1 },
        },
        
      } }>
     <Card>
      <CardMedia6>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location>Ikoyi</Location>
      </TopContainer>
      </CardMedia6>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia8>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Banana Island</Location>
      </TopContainer>
      </CardMedia8>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Lekki Phase</Location>
      </TopContainer>
      </CardMedia>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>

    <Card>
      <CardMedia2>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Victoria Island</Location>
      </TopContainer>
      </CardMedia2>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia10>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Sangotedo</Location>
      </TopContainer>
      </CardMedia10>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia9>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location>Surulere</Location>
      </TopContainer>
      </CardMedia9>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    
    <Card>
      <CardMedia4>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Ikeja</Location>
      </TopContainer>
      </CardMedia4>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia5>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Lagos Island</Location>
      </TopContainer>
      </CardMedia5>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia7>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Yaba</Location>
      </TopContainer>
      </CardMedia7>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    <Card>
      <CardMedia3>
        <TopContainer>
        <PlaceDiv>
        <Place>Lagos</Place>
        </PlaceDiv>
      <Location >Ajah</Location>
      </TopContainer>
      </CardMedia3>
      <CardTextContainer>
        <CardText>78 new properties for sale</CardText>
      </CardTextContainer>
    </Card>
    </Splide>
    </CardContainer>
    </StyledContainer>
    </StyledBox>
  )
}

export default NewForSale