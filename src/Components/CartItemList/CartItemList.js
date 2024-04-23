import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

import { useNavigate } from "react-router-dom";

export  const CartItemList = () => {
	const { cart, totalCartValue, emptyCart } = useContext(CartContext);
	console.log({cart});

	const navigate = useNavigate()
	
	return (
		<div className="ItemOnCartContainerList" >
			{cart.map((product) => (
				<div style={{display:"flex"}}
					key={product.Name + "onCart"}>
					
					<CartItem
						id={product.id}
						img={product.img}
						Name={product.Name}
						quantity={product.quantity}
						Price={product.Price}
					/>
				</div>
				
			))}
			<div className="TotalCartPrice">Total Carrito : ${totalCartValue}</div>
			<button className="EmptyCartButton" onClick={emptyCart}>
				Vaciar Carrito
			</button>
			
			<button className="checkout" onClick={() => navigate('/Checkout')}>Terminar Compra</button>
			{/* <Link className="checkout" to="/Checkout"> Terminar Compra </Link>  */}
			
			
		</div>
	);
};

