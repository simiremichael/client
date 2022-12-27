import React, {useState} from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField} from '@mui/material';
import { NavLink} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledBox = styled(Box)`

`
const StyledContainer = styled(Container)`

`
const ItmesContainer= styled.div`
margin-top: 50px;
@media screen and (max-width: 900px) {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 10px;
}
`
const Items = styled.p`
text-align: start;
color: #494949;
@media screen and (max-width: 900px) {
  margin: 10px;
}
`
const FormContainer = styled.div`

`
const FormTitle = styled.h5`
font-size: 1.5rem;
text-align: start;
font-weight: 400;
color: #383838;
`
const PropertyTypeLink = styled(NavLink)`
 text-decoration: none;
 color: #494949;
 `
const LocationForm = styled.form`
border: 0.5px solid #D3D3D3;
padding: 20px 10px;
`
const InputContainer = styled.div`
width: 100%;
`
const AddressInput1 = styled(TextField)`
width: 100%;
`
const AddressInput2 = styled(TextField)`
width: 100%;

`
const StreetInput = styled(TextField)`
width: 100%;

`
const HouseInput = styled(TextField)`
width: 100%;

`
const CityInput = styled(TextField)`
width: 100%;

`
const PostCodeInput = styled(TextField)`
width: 100%;
`
const CountyInput = styled(TextField)`
width: 100%;
`
const StateInput = styled(TextField)`
width: 100%;
`
const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: start;
margin: 20px 0 20px 0;
`
const NextButton = styled.button`
 border: none;
 background-color:#008080;
 color: #ffffff;
 outline: none;
 font-size: 1rem;
 padding: 6px 15px;
 font-size: 1rem;
 font-weight: bold;
 border-radius: 5px;
 cursor: pointer;
`
const CloseButton = styled.button`
border: 0.5px solid #D3D3D3;
background-color: inherit;
color: #494949;
outline: none;
margin-right: 15px;
padding: 6px 15px;
font-size: 1rem;
 font-weight: bold;
 border-radius: 5px;
 cursor: pointer;
`
const ErrMessage = styled.h5`
color: red;
`


function Location(props: { updateProperty: any, property: any, setProperty: any}) {

  //const [input, setInput] = useState({address1: '', address2: '', street: '', house: '', city: '', postCode: '', lga: '', state: '' });

  const property = props.property;
  const setProperty = props.setProperty;
  const { register, formState: { errors },handleSubmit } = useForm({
    defaultValues: {
      address1: property.address1,
      address2: property.address2,
      street: property.street,
      house: property.house,
      city: property.city,
      postCode: property.postCode,
      lga: property.lga,
      state: property.state 
    }
  });
  let navigate = useNavigate();

  const notify = () => {
    toast.success('Saved..',)
    }

  const onSubmit = (data: any) => {
    props.updateProperty(data);
   console.log(data);
    notify();
   navigate('/agentproperties/propertySizeAndPrice')
   
  };
  const handleBack = () => {
    navigate('/agentproperties/propertyType')
  }

  return (
    <StyledBox>
 <StyledContainer>
  <Grid container>
  <Grid item lg={3} md={3} sm={12} xs={12}>
   <ItmesContainer>
    <Items><PropertyTypeLink to='/agentproperties/propertyType'>Property type</PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/location'><strong>Location</strong></PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/propertySizeAndPrice'>Property size and Price</PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/description'>Description</PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/photos'>Photos </PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/videoAnd3Dtours'>Video & 3D tours</PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/details'>Details</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/utilities'>Utilities</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/features'>Features</PropertyTypeLink></Items>
   </ItmesContainer>
  </Grid>
  <Grid item lg={9} md={9} sm={12} xs={12}>
 <FormContainer>
 <FormTitle>Location</FormTitle>
  <LocationForm onSubmit={handleSubmit(onSubmit)}>
  <InputContainer>
  <Grid container spacing={2}>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <AddressInput1 variant='outlined' label='ADDRESS LINE 1' type='text' {...register('address1',{required: 'Property address is required....'})} name='address1' value={property.address1} onChange={(e: any) => setProperty({...property, address1: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <AddressInput2 variant='outlined' label='ADDRESS LINE 2' type='text' {...register('address2')} name='address2' value={property.address2} onChange={(e: any) => setProperty({...property, address2: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={5} md={5} sm={9} xs={9}>
  <StreetInput variant='outlined' label=' STREET' type='text' {...register('street')} name='street'  value={property.street} onChange={(e: any) => setProperty({...property, street: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={3} md={3} sm={3} xs={3}>
  <HouseInput variant='outlined' label='HOUSE NUMBER' type='number' {...register('house',{required: 'Property address is required....'})} name='house' value={property.house} onChange={(e: any) => setProperty({...property, house: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={4}>
  <CityInput variant='outlined' label=' LOCATION' type='text' name='location' value={property.Location} onChange={(e: any) => setProperty({...property, location: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={4}>
  <PostCodeInput variant='outlined' label='POSTCODE' type='number' {...register('postCode',{required: true})} name='postCode' value={property.postCode} onChange={(e: any) => setProperty({...property, postCode: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={4}>
  <CountyInput variant='outlined' label='LGA' type='text' {...register('lga',{required: true})} name='lga' value={property.lga} onChange={(e: any) => setProperty({...property, lga: e.target.value})} size='small' />
  </Grid>
  <Grid item lg={4} md={4} sm={4} xs={4}>
  <StateInput variant='outlined' label='STATE' type='text' {...register('state',{required: 'Property address is required....'})} name='state' value={property.state} onChange={(e: any) => setProperty({...property, state: e.target.value})} size='small' />
  </Grid>
  </Grid>
  {errors.address1 || errors.house ? <ErrMessage>{'Please select both property category and property type'}</ErrMessage> : ''}
   <ToastContainer />
 <ButtonContainer>
 <CloseButton type='button' onClick={handleBack}>back</CloseButton>
 <NextButton type='submit'>Continue</NextButton>
 </ButtonContainer>

  </InputContainer>
  </LocationForm>
 </FormContainer>
  </Grid>
  </Grid>
 </StyledContainer>
</StyledBox>
  )
}

export default Location



