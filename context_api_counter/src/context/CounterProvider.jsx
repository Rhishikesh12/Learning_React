/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CounterContext from "./Counter.js";

// Creating Context Provider
const CounterContextProvider = ({ children }) => {
	const [count, setCount] = useState(0);

	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterContextProvider;
