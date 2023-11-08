/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
	const Count = useSelector((state) => state);
	return (
		<>
			<div>
				<h1>{Count}</h1>
			</div>
		</>
	);
};

export default Count;
