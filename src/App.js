import './App.css';
import ShopingCart from './components/ShopingCart';
import data from './data.json';

function App() {
  return <ShopingCart data={data} />;
}

export default App;
