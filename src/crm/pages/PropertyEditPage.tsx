import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate, useParams} from "react-router-dom";
import { useGetPropertyQuery, useUpdatePropertyMutation } from '../../services/api/propertyAPI';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Chip, TextField, Theme, useTheme } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import LinearProgress from '@mui/material/LinearProgress';
import OutlinedInput from '@mui/material/OutlinedInput';
import { toast } from 'react-toastify';

const StyledBox = styled(Box)`
`
const StyledContainer = styled(Container)`
margin: 30px 0;
`
 const SingleFile = styled.input`
 margin-bottom: 10px;
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
 const VidContainer = styled.div`
  `
 const VideoUrl = styled(TextField)`
 `
 const TourUrl = styled(TextField)`
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
 const Form = styled.form`
 `
 const parkings = [
  'Garage',
 'Indoor parking',
 'On-street-parking',
'Off-street-parking',
  'Parking lot',
  'Attached garage',
'Detached garage',
 'Valet parking',
  'Carport'
];
const securities = [
 'Alarm',
'Concierge',
'Video surveillance',
];
const comforts = [
  'Fire place',
  'Fitness room',
  'Furnished',
  'Unfurnished',
  'Home automation',
  'Home cinema',
  'Suna',
  'Walk-in-closet',
  'Wine cellar',
  'Wheelchair access',
  'EV charging',
  'No smaking',
  'Waterfront'
];
const hvacs = [
  'Air conditioning',
  'Centra heating',
  'Floor heating',
  'Geothermal heating',
  'Aerothermal heating',
  'Gas heating',
  'Electricity heating',
]
 function getStyles(name: string, parkings: readonly string[], theme: Theme) {
    return {
      fontWeight:
        parkings.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  function getSecurityStyles(name: string, securities: readonly string[], theme: Theme) {
    return {
      fontWeight:
        securities.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
  function getComfortStyles(name: string, comforts: readonly string[], theme: Theme) {
    return {
      fontWeight:
        comforts.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  function getHvacStyles(name: string, hvacs: readonly string[], theme: Theme) {
    return {
      fontWeight:
        hvacs.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

function PropertyEditPage() {

    const theme = useTheme(); 
   
    const initialValue = {propertyTitle: '', id: '', description: '', uniqNo: '', bedroom: '', kitchen: '', livingRoom: '', 
  showerRoom: '', bathRoom: '', buildingYear: '', yearRenovated: '', lotSize: '', condition: '',pets: [], parking: [],
 hvac: [], comfort: [], security: [], address1: '', address2: '', street: '', house: '', location: '', state: '', 
 postCode: '', lga: '', images: [], size: '', price: '', category: '', propertyTax: '', electricity: '', water: '', serviceCharge: '',
 utilities: '', taxes: '',video: '',tour: '',propertyType: '', creator: '', propertyGroup: '', paymentType: ''}
 const [edit, setEdit] = useState(initialValue);        

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
       formData.append('upload_preset', 'propertyImg');
      await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
      formData.append('upload_preset', 'propertyImg');
      await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
      formData.append('upload_preset', 'propertyImg');
      await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
     formData.append('upload_preset', 'propertyImg');
     await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
    formData.append('upload_preset', 'propertyImg');
    await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
   formData.append('upload_preset', 'propertyImg');
   await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
   formData.append('upload_preset', 'propertyImg');
   await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
  formData.append('upload_preset', 'propertyImg');
  await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
    formData.append('upload_preset', 'propertyImg');
    await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
   formData.append('upload_preset', 'propertyImg');
   await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
   formData.append('upload_preset', 'propertyImg');
   await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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
  formData.append('upload_preset', 'propertyImg');
  await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
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

  const [parking, setParking] = useState<string[]>([]);
//SelectChangeEvent<typeof parking>
  const handlePakingChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setParking(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setEdit({...edit, parking: e.target.value})
    
  };
  const [security, setSecurity] = useState<string[]>([]);
// SelectChangeEvent<typeof security>
  const handleSecurityChange = (e: any ) => {
    const {
      target: { value },
    } = e;
    setSecurity(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setEdit({...edit, security: e.target.value})
  };

  const [comfort, setComfort] = useState<string[]>([]);

  const handleComfortChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setComfort(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setEdit({...edit, comfort: e.target.value})
  };

  const [hvac, setHvac] = useState<string[]>([]);

  const handleHvacChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setHvac(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setEdit({...edit, hvac: e.target.value})
  };
  
  const attachImg = () => {
    const imgarray = [];
    imgarray.push({ img:imgstring1}, {img:imgstring2}, {img:imgstring3}, {img:imgstring4}, {img:imgstring5}, {img: imgstring6}, {img:imgstring7}, {img:imgstring8}, {img:imgstring9}, {img:imgstring10}, {img:imgstring11}, {img:imgstring12});
    const slideArray = new Array([imgstring1, imgstring2, imgstring3, imgstring4, imgstring5, imgstring6, imgstring7, imgstring8, imgstring9, imgstring10, imgstring11, imgstring12])
    {/* @ts-ignore:next-line */}    
    setEdit({...edit, images: imgarray, slideImages: slideArray});
  }
  

const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdit(values => ({...values, [name]: value}))
 }
 let navigate = useNavigate();
 
 let {ptId} = useParams();  
   const { data} = useGetPropertyQuery(ptId);  
   const [ updateProperty, {isSuccess}]= useUpdatePropertyMutation();  
 console.log(data);
   useEffect(() => {                 
     if(data) {
        {/* @ts-ignore:next-line */}
       setEdit({...data, id: ptId});
     }
   }, [data]);

 const handleSubmit = async (e: any) => {
    e.preventDefault()
    attachImg();
    try {
      if(data) {
        {/* @ts-ignore:next-line */}
        await updateProperty({...edit}).unwrap();
      }
    } catch (error) {
      console.error('rejected', error);
    }
  };
  
  useEffect(() => {
    if(isSuccess) { 
      navigate('/agentproperties')
   toast.success('Updated successfully....')
   setEdit(initialValue)
    }
}, [isSuccess]);

  return (
    <StyledBox>
        <StyledContainer >
            <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">PROPERTY GROUP</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name= 'propertyGroup'
          value={edit.propertyGroup}
          label="PROPERTY GROUP"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value='Residential'>Residential</MenuItem>
          <MenuItem value='Commercial'>Commercial</MenuItem>
          <MenuItem value='Land'>Land</MenuItem>
          <MenuItem value='New Projects'>New Projects</MenuItem>
          <MenuItem value='Offplan'>Offplan</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={2} md={2} sm={4} xs={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">PROPERTY TYPE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='propertyType'
          value={edit.propertyType}
          label="PROPERTY TYPE"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value='apartment'>Apartment</MenuItem>
          <MenuItem value='flat'>Flat</MenuItem>
          <MenuItem value='office'>Office</MenuItem>
          <MenuItem value='terraced'>Terraced</MenuItem>
          <MenuItem value='detatched'>Detached</MenuItem>
          <MenuItem value='semi detached'>Semi detached</MenuItem>
          <MenuItem value='full floor'>Full floor</MenuItem>
          <MenuItem value='hotel appartment'>Hotel appartment</MenuItem>
          <MenuItem value='bungalow'>Bungalow</MenuItem>
          <MenuItem value='room'>Room</MenuItem>
          <MenuItem value='mini flat'>Mini flat</MenuItem>
          <MenuItem value='self contain'>Self contain</MenuItem>
          <MenuItem value='shop'>Shop</MenuItem>
          <MenuItem value='warehouse'>Warehouse</MenuItem>
          <MenuItem value='land'>Land</MenuItem>                  
          <MenuItem value='farm'>Farm</MenuItem>
          <MenuItem value='others'>Other</MenuItem>
        </Select>
      </FormControl>
            </Grid>                
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='ADDRESS LINE 1' type='text'  name='address1' value={edit.address1} onChange={handleChange} fullWidth size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='ADDRESS LINE 2' type='text'  name='address2' value={edit.address2} onChange={handleChange} fullWidth size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField fullWidth size='small' variant='outlined' label='STREET' type='text'  name='street' value={edit.street} onChange={handleChange} />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='HOUSE NUMBER' type='number'  name='house' value={edit.house} onChange={handleChange} fullWidth size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='LOCATION' type='text'  name='location' value={edit.location} onChange={handleChange} fullWidth size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='POST CODE' type='number'  name='postCode' value={edit.postCode} onChange={handleChange} fullWidth size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField  fullWidth size='small' variant='outlined' label='LGA' type='text'  name='lga' value={edit.lga} onChange={handleChange} />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField  fullWidth size='small' variant='outlined' label='STATE' type='text'  name='state' value={edit.state} onChange={handleChange} />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          value={edit.category}
          label="Category"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value='sale'>For sale</MenuItem>
          <MenuItem value='rent'>For rent</MenuItem>
        </Select>
      </FormControl>
           </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField  fullWidth size='small' variant='outlined' label='SIZE' type='number'  name='size' value={edit.size} onChange={handleChange} />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField  fullWidth size='small' variant='outlined' label='PRICE' type='number'  name='price' value={edit.price} onChange={handleChange} />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='paymentType'
          value={edit.paymentType}
          label="PaymentType"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value='Total price'>Total price</MenuItem>
          <MenuItem value='Price per square meter'>Price per square meter</MenuItem>
          <MenuItem value='Yearly price'>Yearly price</MenuItem>
          <MenuItem value='Monthly price'>Monthly price</MenuItem>
          <MenuItem value='Weekly price'>Weekly price</MenuItem>
          <MenuItem value='Daily price'>Daily price</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' fullWidth label='PROPERTY TITLE' type='text' name='propertyTitle' value={edit.propertyTitle} onChange={handleChange} size='small' />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField  multiline minRows={1} placeholder='Description....'  name='description' value={edit.description} onChange={handleChange} />
            </Grid>
           
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <VidContainer>
    <VideoUrl variant='outlined' label='LINK TO VIDEO' type='url'  name='video' value={edit.video} onChange={handleChange} size='small' fullWidth />
    </VidContainer>
    </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <VidContainer>
      <TourUrl variant='outlined' label='LINK TO 3D TOURS' type='url'  name='tour' value={edit.tour} onChange={handleChange} size='small' fullWidth />
      </VidContainer>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='UNIQ NO' type='number'  name='uniqNo' value={edit.uniqNo} onChange={handleChange} size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='BEDROOMS' type='number' name='bedroom' value={edit.bedroom} onChange={handleChange} size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='KITCHENS' type='number' name='kitchen' value={edit.kitchen} onChange={handleChange}  size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='LIVING ROOMS' type='number' name='livingRoom' value={edit.livingRoom} onChange={handleChange} size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='BATHROOMS' type='number'  name='bathRoom' value={edit.bathRoom} onChange={handleChange} size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='BUILDING YEAR' type='number'  name='buildingYear' value={edit.buildingYear} onChange={handleChange}  size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <TextField variant='outlined' label='YEAR RENOVATED' type='number'  name='yearRenovated' value={edit.yearRenovated} onChange={handleChange} size='small' fullWidth />
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl sx={{  width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Comfort</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          size='small'
          value={edit.comfort}
          name='comfort'
          onChange={handleComfortChange}
          input={<OutlinedInput id="select-multiple-chip" label="Comfort" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {comforts.map((name: any) => (
            <MenuItem
              key={name}
              value={name}
              style={getComfortStyles(name, comfort, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl sx={{  width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">HVAC</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          size='small'
          value={edit.hvac} 
          name='hvac'
          onChange={handleHvacChange}
          input={<OutlinedInput id="select-multiple-chip" label="Hvac" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {hvacs.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getHvacStyles(name, hvac, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Security</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          size='small'
          value={edit.security}
          name='security'
          onChange={handleSecurityChange}
          input={<OutlinedInput id="select-multiple-chip" label="Security" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {securities.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getSecurityStyles(name, security, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl fullWidth sx={{ textAlign: 'start'}}>
        <InputLabel id="demo-simple-select-label">Pets</InputLabel>
        <Select 
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label='Pet'
     name='pets'
     size='small'
     value={edit.pets}
     onChange={(e: any) => {setEdit({...edit, pets:e.target.value})}}
     >
      <MenuItem  value='pets allowed'>Pets allowed</MenuItem>
      <MenuItem  value='no pets allowed'>No pets allowed</MenuItem>
      <MenuItem  value='cats allowed'>Cats allowed</MenuItem>
      <MenuItem  value='dogs allowed'>Dogs allowed</MenuItem>
     </Select>
     </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Parking</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          size='small'
          value={edit.parking}

          name='parking'
          onChange={handlePakingChange}
          input={<OutlinedInput id="select-multiple-chip" label="Parking" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {parkings.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, parking, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <FormControl fullWidth sx={{ textAlign: 'start'}}>
        <InputLabel id="demo-simple-select-label">Condition</InputLabel>
       <Select 
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label='condition'
     name='condition'
     size='small'
     value={edit.condition}
     onChange={(e: any) => {setEdit({...edit, condition: e.target.value})}}
     >
      <MenuItem  value='new'>New</MenuItem>
      <MenuItem  value='mint'>Mint</MenuItem>
      <MenuItem  value='good'>Good</MenuItem>
      <MenuItem  value='fair'>Fair</MenuItem>
      <MenuItem  value='poor'>Poor</MenuItem>
     </Select>
     </FormControl>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
      <Grid item xs={12} sm={12} md={12} lg={12}>
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
      </Grid>    
      <Grid item lg={2} md={2} sm={4} xs={6}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
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
       <Grid item xs={12} sm={12} md={12} lg={12}>
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
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
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
      <Grid item xs={12} sm={12} md={12} lg={12}>
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
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
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
      <Grid item xs={12} sm={12} md={12} lg={12}>
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
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
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
       <Grid item xs={12} sm={12} md={12} lg={12}>
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
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
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
      <Grid item xs={12} sm={12} md={12} lg={12}>
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
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <NextButton type='button' onClick={uploadImg}>Upload images</NextButton>  
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <NextButton  type='button' onClick={attachImg}>Save images</NextButton>  
    </Grid>
    <Grid item lg={2} md={2} sm={4} xs={6}>
    <NextButton type='submit'>Update</NextButton>
    </Grid>
        </Grid>
        </Form>
        </StyledContainer>
    </StyledBox>
  )
}

export default PropertyEditPage