import React from 'react';
import "../Button/CustomButton.css"
import { useCount } from '../Hooks/useCount';

export const CustomButton = () => {
  const {addToCart} =useCount()
  return (
    <div className="btn-2">
    <a href="#" onClick={addToCart}><span>Agregar al Carrito</span></a>
  </div>
  )
};



