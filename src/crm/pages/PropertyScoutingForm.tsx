import React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextareaAutosize, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LogoutIcon from '@mui/icons-material/Logout';



const StyledBox = styled(Box)`
margin-top: 40px;
`
const StyledContainer = styled(Container)`

`
const Title = styled.h1`
margin-bottom: 40px;
`
const SendBtn = styled.button`
margin-top: 20px;
width: 100%;
height: 40px;
font-side: 600;
background-color: #008080;
border: none;
outline: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
`
const BackContainer = styled.div`
display: flex;
justify-content: start;
`
const BackSvg = styled.svg`
width: 40px;
height: 40px;
cursor: pointer;
`


function PropertyScoutingForm() {

  let navigate = useNavigate();
  const handleBack = () => {
    navigate('/propertyScouting');
   }

  return (
    <StyledBox>
      <StyledContainer>
        <BackContainer><BackSvg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"/></BackSvg></BackContainer>
      <Title>Scouting form</Title>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <TextField  id="outlined-basic" label="Name" variant='outlined' type='text' size='small' fullWidth />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <TextField id="outlined-basic" label="Location" variant='outlined' type='text' size='small' fullWidth  />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <FormControl fullWidth size='small'>
  <InputLabel id="demo-simple-select-label">Property type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
  >
    <MenuItem value='rent'>Rent</MenuItem>
    <MenuItem value='but'>Buy</MenuItem>
  </Select>
</FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <TextField id="outlined-basic" label="Property Size" variant='outlined' type='number' size='small' fullWidth  />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <TextField id="outlined-basic" label="Price" variant='outlined' type='number' size='small' fullWidth />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <TextareaAutosize
  aria-label="minimum height"
  minRows={3}
  placeholder="Property description"
  style={{ width: '100%' }}
/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={2} md={2} sm={2} xs={12}>
        <SendBtn>Send</SendBtn>
        </Grid>
      </Grid>
      </StyledContainer>
    </StyledBox>
  )
}

export default PropertyScoutingForm