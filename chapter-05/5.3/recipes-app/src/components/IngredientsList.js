import React from 'react';
import Ingredient from "./Ingredient";

export default function IngredientsList({ list }) {
  return (
    <ul className="ingredints">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient}/>
      ))}
    </ul>
  );
}