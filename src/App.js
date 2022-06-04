import './App.css';
import { Navbar } from './components';
import { ProductListing } from './pages/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='product-section'>
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
