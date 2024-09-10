import React, { useState } from 'react';

const availableToppings = [
  'Pepperoni',
  'Tavuk Izgara',
  'Mısır',
  'Sarımsak',
  'Ananas',
  'Sosis',
  'Soğan',
  'Sucuk',
  'Biber',
  'Kabak',
  'Kanada Jambonu',
  'Domates',
  'Jalapeno',
  'Barbekü Sos',
  'Kavurma',
];

const PizzaCheckbox = (props) => {
  const {selections, setSelections} = props;


  const handleToppingToggle = (topping) => {
    if (selections.includes(topping)) {
      
      setSelections((prevToppings) =>
        prevToppings.filter((item) => item !== topping)
      );
    } else if (selections.length < 10) {
      
      setSelections((prevToppings) => [...prevToppings, topping]);
    }
  };

  

  return (
    <div>
      <h2>Malzeme Seçimi</h2>
      <p>En fazla 10 malzeme seçebilirsiniz.</p>
      <ul>
        {availableToppings.map((topping) => (
          <li key={topping}>
            <label>
              <input
                type="checkbox"
                checked={selections.includes(topping)}
                onChange={() => handleToppingToggle(topping)}
              />
              {topping}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaCheckbox;