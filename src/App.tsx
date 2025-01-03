import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSearch from './components/products/ProductSearch';
import ProductList from './components/products/ProductList';
import Contact from './components/Contact';
import AuthModal from './components/auth/AuthModal';
import { useAuth } from './components/auth/hooks/useAuth';
import { useProducts } from './components/products/hooks/useProducts';

function App() {
  const { showAuth, user, setShowAuth, handleAuth, handleLogout } = useAuth();
  const { 
    products, 
    filteredProducts, 
    setFilteredProducts, 
    handleUpdateAvailability,
    handleAddMedicine 
  } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {showAuth && (
        <AuthModal 
          onClose={() => setShowAuth(false)}
          onAuth={handleAuth}
        />
      )}
      
      <Navbar 
        user={user}
        onLoginClick={() => setShowAuth(true)}
        onLogout={handleLogout}
      />
      <Hero />
      
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Products</h2>
          <ProductSearch products={products} onSearch={setFilteredProducts} />
          <ProductList 
            products={filteredProducts}
            isOwner={user?.isOwner}
            onUpdateAvailability={handleUpdateAvailability}
            onAddMedicine={handleAddMedicine}
          />
        </div>
      </section>
      
      <Contact />
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Krishna Medical Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;