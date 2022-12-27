import React, {useState} from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const StyledBox = styled(Box)`
`
const StyledContainer = styled(Container)`
margin-top: 20px;
margin-bottom: 20px;
`
const SlideContainer = styled.div`
`
const Slideimg = styled.img`
height: 25rem;
width: 100%;
@media screen and (min-width: 761px) {
  height: 30rem;
}
`
const ContactContainer = styled.div`
display: flex;
flex-direction: column;
aling-items: center;
 width: 220px;
 height: 340px;
 position: absolute;
 padding:  0 20px 10px  20px;
 z-index: 1;
 margin: -400px 0 0 55%;
 background-color: rgba(225 225 225 0.6);
 backdrop-filter: blur(10px);
 @media screen and (max-width: 760px) {
  display: none;
}
 `
 const ContactContainer1 = styled.div`

 width: 93%;
 height: auto;
 position: absolute;
 z-index: 1001;
 bottom: 0;
 background-color: rgba(225 225 225 0.6);
 backdrop-filter: blur(10px);
 @media screen and (min-width: 761px) {
  display: none;
}
 `
 const ContactCompany = styled.h4`
 color: #383838;
 text-align: start;
 margin: 10px 0;
 `
const ContactForm = styled.form`
display: flex;
flex-direction: column;
`
const ContactForm1 = styled(ContactForm)`
margin: 30px 0;
`
const StyledInput = styled(TextField)`
height: 30px;
margin: 10px 0;
outline: none;
border: none;
`
const RequestButoon = styled.button`
height: 40px;
margin: 10px 0;
outline: none;
border: none;
border-radius: 5px;
background-color: #4169E1;
color: #383838;
font-size: 1.1rem;
font-weight: bold;
cursor: pointer;
`
const CallButton = styled.button`
height: 40px;
margin: 10px 0;
outline: none;
border: none;
border-radius: 5px;
background-color: #4169E1;
color: #383838;
font-size: 1.1rem;
font-weight: bold;
cursor: pointer;
`
const ClickMoreButton = styled(RequestButoon)`
width: 100%;
background: none;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
bottom: 0;
color: #4169E1;
`
const ClickMoreButton1Container = styled.div`
display: flex;
justify-content: end;
`
const ClickMoreButton1 = styled(RequestButoon)`
width: 20%;
background: none;
color: #4169E1;
margin-right: 0;
`
const RequestSvg = styled.svg`
width: 15px;
fill: #4169e1;
margin-left: 10px;
`
const AddressContainer = styled.div`

`
const Logo = styled.div`
 width: 100px;
 height: 100px;
`
const RightContainer = styled.div`
margin: 0 0 0 10px;
`
const Reallogo = styled.img`
width: 100%;
height: 100%;
`
const BackTo = styled.p`
text-align: start;
margin: 0 0 10px 0;
color: #4169E1;
border: 1px solid #4169E1;
width: 110px;
padding: 5px 3px 5px 5px;
cursor: pointer;
`
const Developer = styled.h6`
text-align: start;
margin: 0;
color: #383838;
color: #4169E1;
`
const Property = styled.h2`
text-align: start;
margin: 0;
color: #383838;
`
const Amount = styled.p`
text-align: start;
margin: 0;
`
const AboutContainer = styled.div`

`
const Title = styled.h2`
text-align: start;
color: #383838;
`
const AboutTopContainer = styled.div`
display: flex;
`
const AboutDownContainer = styled.div`
display: flex;
margin-top: 15px;
`
const AboutPriceContainer = styled.div`

`
const AboutPriceNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutPrice = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const AboutDeliveryContainer = styled.div`

`
const AboutDeliveryNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutDelivery = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const AboutUnitContainer = styled.div`

`
const AboutUnitNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutUnit = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const AboutStatusContainer = styled.div`

`
const AboutStatusNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutStatus = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const AboutSqftContainer = styled.div`

`
const AboutSqftNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutSqft = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const AboutBedContainer = styled.div`

`
const AboutBedNaration = styled.p`
text-align: start;
margin: 0;
`
const AboutBed = styled.h4`
text-align: start;
margin: 0;
color: #383838;
`
const Address = styled.address`
text-align: start;
margin-top: 13px;
display: flex;
align-items: center;
`
const Svg = styled.svg`
width: 13px;
margin-right: 5px;
fill: #494949;
`
const DecriptionContainer = styled.div`
`
const DescriptionTitle = styled.h4`
text-align: start;
margin-bottom: 10px;
`
const Description = styled.p`
text-align: start;
`
const AmenitiesContainer = styled.div`
display: flex;
`
const Amenities = styled.p`
text-align: start;
margin-right: 20px;
`
const AmenitiesSvg = styled.svg`
width: 10px;
fill: green;
margin-right: 5px;
`

function NewProjectDetailsPage() {


 const [show, setShow] = useState(false);
 
 
 const handleShow = () => {
  setShow(!show);
 }
  return (
    <StyledBox>
      <NavBar  />
      <StyledContainer>
        <SlideContainer>
      <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <Slideimg src="../images/pexels9.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <Slideimg src="../images/pexels8.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Slideimg src="../images/pexels4.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Slideimg src="../images/pexels2.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Slideimg src="../images/pexels5.jpg" alt="Image 2"/>
  </SplideSlide>
   </Splide>
   
  <ContactContainer>
      <ContactCompany>Contact Anton Properties</ContactCompany>
      <ContactForm1>
        
        <StyledInput  type='text' required label="name" variant='outlined' size='small'/>
        
        <StyledInput type='email' required label="email" variant='outlined' size='small' />
        <StyledInput type='number' required label="number" variant='outlined' size='small' />
        <RequestButoon>Send</RequestButoon>
        <CallButton>Call Now</CallButton>
      </ContactForm1>
    </ContactContainer>
   </SlideContainer>

   <ContactContainer1> 
      { show && (
        <>
        <ClickMoreButton1Container>
        <ClickMoreButton1 onClick={handleShow}> Close</ClickMoreButton1>
        </ClickMoreButton1Container>
        <ContactCompany>Contact Anton Properties</ContactCompany>
      <ContactForm>
        <StyledInput  type='text' required label="name" variant='outlined' size='small'/>
        <StyledInput type='email' required label="email" variant='outlined' size='small' />
        <StyledInput type='number' required label="number" variant='outlined' size='small' />
        <RequestButoon>Send</RequestButoon>
        <CallButton>Call Now</CallButton>
      </ContactForm>
      </>
      )}
      <ClickMoreButton onClick={handleShow}>Contact us<RequestSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></RequestSvg></ClickMoreButton>
    </ContactContainer1>
      <AddressContainer>
      <Title>About Xella Homes</Title>
      <Grid container rowSpacing={2}>
        <Grid item lg={2} md={2} sm={6}  xs={6}>
          <Logo><Reallogo src='../images/reallogo5.png'/></Logo>
          </Grid>
          <Grid item lg={3} md={3} sm={6}  xs={6}>
          <RightContainer>
           <BackTo>Back to project</BackTo>
           <Developer>BY ANTON PROPERT <strong>. COMPLETED</strong></Developer>
           <Property>Zella Homes</Property>
           <Amount>From 5,000,000 NGN</Amount>
          </RightContainer>
          </Grid>
          <Grid item lg={7} md={7} sm={13}  xs={12}>
          
          <AboutContainer>
           <AboutTopContainer>
           <Grid container> 
           
        <Grid item lg={3} md={3} sm={4}  xs={4}>
          <AboutPriceContainer>
            <AboutPriceNaration>Price From</AboutPriceNaration>
            <AboutPrice>5,000,000 NGN</AboutPrice>
          </AboutPriceContainer>
          </Grid>
          <Grid item lg={3} md={3} sm={4}  xs={4}>
          <AboutSqftContainer>
            <AboutSqftNaration>Price per sqft</AboutSqftNaration>
            <AboutSqft>Ask for price</AboutSqft>
          </AboutSqftContainer>
          </Grid>
          <Grid item lg={3} md={3} sm={4}  xs={4}>
          <AboutStatusContainer>
            <AboutStatusNaration>Status</AboutStatusNaration>
            <AboutStatus>Completed</AboutStatus>
          </AboutStatusContainer>
          </Grid>
          </Grid>
           </AboutTopContainer>
           <AboutDownContainer>
            <Grid container>
           <Grid item lg={3} md={3} sm={4}  xs={4}>
           <AboutDeliveryContainer>
            <AboutDeliveryNaration>Deliver Date</AboutDeliveryNaration>
            <AboutDelivery>Q3 2021</AboutDelivery>
          </AboutDeliveryContainer>
          </Grid>
          <Grid item lg={3} md={3} sm={4}  xs={4}>
          <AboutUnitContainer>
            <AboutUnitNaration>Total units</AboutUnitNaration>
            <AboutUnit>15</AboutUnit>
          </AboutUnitContainer>
          </Grid>
          <Grid item lg={3} md={3} sm={4}  xs={4}>
          <AboutBedContainer>
          <AboutBedNaration>Bedrooms</AboutBedNaration>
            <AboutBed>1 to 4</AboutBed>
          </AboutBedContainer>
          </Grid>
          </Grid>
           </AboutDownContainer>
          </AboutContainer>
          </Grid>
          </Grid>
          <Address><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></Svg>1220 Amadu Bello Way Vi</Address>
      </AddressContainer>
      <DecriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>Azalea Villas by Emaar are inspired by contemporary Arabesque style villas that further complement the backdrops of the stunning Arabian Ranches. The development conspires of 108 residences that are intricately designed with elegantly warm hues both inside and out, perfectly merging in with the magnificent environment. The interiors of the villas are fitted out with superb wooden finishes, lavishly polished marble floors, architectural stone finishes, and much more.</Description>
      </DecriptionContainer>
      <AmenitiesContainer>
       <Amenities><AmenitiesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></AmenitiesSvg>Gym</Amenities>
       <Amenities><AmenitiesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></AmenitiesSvg>Swimming pool</Amenities>
       <Amenities><AmenitiesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></AmenitiesSvg>Children play ground</Amenities>
       <Amenities><AmenitiesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></AmenitiesSvg>Sport center</Amenities>
       <Amenities><AmenitiesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></AmenitiesSvg>Basket ball court</Amenities>
      </AmenitiesContainer>
      </StyledContainer>
      <Footer />
      </StyledBox>
  )
}

export default NewProjectDetailsPage