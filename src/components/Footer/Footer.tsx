import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-900 text-cream-100 pt-16 pb-8 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sage-800">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blush-500 text-white">
                <Flower2 className="h-6 w-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Simple Cafe
              </span>
            </div>
            <p className="text-sage-200 text-sm max-w-sm leading-relaxed">
              Flowers for life’s beautiful moments. Fresh seasonal stems, handcrafted arrangements, and thoughtful delivery across the city.
            </p>
            <div className="space-y-2 pt-2 text-xs text-sage-200">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blush-300" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blush-300" />
                <span>(312) 555-0198</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blush-300" />
                <span>hello@simplecafe-flowers.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: SHOP */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-200">
              <li>
                <Link to="/shop" className="hover:text-blush-300 transition-colors">
                  All Flowers
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestsellers" className="hover:text-blush-300 transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Roses" className="hover:text-blush-300 transition-colors">
                  Roses
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Peonies" className="hover:text-blush-300 transition-colors">
                  Peonies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Lilies" className="hover:text-blush-300 transition-colors">
                  Lilies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs mb-4">
              Help
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-200">
              <li>
                <Link to="/contact" className="hover:text-blush-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Flower Care
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blush-300 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT & FOLLOW */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-200 mb-6">
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blush-300 transition-colors">
                  Our Florists
                </Link>
              </li>
            </ul>

            <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs mb-3">
              Follow Us
            </h4>
            <div className="flex space-x-3 text-sage-200">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-sage-800 hover:bg-blush-500 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-sage-800 hover:bg-blush-500 hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-200 gap-4">
          <p>© 2026 Simple Cafe. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-blush-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blush-300 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
