import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";


export const CartItemList = () => {
	const { cart, totalCartValue, emptyCart } = useContext(CartContext);
	console.log({cart});
	
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
			
			<button className="checkout" onClick={CheckoutForm}> Terminar Compra </button> 
			
		</div>
	);
};
