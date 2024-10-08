import React from 'react';
import styled from 'styled-components';

const ToppingsContainer = styled.div`
  margin-bottom: 20px;
`;

const ToppingsTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  color: #292929;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ToppingLabel = styled.label`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  display: inline-block;
  width: 33%;
  margin-bottom: 5px;
`;

const ToppingsInfo = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  font-size: 14px;
  margin-top: 10px;
`;

const ToppingsSelector = ({ toppings, selectedToppings, onChange }) => (
  <ToppingsContainer>
    <ToppingsTitle>Ek Malzemeler</ToppingsTitle>
    {toppings.map(topping => (
      <ToppingLabel key={topping}>
        <input
          type="checkbox"
          checked={selectedToppings.includes(topping)}
          onChange={() => onChange(topping)}
          disabled={selectedToppings.length >= 10 && !selectedToppings.includes(topping)}
        />
        {topping}
      </ToppingLabel>
    ))}
    <ToppingsInfo>
      En az 4, en fazla 10 malzeme seçiniz. (Şu an: {selectedToppings.length})
    </ToppingsInfo>
  </ToppingsContainer>
);

export default ToppingsSelector;