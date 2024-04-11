import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ Description }) => {
	return (
		<div>
			{Description}
			<ItemCount />
		</div>
	);
};