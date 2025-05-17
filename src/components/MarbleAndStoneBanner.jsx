import React from 'react';
import styled from 'styled-components';
import marbleImage from '../assessts/marble-stones.jpeg'; 

// Styled components
const BannerContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: auto;
  min-height: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  /* Stack vertically on mobile screens */
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: unset;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  
  /* Take full width on mobile */
  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8f8;
  
  /* Adjust padding on smaller screens */
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
  
  /* Smaller font sizes on mobile */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.9rem;
    width: 100%; /* Full width button on smallest screens */
    text-align: center;
  }
`;

// Optional - only add if you want to control the image loading experience
const ResponsiveImage = styled.img`
  display: none; /* This is hidden, just used for proper image loading */
  height: 0;
  width: 0;
`;

function MarbleAndStoneBanner() {
  return (
    <BannerContainer>
      {/* Optional preload image */}
      <ResponsiveImage src={marbleImage} alt="" />
      
      <ImageSection image={marbleImage} role="img" aria-label="Marble and stone showcase" />
      <InfoSection>
        <Title>Elegance in Marble and Stone</Title>
        <Description>
         We Supply Marble and Stone all over <b>India</b>. Our collection features a wide range of exquisite marble and stone options, perfect for any project. From luxurious interiors to stunning exteriors, our materials are designed to elevate your space.
        </Description>
        <Button>Explore Collection</Button>
      </InfoSection>
    </BannerContainer>
  );
}

export default MarbleAndStoneBanner;

