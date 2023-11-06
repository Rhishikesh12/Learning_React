/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Counter from "./components/Counter.jsx";
import React, { useContext } from "react";
import CounterContext from "./context/Counter";

function App() {
	const CounterC = useContext(CounterContext);
	return (
		<>
			<h1>Counter Using Context API</h1>
			<h1>Count is {CounterC.count} </h1>
			<Counter />
		</>
	);
}

export default App;
