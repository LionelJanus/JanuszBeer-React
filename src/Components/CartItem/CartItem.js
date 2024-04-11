import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


export const CartItem = ({ id, img, Name, quantity, Price }) => {

	const { removeProduct } = useContext(CartContext);

	return (
		<>
			<div className="ItemOnCartContainerProductImgContainer">
				<img
					className="ItemOnCartContainerProductImg"
					src={img} alt="producto a comprar"/>
			</div>
			<div className="ItemOnCartContainerProductInfo">
				<p >{Name}</p>
				<p className="ItemOnCartContainerProductPrecio">
					Price : $ {Price}</p>
				<p className="ItemOnCartContainerProductCantidad">
					Quantity : {quantity}</p>
				<p className="ItemOnCartContainerProductPrecio">
					Total Product : $ {(Price * quantity).toFixed(2)}</p>
			</div>
			
			<div className="ItemOnCartContainerProductDelete">
				<div
					className="ItemOnCartContainerProductDeleteIcon"
					onClick={() => removeProduct(id)}>
					❌
				</div>
			</div>
		</>
		
	);
	
};
