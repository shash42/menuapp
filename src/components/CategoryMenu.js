// src/CategoryMenu.js
import React, { useState, useEffect } from 'react';
import Dish from './Dish';

const CategoryMenu = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const handleCategoryChange = (event) => {
    const category = categories.find(cat => cat.id === parseInt(event.target.value));
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (selectedCategory) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedCategory.dishes.length);
    }
  };

  const handlePrev = () => {
    if (selectedCategory) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? selectedCategory.dishes.length - 1 : prevIndex - 1
      );
    }
  };

  const handleAddToCart = (dish, instructions) => {
    setCart([...cart, { ...dish, instructions }]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 5000);
  };

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-menu">
      <div className="category-selector">
        <select onChange={handleCategoryChange} value={selectedCategory.id}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="dishes-container">
        <button className="nav-button left" onClick={handlePrev}>
          &lt;
        </button>
        <Dish dish={selectedCategory.dishes[currentIndex]} onAddToCart={handleAddToCart} />
        <button className="nav-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="cart-container">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.instructions}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <p>We can't wait to bring your order, cooked fresh. 20 minutes to Bon Apetit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
