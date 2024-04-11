import React from "react";
import logo from '../../public/images/logo/JANUSZ-LOGO.png';
import { CartWidget } from "./CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import IndividualIntervalsExample from "../Carrousel/Slide";


export const Navbar = () => {
	return (
		
		<header>
		<nav className="containerLogo">
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
			<CartWidget />
			
		</nav>
		
		{<div className="slide-primary">
		<IndividualIntervalsExample />
		</div>}
		</header>
		
	);
};