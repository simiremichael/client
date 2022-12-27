import React, { useState } from 'react'
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../miniSearch/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PropertyCard from '../card/PropertyCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StyledBox = styled(Box)`

`
const StyledContainer = styled(Container)`
margin-top: 15px;
margin-bottom: 15px;
`
const TopContainer = styled.div`

`
const SearchStyledBox = styled(Box)`
padding: 15px 0;
border-top: 1px solid #494949;
border-bottom: 1px solid #494949;
width: 100%;
`
const SearchStyledContainer = styled(Container)`
display: flex;
align-items: center;
justify-content: start;
flex-wrap: wrap;
`
const Title = styled.h3`
text-align: start;
color: #383838;
`

const SalesContainer = styled.div`
display: flex;
`
const  SalesResult = styled.p`
text-align: start;
margin-right: 20px;
font-size: 13px;
`
const NewSales = styled.p`
text-align: start;
padding:1px 10px 2.2px 8px;
background-color: #008080;
color: #ffffff;
border-radius: 25px;
font-size: 13px;
`
const SortContainer = styled(Container)`
display:flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const LeftContainer = styled.div`
display: flex;
`
const MapContainer = styled.div`
align-items: center;
display: flex;
border: 1px solid  #A9A9A9;
height: 38px;
margin-left: -20px;
margin-right: 16px;
padding: 0 5px;
border-radius: 5px;
cursor: pointer;
:hover{
  background-color: #F5F5F5;
}
`
const Svg = styled.svg`
width: 12px;
margin-right: 5px;
fill: gray;
`
const Map = styled.p`
display: flex;
`
const SaveContainer = styled.div`
align-items: center;
display: flex;
border: 1px solid #A9A9A9;
height: 38px;
padding: 0 5px;
border-radius: 5px;
cursor: pointer;
:hover{
  background-color: #F5F5F5;
}
`
const Save = styled.p`
display: flex;
align-self: center;
`
const  RightContainer = styled.div`
display: flex;
align-items: center;
`
const Sort = styled.p`

`
const StyledButton = styled(Button)`
height: 38px;
background-color: #008080;
:hover{
  background-color: #008080;
}
`
const Form = styled.form`

`

function Commercial() {
  
  const [sort, setSort] = useState('');

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const [searchData, setSearchData] = useState({search: '', category: '', type: '', bed: '', bath: '', minPrice: '', maxPrice: '', sort: ''})


  const handleChange = (e: any) => {
  const name = e.target.name;
  const value = e.target.value;
  setSearchData( values => ({...values, [name]: value}));
  };

  const handleSearch = () => {
  // e.preventDefault();

  }
  return (
    <StyledBox>
      <NavBar />
     
      <Form onSubmit={handleSearch}> 
        <SearchStyledBox>
        <SearchStyledContainer>
    <FormControl sx={{ m: 1, minWidth: 300 }} >
    <TextField  id="City" size="small" label="City, community or building" variant="outlined" name='search' value={searchData.search} onChange={handleChange} />
    </FormControl>
   
    <FormControl sx={{m: 1,  minWidth: 105}} size="small">
    <InputLabel id="demo-simple-select-label">Buy/Rent</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='category'
          value={searchData.category}
          autoWidth
          label='Buy/Rent'
          onChange={handleChange}
        >
          <MenuItem value='buy'>Buy</MenuItem>
          <MenuItem value='rent'>Rent</MenuItem>
          <MenuItem value='commercial-buy'>Commercial buy</MenuItem>
          <MenuItem value='commercial-rent'>Commercial rent</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Project type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='type'
          value={searchData.type}
          label='Property type'
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value='Appartment'>Apartmet</MenuItem>
          <MenuItem value='office'>office</MenuItem>
          <MenuItem value='flat'>Flat</MenuItem>
          <MenuItem value='terraced'>Terraced</MenuItem>
          <MenuItem value='duplex'>Duplex</MenuItem>
          <MenuItem value='land'>Land</MenuItem>
          <MenuItem value='Bungalow'>Bungolow</MenuItem>
          <MenuItem value='hotel-apartment'>Hotel Apartment</MenuItem>
          <MenuItem value='room'>Room</MenuItem>
          <MenuItem value='shop'>Shop</MenuItem>
          <MenuItem value='werehouse'>WareHouse</MenuItem>
          <MenuItem value='mini-flat'>Mini Flat</MenuItem>
          <MenuItem value='self-contain'>Self Contain</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Beds</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='bed'
          value={searchData.bed}
          label='Beds'
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value='1'>1</MenuItem>
          <MenuItem value='2'>2</MenuItem>
          <MenuItem value='3'>3</MenuItem>
          <MenuItem value='4'>4</MenuItem>
          <MenuItem value='5'>5</MenuItem>
          <MenuItem value='6'>6</MenuItem>
          <MenuItem value='7+'>7+</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Baths</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='bath'
          value={searchData.bath}
          label='Baths'
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value='1'>1</MenuItem>
          <MenuItem value='2'>2</MenuItem>
          <MenuItem value='3'>3</MenuItem>
          <MenuItem value='4'>4</MenuItem>
          <MenuItem value='5'>5</MenuItem>
          <MenuItem value='6'>6</MenuItem>
          <MenuItem value='7+'>7+</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Min-price</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='minPrice'
          value={searchData.minPrice}
          label='min-price'
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value='5,000'>₦5,000</MenuItem>
          <MenuItem value='10,000'>₦10,000</MenuItem>
          <MenuItem value='15,000'>₦15,000</MenuItem>
          <MenuItem value='20,000'>₦20,000</MenuItem>
          <MenuItem value='50,000'>₦50,000</MenuItem>
          <MenuItem value='100,000'>₦100,000</MenuItem>
          <MenuItem value='200,000'>₦200,000</MenuItem>
          <MenuItem value='300,000'>₦300,000</MenuItem>
          <MenuItem value='500,000'>₦500,000</MenuItem>
          <MenuItem value='700,000'>₦700,000</MenuItem>
          <MenuItem value='850,000'>₦850,000</MenuItem>
          <MenuItem value='1,000,000'>₦1,000,000</MenuItem>
          <MenuItem value='1,500,000'>₦1,500,000</MenuItem>
          <MenuItem value='2,000,00'>₦2,000,00</MenuItem>
          <MenuItem value='5,000,000'>₦5,000,000</MenuItem>
          <MenuItem value='10,000,000'>₦10,000,000</MenuItem>
          <MenuItem value='15,000,000'>₦15,000,000</MenuItem>
          <MenuItem value='25,000,000'>₦25,000,000</MenuItem>
          <MenuItem value='50,000,000'>₦50,000,000</MenuItem>
          <MenuItem value='100,000,000'>₦100,000,000</MenuItem>
          <MenuItem value='300,000,000'>₦300,000,000</MenuItem>
          <MenuItem value='500,000,000'>₦500,000,000</MenuItem>
          <MenuItem value='1,000,000,000'>₦1,000,000,000</MenuItem>
          <MenuItem value='1,500,000,000'>₦1,500,000,000</MenuItem>
          <MenuItem value='2,500,000,000'>₦2,500,000,000</MenuItem>
          <MenuItem value='3,000,000,000'>₦3,000,000,000</MenuItem>
          <MenuItem value='5,000,000,000'>₦5,000,000,000</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Max-price</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='maxPrice'
          value={searchData.maxPrice}
          label='max-price'
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value='5,000'>₦5,000</MenuItem>
          <MenuItem value='10,000'>₦10,000</MenuItem>
          <MenuItem value='15,000'>₦15,000</MenuItem>
          <MenuItem value='20,000'>₦20,000</MenuItem>
          <MenuItem value='50,000'>₦50,000</MenuItem>
          <MenuItem value='100,000'>₦100,000</MenuItem>
          <MenuItem value='200,000'>₦200,000</MenuItem>
          <MenuItem value='300,000'>₦300,000</MenuItem>
          <MenuItem value='500,000'>₦500,000</MenuItem>
          <MenuItem value='700,000'>₦700,000</MenuItem>
          <MenuItem value='850,000'>₦850,000</MenuItem>
          <MenuItem value='1,000,000'>₦1,000,000</MenuItem>
          <MenuItem value='1,500,000'>₦1,500,000</MenuItem>
          <MenuItem value='2,000,00'>₦2,000,00</MenuItem>
          <MenuItem value='5,000,000'>₦5,000,000</MenuItem>
          <MenuItem value='10,000,000'>₦10,000,000</MenuItem>
          <MenuItem value='15,000,000'>₦15,000,000</MenuItem>
          <MenuItem value='25,000,000'>₦25,000,000</MenuItem>
          <MenuItem value='50,000,000'>₦50,000,000</MenuItem>
          <MenuItem value='100,000,000'>₦100,000,000</MenuItem>
          <MenuItem value='300,000,000'>₦300,000,000</MenuItem>
          <MenuItem value='500,000,000'>₦500,000,000</MenuItem>
          <MenuItem value='1,000,000,000'>₦1,000,000,000</MenuItem>
          <MenuItem value='1,500,000,000'>₦1,500,000,000</MenuItem>
          <MenuItem value='2,500,000,000'>₦2,500,000,000</MenuItem>
          <MenuItem value='3,000,000,000'>₦3,000,000,000</MenuItem>
          <MenuItem value='5,000,000,000'>₦5,000,000,000</MenuItem>
        </Select>
        </FormControl>

        <StyledButton type='submit' variant="contained"><strong>Find</strong></StyledButton>
    </SearchStyledContainer>
    </SearchStyledBox>
    </Form>

        <StyledContainer>
        <TopContainer>
          <Title>Commercial properties for rent in Nigeria</Title>
          <SalesContainer>
            <SalesResult>105159 results</SalesResult>
            <NewSales >4196 new</NewSales>
          </SalesContainer>
        </TopContainer>

        <SortContainer>
          <LeftContainer>
            <MapContainer>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></Svg>
              <Map>Map View</Map>
            </MapContainer>
            <SaveContainer>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></Svg>
            <Save>Save Search</Save>
            </SaveContainer>
          </LeftContainer>
          <RightContainer>
            <Sort>Sort by:</Sort>
            <FormControl sx={{ m: 1, minWidth: 150, }} size="small">
    <InputLabel id="demo-simple-select-autowidth-label">Search</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          label='Search'
          autoWidth
          onChange={handleSort}
        >
          <MenuItem value='featured'>Featured</MenuItem>
          <MenuItem value='newwest'>Newest</MenuItem>
          <MenuItem value='price-low'>Price(low)</MenuItem>
          <MenuItem value='price-high'>Price(high)</MenuItem>
          <MenuItem value='beds-least'>Beds(least)</MenuItem>
          <MenuItem value='beds-most'>Beds(most)</MenuItem>
          <MenuItem value='developed-earliest'>Developed(earliest)</MenuItem>
          <MenuItem value='developed-latest'>Developed(latest)</MenuItem>
        </Select>
        </FormControl>
          </RightContainer>
        </SortContainer>
        <PropertyCard />
        </StyledContainer>
      <Footer />
      </StyledBox>
  )
}

export default Commercial