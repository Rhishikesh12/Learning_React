/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CounterContext from "../context/Counter";

const Counter = () => {
	const countCounter = useContext(CounterContext);
	return (
		<>
			<button
				onClick={() => {
					countCounter.setCount(countCounter.count + 1);
				}}>
				Add
			</button>{" "}
			<button
				onClick={() => {
					countCounter.setCount(countCounter.count - 1);
				}}>
				Substract
			</button>
		</>
	);
};

export default Counter;
