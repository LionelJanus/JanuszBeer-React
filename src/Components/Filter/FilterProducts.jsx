import React from 'react'
import { Link } from 'react-router-dom';
import "../Filter/FilterProducts.css"


export const FilterProducts = () => {

  
  return (
    
      <div id='Productos' className='Productos'>
        <h1>Catalogo de Productos</h1>
          <ul className="ContainerFilter">
            <Link to="/"></Link>
            <Link className="containerNav--ul--li" to="/Category/Aleman">Aleman</Link>
				    <Link className="containerNav--ul--li" to="/Category/Irlandes">Irlandes</Link>
				    <Link className="containerNav--ul--li" to="/Category/Escocesa">Escocesa</Link>
				    <Link className="containerNav--ul--li" to="/Category/Britanica">Britanica</Link>
            <Link className="containerNav--ul--li" to="/Category/Belga">Belga</Link>
			</ul>
      </div>
    
  )
}
