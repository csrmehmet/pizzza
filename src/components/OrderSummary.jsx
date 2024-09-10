import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  margin-top: 20px;
`;

const QuantityControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const QuantityButton = styled.button`
  background-color: #FDC913;
  border: none;
  color: #292929;
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const QuantityDisplay = styled.span`
  font-family: 'Barlow', sans-serif;
  margin: 0 10px;
  font-size: 18px;
`;

const TotalPrice = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #FDC913;
  border: none;
  color: #292929;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
`;

const OrderSummary = ({ quantity, total, onQuantityChange, onSubmit }) => (
  <SummaryContainer>
    <QuantityControls>
      <QuantityButton onClick={() => onQuantityChange(-1)}>-</QuantityButton>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <QuantityButton onClick={() => onQuantityChange(1)}>+</QuantityButton>
    </QuantityControls>
    <TotalPrice>Sipariş Toplamı: {total}₺</TotalPrice>
    <SubmitButton onClick={onSubmit}>SİPARİŞ VER</SubmitButton>
  </SummaryContainer>
);

export default OrderSummary;