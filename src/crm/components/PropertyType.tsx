import React, {useState, useRef, useEffect} from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink, useParams} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPropertyQuery, useUpdatePropertyMutation } from '../../services/api/propertyAPI';

const StyledBox = styled(Box)`

`
const StyledContainer = styled(Container)`
margin-bottom: 20px;
`
const ItmesContainer= styled.div`
margin-top: 5px;
@media screen and (max-width: 900px) {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 0;
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
width: 100%;
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
 :active{
  front-weight: bold;
 }
 `
 const SelectPropertyTypeContainer = styled.div`
 display: flex;
 border: none;
 outline: none;
 background-color: inherit;
 `
 const SelectPropertyType = styled.input`
 display: none;
 :checked + Label {
  background-color:#008080;
  color: #ffffff;
}
 `
  const SelectDiv = styled.div`
  color: #383838;
 padding: 8px 8px 10px 8px;
 cursor: pointer;
 border-bottom: 3px solid #D3D3D3;
 `
 const SelectLabel = styled.label`
 text-align: start;
 color: #008080;
border: 1px solid #008080;
border-radius: 5px;
cursor: pointer;
padding: 2px 10px 2px;
width: 140px;
font-weight: 700;
margin-top: 10px;
font-size: 0.8rem;
 `
 const Form = styled.form`
 width: 100%;
 `
 const InputRadeo = styled.input`
 text-align: start;
 display: none;
:checked + Label {
  background-color:#008080;
  color: #ffffff;
}
 `
 const Label = styled.label`
 text-align: start;
 color: #008080;
border: 1px solid #008080;
border-radius: 5px;
cursor: pointer;
padding: 2px 10px 2px;
width: 140px;
margin-top: 10px;
font-size: 0.8rem;
 `
 const ResidentContainer = styled.div`
 display: flex;
 justify-content: start;
 flex-direction: column;
 margin-top: 20px;
 `
 const ComLandContainer = styled.div`
 display: flex;
 justify-content: start;
 flex-direction: column;
 margin-top: 20px;
 `
 const ButtonContainer = styled.div`
 display: flex;
 width: 100%;
 justify-content: start;
 margin-top: 20px;
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
 const Commercial = styled.p`
 font-size: 1.2rem;
 color: #383838;
 `
 const Land = styled.p`
 font-size: 1.2rem;
 color: #383838;
 `

function PropertyType(props: { updateProperty: any, property: any, setProperty: any}) {

  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  //const [input, setInput] = useState('');
  //const [isChecked, setIsCheck ] = useState(false);
 
 const property = props.property;
 const setProperty = props.setProperty;
  const { register, formState: { errors },handleSubmit } = useForm({
    defaultValues: {
      propertyType: property.propertyType,
      propertyGroup: property.propertyGroup
    }
  });
  let navigate = useNavigate();
                              
              
  const handleSelect1 = (state: boolean) => {
    setSelect1(!state)
  };
  const handleSelect2 = (state: boolean) => {
    setSelect2(!state)
  };
  const handleSelect3 = (state: boolean) => {
    setSelect3(!state)
    
  };
/*
  const handleGroupChange = (e: any) => {
   setInput(e.target.value)
  // setIsCheck(!isChecked)
  }
*/
  

  const notify = () => {
    toast.success('Saved..')
    }

  const onSubmit = (data: any) => {
   console.log(data);
   props.updateProperty(data);
    notify();
    navigate('/agentproperties/location')
  };
  
  

  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => { 
  const closeDropDown = (e: any) => {
    if(ref.current &&  !ref.current.contains(e.target)) {
      setSelect1(false)
      setSelect2(false)
      setSelect3(false)
      console.log("i am active")
    }
  }
  window.addEventListener('click', closeDropDown, true)
}, []);
console.log(ref);
//console.log(input);

  return (
    <div  ref={ref}>
<StyledBox >
 <StyledContainer >
 <FormTitle>New Property</FormTitle>
  <Grid container>
  <Grid item lg={3} md={3} sm={12} xs={12}>
   <ItmesContainer>
    <Items><PropertyTypeLink to='/agentproperties/propertyType'><strong>Property type</strong></PropertyTypeLink></Items>
    <Items><PropertyTypeLink to='/agentproperties/location'>Location</PropertyTypeLink></Items>
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
  <FormContainer ref={ref}>
  
  <Form  onSubmit={handleSubmit(onSubmit)}>
  <Grid container>
  
  
 <Grid item lg={4} md={4} sm={12} xs={12}>

 <SelectPropertyTypeContainer>
  <SelectPropertyType type='radio' id='res' {...register('propertyGroup',{required: 'Property category is required....'})} name='propertyGroup'   value='residential'  />
  <SelectLabel htmlFor='res' onClick={(e) => handleSelect1(select1)}>Residential</SelectLabel>
 </SelectPropertyTypeContainer>
 { select1 && (
  <ResidentContainer>
  <InputRadeo type='radio' id='1' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType'  value='apartment' />
  <Label htmlFor='1'>APARTMENT</Label>
  <InputRadeo type='radio' id='2' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType'  value='flat' />
  <Label htmlFor='2'>FLAT</Label>
  <InputRadeo type='radio' id='3' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='office' />
  <Label htmlFor='3'>STUDIO</Label>
  <InputRadeo type='radio' id='4'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='terraced' />
  <Label htmlFor='4'>TERRACED</Label>
  <InputRadeo type='radio' id='5'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='full floor' />
  <Label htmlFor='5'>FULL FLOOR</Label>
  {/* <InputRadeo type='radio' id='6'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='whole building' /> */}
  <Label htmlFor='6'>WHOLE BUILDING</Label>
  <InputRadeo type='radio' id='7'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='hotel appartment' />
  <Label htmlFor='7'>HOTEL APARTMENT</Label>
  <InputRadeo type='radio' id='8'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='bungalow' />
  <Label htmlFor='8'>BUNGALOW</Label>
  <InputRadeo type='radio' id='9'  {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='room' />
  <Label htmlFor='9'>ROOM</Label>
  <InputRadeo type='radio' id='10' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='mini flat' />
  <Label htmlFor='10'>MINI FLAT</Label>
  <InputRadeo type='radio' id='11' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='self contain' />
  <Label htmlFor='11'>SELF CONTAIN</Label>
  {/* <InputRadeo type='radio' id='11' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='self contain' />
  <Label htmlFor='11'>OFFPLAN</Label>
  <InputRadeo type='radio' id='11' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='self contain' /> */}
  {/* <Label htmlFor='11'>LAND</Label> */}
  </ResidentContainer>
  )}
  </Grid>
 
  <Grid item lg={4} md={4} sm={12} xs={12}>
  
  <SelectPropertyTypeContainer>
  <SelectPropertyType type='radio' id='com' {...register('propertyGroup',{required: 'Property category is required....'})} name='propertyGroup' value= 'commercial' />
  <SelectLabel htmlFor='com' onClick={(e) => handleSelect2(select2)}>Commercial</SelectLabel>
 </SelectPropertyTypeContainer>
 {select2 && (
  <ComLandContainer>
  <InputRadeo type='radio' id='12' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType'value='office' />
  <Label htmlFor='12'>OFFICE</Label>
  <InputRadeo type='radio' id='13' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='shop' />
  <Label htmlFor='13'>SHOP</Label>
  <InputRadeo type='radio' id='14' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='warehouse' />
  <Label htmlFor='14'>WAREHOUSE</Label>
  <InputRadeo type='radio' id='15' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='industrial' />
  <Label htmlFor='15'>INDUSTRIAL</Label>
  <InputRadeo type='radio' id='16' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='retail' />
  <Label htmlFor='16'>RETAIL</Label>
  <InputRadeo type='radio' id='17' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='land' />
  <Label htmlFor='17'>LAND</Label>
  <InputRadeo type='radio' id='18' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='others' />
  <Label htmlFor='18'>OTHERS</Label>
  </ComLandContainer>
  )}
  </Grid>
  
  <Grid item lg={4} md={4} sm={12} xs={12}>
 
  <SelectPropertyTypeContainer>
  <SelectPropertyType type='radio' id='lan'  {...register('propertyGroup',{required: 'Property category is required....'})} name='propertyGroup' value='land' />
  <SelectLabel htmlFor='lan' onClick={(e) => handleSelect3(select3)}>Land</SelectLabel>
 </SelectPropertyTypeContainer>
  {select3 && (
    <ComLandContainer>
  <InputRadeo type='radio' id='19' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='land' />
  <Label htmlFor='19'>LAND</Label>
  <InputRadeo type='radio' id='20' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='farm' />
  <Label htmlFor='20'>FARM</Label>
  <InputRadeo type='radio' id='21' {...register('propertyType',{required: 'Property type is required....'})} name='propertyType' value='others' />
  <Label htmlFor='21'>OTHERS</Label>
  </ComLandContainer>
  )}
  </Grid>
  {errors.propertyGroup  || errors.propertyType ? <ErrMessage>{'Please select both property category and property type'}</ErrMessage> : ''}
   <ToastContainer />
 <ButtonContainer>
 <CloseButton onClick={() => navigate('/agentproperties')} type='button'>Close</CloseButton>
 <NextButton type='submit'>Continue</NextButton>
 </ButtonContainer>

  </Grid>
  </Form> 
  </FormContainer>
  </Grid>
  </Grid>
 </StyledContainer>
</StyledBox>
</div>
  )
  }

export default PropertyType


