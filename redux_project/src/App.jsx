import "./App.css";
import Count from "./component/Count";

function App() {
	return (
		<>
			<h1>Counter Using Redux</h1>
			<button>Increment</button>
			<Count />
			<button>Decrement</button>
		</>
	);
}

export default App;
