import React from 'react';
import "../Button/CustomButton.css"


export const CustomButton = ({onClick , product}) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    onClick(product)
  }

  return (
    <div className="btn-2">
    <a href='#' onClick={handleClick}><span>Agregar al Carrito</span></a>
  </div>
  )
};



