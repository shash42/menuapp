import React from 'react';

const IngredientInfo = ({ ingredient }) => {
  return (
    <div className="ingredient-info">
      <h4>{ingredient.name}</h4>
      <p>{ingredient.info}</p>
    </div>
  );
};

export default IngredientInfo;
