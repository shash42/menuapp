import React from 'react';

const Ingredient = ({ ingredient, onClick }) => {
  return (
    <div className="ingredient" onClick={onClick}>
      {ingredient.name}
    </div>
  );
};

export default Ingredient;
