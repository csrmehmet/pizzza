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
  margin-bottom: 10px; /* Mesafeyi artırdık */
  padding: 5px 0; /* Ekstra boşluk eklemek için */
  box-sizing: border-box;
`;

const MaxToppingsMessage = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  font-size: 14px;
  margin-bottom: 50px;
`;

const ToppingsSelector = ({ toppings, selectedToppings, onChange }) => (
  <ToppingsContainer>
    <ToppingsTitle>Ek Malzemeler</ToppingsTitle>
    <MaxToppingsMessage>En fazla 10 malzeme seçebilirsiniz.</MaxToppingsMessage>
    {toppings.map(topping => (
      <ToppingLabel key={topping}>
        <input
          type="checkbox"
          checked={selectedToppings.includes(topping)}
          onChange={() => onChange(topping)}
        />
        {topping}
      </ToppingLabel>
    ))}
  </ToppingsContainer>
);

export default ToppingsSelector;
