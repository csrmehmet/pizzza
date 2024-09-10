import React from 'react';
import styled from 'styled-components';

const PizzaCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  padding: 30px 0px;
`;

const PizzaTitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  color: #292929;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PizzaPrice = styled.span`
  font-family: 'Barlow', sans-serif;
  color: #292929;
  font-size: 32px;
  font-weight: bold;
`;

const PizzaRating = styled.span`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  font-size: 14px;
`;

const PizzaDescription = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  
`;

const PizzaDetails = ({ name, price, description }) => (
  <PizzaCard>
    <PizzaTitle>{name}</PizzaTitle>
    <PriceContainer>
      <PizzaPrice>{price}₺</PizzaPrice>
      <PizzaRating>4.9 (200)</PizzaRating>
    </PriceContainer>
    <PizzaDescription>{description}</PizzaDescription>
  </PizzaCard>
);

export default PizzaDetails;