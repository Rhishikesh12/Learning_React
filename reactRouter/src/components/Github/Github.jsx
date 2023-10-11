/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Github() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://api.github.com/users/Rhishikesh12")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}, []);
	return (
		<>
			<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
				Github Folloers : {data.followers}
				<img src={data.avatar_url}></img>
				<div>{data.name}</div>
				<div>{data.bio}</div>
			</div>
		</>
	);
}

export default Github;
