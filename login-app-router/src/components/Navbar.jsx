import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeNav = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
		};
	};
	return (
		<>
			<div className='flex space-x-4 p-5 bg-slate-800 text-white justify-center pr-10'>
				<NavLink to='/' style={activeNav}>
					Home
				</NavLink>
				<NavLink to='/about' style={activeNav}>
					About
				</NavLink>
				<NavLink to='/login' style={activeNav}>
					Login
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
