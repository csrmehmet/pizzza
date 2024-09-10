import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url('Assets/Iteration-1-assets/home-banner.png'); 
  background-size: cover;
  background-position: center;
  color: white;
  gap:2rem
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 30px;
`;


const MainText = styled.h2`
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  margin: 5px 0
`;

const Button = styled.button`
  background-color: #fdc913;
  color: #333;
  font-size: 19px;
  padding: 15px 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;

  
`;

function Home() {
    const history = useHistory();


    function handleOrder(){
        history.push("/siparis-olustur");
    }

  return (
    <Container>
      <Title>Teknolojik Yemekler</Title>
      <MainText>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</MainText>
        
      <Button onClick={handleOrder}>ACIKTIM</Button>
    </Container>
  );
};

export default Home;