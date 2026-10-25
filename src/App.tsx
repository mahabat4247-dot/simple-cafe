import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/Cart/CartDrawer';
import { SearchModal } from './components/Header/SearchModal';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Favorites } from './pages/Favorites/Favorites';
import { NotFound } from './pages/NotFound/NotFound';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <div className="min-h-screen flex flex-col bg-cream-50 font-sans text-sage-900">
            <Header onOpenSearch={() => setIsSearchOpen(true)} />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
            <CartDrawer />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
