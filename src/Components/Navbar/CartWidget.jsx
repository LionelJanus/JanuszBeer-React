
import  React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import imgCart from '../../public/images/icons/carro-vacio.png'

export const CartWidget = () => {
	const {Cart} = useContext (CartContext)
	
	return (
		<Link to={"/cart"}>
			<div style={{width:"30px"}}>{Cart.length}🛒</div>
		</Link>
	) 
	//<div className="ContainerWidget">
	// 	<img src={imgCart} alt="icon-Cart" style={{width:"30px"}} />
	// 	  1
	// 	</div>
	
};