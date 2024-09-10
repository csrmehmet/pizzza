import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import PizzaDetails from '../components/PizzaDetails';
import SizeSelector from '../components/SizeSelector';
import DoughSelector from '../components/DoughSelector';
import ToppingsSelector from '../components/ToppingsSelector';
import OrderSummary from '../components/OrderSummary';
import OrderNote from '../components/OrderNote';
import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const SelectorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const SelectorWrapper = styled.div`
  flex: 1;
`;

const pizzaData = {
  name: "Position Absolute Acı Pizza",
  basePrice: 85.50,
  description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,domates,peynir ve genellikle cesitli diger malzemelerle kaplanmis, daha sonra geleneksel olarak odun atesinde bir firinda yuksek sicaklikta pisirilen,genellikle yuvarlak,duzlestirilmis mayali bugday bazli hamurdan olusan Italyan kokenli lezzetli bir yemektir...",
  sizes: ['Küçük', 'Orta', 'Büyük'],
  doughTypes: ['İnce', 'Normal', 'Kalın'],
  toppings: ['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarmısak', 'Biber', 'Ananas', 'Kabak'],
};

const PizzaOrderForm = () => {
  const [size, setSize] = useState(pizzaData.sizes[0]);
  const [dough, setDough] = useState(pizzaData.doughTypes[0]);
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [orderNote, setOrderNote] = useState('');

  const history = useHistory();

  const handleToppingChange = (topping) => {
    setToppings(prev => prev.includes(topping) 
      ? prev.filter(t => t !== topping)
      : [...prev, topping]
    );
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleSubmit = () => {
    console.log('Sipariş verildi:', { size, dough, toppings, quantity, orderNote });
    history.push('/success'); // Başarı sayfasına yönlendirme
  };

  const calculateTotal = () => {
    const basePrice = pizzaData.basePrice;
    const toppingsPrice = toppings.length * 5;
    return (basePrice + toppingsPrice) * quantity;
  };

  return (
    <>
      <Header />
      <ContentContainer>
        <PizzaDetails 
          name={pizzaData.name}
          price={pizzaData.basePrice} 
          description={pizzaData.description}
        />
        <SelectorsContainer>
          <SelectorWrapper>
            <SizeSelector 
              title="Boyut Seç" 
              options={pizzaData.sizes} 
              value={size} 
              onChange={setSize} 
            />
          </SelectorWrapper>
          <SelectorWrapper>
            <DoughSelector 
              options={pizzaData.doughTypes} 
              value={dough} 
              onChange={setDough} 
            />
          </SelectorWrapper>
        </SelectorsContainer>
        <ToppingsSelector 
          toppings={pizzaData.toppings} 
          selectedToppings={toppings} 
          onChange={handleToppingChange} 
        />
        <OrderNote value={orderNote} onChange={setOrderNote} />
        <OrderSummary 
          quantity={quantity} 
          total={calculateTotal()} 
          onQuantityChange={handleQuantityChange}
          onSubmit={handleSubmit} // Sipariş ver butonunun onSubmit özelliğine handleSubmit fonksiyonunu bağlıyoruz
        />
      </ContentContainer>
    </>
  );
};

export default PizzaOrderForm;
