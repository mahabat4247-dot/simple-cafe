import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
      <div className="h-20 w-20 bg-blush-100 text-blush-500 rounded-full flex items-center justify-center mx-auto">
        <Flower2 className="h-10 w-10" />
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-sage-900">
        Page Not Found
      </h1>
      <p className="text-sm text-sage-800 max-w-md mx-auto">
        We couldn’t find the page or flower collection you were looking for.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-sage-800 px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-sage-900 transition-colors"
        >
          <Home className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};
