import React, { useEffect, useState } from "react";
import {FilterProducts} from "../Filter/FilterProducts"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { data } from "../../DataProducts/data";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
	const { idCategory } = useParams();
	console.log(idCategory);

	const [myProducts, setMyProducts] = useState([]);
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 1500);
	});
	useEffect(() => {
		myPromise.then((data) => {
			setMyProducts(
				idCategory
					? data.filter((prod) => prod.Category === idCategory)
					: data
			);
		});
	}, [idCategory]);


	return (
		<div className="Filter">
			<FilterProducts />	
		<div className="ProductsFilter" >
			<ItemList products={myProducts} />
		</div>
		</div>
	);
};