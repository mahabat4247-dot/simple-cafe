import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, Flower2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { totalFavorites } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Occasions', href: '/shop?category=Occasions' },
    { name: 'Best Sellers', href: '/shop?filter=bestsellers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-cream-200">
      {/* Announcement Bar */}
      <div className="bg-sage-800 text-cream-50 py-2 px-4 text-center text-xs font-medium tracking-wide">
        Fresh flowers delivered with love • Free delivery on orders over $75
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-sage-800 hover:text-sage-900 hover:bg-cream-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 text-sage-900 group">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blush-100 text-blush-500 group-hover:bg-blush-200 transition-colors">
              <Flower2 className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-sage-900">
                Simple Cafe
              </span>
              <span className="text-[10px] tracking-widest text-sage-700 uppercase -mt-1 font-sans">
                Flower Shop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-sage-800 hover:text-blush-500 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blush-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-sage-800 hover:text-blush-500 hover:bg-cream-100 rounded-full transition-colors"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Favorites Icon */}
            <button
              type="button"
              onClick={() => navigate('/favorites')}
              className="p-2 text-sage-800 hover:text-blush-500 hover:bg-cream-100 rounded-full transition-colors relative"
              aria-label="View favorites"
            >
              <Heart className="h-5 w-5" />
              {totalFavorites > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white">
                  {totalFavorites}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-sage-800 hover:text-blush-500 hover:bg-cream-100 rounded-full transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-sage-800 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cream-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-sage-800 hover:bg-cream-100 hover:text-sage-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
