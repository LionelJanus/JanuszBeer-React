import React from 'react';
import "../Button/CustomButton.css"
import { useCount } from '../Hooks/useCount';

export const CustomButton = ({onClick , product}) => {
        

  return (
    <div className="btn-2">
    <a href="#" onClick={() => onClick(product)}><span>Agregar al Carrito</span></a>
  </div>
  )
};



