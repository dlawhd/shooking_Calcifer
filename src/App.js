import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './intern/CartContext';
import Header from './intern/Header';
import ProductList from './intern/ProductList';
import CartPage from './intern/CartPage';
import ProductDetailPage from './intern/ProductDetailPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <nav className="d-flex gap-3 ps-3 mt-2">
          <Link to="/" className="text-decoration-none text-dark fw-semibold">
            🏠 상품 목록
          </Link>
          <span className="text-muted">|</span>
          <Link to="/cart" className="text-decoration-none text-dark fw-semibold">
            🛒 장바구니
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} /> {/* 추가 */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
