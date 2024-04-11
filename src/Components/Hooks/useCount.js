import React, {  useContext, useState } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import Swal from 'sweetalert2'

export const useCount = () => {
	const [count, setCount] = useState(1);
	const {addProduct} = useContext(CartContext)

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		setCount(count + 1);
	};

	const addToCart = (prod) => {
		setCount(1);
		addProduct(prod , count);

		// Swal.fire({
		// 	position: "center",
		// 	icon: "success",
		// 	title: "Tu Producto fue Agregado",
		// 	showConfirmButton: false,
		// 	timer: 1500
		//   });
	};

	return { count, decrement, increment, addToCart };
};
