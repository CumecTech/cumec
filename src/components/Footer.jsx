'use client'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const BrandSection = styled.div`
  margin-bottom: 1.5rem;
  flex: 1;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 300px;
  }
`;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
  margin: 1rem 0 0;
  font-size: 1rem;
  color: #a0aec0;
  line-height: 1.6;
`;

const NavSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: auto;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  margin: 0 0 1rem;
  font-weight: 600;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const NavLink = styled.a`
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialIcon = styled.a`
  color: #a0aec0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    transform: translateY(-3px);
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #a0aec0;
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const LegalLink = styled.a`
  color: #a0aec0;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo>Cumec</Logo>
          <Tagline>Engineering solutions for tomorrow's challenges. We innovate, design, and build the future.</Tagline>
          <SocialLinks>
            <SocialIcon href="https://twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="https://facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialLinks>
        </BrandSection>
        
        <NavSection>
          <NavColumn>
            <ColumnTitle>Company</ColumnTitle>
            <NavLinks>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/careers">Careers</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/press">Press</NavLink>
            </NavLinks>
          </NavColumn>
          
          <NavColumn>
            <ColumnTitle>Services</ColumnTitle>
            <NavLinks>
              <NavLink href="/engineering">Engineering</NavLink>
              <NavLink href="/consulting">Consulting</NavLink>
              <NavLink href="/research">Research</NavLink>
              <NavLink href="/support">Support</NavLink>
            </NavLinks>
          </NavColumn>
          
          <NavColumn>
            <ColumnTitle>Products</ColumnTitle>
            <NavLinks>
              <NavLink href="/solutions">Solutions</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/demo">Demo</NavLink>
            </NavLinks>
          </NavColumn>
          
          <NavColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <NavLinks>
              <NavLink href="/documentation">Documentation</NavLink>
              <NavLink href="/guides">Guides</NavLink>
              <NavLink href="/api">API</NavLink>
              <NavLink href="/status">Status</NavLink>
            </NavLinks>
          </NavColumn>
        </NavSection>
      </FooterContent>
      
      <BottomBar>
        <Copyright>© {new Date().getFullYear()} Cumec. All rights reserved.</Copyright>
        <LegalLinks>
          <LegalLink href="/privacy">Privacy Policy</LegalLink>
          <LegalLink href="/terms">Terms of Service</LegalLink>
          <LegalLink href="/cookies">Cookie Policy</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
}

export default Footer;