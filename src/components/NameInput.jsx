import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NameInput = ({ value, onChange }) => (
  <InputContainer>
    <StyledInput
      type="text"
      placeholder="Adınız (en az 3 karakter)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      minLength={3}
      required
    />
  </InputContainer>
);

export default NameInput;