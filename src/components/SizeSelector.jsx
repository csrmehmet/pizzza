import React from 'react';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const SelectorTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  color: #292929;
  font-size: 16px;
  margin-bottom: 10px;
`;

const OptionLabel = styled.label`
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  display: block;
  margin-bottom: 5px;
`;

const SizeSelector = ({ title, options, value, onChange }) => (
  <SelectorContainer>
    <SelectorTitle>{title}</SelectorTitle>
    {options.map(option => (
      <OptionLabel key={option}>
        <input
          type="radio"
          value={option}
          checked={value === option}
          onChange={() => onChange(option)}
        />
        {option}
      </OptionLabel>
    ))}
  </SelectorContainer>
);

export default SizeSelector;