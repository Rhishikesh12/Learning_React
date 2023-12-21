import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = () => {
		if (username === "admin" && password === "admin") {
			navigate("/dashboard");
		} else {
			alert("Wrong Credentials!!");
		}
	};

	return (
		<>
			<div className='flex flex-col '>
				<div>Login</div>
				<form className='flex flex-col px-10 shrink w-[500px] h-50 '>
					<input
						className='outline outline-1 outline-offset-1 m-3 px-4 py-1 rounded-md font-normal text-base'
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className='outline outline-1 outline-offset-1 m-3 px-4 py-1 rounded-md font-normal text-base'
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={handleLogin}
						className='bg-blue-400 px-6 py-3 rounded-lg text-base font-medium m-3'>
						Log In
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
