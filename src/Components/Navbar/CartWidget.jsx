import  React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import CanvasCart from "../Cart/Cart";


export const CartWidget = () => {
	const {Cart} = useContext (CartContext)
	
	return (
		<Link to={"/cart"}>
			<div style={{width:"30px",
			display: "flex",
			alignItems: "center",
			color: "white"}}
		
		>{Cart.length}
		<CanvasCart/>
		</div></Link>
	)
	};


		
		
	
