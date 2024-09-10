import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  margin-bottom: 20px;
`;

const NoteTextArea = styled.textarea`
  font-family: 'Barlow', sans-serif;
  width: 100%;
  padding: 10px;
  border: 1px solid #5F5F5F;
  border-radius: 4px;
`;

const OrderNote = ({ value, onChange }) => (
  <NoteContainer>
    <NoteTextArea 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      placeholder="Siparişine eklemek istediğin bir not var mı?"
      rows={3}
    />
  </NoteContainer>
);

export default OrderNote;