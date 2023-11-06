/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CartContext } from "./Cart";

const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	return (
		<CartContext.Provider value={{ items, setItems }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
