import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ServiceHeader = styled.div`
  background: linear-gradient(135deg, #3182ce, #2b6cb0);
  padding: 4rem 2rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    margin-bottom: 2rem;
  }
`;

const ServiceTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ServiceSection = styled.div`
  h2 {
    font-size: 1.75rem;
    color: #2d3748;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #3182ce, #2b6cb0);
      border-radius: 3px;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ServicePage = ({ title, description, image, details }) => {
  return (
    <PageContainer>
      <ContentWrapper>
        <ServiceHeader>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
        </ServiceHeader>
        <ServiceContent>
          <ServiceImage src={image} alt={title} />
          <ServiceDetails>
            {details.map((section, index) => (
              <ServiceSection key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </ServiceSection>
            ))}
          </ServiceDetails>
        </ServiceContent>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ServicePage; 