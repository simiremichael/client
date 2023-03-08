import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState } from 'react';
import { useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { MuiChipsInput } from 'mui-chips-input'
import { Tooltip } from '@mui/material';

const StyledBox = styled(Box)`

`
const StyledContainer = styled(Container)`
`
const StyledContainerNav = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 0;
`
const Footer = styled.div`
background-color:  #222;
height: 160px;
color:  #787878;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const FooterDetails = styled.p`
font-size: 0.9rem;
margin-bottom: 0;
`
const NavBar = styled.div`

`
const LogoContainer = styled.div`
cursor: pointer;
`
const Logo = styled.p`
text-align: start;
font-size: 1.2rem;
font-weight: 700;
color: #008080;
margin: 0;
letter-spacing: 0.2px;
`
const ContactContainer = styled.div`

`
const Contact = styled.p`
color: #777;
display: flex;
align-items: center;
`
const Span = styled.span`
color: #008080;
margin-left: 10px;
display: flex;
align-items: center;
letter-spacing: 1.2px;
`
const MiddleContainer = styled.div`
background-color: #f5f5f5;
border-top: 0.5px solid #c4c4c4;
`
const Form =  styled.div`
background-color: #fff;
margin: auto 16%;
padding: 20px 3%;
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
const TopContainer = styled.div`
display: flex;
margin-bottom: 10px;
`
const Title = styled.p`
font-size: 1.2rem;
color: #383838;
font-weight: 400;
text-align: start;
`
const ChitDetails = styled.p`
text-align: start;
color:  #787878;
`
const SpanAmount = styled.p`
color:  #787878;
`
const PaymentInput = styled.input`
width: 100%;

`
const RangeInput = styled.input`
width: 100%;
`
const Heading = styled.h1`
color: #383838;
font-weight: 800;
font-size: 2.5rem;
letter-spacing: 1px;
`

function MortgateApplication() {

  const [chips, setChips] = useState([])
  const [payment, setPayment] = useState(50)
  const [range, setRange] = useState(6)
  const [value, setValue] = useState(200000)

  let navigate = useNavigate();
  const handleChange = (newChips: any) => {
    setChips(newChips)
  }
 
  const percent =  20;
  const continous = range <= 1 ? 2 : 1;
  const continue2 = range === 2 ? 1.25 : 1;
  let result = value / 100 * payment;
  const loanAmount = value - result;
  const monthlyPayment = loanAmount / range;
  const loanCharges = monthlyPayment / percent * range / 2 * continous * continue2;
  const loanRepayment = monthlyPayment + loanCharges;
  const interestRate = loanRepayment * range;

  return (
    <StyledBox>
     <NavBar>
     <StyledContainerNav>
      <LogoContainer onClick={() => navigate('/mortgage')}>
        <Logo>Mortgage</Logo>
        <Logo>Finder</Logo>
      </LogoContainer>
      <ContactContainer>
      <Contact>Need more help? <Span><CallIcon sx={{fontSize: 20, marginRight: 0.1}} />+2348024990457</Span></Contact>
      </ContactContainer>
      </StyledContainerNav>
     </NavBar>
     <MiddleContainer>
     <StyledContainer>
      <Heading>MORTGAGE APPLICATION</Heading>
      <Form>
        <TextField  sx={{marginBottom: 1}} size='small' fullWidth type='text' id="outlined-basic" label="Full name" variant="outlined" />
        <TextField  sx={{marginBottom: 1}} size='small' fullWidth type='email' id="outlined-basic" label="Email" variant="outlined" />
        <TextField  size='small' fullWidth type='numder' id="outlined-basic" label="Phone" variant="outlined" />
        <Divider />
      <Title>What type of mortgage are you looking to get?</Title>
      <TopContainer>
          <BtnInput type='radio' value='Property purchase' name='mortgage-type' id='buy'/>
          <Label htmlFor='buy'>Property purchase</Label>
          <BtnInput type='radio' value='Property rental' name='mortgage-type' id='rent'/>
          <Label htmlFor='rent'>Property rental</Label>  
          </TopContainer>
          <Divider />
          <Title>What stage are you in the property buying or renting journey?</Title>
      <TopContainer>
          <BtnInput type='radio' value="I'm still researching" name='stage' id='one'/>
          <Label htmlFor='one'>I'm still researching</Label>
          <BtnInput type='radio' value="I'm viewing properties in person" name='stage' id='two'/>
          <Label htmlFor='two'>I'm viewing properties in person</Label>  
          <BtnInput type='radio' value="I've already made an offer" name='stage' id='three'/>
          <Label htmlFor='three'>I've already made an offer</Label>  
          </TopContainer>
          <Divider />
          <Title>When are you looking to purchase or rent your new property?</Title>
          <TopContainer>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
              <TopContainer>
              <BtnInput type='radio' value="Within 3 months" name='when' id='when1'/>
          <Label htmlFor='when1'>Within 3 months</Label>
          <BtnInput type='radio' value="3 to 6 months" name='when' id='when2'/>
          <Label htmlFor='when2'>I'm viewing properties in person</Label> 
              </TopContainer>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
              <TopContainer>
              <BtnInput type='radio' value="6 to 12 months" name='when' id='when3'/>
          <Label htmlFor='when3'>I've already made an offer</Label>  
          <BtnInput type='radio' value="i haven't decided yet" name='when' id='when4'/>
          <Label htmlFor='when4'>i haven't decided yet</Label>
              </TopContainer>
              </Grid>
            </Grid>
          </TopContainer>
          <Divider />
          <Title>What type of property are you looking to buy or rent?</Title>
          <TopContainer>
          <BtnInput type='radio' value="Apartment" name='type-of-property' id='type1'/>
          <Label htmlFor='type1'>Apartment</Label>
          <BtnInput type='radio' value="Full building" name='type-of-property' id='type2'/>
          <Label htmlFor='type2'>Full building</Label>  
          <BtnInput type='radio' value="Land" name='type-of-property' id='type3'/>
          <Label htmlFor='type3'>Land</Label>  
          </TopContainer>
          <Divider />
          <Title>Are you interested in completed properties or still under construction?</Title>
          <TopContainer>
          <BtnInput type='radio' value="Completed property" name='property-status' id='status1'/>
          <Label htmlFor='status1'>Completed property</Label>
          <BtnInput type='radio' value="Under construction" name='property-status' id='status2'/>
          <Label htmlFor='status2'>Under construction</Label>  
          <BtnInput type='radio' value="I haven't decided" name='property-status' id='status3'/>
          <Label htmlFor='status3'>I haven't decided</Label>  
          </TopContainer>
          <Divider />
          <Title>Which property locations are you currently looking into?</Title>
          <TopContainer>
          <MuiChipsInput size='small' value={chips} onChange={handleChange} />
         </TopContainer>
         <ChitDetails>Choose up to 3 locations, towers or estate in the state that you might be interested in</ChitDetails>
          <Divider />
          <Title>What is the property value?</Title>
          <ChitDetails>Please enter the value for the properties you're interested in</ChitDetails>
          <TopContainer>
      <TextField value={value} size='small' onChange={(e:any) => setValue(e.target.value)} type='number' id="outlined-basic" label="Property value" variant="outlined" />
          </TopContainer>
          <Divider />
          <Title>Slide to adjust percentage for initial payment.</Title>
          <SpanAmount>Down payment <strong>{result.toLocaleString()}</strong>  NGN</SpanAmount>
          <SpanAmount>Loan amount <strong>{loanAmount.toLocaleString()}</strong>  NGN</SpanAmount>
          <TopContainer>
          <Tooltip placement='top-start' title={payment + '%'}>
              <PaymentInput value={payment} onChange={(e:any) => setPayment(e.target.value)} type='range' min={20} max={80} name='payment' id='payment' />
              </Tooltip>
          </TopContainer>
          <Divider />
          <Title>Slide to adjust loan duration.</Title>
          <SpanAmount>Monthly payment <strong>{loanRepayment.toLocaleString()}</strong>  NGN</SpanAmount>
          <SpanAmount>Total amount payable <strong>{interestRate.toLocaleString()}</strong> NGN</SpanAmount>
          <Tooltip placement='top-start' title={range + ' ' + 'Month'}>
          <RangeInput value={range} onChange={(e:any) => setRange(e.target.value)} type='range' min={1} max={12} name='month' id='month' />
          </Tooltip>
          <Divider />
      </Form>
     </StyledContainer>
     </MiddleContainer>
     <Footer>
      <FooterDetails>© 2022 mortgagefinder.ng. All rights reserved</FooterDetails>
       <FooterDetails> 7th Floor, Pactum Towers, Victoria Island, Lagos</FooterDetails>
     </Footer>
    </StyledBox>
  )
}

export default MortgateApplication