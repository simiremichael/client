import React, {useState } from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoneIcon from '@mui/icons-material/Done';
import LinearProgress from '@mui/material/LinearProgress';

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
const PropertyTypeLink = styled(NavLink)`
 text-decoration: none;
 color: #494949;
 :active{
  front-weight: bold;
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
const FileContainer = styled.div`
 `
 const SingleFile = styled.input`
 `
 const SpinnerContainer = styled.div`
 display: flex;
 align-items: center;
justify-content: start; 
`
 const SpinnerDiv = styled.div`
 width: 80%;
 margin-top: 4px;
 `
 const SaveDiv = styled.div`
 display: flex;
 align-items: center;
  justify-content: start;
 margin-top: 4px;
 `
 const Save = styled.p`
 text-align: start;
 font-size: 0.7rem;
 color: #008080;
 margin: 0 0 0 1px;
 `

function Photos(props: { updateProperty: any, property: any, setProperty: any }) {

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [loading6, setLoading6] = useState(false);
  const [loading7, setLoading7] = useState(false);
  const [loading8, setLoading8] = useState(false);
  const [loading9, setLoading9] = useState(false);
  const [loading10, setLoading10] = useState(false);
  const [loading11, setLoading11] = useState(false);
  const [loading12, setLoading12] = useState(false);

  const [saved1, setSaved1] = useState(false)
  const [saved2, setSaved2] = useState(false)
  const [saved3, setSaved3] = useState(false)
  const [saved4, setSaved4] = useState(false)
  const [saved5, setSaved5] = useState(false)
  const [saved6, setSaved6] = useState(false)
  const [saved7, setSaved7] = useState(false)
  const [saved8, setSaved8] = useState(false)
  const [saved9, setSaved9] = useState(false)
  const [saved10, setSaved10] = useState(false)
  const [saved11, setSaved11] = useState(false)
  const [saved12, setSaved12] = useState(false)
 
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [image6, setImage6] = useState('')
  const [image7, setImage7] = useState('')
  const [image8, setImage8] = useState('')
  const [image9, setImage9] = useState('')
  const [image10, setImage10] = useState('')
  const [image11, setImage11] = useState('')
  const [image12, setImage12] = useState('')
  const [imgstring1, setImgstring1] = useState('')
  const [imgstring2, setImgstring2] = useState('')
  const [imgstring3, setImgstring3] = useState('')
  const [imgstring4, setImgstring4] = useState('')
  const [imgstring5, setImgstring5] = useState('')
  const [imgstring6, setImgstring6] = useState('')
  const [imgstring7, setImgstring7] = useState('')
  const [imgstring8, setImgstring8] = useState('')
  const [imgstring9, setImgstring9] = useState('')
  const [imgstring10, setImgstring10] = useState('')
  const [imgstring11, setImgstring11] = useState('')
  const [imgstring12, setImgstring12] = useState('')


  
 const property = props.property;
 const setProperty = props.setProperty;

  const { handleSubmit } = useForm({
    defaultValues: {
      
    }
  });
 let navigate = useNavigate();


 const onSubmit = async (data: any) => {
  console.log(data);
  toast.success('Saved..')
  props.updateProperty(data);
 navigate('/agentproperties/videoAnd3Dtours')

};


const handleBackButton = () => {
  navigate('/agentproperties/description')
}

const uploadImg = async () => {
  setLoading1(true);
  setLoading2(true);
  setLoading3(true);
  setLoading4(true);
  setLoading5(true);
  setLoading6(true);
  setLoading7(true);
  setLoading8(true);
  setLoading9(true);
  setLoading10(true);
  setLoading11(true);
  setLoading12(true);
  
 const formData = new FormData();
 
 for ( const file of image1) {
     formData.append('file', file);
      {/* @ts-ignore:next-line */}
     formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
     method: 'POST',
     body: formData,
   })
   .then(r => r.json())
   .then(data => {
       setImgstring1(data.secure_url);
       if (data.url) {
        setLoading1(false);
          setSaved1(true);
       }
    })
   };
   for ( const file of image2) {
    formData.append('file', file);
     {/* @ts-ignore:next-line */}
     formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
    method: 'POST',
    body: formData,
  })
  .then(r => r.json())
  .then(data => {
   setImgstring2(data.secure_url);
   if (data.url) {
    setLoading2(false);
      setSaved2(true);
   }
   })
  };
  for ( const file of image3) {
    formData.append('file', file);
     {/* @ts-ignore:next-line */}
     formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
    method: 'POST',
    body: formData,
  })
  .then(r => r.json())
  .then(data => {
   setImgstring3(data.secure_url)
   if (data.url) {
    setLoading3(false);
      setSaved3(true);
   }
   })
  }
  for ( const file of image4) {
   formData.append('file', file);
    {/* @ts-ignore:next-line */}
    formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
   method: 'POST',
   body: formData,
 })
 .then(r => r.json())
 .then(data => {
  setImgstring4(data.secure_url)
  if (data.url) {
    setLoading4(false);
      setSaved4(true);
   }
  })
 }
 for ( const file of image5) {
  formData.append('file', file);
   {/* @ts-ignore:next-line */}
   formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
   await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
  method: 'POST',
  body: formData,
})
.then(r => r.json())
.then(data => {
 setImgstring5(data.secure_url)
 if (data.url) {
  setLoading5(false);
    setSaved5(true);
 }
 })
}
for ( const file of image6) {
 formData.append('file', file);
  {/* @ts-ignore:next-line */}
  formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
  await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
  method: 'POST',
  body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring6(data.secure_url)
if (data.url) {
  setLoading6(false);
    setSaved6(true);
 }
})
}
for ( const file of image7) {
 formData.append('file', file);
  {/* @ts-ignore:next-line */}
  formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
  await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
 method: 'POST',
 body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring7(data.secure_url)
if (data.url) {
  setLoading7(false);
    setSaved7(true);
 }
})
}
for ( const file of image8) {
formData.append('file', file);
 {/* @ts-ignore:next-line */}
 formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
 await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
method: 'POST',
body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring8(data.secure_url)
if (data.url) {
  setLoading8(false);
    setSaved8(true);
 }
})
}
for ( const file of image9) {
  formData.append('file', file);
   {/* @ts-ignore:next-line */}
   formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
   await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
  method: 'POST',
  body: formData,
})
.then(r => r.json())
.then(data => {
 setImgstring9(data.secure_url)
 if (data.url) {
  setLoading9(false);
    setSaved9(true);
 }
 })
}
for ( const file of image10) {
 formData.append('file', file);
  {/* @ts-ignore:next-line */}
  formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
  await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
 method: 'POST',
 body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring10(data.secure_url)
if (data.url) {
  setLoading10(false);
    setSaved10(true);
 }
})
}
for ( const file of image11) {
 formData.append('file', file);
  {/* @ts-ignore:next-line */}
  formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
  await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
 method: 'POST',
 body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring11(data.secure_url)
if (data.url) {
  setLoading11(false);
    setSaved11(true);
 }
})
}
for ( const file of image12) {
formData.append('file', file);
 {/* @ts-ignore:next-line */}
 formData.append(process.env.REACT_APP_CLOUD_PRESET, 'propertyImg');
 await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_KEY}/image/upload`, {
method: 'POST',
body: formData,
})
.then(r => r.json())
.then(data => {
setImgstring12(data.secure_url)
if (data.url) {
  setLoading12(false);
    setSaved12(true);
 }
})
};
}

const attachImg = () => {
 
  const imgarray = [];
  imgarray.push({ img:imgstring1}, {img:imgstring2}, {img:imgstring3}, {img:imgstring4}, {img:imgstring5}, {img: imgstring6}, {img:imgstring7}, {img:imgstring8}, {img:imgstring9}, {img:imgstring10}, {img:imgstring11}, {img:imgstring12});
  const slideArray = new Array([imgstring1, imgstring2, imgstring3, imgstring4, imgstring5, imgstring6, imgstring7, imgstring8, imgstring9, imgstring10, imgstring11, imgstring12])

    setProperty({...property, images: imgarray, slideImages: slideArray});
    // setProperty({...property, slideImages: slideArray});
}

  return (
    
    <StyledBox>
    <StyledContainer >
    <FormTitle>Photos</FormTitle>
     <Grid container>
     <Grid item lg={3} md={3} sm={12} xs={12}>
      <ItmesContainer>
       <Items><PropertyTypeLink to='/agentproperties/propertyType'>Property type</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/location'>Location</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/propertySizeAndPrice'>Property size and Price</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/description'>Description</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/photos'><strong>Photos</strong></PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/videoAnd3Dtours'>Video & 3D tours</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/details'>Details</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/utilities'>Utilities</PropertyTypeLink></Items>
       <Items><PropertyTypeLink to='/agentproperties/features'>Features</PropertyTypeLink></Items>
      </ItmesContainer>
     </Grid>
     <Grid item lg={9} md={9} sm={12} xs={12}>
     <FormContainer>
     <FormTitle>Photos</FormTitle>
     <FormInfo>Upload high quality pictures to represent your property. Good photos will attract more buyers. First photo will be used as the main photo of the property.</FormInfo>
     <Form onSubmit={handleSubmit(onSubmit)}>
     <FileContainer>
     {/* <FileInput  
      type='file' 
      {...register('images',{required: true})}
       name='images' 
       id='image' 
       onChange={onSelectFile}  
       multiple
       accept='image/png, image/jpg, image/jpeg, image/webp'
       /> */}

        <Grid container rowSpacing={2}>
      <Grid item xs={6} sm={4} md={4} lg={4}>
       <SingleFile
       type='file' 
       name='image1' 
       id='image1'
        onChange={(e: any) =>  setImage1(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading1 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved1 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
        name='image2'
        id='image2'
        onChange={(e:any) =>  setImage2(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading2 === true ? 
        <SpinnerDiv>
         <LinearProgress/>
        </SpinnerDiv>
        : '' }
         {saved2 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image3' 
        id='image3' 
        onChange={(e:any) =>  setImage3(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading3 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved3 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
       <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image4' 
        id='image4' 
        onChange={(e:any) =>  setImage4(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading4 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved4 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image5' 
        id='image5' 
        onChange={(e:any) =>  setImage5(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading5 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved5 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image6' 
        id='image6' 
        onChange={(e:any) =>  setImage6(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading6 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved6 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
       <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image7' 
        id='image7' 
        onChange={(e:any) =>  setImage7(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading7 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved7 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image8' 
        id='image8' 
        onChange={(e:any) =>  setImage8(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading8 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved8 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image9' 
        id='image9' 
        onChange={(e:any) =>  setImage9(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading9 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved9 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
       <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image10' 
        id='image10' 
        onChange={(e:any) =>  setImage10(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading10 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved10 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image11' 
        id='image11' 
        onChange={(e:any) =>  setImage11(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading11 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved11 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={4}>
      <SingleFile 
       type='file' 
      //  {...register('images',{required: true})}
        name='image12' 
        id='image12' 
        onChange={(e:any) =>  setImage12(e.target.files)} 
        accept='image/png, image/jpg, image/jpeg, image/webp' 
       />
       <SpinnerContainer>
       {loading12 === true ? 
        <SpinnerDiv>
         <LinearProgress />
        </SpinnerDiv>
        : '' }
         {saved12 === true ? 
        <SaveDiv>
          <DoneIcon sx={{ fontSize: 12, color: '#008080', marginRight: 0.1 }} />
          <Save>saved</Save>
        </SaveDiv>
        : '' }
       </SpinnerContainer>
      </Grid>
       </Grid> 
      </FileContainer>
      {/* {errors.images &&  <ErrMessage>{'image is required'}</ErrMessage>} */}
      <ToastContainer />
    <ButtonContainer>
    <CloseButton type='button' onClick={handleBackButton}>Back</CloseButton>
    <NextButton style={{marginRight: 15}} type='button' onClick={uploadImg}>Upload</NextButton>
    <NextButton type='submit' onClick={attachImg}>Continue</NextButton>
    </ButtonContainer>
     </Form> 
     </FormContainer>
     </Grid>
     </Grid>
    </StyledContainer>
   </StyledBox>
  )
}

export default Photos