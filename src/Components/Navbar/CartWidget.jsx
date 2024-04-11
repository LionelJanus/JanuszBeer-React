import  React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import CanvasCart from "../OffCanvas/OffCanvas";


export const CartWidget = () => {
	const {cartQuantity} = useContext (CartContext)
	
	return (
		<Link to={"/cart"}>
			<div style={{width:"30px",
			display: "flex",
			alignItems: "center",
			color: "white"}}>{cartQuantity} <CanvasCart/></div>
		</Link>
	)
	};


		
		
	
