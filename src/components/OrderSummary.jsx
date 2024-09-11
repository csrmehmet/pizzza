import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #FDC913;
  border: none;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 50px;
  flex-grow: 1;
  margin-left: 20px;
  
`;

const TotalHeader = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'Roboto Condensed', sans-serif;
  margin-top: 15px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: opacity 0.3s ease;
`;

const OrderSummary = ({ quantity, selections, total, onQuantityChange, onSubmit, isDisabled }) => (
  <SummaryContainer>
    <QuantityContainer>
      <QuantityButton onClick={() => onQuantityChange(-1)} disabled={isDisabled}>-</QuantityButton>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <QuantityButton onClick={() => onQuantityChange(1)} disabled={isDisabled}>+</QuantityButton>
    </QuantityContainer>
    <TotalContainer>
      <TotalHeader>Sipariş Toplamı</TotalHeader>
      <TotalItem>
        <span>Seçimler:</span>
        <span>{selections}₺</span>
      </TotalItem>
      <TotalPrice isRed>
        <span>Toplam:</span>
        <span>{total}₺</span>
      </TotalPrice>
      <SubmitButton onClick={onSubmit} disabled={isDisabled}>
        SİPARİŞ VER
      </SubmitButton>
    </TotalContainer>
  </SummaryContainer>
);

export default OrderSummary;