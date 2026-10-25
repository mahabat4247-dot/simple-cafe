import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '../components/Header/Header';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { CartProvider, useCart } from '../context/CartContext';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';
import { Home } from '../pages/Home/Home';
import { Contact } from '../pages/Contact/Contact';
import { products } from '../data/products';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>{ui}</FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  it('renders brand name and navigation links', () => {
    renderWithProviders(<Header onOpenSearch={vi.fn()} />);

    expect(screen.getByText('Simple Cafe')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Occasions')).toBeInTheDocument();
    expect(screen.getByText('Best Sellers')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders announcement bar', () => {
    renderWithProviders(<Header onOpenSearch={vi.fn()} />);
    expect(
      screen.getByText(/Fresh flowers delivered with love • Free delivery on orders over \$75/i)
    ).toBeInTheDocument();
  });
});

describe('Home Page', () => {
  it('renders hero headline and supporting text', () => {
    renderWithProviders(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Flowers for life’s beautiful moments/i);
    expect(screen.getByText(/SHOP FLOWERS/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop by Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Best Sellers' })).toBeInTheDocument();
  });
});

describe('ProductCard Component', () => {
  it('renders product details accurately', () => {
    const testProduct = products[0];
    renderWithProviders(<ProductCard product={testProduct} />);

    expect(screen.getByRole('heading', { name: testProduct.name })).toBeInTheDocument();
    expect(screen.getByText(`$${testProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(testProduct.category)).toBeInTheDocument();
  });
});

const TestCartComponent = () => {
  const { cart, addToCart, updateQuantity, subtotal } = useCart();
  return (
    <div>
      <button
        onClick={() => addToCart(products[0], 'Standard', 1)}
        data-testid="add-btn"
      >
        Add To Bag
      </button>
      <span data-testid="cart-count">{cart.length}</span>
      <span data-testid="cart-qty">{cart[0]?.quantity || 0}</span>
      <span data-testid="subtotal">{subtotal}</span>
      {cart.length > 0 && (
        <button
          onClick={() => updateQuantity(products[0].id, 'Standard', 3)}
          data-testid="update-qty-btn"
        >
          Update Qty
        </button>
      )}
    </div>
  );
};

describe('Cart Context', () => {
  it('adds items to cart and updates quantities correctly', () => {
    renderWithProviders(<TestCartComponent />);

    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('add-btn'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-qty')).toHaveTextContent('1');
    expect(screen.getByTestId('subtotal')).toHaveTextContent(`${products[0].price}`);

    fireEvent.click(screen.getByTestId('update-qty-btn'));
    expect(screen.getByTestId('cart-qty')).toHaveTextContent('3');
    expect(screen.getByTestId('subtotal')).toHaveTextContent(`${products[0].price * 3}`);
  });
});

const TestFavoriteComponent = () => {
  const { isFavorite, toggleFavorite, totalFavorites } = useFavorites();
  const testId = products[0].id;
  return (
    <div>
      <button onClick={() => toggleFavorite(testId)} data-testid="fav-btn">
        Toggle Fav
      </button>
      <span data-testid="fav-state">{isFavorite(testId) ? 'YES' : 'NO'}</span>
      <span data-testid="total-favs">{totalFavorites}</span>
    </div>
  );
};

describe('Favorites Context', () => {
  it('toggles product favorites state', () => {
    renderWithProviders(<TestFavoriteComponent />);

    expect(screen.getByTestId('fav-state')).toHaveTextContent('NO');
    expect(screen.getByTestId('total-favs')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('fav-btn'));
    expect(screen.getByTestId('fav-state')).toHaveTextContent('YES');
    expect(screen.getByTestId('total-favs')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('fav-btn'));
    expect(screen.getByTestId('fav-state')).toHaveTextContent('NO');
    expect(screen.getByTestId('total-favs')).toHaveTextContent('0');
  });
});

describe('Contact Form Validation', () => {
  it('shows validation errors when submitted empty', () => {
    renderWithProviders(<Contact />);

    const submitBtn = screen.getByText('SEND MESSAGE');
    fireEvent.click(submitBtn);

    expect(screen.getByText('Full name is required')).toBeInTheDocument();
    expect(screen.getByText('Email address is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('submits successfully when fields are filled properly', () => {
    renderWithProviders(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('e.g. Jane Doe'), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('jane@example.com'), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(
      screen.getByPlaceholderText('Tell us how we can help you with your flower needs...'),
      {
        target: { value: 'Hello, I would like to inquire about wedding bouquets.' },
      }
    );

    fireEvent.click(screen.getByText('SEND MESSAGE'));

    expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument();
  });
});
