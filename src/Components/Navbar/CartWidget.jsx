import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import CanvasCart from "../OffCanvas/OffCanvas";
import "./CartWidget.css";


export const CartWidget = () => {
	const { cartQuantity } = useContext(CartContext)

	return (
		<div className="cart-widget-link" >
			<div className="cart-widget" >
				<div className="count">
				{cartQuantity} 
				</div>
				
				<CanvasCart/></div>
		</div>

	)

};





