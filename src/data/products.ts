import { Product, OccasionCategory, Review } from '../types';

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'blush-rose-garden',
    name: 'Blush Rose Garden',
    description: 'A soft, romantic arrangement of pastel blush roses, spray garden roses, and delicate eucalyptus.',
    longDescription: 'Handcrafted with love by our master florists, Blush Rose Garden combines classic dusty pink roses with lush garden foliage. Perfectly layered to capture light and grace, this bouquet brings warmth and elegant beauty to any home or celebration.',
    price: 69,
    originalPrice: 79,
    category: 'Roses',
    occasion: ['Anniversary', 'Love & Romance', 'Birthday', 'Thank You'],
    colors: ['Pink', 'Pastel'],
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviewCount: 128,
    badge: 'Best Seller',
    inStock: true,
    careInstructions: [
      'Trim stems 1 inch at a 45-degree angle upon arrival.',
      'Place in a clean vase filled with cool fresh water and flower food.',
      'Keep away from direct sunlight, heating vents, and air drafts.',
      'Change water and re-trim stems every 2 days.'
    ],
    deliveryInfo: 'Delivered in our signature eco-friendly presentation box with a personalized gift card and premium flower food packet.'
  },
  {
    id: 'prod-2',
    slug: 'sunshine-bouquet',
    name: 'Sunshine Bouquet',
    description: 'Vibrant yellow sunflowers, buttercup spray roses, and crisp greenery to brighten anyone’s day.',
    longDescription: 'Bring instant warmth into any space with the Sunshine Bouquet. Bursting with cheerful yellow blooms and fresh seasonal fillers, this lively arrangement is designed to uplift spirits and spread joy.',
    price: 59,
    category: 'Mixed Bouquets',
    occasion: ['Birthday', 'Congratulations', 'Just Because', 'Thank You'],
    colors: ['Yellow'],
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviewCount: 94,
    badge: 'Popular',
    inStock: true,
    careInstructions: [
      'Trim 1-2 inches off stems under running water.',
      'Sunflowers require plenty of clean water—check level daily.',
      'Keep in a cool spot out of harsh midday sun.'
    ],
    deliveryInfo: 'Same-day delivery available for local Chicago orders placed before 1:00 PM.'
  },
  {
    id: 'prod-3',
    slug: 'white-elegance',
    name: 'White Elegance',
    description: 'Serene white calla lilies, pristine roses, and silver dollar eucalyptus in a refined arrangement.',
    longDescription: 'Embodying purity, tranquility, and understated luxury, White Elegance features immaculate white blossoms paired with soft dusty foliage. A majestic choice for sympathy, formal events, or minimalist decor.',
    price: 79,
    originalPrice: 89,
    category: 'Lilies',
    occasion: ['Sympathy', 'Congratulations', 'Anniversary', 'Thank You'],
    colors: ['White'],
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.95,
    reviewCount: 82,
    badge: 'Best Seller',
    inStock: true,
    careInstructions: [
      'Remove lower foliage that falls below the waterline.',
      'Use cold water and keep in a temperature-controlled room.'
    ],
    deliveryInfo: 'Hand-delivered in water reservoir to preserve stem freshness during transport.'
  },
  {
    id: 'prod-4',
    slug: 'pink-peony-dream',
    name: 'Pink Peony Dream',
    description: 'Luxurious lush pink peonies sourced directly from sustainable floral farms.',
    longDescription: 'Few flowers captivate like the magnificent peony. Pink Peony Dream highlights voluptuous, fragrant blooms that gently open over several days into breathtaking cloud-like ruffled petals.',
    price: 89,
    category: 'Peonies',
    occasion: ['Love & Romance', 'Birthday', 'Anniversary'],
    colors: ['Pink', 'Pastel'],
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 5.0,
    reviewCount: 210,
    badge: 'Best Seller',
    inStock: true,
    careInstructions: [
      'If peonies arrive tight in bud, warm water accelerates opening.',
      'Change water every day for longest bloom duration.'
    ],
    deliveryInfo: 'Delivered in eco-wrap hydrating stem pack.'
  },
  {
    id: 'prod-5',
    slug: 'spring-meadow',
    name: 'Spring Meadow',
    description: 'A cheerful mix of pastel ranunculus, sweet peas, and fresh meadow wildflowers.',
    longDescription: 'Capturing the whimsical spirit of a sunny countryside garden, Spring Meadow blends sweet scent, varied textures, and ethereal light hues into an enchanting centerpiece.',
    price: 64,
    category: 'Mixed Bouquets',
    occasion: ['Just Because', 'Birthday', 'Thank You'],
    colors: ['Pastel', 'Pink', 'White'],
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.7,
    reviewCount: 64,
    badge: 'New',
    inStock: true,
    careInstructions: [
      'Keep stems supported in a tall vase.',
      'Mime natural light setting without placing in direct heat.'
    ],
    deliveryInfo: 'Packaged with custom tissue wrapping and elegant silk ribbon.'
  },
  {
    id: 'prod-6',
    slug: 'classic-red-roses',
    name: 'Classic Red Roses',
    description: 'Two dozen velvet long-stemmed Ecuadorian red roses with lush salal leaves.',
    longDescription: 'The timeless, passionate statement of love. Rich dark red Ecuadorian roses with exceptional petal count, hand-tied with elegant greenery.',
    price: 84,
    originalPrice: 99,
    category: 'Roses',
    occasion: ['Love & Romance', 'Anniversary'],
    colors: ['Red'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviewCount: 340,
    badge: 'Best Seller',
    inStock: true,
    careInstructions: [
      'Re-cut stems every two days under water.',
      'Keep vase full of clean water mixed with flower preservative.'
    ],
    deliveryInfo: 'Includes complementary luxury card gift box.'
  },
  {
    id: 'prod-7',
    slug: 'lavender-love',
    name: 'Lavender Love',
    description: 'Deep purple lisianthus, lavender roses, and fragrant sea lavender accents.',
    longDescription: 'Sublime shades of violet and lavender come together in Lavender Love, evoking serenity, royalty, and delicate fragrance.',
    price: 72,
    category: 'Roses',
    occasion: ['Birthday', 'Thank You', 'Congratulations', 'Just Because'],
    colors: ['Purple'],
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.85,
    reviewCount: 77,
    inStock: true,
    careInstructions: [
      'Trim 1 inch off stems.',
      'Place in lukewarm water upon arrival.'
    ],
    deliveryInfo: 'Direct florist delivery in temperature-controlled vans.'
  },
  {
    id: 'prod-8',
    slug: 'garden-romance',
    name: 'Garden Romance',
    description: 'An artful combination of garden hydrangea, blush roses, and trailing ivy.',
    longDescription: 'Abundant texture meets soft blush tones. Garden Romance features cloud-like hydrangea clusters surrounded by scented garden roses.',
    price: 94,
    category: 'Hydrangeas',
    occasion: ['Love & Romance', 'Anniversary', 'Congratulations'],
    colors: ['Pink', 'White', 'Pastel'],
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviewCount: 115,
    badge: 'Popular',
    inStock: true,
    careInstructions: [
      'Hydrangeas love water! Ensure vase is constantly filled to the brim.',
      'If heads droop, submerge entire blossom in cool bath for 30 minutes.'
    ],
    deliveryInfo: 'Includes signature vase option available at checkout.'
  },
  {
    id: 'prod-9',
    slug: 'velvet-sunset',
    name: 'Velvet Sunset',
    description: 'Coral dahlias, deep orange roses, and autumn amber flora in an artisanal mix.',
    longDescription: 'Warm, rich hues reminiscent of golden hour skies. Velvet Sunset brings comforting coral and copper tones into high fashion floral design.',
    price: 76,
    category: 'Mixed Bouquets',
    occasion: ['Birthday', 'Thank You', 'Congratulations'],
    colors: ['Yellow', 'Red'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.75,
    reviewCount: 53,
    badge: 'New',
    inStock: true,
    careInstructions: [
      'Cut stems diagonally and refresh water every 48 hours.'
    ],
    deliveryInfo: 'Delivered in custom water pak for maximum vitality.'
  },
  {
    id: 'prod-10',
    slug: 'pure-grace-orchid',
    name: 'Pure Grace Orchid',
    description: 'Double-stemmed white Phalaenopsis orchid presented in a ceramic pot.',
    longDescription: 'Long-lasting elegance for modern interiors. Our double-stemmed white orchid produces architectural blooms that last for months with minimal care.',
    price: 88,
    category: 'Orchids',
    occasion: ['Congratulations', 'Thank You', 'Sympathy', 'Just Because'],
    colors: ['White'],
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.92,
    reviewCount: 89,
    badge: 'Best Seller',
    inStock: true,
    careInstructions: [
      'Water with 3 ice cubes or 1/4 cup of water once per week.',
      'Provide bright, indirect sunlight.'
    ],
    deliveryInfo: 'Potted in artisan ceramic planter with moss trim.'
  },
  {
    id: 'prod-11',
    slug: 'crimson-passion',
    name: 'Crimson Passion',
    description: 'Deep burgundy garden roses, dark calla lilies, and metallic copper foliage.',
    longDescription: 'Dramatic, alluring, and modern. Crimson Passion makes an unforgettable statement with moody dark tones and lush romantic textures.',
    price: 98,
    originalPrice: 115,
    category: 'Roses',
    occasion: ['Love & Romance', 'Anniversary'],
    colors: ['Red', 'Purple'],
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.88,
    reviewCount: 41,
    inStock: true,
    careInstructions: [
      'Keep away from heat sources and drafty areas.',
      'Re-trim stems every 2 days.'
    ],
    deliveryInfo: 'Includes signature gift note and premium care card.'
  },
  {
    id: 'prod-12',
    slug: 'pastel-serenade',
    name: 'Pastel Serenade',
    description: 'Soft sky blue hydrangeas, cream roses, and pale pink carnations.',
    longDescription: 'A gentle, soothing symphony of delicate hues. Perfect for welcoming a new baby, expressing sympathy, or sending a comforting hug across distance.',
    price: 68,
    category: 'Hydrangeas',
    occasion: ['Just Because', 'Sympathy', 'Thank You', 'Congratulations'],
    colors: ['Pastel', 'White', 'Pink'],
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviewCount: 68,
    inStock: true,
    careInstructions: [
      'Refill vase water daily to keep hydrangeas hydrated.'
    ],
    deliveryInfo: 'Safely packed with biodegradable stem gel hydration.'
  }
];

export const occasionCategories: OccasionCategory[] = [
  {
    id: 'occ-1',
    name: 'Birthday',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=600',
    description: 'Bright, joyous floral designs to celebrate another wonderful year.'
  },
  {
    id: 'occ-2',
    name: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=600',
    description: 'Elegant romantic roses and romantic garden blooms for milestone moments.'
  },
  {
    id: 'occ-3',
    name: 'Love & Romance',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    description: 'Express your deepest feelings with passionate stems and sweet scents.'
  },
  {
    id: 'occ-4',
    name: 'Congratulations',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=600',
    description: 'Celebrate achievements, promotions, and new beginnings in style.'
  },
  {
    id: 'occ-5',
    name: 'Thank You',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=600',
    description: 'Gracious arrangements to show heartfelt gratitude and appreciation.'
  },
  {
    id: 'occ-6',
    name: 'Sympathy',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600',
    description: 'Thoughtful white and pastel flowers to bring peace, comfort, and solace.'
  },
  {
    id: 'occ-7',
    name: 'Just Because',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600',
    description: 'Spontaneous floral gifts to make an ordinary day extraordinary.'
  }
];

export const customerReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    rating: 5,
    comment: 'The bouquet was even more beautiful than the photos. My mother absolutely loved it for her 60th birthday!',
    date: '2 days ago',
    location: 'Chicago, IL',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Marcus Sterling',
    rating: 5,
    comment: 'Simple Cafe delivered on time for our anniversary. The roses lasted over ten days and smelled heavenly.',
    date: '1 week ago',
    location: 'Evanston, IL',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sophia Chen',
    rating: 5,
    comment: 'Ordering was seamless and the flower quality is unmatched in Chicago. Truly a premium experience!',
    date: '2 weeks ago',
    location: 'Oak Park, IL',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'David Thorne',
    rating: 5,
    comment: 'The presentation box and handwritten card made my recipient feel so special. Will order again without doubt.',
    date: '3 weeks ago',
    location: 'Naperville, IL',
    verified: true
  }
];
