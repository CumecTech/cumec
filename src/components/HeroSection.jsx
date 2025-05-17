// components/HeroSection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image'; // Import next/image
import Link from 'next/link';   // Import next/link

// Simple fade-in animation for text elements
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container for the hero section
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh; /* Slightly increased */
  background-color: #f0f5ff;
  overflow: hidden;
  padding: 3rem 0; /* Increased padding */
  margin-top: ${({ isFixed }) => (isFixed ? '64px' : '0')};

  @media (max-width: 768px) {
    min-height: 70vh; /* Slightly increased */
    margin-top: ${({ isFixed }) => (isFixed ? '57px' : '0')};
    padding: 2rem 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(240, 245, 255, 0.85) 0%, /* Slightly less transparent */
    rgba(240, 245, 255, 0.7) 50%,
    rgba(240, 245, 255, 0.85) 100%
  );
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit; /* Ensure it takes up the HeroContainer's min-height */
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.8rem; /* Slightly larger */
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #3182ce, #2b6cb0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (max-width: 1024px) {
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.7rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem; /* Slightly larger */
  color: #2d3748;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2.5rem;
  line-height: 1.7; /* Improved readability */
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards; /* Delayed animation */
  opacity: 0; /* Start hidden for animation */


  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem; /* Increased margin */
  animation: ${fadeIn} 0.8s ease-out 0.4s forwards; /* Delayed animation */
  opacity: 0; /* Start hidden for animation */
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const StyledButton = styled.button`
  padding: 0.85rem 1.8rem; /* Slightly larger padding */
  background: ${props => props.primary ? 'linear-gradient(135deg, #3182ce, #2b6cb0)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#3182ce'};
  border: 2px solid ${props => props.primary ? 'transparent' : '#3182ce'};
  border-radius: 8px; /* Slightly more rounded */
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.primary ? '0 4px 10px rgba(49, 130, 206, 0.2)' : 'none'};
  text-decoration: none; // For Link usage
  display: inline-block; // For Link usage

  &:hover {
    transform: translateY(-3px); /* More pronounced hover */
    box-shadow: ${props => props.primary ? '0 7px 12px rgba(49, 130, 206, 0.3)' : '0 5px 10px rgba(49, 130, 206, 0.15)'};
    background: ${props => props.primary ? 'linear-gradient(135deg, #2b6cb0, #2c5282)' : 'rgba(49, 130, 206, 0.08)'};
    color: ${props => props.primary ? 'white' : '#2b6cb0'};
    border-color: ${props => props.primary ? 'transparent' : '#2b6cb0'};
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${props => props.primary ? '0 2px 5px rgba(49, 130, 206, 0.25)' : '0 2px 5px rgba(49, 130, 206, 0.1)'};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  animation: ${fadeIn} 0.8s ease-out 0.6s forwards; /* Delayed animation */
  opacity: 0; /* Start hidden for animation */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Explicitly keep 3 for tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Styled Link for the ImageCard
const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block; /* Important for the link to take up card space */
`;

const ImageCard = styled.div`
  position: relative;
  height: 230px; /* Slightly taller */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); /* Softer, more diffused shadow */
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother transition */
  cursor: pointer;

  /* Styling for the NextImage component within ImageCard */
  .next-image-fill {
    transition: transform 0.5s ease; /* Image zoom transition */
  }

  &:hover {
    transform: translateY(-6px) scale(1.02); /* Slightly more pronounced hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }

  &:hover .next-image-fill {
    transform: scale(1.1); /* Zoom effect on image */
  }

  @media (max-width: 768px) {
    height: 190px;
  }

  @media (max-width: 480px) {
    height: 210px;
  }
`;

// No separate StyledImage component needed if we target NextImage directly or its generated img
// const StyledNextImage = styled(Image)``; // Not strictly needed

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(30, 80, 130, 0.85), transparent); /* Adjusted color for better contrast */
  padding: 1.2rem 1rem; /* Increased padding */
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${ImageCard}:hover & {
    transform: translateY(0);
  }
`;

const ImageTitle = styled.h3`
  color: white;
  font-size: 1.15rem; /* Slightly larger */
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

// Assumed intrinsic dimensions for images (can be any value, `fill` will adapt)
// These are only for placeholder if `fill` is not used or if `next/image` needs them before loading
const DEFAULT_IMAGE_WIDTH = 800;
const DEFAULT_IMAGE_HEIGHT = 600;

function HeroSection({ isFixed = false }) {
  // Image paths updated for Next.js public folder
  // Ensure your 'assessts' folder is directly inside the 'public' folder
  const images = [
    {
      id: 1,
      src: '/assessts/marble-stones.jpeg', // Path from public folder
      alt: "Marble and Stone",
      title: "Stone and Marble Solutions",
      path: "/services/stone-marble"
    },
    {
      id: 2,
      src: '/assessts/heroimg2.jpeg',
      alt: "Engineering Project",
      title: "Civil Planning",
      path: "/services/civil-planning"
    },
    {
      id: 3,
      src: '/assessts/heroimg3.jpeg',
      alt: "Environmental Solutions",
      title: "Environmental Solutions",
      path: "/services/environmental"
    },
    {
      id: 4,
      src: '/assessts/heroimg4.jpeg',
      alt: "Interior Design Project",
      title: "Interior Design",
      path: "/services/interior-design"
    },
    {
      id: 5,
      src: '/assessts/heroimg5.jpeg',
      alt: "Construction Management",
      title: "Construction Management",
      path: "/services/construction"
    },
    {
      id: 6,
      src: '/assessts/heroimg6.jpeg',
      alt: "Architectural Support",
      title: "Architectural Support",
      path: "/services/architectural"
    }
  ];

  // No need for handleCardClick if using next/link directly

  return (
    <HeroContainer isFixed={isFixed}>
      <Overlay />
      <ContentWrapper>
        <HeroTitle>Engineering Excellence for Tomorrow's World</HeroTitle>
        <HeroSubtitle>
          CUMEC delivers premium manpower solutions to developers, contractors, sub-contractors, and project management consultants.
        </HeroSubtitle>
        <ButtonContainer>
          {/* Assuming these buttons might also be links in the future */}
          <Link href="/services" passHref legacyBehavior>
            <StyledButton as="a" primary>Our Services</StyledButton>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <StyledButton as="a">Contact Us</StyledButton>
          </Link>
        </ButtonContainer>
        <GridContainer>
          {images.map((image) => (
            // Use CardLink to wrap ImageCard
            <CardLink href={image.path} key={image.id} passHref>
              <ImageCard>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" // Helps Next.js optimize image loading
                  style={{ objectFit: 'cover' }}
                  className="next-image-fill" // Added class for specific targeting
                  priority={image.id <= 2} // Prioritize loading for the first few images
                />
                <ImageOverlay>
                  <ImageTitle>{image.title}</ImageTitle>
                </ImageOverlay>
              </ImageCard>
            </CardLink>
          ))}
        </GridContainer>
      </ContentWrapper>
    </HeroContainer>
  );
}

export default HeroSection;