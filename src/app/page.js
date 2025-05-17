'use client'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer';


function Home() {
  return (
    <Main>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </Main>
  )
}

export default Home

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;