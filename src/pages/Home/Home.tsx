import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, HeartHandshake, Flower2, Star, CheckCircle } from 'lucide-react';
import { products, occasionCategories, customerReviews } from '../../data/products';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const bestSellers = products.filter((p) => p.badge === 'Best Seller' || p.rating >= 4.9).slice(0, 8);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-cream-100 py-16 md:py-24 lg:py-32 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-semibold text-blush-600">
                <Sparkles className="h-4 w-4" />
                <span>Handcrafted Fresh Daily in Chicago</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-sage-900 leading-[1.15]">
                Flowers for life’s <span className="italic text-blush-500 font-normal">beautiful</span> moments.
              </h1>

              <p className="text-base sm:text-lg text-sage-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Thoughtfully designed bouquets made with fresh seasonal flowers and delivered with care. Elevate your space or send a heartfelt smile to someone special.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-sage-800 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-sage-900 hover:shadow-xl active:scale-[0.98] transition-all"
                >
                  SHOP FLOWERS
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/shop?category=Occasions"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white border border-sage-800 px-8 py-4 text-sm font-semibold text-sage-800 hover:bg-cream-50 transition-all"
                >
                  EXPLORE COLLECTIONS
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-cream-200 text-center lg:text-left text-xs text-sage-800">
                <div>
                  <p className="font-bold text-sage-900 text-sm">100% Fresh</p>
                  <p className="text-sage-700">Farm-direct blooms</p>
                </div>
                <div>
                  <p className="font-bold text-sage-900 text-sm">Same-Day</p>
                  <p className="text-sage-700">Chicago delivery</p>
                </div>
                <div>
                  <p className="font-bold text-sage-900 text-sm">4.9 ★★★★★</p>
                  <p className="text-sage-700">Over 2,000 reviews</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1000"
                    alt="Blush Rose Garden arrangement"
                    className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Card Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-cream-200 hidden sm:flex items-center gap-4 max-w-xs">
                  <div className="h-12 w-12 rounded-xl bg-blush-100 flex items-center justify-center text-blush-500 flex-shrink-0">
                    <Flower2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sage-900">Blush Rose Garden</p>
                    <p className="text-[11px] text-sage-700">#1 Best Selling Arrangement</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
            Shop by Occasion
          </h2>
          <p className="mt-3 text-sm sm:text-base text-sage-800">
            Find the perfect handcrafted bouquet thoughtfully tailored for every emotion and celebration.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {occasionCategories.map((occ) => (
            <div
              key={occ.id}
              onClick={() => navigate(`/shop?occasion=${encodeURIComponent(occ.name)}`)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-cream-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <img
                  src={occ.image}
                  alt={occ.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-sage-900/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-blush-200 transition-colors">
                  {occ.name}
                </h3>
                <p className="text-[11px] text-cream-200 line-clamp-1 opacity-90">
                  {occ.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
              Best Sellers
            </h2>
            <p className="mt-2 text-sm text-sage-800">
              Our most beloved floral arrangements, curated and favorite among Chicago flower lovers.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-blush-500 hover:text-blush-600 flex items-center gap-1 group"
          >
            View All Flowers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-sage-900">Why Choose Us</h2>
            <p className="mt-2 text-sm text-sage-800">
              We take pride in exceptional stem selection, artisan floral design, and flawless service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 text-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-blush-100 text-blush-500 flex items-center justify-center mx-auto">
                <Flower2 className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-900">Fresh Daily</h3>
              <p className="text-xs text-sage-800 leading-relaxed">
                Directly sourced from sustainable floral growers to ensure peak freshness and bloom longevity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 text-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-blush-100 text-blush-500 flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-900">Handcrafted Bouquets</h3>
              <p className="text-xs text-sage-800 leading-relaxed">
                Artfully hand-tied by certified master florists who obsess over tone, balance, and scent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 text-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-blush-100 text-blush-500 flex items-center justify-center mx-auto">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-900">Same-Day Delivery</h3>
              <p className="text-xs text-sage-800 leading-relaxed">
                Hand-delivered in local Chicago and surrounding suburbs with precision and care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 text-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-blush-100 text-blush-500 flex items-center justify-center mx-auto">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-900">100% Happiness Guarantee</h3>
              <p className="text-xs text-sage-800 leading-relaxed">
                If you or your recipient are not completely delighted, we will make it right immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold text-sage-900">
            Loved by Flower Lovers
          </h2>
          <p className="mt-2 text-sm text-sage-800">
            Read what our wonderful customers say about their Simple Cafe flower experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((rev) => (
            <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-sage-800 italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-cream-100 flex items-center justify-between">
                <div>
                  <p className="font-serif text-xs font-bold text-sage-900">{rev.author}</p>
                  <p className="text-[10px] text-sage-700">{rev.location}</p>
                </div>
                {rev.verified && (
                  <span className="flex items-center text-[10px] text-sage-700 font-medium">
                    <CheckCircle className="h-3 w-3 text-sage-800 mr-1" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 rounded-3xl p-8 sm:p-12 text-center text-cream-50 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Bring More Flowers Into Your Life
            </h2>
            <p className="text-sm sm:text-base text-sage-200">
              Join our flower list for seasonal inspiration, new collections, and special offers.
            </p>

            {newsletterSuccess ? (
              <div className="bg-sage-800 text-cream-50 p-4 rounded-xl border border-sage-700 text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-blush-300" />
                Thank you for subscribing to Simple Cafe floral updates!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-sage-300 border border-sage-700 focus:outline-none focus:ring-2 focus:ring-blush-300"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blush-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blush-600 transition-colors flex-shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
