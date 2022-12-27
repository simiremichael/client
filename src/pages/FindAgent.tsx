import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const StyledBox = styled(Box)`
background-image: url('../images/realtor.webp');
background-size: 100% 100%;
height: 340px;
`
const StyledBoxBottom = styled(Box)`
margin: 20px 0 30px 0;
`
const StyledContainer = styled(Container)`
`
const TopContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const TopOpecContainer = styled.div`

`
const TopHeader = styled.h1`
font-weight: bold;
color: rgb(255 255 255);
`
const Buttonwrapper = styled.div`
display: flex;
justify-content: center;
`
const ButtonContainer = styled.div`
width: 220px;
height: 44px;
margin: 10px;
background-color: #000000;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 25px;
`
const AgentButton = styled.button`
outlined: none;
border: none;
color: #ffffff;
border-radius: 25px;
font-weight: bold;
cursor: pointer;
height: 92%;
width: 46%;
margin-left: 2px
`
const CompanyButton = styled.button`
outlined: none;
border: none;
color: #ffffff;
border-radius: 25px;
font-weight: bold;
cursor: pointer;
height: 92%;
width: 50%;
margin-right: 2px
`
const InputContainer = styled.div`
margin-top: 20px;
margin-bottom: 40px;
align-items: center;
width: 100%;
`
const Input = styled(TextField)`
 width: 40%;
 height: 40px;
 background-color: #ffffff;
 outlined: none;
 border: none;
 border-radius: 5px;
`
const Button = styled.button`
width: 60px;
 height: 40px;
 background-color: #008080;
 color: #ffffff;
 font-weight: bold;
 outlined: none;
 font-size: 1.2rem;
 border: none;
 cursor: pointer;
`
const AgentCard = styled.div`
width: 260px;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const AgentTopContainer = styled.div`
height: 40%;
width: 100%;
`
const Img = styled.img`
height: 100%;
width: 100%;
`
const LogoImg = styled.img`
height: 100%;
width: 100%;
`
const BottomContainer = styled.div`
height: 60%;
width: 100%;
padding-bottom: 30px;
`
const Name = styled.h3`
margin-bottom: 0;
color: #383838;
`
const Job = styled.p`
margin: 0;
color: #494949;
`
const Organisation = styled.p`
margin-top: 10px;
color: #494949;
`
const LowerContainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
`
const Lowerleft = styled.div`
`
const LowerRight = styled.div`
border-top:
`
const LowerMiddle = styled.div`
border-top:
`
const ForSale = styled.p`
margin: 0;
font-size: 0.8rem;
color: #494949;
`
const Number = styled.p`
margin: 0;
font-size: 0.8rem;
color: #494949;
`
const ForRent = styled.p`
margin: 0;
font-size: 0.8rem;
color: #494949;
`
const Commercial = styled.p`
margin: 0;
font-size: 0.8rem;
color: #494949;
`
const CompanyCard = styled.div`
width: 260px;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const CompanyTopContainer = styled.div`
height: 200px;
width: 100%;
`
const CompanyBottomContainer = styled.div`
height: 70%;
width: 100%;
padding-bottom: 30px;
`
const CompanyName = styled.h3`
margin-bottom: 0;
color: #383838;
`
const NumOfAgent = styled.p`
margin: 0 0 10px 0;
font-size: 0.8rem;
`
const HeadOffice = styled.p`
margin: 0;
font-size: 0.7rem;
`
const Location = styled.p`
margin: 0;
font-size: 0.6rem;
`
const Form = styled.form`

`

function FindAgent() {

  const [toggle, setToggle] = useState(false);

  const [searchData, setSearchData] = useState({agent: '', company: ''})


  const handleChange = (e: any) => {
  const name = e.target.name;
  const value = e.target.value;
  setSearchData( values => ({...values, [name]: value}));
  };

  const handleSearch = () => {
  // e.preventDefault();

  }

  console.log(searchData)
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <NavBar />
    <StyledBox>
    <TopOpecContainer>
      <StyledContainer>
       <TopContainer>
        <TopHeader>Find your agent to find a home</TopHeader>
        <Buttonwrapper>
        <ButtonContainer>
          <AgentButton onClick={handleToggle} style={{backgroundColor: !toggle? '#008080' : '#000000'}}>AGENTS</AgentButton>
          <CompanyButton onClick={handleToggle} style={{backgroundColor: toggle? '#008080' : '#000000'}}>COMPANIES</CompanyButton>
        </ButtonContainer>
        </Buttonwrapper>
        <Form onSubmit={handleSearch}>
        <InputContainer>
        { !toggle ?
        <Input type='search' variant='outlined' size='small' label='Enter location or agent name' name='agent' value={searchData.agent} onChange={handleChange} />
        :
        <Input type='search' variant='outlined' size='small' label= 'Enter location or company name' name='company' value={searchData.company} onChange={handleChange}  />
        }
        <Button type='submit'>Find</Button>
        </InputContainer>
        </Form>
       </TopContainer>
      </StyledContainer>
      </TopOpecContainer>
      </StyledBox>
      <StyledBoxBottom>
      <StyledContainer>
      {!toggle && (
      <AgentCard>
       <AgentTopContainer>
       <Img src='../images/agent1.jpg' />
       </AgentTopContainer>
       <BottomContainer>
       <Name>Adebayo Kemi</Name>
       <Job>PROPERTY CONSULTANT</Job>
       <Organisation>Anton Real Estate</Organisation> 
       <LowerContainer>
       <Lowerleft>
        <Number>10</Number>
       <ForSale>for sale</ForSale>
       </Lowerleft>
       <LowerRight>
       <Number>25</Number>
       <ForRent>for rent</ForRent>
       </LowerRight>
       </LowerContainer>
       </BottomContainer>
       </AgentCard>
       )}
       {toggle && (
       <CompanyCard>
       <CompanyTopContainer>
       <LogoImg src='../images/reallogo5.png' />
       </CompanyTopContainer>
       <CompanyBottomContainer>
       <CompanyName>Anto Real Estate</CompanyName>
       <NumOfAgent>15 AGENTS</NumOfAgent>
       <HeadOffice>HEAD OFFICE</HeadOffice> 
       <Location>LEKKI LAGOS</Location> 
       <LowerContainer>
       <Lowerleft>
        <Number>23</Number>
       <ForSale>for sale</ForSale>
       </Lowerleft>
       <LowerMiddle>
       <Number>8</Number>
       <Commercial>Commercial</Commercial>
       </LowerMiddle>
       <LowerRight>
       <Number>40</Number>
       <ForRent>for rent</ForRent>
       </LowerRight>
       </LowerContainer>
       </CompanyBottomContainer>
       </CompanyCard>
       )}
      </StyledContainer>
      </StyledBoxBottom>
      <Footer />
    </>
  )
}

export default FindAgent