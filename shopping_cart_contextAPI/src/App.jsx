/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useContext } from "react";
import { CartContext } from "./context/Cart";
import ItemCard from "./components/ItemCard";

function App() {
	const appStyle = {
		display: "flex",
		justifyContent: "space-between",
		width: "50%",
	};

	const cartStyle = {
		width: "50%",
	};

	const listStyle = {
		listStyleType: "none",
	};

	const cart = useContext(CartContext);

	return (
		<div style={appStyle}>
			<div>
				<h1>Item List</h1>
				<ItemCard name='MacBook' price={10000} />
				<ItemCard name='Iphone' price={13000} />
				<ItemCard name='IPad' price={8000} />
			</div>

			<div style={cartStyle}>
				<h1>Cart</h1>
				<ul>
					{cart.items.map((item, index) => (
						<li style={listStyle} key={index}>
							<h2>
								{item.name} - ${item.price}
							</h2>
						</li>
					))}
				</ul>
				<h1>Total: ${calculateTotal(cart.items)}</h1>
			</div>
		</div>
	);
}

function calculateTotal(items) {
	return items.reduce((total, item) => total + item.price, 0);
}

export default App;
