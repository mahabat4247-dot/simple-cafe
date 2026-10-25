export type Occasion =
  | 'Birthday'
  | 'Anniversary'
  | 'Love & Romance'
  | 'Congratulations'
  | 'Thank You'
  | 'Sympathy'
  | 'Just Because';

export type FlowerType =
  | 'Roses'
  | 'Peonies'
  | 'Lilies'
  | 'Tulips'
  | 'Hydrangeas'
  | 'Mixed Bouquets'
  | 'Orchids';

export type FlowerColor =
  | 'Pink'
  | 'Red'
  | 'White'
  | 'Yellow'
  | 'Purple'
  | 'Pastel';

export type ArrangementSize = 'Standard' | 'Deluxe' | 'Premium';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: FlowerType;
  occasion: Occasion[];
  colors: FlowerColor[];
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  badge?: 'Best Seller' | 'New' | 'Sale' | 'Popular';
  inStock: boolean;
  careInstructions: string[];
  deliveryInfo: string;
}

export interface OccasionCategory {
  id: string;
  name: Occasion;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  size: ArrangementSize;
  quantity: number;
  selectedDate?: string;
  cardMessage?: string;
}

export interface FilterOptions {
  flowerType: string[];
  occasion: string[];
  color: string[];
  maxPrice: number;
  inStockOnly: boolean;
}

export type SortOption = 'featured' | 'best-selling' | 'price-asc' | 'price-desc' | 'rating';
