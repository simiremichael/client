import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link} from "react-router-dom";


const StyledBox = styled(Box)`
margin: 40px 0;
`
const StyledContainer = styled(Container)`

`
const StyledGrid = styled(Grid)`

`
const InnerContainer = styled(Grid)`
display: flex;
flex-direction: column;
align-items: start;
`
const Links = styled(Link)`
text-decoration: none;
color: #007ea8;
`
const StyledItem = styled.li`
text-align: start;
display: inline;
list-style-type: none;
font-size: 0.9rem;
line-height: 1.6;
cursor: pointer;
font-family:   Open Sans;
:hover {
  border-bottom: 1px solid  #007ea8;
  transition: ease-in-out, width 0.4s, 0.2s;

}
`
const Heading = styled.h3`
text-align: start;
font-size: 1rem;
color: #383838;
cursor: pointer;
font-familyt: Roboto;
`

function Popular() {
  return (  
   <StyledBox>
    <StyledContainer>
     <StyledGrid container spacing={2}>
     <InnerContainer item lg={3}>
     <Heading>POPULAR SEARCHES</Heading>
     <Links to='/'><StyledItem>Properties for rent in Victoria Island</StyledItem></Links>
     <Links to='/'><StyledItem>Property for sale in Ikeja</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for rent in Lekki</StyledItem></Links>
     <Links to='/'><StyledItem>Aparment for sale in Ikoyi</StyledItem></Links>
     <Links to='/'><StyledItem>Land for sale in Ibeju Lekki</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for rent in Banana Island </StyledItem></Links>
     </InnerContainer>

     <InnerContainer item lg={3}>
     <Heading>POPULAR AREAS</Heading>
     <Links to='/'><StyledItem>Properties for rent in Banana Island</StyledItem></Links>
     <Links to='/'><StyledItem>Property for sale in Ikoyi</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for rent in Ikeja</StyledItem></Links>
     <Links to='/'><StyledItem>Office for rent in Victoria Island</StyledItem></Links>
     <Links to='/'><StyledItem>Flat for rent in Ibeju Ajah</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for sale in Lekki </StyledItem></Links>
     </InnerContainer>

     <InnerContainer item lg={3}>
    <Heading>TENDING AREAS</Heading>
     <Links to='/'><StyledItem>Office for rent in Marina</StyledItem></Links>
     <Links to='/'><StyledItem>Office for rent in Ikoyi</StyledItem></Links>
     <Links to='/'><StyledItem>Properties for sale in Banana Island</StyledItem></Links>
     <Links to='/'><StyledItem>Property for rent in Ikeja</StyledItem></Links>
     <Links to='/'><StyledItem>Building for sale in Lekki</StyledItem></Links>
     <Links to='/'><StyledItem>Office for rent in Victoria Island </StyledItem></Links>
     </InnerContainer>

     <InnerContainer item lg={3}>
     <Heading>TRENDING SEARCHES</Heading>
     <Links to='/'><StyledItem>Properties for rent in Lekki</StyledItem></Links>
     <Links to='/'><StyledItem>Property for sale in Sangotedo</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for rent in Banana Island</StyledItem></Links>
     <Links to='/'><StyledItem>Aparment for sale in Ikoyi</StyledItem></Links>
     <Links to='/'><StyledItem>Land for sale in Ibeju Lekki</StyledItem></Links>
     <Links to='/'><StyledItem>Apartment for rent in Ikeja</StyledItem></Links>
     </InnerContainer>
     </StyledGrid>
    </StyledContainer>
    </StyledBox>
  )
}

export default Popular