import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../DataProducts/data";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
	const { idItem } = useParams();
	console.log(idItem);

	const [myProduct, setMyProduct] = useState({});
	const myPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 1500);
	});
	useEffect(() => {
		// CUANDO COMPAREN EL ID DE LA URL Y EL DE SUSPRODUCTOS CONTROLAR QUE AMBOS SEAN DEL MISMO TIPO (STRING O NUMBER)
		// EL VALOR idItem QUE VIENE DE LA URL ES DE TIPO STRING PESE A SER UN NUMERO
		myPromise.then((data) => {
			setMyProduct(data.find((prod) => prod.id === idItem));
		});
	}, [idItem]);

	return (
		<div>
			<ItemDetail prod={myProduct} />
		</div>
	);
};