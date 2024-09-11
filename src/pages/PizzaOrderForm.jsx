import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from "../components/Header";
import PizzaDetails from '../components/PizzaDetails';
import SizeSelector from '../components/SizeSelector';
import DoughSelector from '../components/DoughSelector';
import ToppingsSelector from '../components/ToppingsSelector';
import OrderSummary from '../components/OrderSummary';
import OrderNote from '../components/OrderNote';
import NameInput from '../components/NameInput';

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const SizeAndDoughContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const pizzaData = {
  name: "Position Absolute Acı Pizza",
  basePrice: 85.50,
  description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel odun ateşinde bir fırında yüksek sıcaklıkta pişirilen İtalyan lezzet... ",
  sizes: ['Küçük', 'Orta', 'Büyük'],
  doughTypes: ['İnce', 'Normal', 'Kalın'],
  toppings: ['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarmısak', 'Biber', 'Ananas', 'Kabak'],
};

const PizzaOrderForm = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState(pizzaData.sizes[0]);
  const [dough, setDough] = useState(pizzaData.doughTypes[0]);
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [orderNote, setOrderNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsFormValid(
      name.length >= 3 &&
      toppings.length >= 4 &&
      toppings.length <= 10 &&
      size &&
      dough
    );
  }, [name, toppings, size, dough]);

  const handleToppingChange = (topping) => {
    setToppings(prev => {
      if (prev.includes(topping)) {
        return prev.filter(t => t !== topping);
      } else if (prev.length < 10) {
        return [...prev, topping];
      }
      return prev;
    });
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const calculateTotal = () => {
    const basePrice = pizzaData.basePrice;
    const toppingsPrice = toppings.length * 5;
    return (basePrice + toppingsPrice) * quantity;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      const orderData = {
        name,
        size,
        dough,
        toppings,
        quantity,
        orderNote,
        total: calculateTotal()
      };

      const response = await axios.post('https://reqres.in/api/pizza', orderData);
      console.log('Sipariş özeti:', response.data);
      
      
      history.push('/success');
    } catch (error) {
      console.error('Sipariş gönderilirken hata oluştu:', error);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ContentContainer>
        <form onSubmit={handleSubmit}>
          <PizzaDetails 
            name={pizzaData.name}
            price={pizzaData.basePrice} 
            description={pizzaData.description}
          />
          <NameInput value={name} onChange={setName} />
          <SizeAndDoughContainer>
            <SizeSelector 
              title="Boyut Seç" 
              options={pizzaData.sizes} 
              value={size} 
              onChange={setSize} 
            />
            <DoughSelector 
              options={pizzaData.doughTypes} 
              value={dough} 
              onChange={setDough} 
            />
          </SizeAndDoughContainer>
          <ToppingsSelector 
            toppings={pizzaData.toppings} 
            selectedToppings={toppings} 
            onChange={handleToppingChange} 
          />
          <OrderNote value={orderNote} onChange={setOrderNote} />
          <Divider />
          <OrderSummary 
            quantity={quantity}
            selections={toppings.length * 5}
            total={calculateTotal().toFixed(2)} 
            onQuantityChange={handleQuantityChange}
            onSubmit={handleSubmit}
            isDisabled={!isFormValid || isLoading}
          />
        </form>
      </ContentContainer>
    </>
  );
};

export default PizzaOrderForm;