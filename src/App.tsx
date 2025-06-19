import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import NearestStorePage from './pages/NearestStorePage';
import './App.css';
import './styles.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/nearest-store" element={<NearestStorePage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
