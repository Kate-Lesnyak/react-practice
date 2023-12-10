import items from './data/mainMenuItems.json';
import MainMenu from './components/MainMenu/MainMenu';
import './App.css';

function App() {
	return (
		<MainMenu items={items} />
	);
}

export default App;
