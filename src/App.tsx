import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import AccountPage from './pages/AccountPage';
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/account" element={<AccountPage />} />
        
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
