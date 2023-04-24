import './App.css';
import Filter from './components/Filter';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <Filter/>
      <ProductList/>
    </div>
  );
}

export default App;
