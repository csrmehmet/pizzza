import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Iteration-1-assets/logo.svg';

const HeaderContainer = styled.div`
  background-color: #CE2829;
  color: #FAF7F2;
  padding: 20px;
  text-align: center;
`;

const LogoImage = styled.img`
  max-width: 350px;
  margin-bottom: 10px;
  margin-top:30px;
`;



const Subtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  margin-top: 30px;
    text-align: left;
  padding-left: 39.5rem; 
`;

const Header = () => (
  <HeaderContainer>
    <LogoImage src={Logo} alt="Teknolojik Yemekler Logo" />
    
    <Subtitle>Anasayfa - <span style={{ fontWeight: 'bold' }}>Sipariş Oluştur</span></Subtitle>
  </HeaderContainer>
);

export default Header;