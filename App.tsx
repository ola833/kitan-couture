
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Product, Category, Order } from './types';
import { INITIAL_PRODUCTS, COLORS } from './constants';

// Pages
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('kitan_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('kitan_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('kitan_admin_session') === 'active';
  });

  useEffect(() => {
    localStorage.setItem('kitan_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('kitan_orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/collection" element={<CollectionPage products={products} />} />
            <Route path="/product/:id" element={<ProductDetailPage products={products} onOrder={addOrder} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/login" element={<AdminLoginPage setIsAdmin={setIsAdmin} />} />
            <Route 
              path="/admin/*" 
              element={
                isAdmin ? (
                  <AdminDashboard 
                    products={products} 
                    orders={orders} 
                    onAddProduct={addProduct} 
                    onUpdateProduct={updateProduct} 
                    onDeleteProduct={deleteProduct}
                    onLogout={() => { setIsAdmin(false); localStorage.removeItem('kitan_admin_session'); }}
                  />
                ) : (
                  <AdminLoginPage setIsAdmin={setIsAdmin} />
                )
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
