import React from 'react';
import styled from '@emotion/styled';
import SearchArea from '../components/SearchArea';
import NavBar from '../components/NavBar';
import PropertyList from '../components/PropertyList';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import Popular from '../components/Popular';
import CompanySlide from '../components/CompanySlide';
import Hub from '../components/Hub';

const Container = styled(Box)`
`

function HomePage() {
  
  return (
    <Container>
    <NavBar />
    <SearchArea />
    <Hub />
    <PropertyList />
    <CompanySlide />
    <Popular />
    <Footer />
    </Container>
  )
}

export default HomePage

