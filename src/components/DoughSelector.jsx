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

const Select = styled.select`
  font-family: 'Barlow', sans-serif;
  width: 100%;
  padding: 5px;
`;

const DoughSelector = ({ options, value, onChange }) => (
  <SelectorContainer>
    <SelectorTitle>Hamur Seç</SelectorTitle>
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Select>
  </SelectorContainer>
);

export default DoughSelector;