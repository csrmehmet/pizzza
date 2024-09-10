import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Iteration-1-assets/logo.svg';

const SuccessContainer = styled.div`
  background-color: #CE2829;
  color: #FAF7F2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-top: 70px;
`;

const LogoImage = styled.img`
  max-width: 200px;
  margin-bottom: 100px;
`;

const SuccessMessage = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-size: 78px;  
  font-weight: bold;
  margin: 20px 0;
  text-transform: uppercase;
  font-weight: 300;
`;

const SuccessSubMessage = styled.h3`
  
  font-size: 78px;  
  margin: 20px 0;
  font-weight: 10;
`;

const Success = () => (
  <SuccessContainer>
    <LogoImage src={Logo} alt="Teknolojik Yemekler Logo" />
    <SuccessMessage>TEBRİKLER!</SuccessMessage>
    <SuccessSubMessage>SİPARİŞİNİZ ALINDI!</SuccessSubMessage>
  </SuccessContainer>
);

export default Success;