/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const ItemCard = ({ name, price }) => {
	const cardStyle = {
		padding: "10px",
	};

	const cart = useContext(CartContext);

	const addToCart = () => {
		const newItem = { name: name, price: price };
		cart.setItems([...cart.items, newItem]);
	};

	return (
		<div style={cardStyle}>
			<h2>Item Name: {name}</h2>
			<h2>Item Price: ${price}</h2>
			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
};

export default ItemCard;
