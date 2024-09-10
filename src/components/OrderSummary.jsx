import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  
  border-radius: 4px;
  padding: 15px;
  margin-top: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #FDC913;
  
  color: #292929;
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityDisplay = styled.span`
  font-family: 'Barlow', sans-serif;
  margin: 0 10px;
  font-size: 18px;
  
`;

const TotalContainer = styled.div`
  text-align: right;
  
`;

const TotalItem = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  margin: 5px 0;
`;

const TotalPrice = styled(TotalItem)`
  font-weight: bold;
  color: ${props => props.isRed ? 'red' : 'inherit'};
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
  margin-top: 15px;
`;

const OrderSummary = ({ quantity, selections, total, onQuantityChange, onSubmit }) => (
  <SummaryContainer>
    <FlexContainer>
      <QuantityControls>
        <QuantityButton onClick={() => onQuantityChange(-1)}>-</QuantityButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButton onClick={() => onQuantityChange(1)}>+</QuantityButton>
      </QuantityControls>
      <TotalContainer>
        <TotalItem>Sipariş Toplamı</TotalItem>
        <TotalItem>Seçimler: {selections}₺</TotalItem>
        <TotalPrice isRed>Toplam: {total}₺</TotalPrice>
      </TotalContainer>
    </FlexContainer>
    <SubmitButton onClick={onSubmit}>SİPARİŞ VER</SubmitButton>
  </SummaryContainer>
);

export default OrderSummary;