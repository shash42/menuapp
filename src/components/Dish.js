import React, { useState } from 'react';

const Dish = ({ dish, onAddToCart }) => {
  const [instructions, setInstructions] = useState('');

  const handleAddToCart = () => {
    onAddToCart(dish, instructions);
    setInstructions(''); // Clear instructions after adding to cart
  };

  return (
    <div className="dish">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <ul className="ingredients-list">
        {dish.ingredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name}
            <div className="ingredient-info">
              {ingredient.info}
            </div>
          </li>
        ))}
      </ul>
      <div className="customization">
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Customization instructions..."
        />
      </div>
      <button className="tick-button" onClick={handleAddToCart}>
        ✓
      </button>
    </div>
  );
};

export default Dish;
