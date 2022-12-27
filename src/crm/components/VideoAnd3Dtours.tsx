import React, {useState, useRef, useEffect, useCallback} from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { TextareaAutosize, TextField} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import FileBase from 'react-file-base64';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const StyledBox = styled(Box)`

`
const StyledContainer = styled(Container)`
margin-bottom: 20px;
`
const ItmesContainer= styled.div`
margin-top: 20px;
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
padding: 20px 10px;
border: 0.5px solid #D3D3D3;
`
const FormTitle = styled.h5`
font-size: 1.5rem;
text-align: start;
font-weight: 400;
color: #383838;
margin-bottom: 0;
`
const FormInfo = styled.p`
color: #494949;
font-size: 0.7rem;
text-align: start;
margin-bottom: 30px;
`
const TextareaAutosizes = styled(TextareaAutosize)`
border: 1px solid #D3D3D3; 
color: #494949;
outline: none;
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
 const Form = styled.form`

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
 const VidContainer = styled.div`
margin: 20px 0;
 `
const VideoUrl = styled(TextField)`
margin-bottom: 8px;
`
const TourUrl = styled(TextField)`
marging-top: 8px;
`

function VideoAnd3Dtours(props: { updateProperty: any, property: any, setProperty: any}) {

  //const [input, setInput] = useState({video: '', tour: ''});
  const [isChecked, setIsCheck ] = useState(false);
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState('');
  const [dragActive, setDragActive] = React.useState(false);
  //const [toggle1, setToggle1] =useState(false);
  //console.log(input);

  const property = props.property;
  const setProperty = props.setProperty;
  const { register, formState: { errors },handleSubmit } = useForm({
    defaultValues: {
      video: property.video,
      tour: property.tour,
    }
  });
 let navigate = useNavigate();
  
 //const inputRef = React.useRef(null);
 //const { getRootProps, getInputProps } = useDropzone({});

 const fileTypes = ["JPG", "PNG", "GIF"];



 const onSubmit = (data: any) => {
  toast.success('Saved..')
 console.log(data);
 props.updateProperty(data);
 navigate('/agentproperties/details')

};

const handleCategory = () => {
  setCategory(!category);
}

/*
const handleChange = (event: SelectChangeEvent) => {
  setPrice(event.target.value as string);
};
*/
const handleBackButton = () => {
  navigate('/agentproperties/photos')
}

  return (
    <StyledBox >
    <StyledContainer >
    <FormTitle>Photos</FormTitle>
     <Grid container>
     <Grid item lg={3} md={3} sm={12} xs={12}>
      <ItmesContainer>
       <Items><PropertyTypeLink to='/agentproperties/propertyType'>Property type</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/location'>Location</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/propertySizeAndPrice'>Property size and Price</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/description'>Description</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/photos'>Photos</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/videoAnd3Dtours'><strong>Video & 3D tours</strong></PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/details'>Details</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/utilities'>Utilities</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/features'>Features</PropertyTypeLink></Items>
      </ItmesContainer>
     </Grid>
     <Grid item lg={9} md={9} sm={12} xs={12}>
     <FormContainer>
     <FormTitle>Video and 3D tours</FormTitle>
     <FormInfo></FormInfo>
     <Form onSubmit={handleSubmit(onSubmit)}>
      <VidContainer>
      <VideoUrl variant='outlined' label='LINK TO VIDEO' type='url' {...register('video',{required: false })} name='video' value={property.video} onChange={(e: any) => setProperty({...property, video: e.target.value})} size='small' fullWidth />
      <TourUrl variant='outlined' label='LINK TO 3D TOURS' type='url' {...register('tour',{required: false })} name='tour' value={property.tour} onChange={(e: any) => setProperty({...property, tour: e.target.value})} size='small' fullWidth />
      </VidContainer>
     
      <ToastContainer />
    <ButtonContainer>
    <CloseButton type='button' onClick={handleBackButton}>Back</CloseButton>
    <NextButton type='submit'>Continue</NextButton>
    </ButtonContainer>
     </Form> 
     </FormContainer>
     </Grid>
     </Grid>
    </StyledContainer>
   </StyledBox>
  )
}

export default VideoAnd3Dtours


//onChange={(e) => setInput({ ...input, tour: e.target.value })}