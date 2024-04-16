import React from "react";
import logo from '../../public/images/logo/JANUSZ-LOGO.png';
import { CartWidget } from "./CartWidget";
import  AvatarMenu  from '../AvatarMenu/Avatar';
import "./Navbar.css";
import { Link } from "react-router-dom";
import IndividualIntervalsExample from "../Carrousel/Slide";


export const Navbar = () => {
	return (
		
		<header>
			<div className="navbar" 
			style={{display:"flex", 
			justifyContent:"flex-end",
			height: "40px",
			padding:"0px",
			backgroundColor:"#1B2430",
			opacity:"70%"}}>
            {/* Otros elementos del Navbar */}
            
            <div className="navbar-right" style={{height:"40px"}}>
                <CartWidget />
                <AvatarMenu />
            </div>
        </div>
		<nav className="containerLogo" 
		style={{height:"30px", marginTop:"20px"}}>
		<Link to="/">
				<div>
				<img src={logo} alt="logo" />
				</div>
			</Link>
			
			<ul className="containerNav">
				<Link to="Nosotros">Nosotros</Link>
				<Link to="Productos">Productos</Link>
				<Link to="Contacto">Contacto</Link>
			</ul>
			
			
		</nav>
		
		{<div className="slide-primary">
		<IndividualIntervalsExample />
		</div>}
		</header>
		
	);
};