import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [Cart, setCart] = useState([]);

	const addProduct = (prod, count) => {
        //PRIMERO TIENE QUE CORROBOAR QUE NO EXISTA EN EL CARRITO
        // SI NO EXISTE
		setCart([...Cart, { ...prod, quantity: count }]);

        // SI EXISTE , TIENE QUE SUMAR CANTIDADES
	};

	const removeProduct = () => {
        // BUSCAR EL PRODUCTO (UNO SOLO) EN EL CARRITO y eliminarlo
    };

	const emptyCart = () => {
		setCart([]);
	};

    const contarCantidad=() =>{
        // Recorrer el carrito y sumar todas las cantidades de cada producto
    }

	useEffect(() => {
		console.log(Cart);
	}, [Cart]);

	return (
		<CartContext.Provider
			value={{ Cart, addProduct, removeProduct, emptyCart }}>
			{children}
		</CartContext.Provider>
	);
};