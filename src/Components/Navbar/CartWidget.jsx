import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import CanvasCart from "../OffCanvas/OffCanvas";
import "./CartWidget.css";


export const CartWidget = () => {
	const { cartQuantity } = useContext(CartContext)

	return (
		<Link to={"/cart"} className="cart-widget-link" >
			<div className="cart-widget" >
				{cartQuantity} <CanvasCart/></div>
		</Link>

	)

};





