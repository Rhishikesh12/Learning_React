/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
	return (
		<>
			<UserContextProvider>
				<h1>React with Chai and Share is Important</h1>
				<Login />
				<Profile />
			</UserContextProvider>
		</>
	);
}

export default App;
