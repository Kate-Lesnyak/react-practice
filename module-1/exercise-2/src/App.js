import './App.css';
import PostList from './components/PostList/PostList';

import list from './data/list.json'

function App() {
	return (
		<PostList title='Post List' items={list} />
	);
}

export default App;
