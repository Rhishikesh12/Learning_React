import "./App.css";
import Count from "./component/Count";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();
	return (
		<>
			<h1>Counter Using Redux</h1>
			<button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
			<Count />
			<button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
		</>
	);
}

export default App;
