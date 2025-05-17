import React from 'react';
import styled from 'styled-components';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Homeowner',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: 'The quality of work and attention to detail was exceptional. They transformed our house into a dream home!'
    },
    {
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      text: 'Working with this team was a pleasure. Their expertise and professionalism made the entire process smooth and enjoyable.'
    },
    {
      name: 'Michael Brown',
      role: 'Property Developer',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      text: 'The results exceeded our expectations. Their innovative approach and quality craftsmanship are truly remarkable.'
    }
  ];

  return (
    <TestimonialContainer>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            <TestimonialContent>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </TestimonialAuthor>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: block;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  margin-top: 1rem;
`;

const AuthorName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export default TestimonialSection; 