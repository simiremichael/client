import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import {InputAdornment, IconButton, ClickAwayListener} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useNavigate, redirect } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useSigninUserMutation, useSignupUserMutation, useAddCompanyMutation, useSigninCompanyMutation, useSigninAgentMutation, useLogoutAgentMutation,} from '../services/api/propertyAPI';
import jwt_decode from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Avatar from '@mui/material/Avatar';
import { setAgents } from '../services/features/agentSlice';
import { useAppDispatch } from '../app/hooks';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { setCompanies } from '../services/features/companySlice';

const StyledBox = styled(Box)`
background-color: #f5f5f5;
width: 100vw;
height: 100vh;
`

const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
`
const FormContainer = styled.div`
width: 400px;
background-color: #ffffff;
backdrop-filter: blur(5px);
border: 0.2px solid #c4c4c4;
margin-top: 3%;
border-radius: 8px;
`
const Form = styled.form`
margin: 30px 15px 15px;
`
const Heading = styled.h1`
color: #383838;
font-weight: 400;
`
const Button = styled.button`
outline: none;
border: none;
width: 100%;
border-radius: 5px;
background-color: #008080;
color: #fff;
padding: 12px 20px;
cursor: pointer;
`
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 15px;
align-items: center;
height: 50px
`
const ForgetPassword = styled.p`
color: #007ea8;
cursor: pointer;
font-size: 0.9rem;
:hover {
  border-bottom: 1px solid #007ea8;
}
`
const TopContainer = styled.div`
display: flex;
margin-bottom: 15px;
`
const BtnInput = styled.input`
display: none;
:checked + Label {
  background-color:#008080;
  color: #ffffff;
}
`
const Label = styled.label`
position: relative;
color: #008080;
font-size: 15px;
border: 1px solid #008080;
border-radius: 5px;
margin-right: 5px;
align-items: center;
cursor: pointer;
padding: 8px 10px 9px;
`
const Title = styled.p`
color: #494949;
text-align: start;
`
const TextFields = styled(TextField)`
color: #ffffff;
margin-top: 10px;
width: 350px;
width: 100%;
`
const SwitchContainer = styled.div`
display: flex;
justify-content: end;
margin: 10px 0 0 0;
align-items: center;
`
const SwitchP = styled.p`
color: #494949;
margin-right: 5px;
font-size: 0.9rem;
`
const SwitchButton = styled.button`
background: inherit;
border: none;
color: #4169E1;
cursor: pointer;
font-size: 0.8rem;
`
const FormControls = styled(FormControl)`
display: flex;
width: 100%;
flex-direction: column;
justify-content: space-around;
`
const CompanyLogoContainer = styled.div`
width: 80px;
height: 80px;
border: 0.5px solid #C4C4C4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url('../../images/blank_avater.jpg');
background-size: 100% 100%;
border-radius: 20px;
`
const CompanyLogo = styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
`
const AgentImgLabel = styled.label`
color: #008080;
width: 100px;
cursor: pointer;
font-size: 0.8rem;
text-align: center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`
const ImgInput = styled.input`
width: 0;
height: 0;
 `
 const UploadBtn = styled.button`
width: 80px;
height: auto;
margin: 5px 0;
padding-top: 2px;
padding-bottom: 2px;
color: #fff;
background: #008080;
border: none;
outline: none;
border-radius: 5px;
cursor: pointer;
`


function ClientLogin() {
  
  const [switchForm, setSwitchForm] = useState(false)
  const initialState = {  email: '', password: ''}
  const agentInitialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', familyName: '', givenName: '', picture: '', role: ''}
  const adminInitialState = { companyName: '', phone: '', email: '', area: '', role: 'admin', address: '', password: '', confirmPassword: '', state: '', L_G_A: '', logo: ''}
  const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
     const [isSignup, setIsSignup] = useState(false);
     const [formData, setFormData] = useState(false);
     const [loginFormData, setLoginFormData] = useState(initialState);
     const [agentFormData, setAgentFormData] = useState(agentInitialState)
     const [adminFormData, setAdminFormData] = useState(adminInitialState)
      const [admin, setAdmin] = useState(false);
      const [agent, setAgent] = useState(false);
      const [logo, setLogo] = useState('')
     let navigate = useNavigate();
    
     const [signinCompany, { data: data1, isError: isError1, error: error1, isSuccess: isSuccess1 } ] = useSigninCompanyMutation()
     const [signinAgent, { data: data2, isError: isError2, error: error2, isSuccess: isSuccess2 } ] = useSigninAgentMutation()//  
      const [addCompany, {isSuccess: addCompanyIsSuccess }] = useAddCompanyMutation();
    
  
   
     const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    let location = useLocation();
    const dispatch = useAppDispatch()

    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      //setShowPassword(false)
      }
      const toggleLogin = () => {
        setLogin(!login);
      }
      useEffect(() => {
          if(isSuccess2) {
            // localStorage.setItem('agent', JSON.stringify({...data2, }))
            dispatch(setAgents({ agent: data2, agentToken: data2?.agentToken }));
            setShowPassword(false);
            setIsSignup(false);
            }else {
                dispatch(setCompanies({ company: data1, companyToken: data1?.companyToken}));
              setShowPassword(false);
              setIsSignup(false);
              };
        if(isError2) {
          console.log(error2)
        } else {
          console.log(error1)
        }
      }, [ isSuccess1, isSuccess2, data1, data2, error1, error2, isError1, isError2, dispatch])

      
    //   const handleLogout = () => {
    //     if(admin === true){
    //     setLogin(false);
    //     localStorage.removeItem('company');
    //     // setCompany('');
    //     setAdminFormData(initialState);
    //     navigate("/client-login");
    //     } else{
    //       setLogin(false);
    //     localStorage.removeItem('agent');
    //     setAgentFormData(initialState);
    //     navigate("/client-login");

    //     }
    // }
    const clear = () => {
  setAgentFormData(agentInitialState)
  setAdminFormData(adminInitialState)
    }
    
      
    const handleChange = (e: any) => {
      setAgentFormData({...agentFormData, [e.target.name]: e.target.value})
      setAdminFormData({...adminFormData, [e.target.name]: e.target.value})
      setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }
    useEffect(() => { 
     if(addCompanyIsSuccess) {
      toast.success('Login successfully....')
      navigate("/client-login");
      setLogin(false);
      setIsSignup(false);
      clear();
      } else if(isSuccess1)  {
        navigate("/adminHomepage");
        toast.success('Login successfully....')
        clear();
        } else if(isSuccess2) {  
          toast.success('Login successfully....')
            navigate("/dashboard");
            setLogin(false);
            clear();
        } else {
          navigate("/client-login");
        }
    }, [addCompanyIsSuccess, isSuccess2, isSuccess1])
  
      const  handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup) {
            await addCompany({...adminFormData}).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error1: any) => console.error('rejected', error1));
        } else {
           if(admin === true) {
            setAgent(false);
            await signinCompany({...loginFormData}).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error1: any) => console.error('rejected', error1));
            
          } else {
            setAdmin(false);
             await signinAgent({...loginFormData}).unwrap().then((payload: any) => console.log('fulfilled', payload)).catch((error2: any) => console.error('rejected', error2));      
          }
        }
      }

      const handleAdmin = () => { 
        setAdmin(true);
        setAgent(false);
      }
      const handleAgent = () => { 
        setAdmin(false);
        setAgent(true);
      }

const handleUpload = async () => {
    
  for ( const file of logo) {
   const formData = new FormData();
   formData.append('file', file);
   formData.append('upload_preset', 'CompanyLogo');
  await fetch('https://api.cloudinary.com/v1_1/do2u3zzko/image/upload', {
   method: 'POST',
   body: formData,
 })
 .then(r => r.json())
 .then(data => {
  setAdminFormData({...adminFormData, logo: data.secure_url});
     if (data.url) {
       toast.success('Uploaded successfully....')
      } 
     })
     };
 
  }

console.log(formData)
console.log(adminFormData)


  return (
    <StyledBox>
      <StyledContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          { !switchForm ? 
          <>
          { !isSignup ?
          <>
          <Heading>Sign In</Heading>
          <TopContainer>
          <BtnInput type='radio' name='role' id='admin' />
          <Label htmlFor='admin' onClick={handleAdmin}>Admin</Label>
          <BtnInput type='radio' name='role' id='agent' value='Agent' defaultChecked  />
          <Label htmlFor='agent' onClick={handleAgent}>Agent</Label>  
          </TopContainer>
        <TextField id="outlined-basic" type='email' name='email' label="Email" value={loginFormData.email} variant="outlined" size='small' fullWidth onChange={handleChange} />
        <TextField style={{marginTop: 15}} id="outlined-basic" type='password' value={loginFormData.password} name='password' label="Password" variant="outlined" size='small' fullWidth onChange={handleChange} />
        <StyledDiv>
         <ForgetPassword onClick={() => setSwitchForm(true)}>Forget password?</ForgetPassword>
        </StyledDiv>
        </>
        :   
        <>
            <Grid container>
            <Grid item lg={2} md={2} sm={3} xs={4}>
                <CompanyLogoContainer>
                  {adminFormData.logo ?
                    <CompanyLogo src={adminFormData.logo} />
                    :
                    <>
                    <ImgInput name='logo'
                      id='img' type='file' accept='image/png, image/jpg, image/jpeg, image/webp'
                      onChange={(e: any) => setLogo(e.target.files)} />
                      <AgentImgLabel htmlFor='img'>Pick logo</AgentImgLabel>
                      </>
                  }
                </CompanyLogoContainer>
                <UploadBtn type='button' onClick={handleUpload}>Upload</UploadBtn>
            </Grid>
             </Grid>  
          
             <FormControls sx={{marginBottom: 2}}>
              <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextFields id="outlined-basic" type='text' name='companyName' value={adminFormData.companyName} onChange={handleChange} label="Company name" variant="outlined" size='small' />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <TextFields id="outlined-basic" type='text' name='phone' value={adminFormData.phone} onChange={handleChange} label="Phone" variant="outlined" size='small' />
                </Grid>
              </Grid>
                              <Grid container>
                                <>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <TextFields id="outlined-basic" type='email' name='email' value={adminFormData.email} onChange={handleChange} label="Enter company email" variant="outlined" size='small' />
                              <TextFields
                                id="outlined-basic"
                                type='password'
                                name='password'
                                label="Create password"
                                variant="outlined"
                                size='small'
                                value={adminFormData.password} onChange={handleChange} />
                              <TextFields
                                id="outlined-basic"
                                type='password'
                                name='confirmPassword'
                                label="Confirm password"
                                variant="outlined"
                                size='small'
                                value={adminFormData.confirmPassword} onChange={handleChange} />
                            </Grid>
                          {/* </Grid>

                          <Grid container> */}
                              <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextFields id="outlined-basic" type='text' name='address' value={adminFormData.address} onChange={handleChange} label="company address" variant="outlined" size='small' />
                                <Grid container spacing={1}>
                                  <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <TextFields
                                      id="outlined-basic"
                                      type='text'
                                      name='state'
                                      label="State"
                                      variant="outlined"
                                      size='small'
                                      value={adminFormData.state} onChange={handleChange} />
                                  </Grid>
                                  <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <TextFields
                                      id="outlined-basic"
                                      type='text'
                                      name='area'
                                      label="Area"
                                      variant="outlined"
                                      size='small'
                                      value={adminFormData.area} onChange={handleChange} />
                                  </Grid>
                                  <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <TextFields
                                      id="outlined-basic"
                                      type='text'
                                      name='L_G_A'
                                      label="L_G_A"
                                      variant="outlined"
                                      size='small'
                                      value={adminFormData.L_G_A} onChange={handleChange} />
                                  </Grid>
                                </Grid>
                                </Grid>
                                </>
                                </Grid>
                            </FormControls> 
        </>
}
</>
        : 
         <>
         <Title>Please enter your email address.</Title>
          <TextField id="outlined-basic" type='email' name='email' label="Email" variant="outlined" size='small' fullWidth />
          <Button style={{ width: '100%', marginTop: 10, fontSize: '0.8rem'}}>RESET PASSWORD</Button>
          <ForgetPassword style={{ width: 80, display: 'flex', alignItems: 'center'}} onClick={() => setSwitchForm(false)}><ArrowBackIosNewSharpIcon sx={{fontSize: '14px'}} />Go back</ForgetPassword>
         </>
          }
   <Button type='submit'>LOGIN</Button>
<SwitchContainer>
          <SwitchP>{isSignup ?"Already have an account": "Don't have an account "}</SwitchP>
        <SwitchButton type='button' onClick={switchMode}><strong>
                 {isSignup ? "Sign In" : "Create account" }
                 </strong></SwitchButton>
             </SwitchContainer>
        </Form>

      </FormContainer>
      <ToastContainer />
      </StyledContainer>
    </StyledBox>
  )
}

export default ClientLogin
