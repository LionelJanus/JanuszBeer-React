import React, { useEffect, useState } from "react";
import { FilterProducts } from "../Filter/FilterProducts";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { data } from "../../DataProducts/data";
import "./ItemListContainer.css";
import { Loader } from "../Loader/Loader";
import { getProducts, getProductsByCategory } from "../../Services/firebase";

export const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);
  

  const [myProducts, setMyProducts] = useState([]);
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
  useEffect(() => {
    setLoading(true);
		
		const customNameFunction = idCategory
			? getProductsByCategory
			: getProducts

			customNameFunction(idCategory)
				.then((data) => {
					setMyProducts(data);
				})
				.finally(() => setLoading(false));
	}, [idCategory]);

	if (loading) return <Loader />;

  return (
    <div className="Filter">
      <FilterProducts />
      <div className="ProductsFilter">
        <ItemList products={myProducts} />
      </div>
    </div>
  );
};
