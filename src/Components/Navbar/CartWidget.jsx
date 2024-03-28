import  React,{ useContext } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../Components/Context/CartContext";


export const CartWidget = () => {
	const {Cart} = useContext (CartContext)
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	return (
		<Link to={"/cart"}>
			<div style={{width:"30px",
			display:"contents",
			color: "white"}}
		
		onClick={handleShow}>{Cart.length}🛒</div></Link>
		
	) 
	
	};
