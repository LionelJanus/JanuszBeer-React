import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../DataProducts/data";
import { getOneProduct } from "../../Services/firebase";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
	const { idItem } = useParams();
	const [loading, setLoading] = useState(true);

	const [myProduct, setMyProduct] = useState({});
	useEffect(() => {
		// CUANDO COMPAREN EL ID DE LA URL Y EL DE SUSPRODUCTOS CONTROLAR QUE AMBOS SEAN DEL MISMO TIPO (STRING O NUMBER)
		// EL VALOR idItem QUE VIENE DE LA URL ES DE TIPO STRING PESE A SER UN NUMERO
		getOneProduct(idItem)
			.then((data) => {
				setMyProduct(data);
			})
			.finally(() => setLoading(false));
	}, [idItem]);

	if (loading) return <Loader />;

	return (
		<div>
			<ItemDetail prod={myProduct} />
		</div>
	);
};