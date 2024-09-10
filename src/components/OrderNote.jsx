import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  margin-bottom: 20px;
`;

const NoteTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  color: #292929;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

const NoteTextArea = styled.textarea`
  font-family: 'Barlow', sans-serif;
  width: 100%;
  padding: 12px;
  
  border-radius: 4px;
  
  
`;

const OrderNote = ({ value, onChange }) => (
  <NoteContainer>
    <NoteTitle>Sipariş Notu</NoteTitle>
    <NoteTextArea 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      placeholder="Siparişine eklemek istediğin bir not var mı?"
      rows={1}
    />
  </NoteContainer>
);

export default OrderNote;