import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();

	return (
		<>
			<div>Welcome to Dashboard!!</div>
			<button
				className='bg-blue-400 px-10 py-3 rounded-lg text-base font-medium mt-5'
				onClick={() => navigate("/login")}>
				Go Back to Login
			</button>
		</>
	);
};

export default Dashboard;
