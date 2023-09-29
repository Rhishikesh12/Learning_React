import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<h1 className='bg-green-400 text-black p-5 rounded-2xl mb-4'>
				User Info
			</h1>
			<Card
				name='Rhishikesh'
				url='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			/>
			<Card name='Niko Chan' />
		</>
	);
}

export default App;
