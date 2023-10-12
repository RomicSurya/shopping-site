import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './components/pages/shop/Shop';
import Wishlist from './components/pages/Wishlist/Wishlist';
import { ShopContextProvider } from './context/ShopContext';
import Bag from './components/pages/Bag/Bag';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Bag' element={<Bag/>}/>
      </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
