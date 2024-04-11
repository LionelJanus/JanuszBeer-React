import React, { useEffect, useState } from "react";
import { products } from "../../DataProducts/data";

export const useTest = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
			}, 3000);
		}).then((data) => {
			setData(data);
		});
	}, []);

	return { data };
};