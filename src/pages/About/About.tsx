import React from 'react';
import { Flower2, Award, Users, ShieldCheck, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Our Story Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-blush-500">
          Our Story
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-sage-900 leading-tight">
          Handcrafted Floral Artistry for Life’s Precious Moments
        </h1>
        <p className="text-base text-sage-800 leading-relaxed">
          At <strong className="text-sage-900">Simple Cafe</strong>, we believe flowers are more than just decorative stems—they are messengers of love, gratitude, celebration, and comfort.
        </p>
      </section>

      {/* Main Image Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-cream-200">
          <img
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=1000"
            alt="Simple Cafe Flower Studio"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-sage-900">
            Passion in Every Petal
          </h2>
          <p className="text-sm text-sage-800 leading-relaxed">
            Simple Cafe creates handcrafted floral arrangements using carefully selected seasonal flowers. Sourced directly from sustainable local and international growers, every stem is personally inspected for health, fragrance, and vibrant color before entering our Chicago studio.
          </p>
          <p className="text-sm text-sage-800 leading-relaxed">
            Whether celebrating a grand milestone or sending a spontaneous pick-me-up, our team of passionate florists designs each arrangement with meticulous attention to detail and color harmony.
          </p>
        </div>
      </section>

      {/* Brand Pillars Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blush-100 text-blush-500 flex items-center justify-center">
            <Flower2 className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-sage-900">Fresh Flowers</h3>
          <p className="text-xs text-sage-800 leading-relaxed">
            Only fresh, premium seasonal blooms that last longer and bring vibrant natural aroma into your home.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blush-100 text-blush-500 flex items-center justify-center">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-sage-900">Handcrafted Designs</h3>
          <p className="text-xs text-sage-800 leading-relaxed">
            Unique, modern compositions tailored to evoke deep sentiment and aesthetic delight.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blush-100 text-blush-500 flex items-center justify-center">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-sage-900">Local Florists</h3>
          <p className="text-xs text-sage-800 leading-relaxed">
            Designed and hand-tied in Chicago by local florists dedicated to the community and floral artistry.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blush-100 text-blush-500 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-sage-900">Thoughtful Delivery</h3>
          <p className="text-xs text-sage-800 leading-relaxed">
            Temperature-controlled transport with eco-friendly hydration packaging to ensure flawless arrival.
          </p>
        </div>
      </section>

      {/* Florist Highlight Banner */}
      <section className="bg-sage-900 rounded-3xl p-8 sm:p-12 text-cream-50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-semibold text-blush-300 uppercase tracking-widest">
            Chicago Studio
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Visit Our Flagship Flower Shop
          </h2>
          <p className="text-sm text-sage-200 leading-relaxed">
            Experience our fresh bloom bar, smell seasonal varieties in person, or consult with our lead floral stylists for custom wedding and corporate events.
          </p>
          <div className="flex items-center gap-2 text-xs font-medium text-cream-100 pt-2">
            <MapPin className="h-4 w-4 text-blush-300" />
            <span>Chicago, IL • Open 7 Days a Week</span>
          </div>
        </div>
        <div className="aspect-[4/3] w-full md:w-80 rounded-2xl overflow-hidden bg-sage-800 border-2 border-sage-700 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600"
            alt="Simple Cafe Flower Shop Front"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};
