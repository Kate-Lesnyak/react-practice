import './App.styled.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import items from './data/productItems.json'

function App() {
	return (
		<ProductList title="Product list title" items={items} />
	);
}

export default App;
