import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartItemList } from "../CartItemList/CartItemList";
import { Link } from "react-router-dom";

export const Cart = () => {
	const { cartQuantity } = useContext(CartContext);

	if (cartQuantity === 0)
		return (
			<div className="MessageCartEmpty">
			<br />{" "}
				
			</div>
		);

	return <CartItemList />;
};


