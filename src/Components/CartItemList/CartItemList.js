import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Link, useNavigate } from "react-router-dom";

export  const CartItemList = () => {
	const { cart, totalCartValue, emptyCart } = useContext(CartContext);
	console.log({cart});

	const navigate = useNavigate()
	
	return (
		<div className="ItemOnCartContainerList">
			{cart.map((product) => (
				<div
					key={product.id + "onCart"}>
					
					<CartItem
						id={product.id}
						img={product.img}
						Name={product.Name}
						quantity={product.quantity}
						Price={product.Price}
					/>
				</div>
				
			))}
			<div className="TotalCartPrice">Total Cart : ${totalCartValue}</div>
			<button className="EmptyCartButton" onClick={emptyCart}>
				Vaciar Carrito
			</button>
			
			<button className="checkout" onClick={() => navigate('/Checkout')}>Terminar Compra</button>
			{/* <Link className="checkout" to="/Checkout"> Terminar Compra </Link>  */}
			
			
		</div>
	);
};

