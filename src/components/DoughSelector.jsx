import React, { useState } from 'react';
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

const RequiredStar = styled.span`
  color: red;
  margin-left: 4px;
`;

const DoughSelector = ({ options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <SelectorContainer>
      <SelectorTitle>
        Hamur Seç
        {!value && <RequiredStar>*</RequiredStar>}
      </SelectorTitle>
      <Select value={value} onChange={handleChange}>
        <option value="">Hamur Kalınlığı</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </SelectorContainer>
  );
};

export default DoughSelector;