/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
	const [user, setUser] = React.useState(null);
	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};

export default UserContextProvider;
