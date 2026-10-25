# Simple Cafe — Modern Flower Shop

A premium, production-quality frontend e-commerce web application for a modern flower shop boutique named **Simple Cafe**.

Tagline: *Flowers for life’s beautiful moments.*

This project is built to serve as a clean, production-ready frontend baseline for DevOps students practicing continuous integration, linting, testing, static code analysis, containerization, and cloud deployment pipelines.

---

## 🌟 Features & Highlights

- **Elegant Premium Design:** Custom floral design palette (cream, blush pink, muted rose, sage green) with high-definition visuals and responsive layouts.
- **Interactive Shop & Filters:** Filter products by Flower Type, Occasion, Color Palette, and Price Range with instant sorting options.
- **Dynamic Product Details:** Complete product views with size selection (Standard, Deluxe, Premium), delivery date picker, complimentary gift card message, care guides, and related products.
- **Persistent Shopping Cart & Favorites:** Full cart drawer and favorites manager with `localStorage` state persistence.
- **Interactive Search:** Overlay search modal for instant product discovery.
- **Client-Side Form Validation:** Contact form with real-time field validation and success feedback.

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Testing:** Vitest & React Testing Library
- **Linting:** ESLint & TypeScript-ESLint

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

Clone the repository and install project dependencies:

```bash
git clone <repository-url>
cd simple-cafe
npm install
```

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the application in development mode with hot-module replacement (HMR).
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run lint`
Executes ESLint across all TypeScript and TSX files to verify code quality and style standards.

### `npm run test`
Runs the Vitest test suite to verify component rendering, state hooks, cart behavior, and form validations.

### `npm run build`
Compiles TypeScript and builds the production bundle into the `dist/` directory using Vite.

### `npm run preview`
Locally previews the static production build created in the `dist/` directory.

---

## 📁 Production Artifacts

Running `npm run build` generates the optimized production build output in the **`dist/`** directory. This contains clean static assets (`HTML`, `JS`, `CSS`, images) ready to be served by web servers or containerized for production deployment.

---

## 📄 License

© 2026 Simple Cafe. All rights reserved.
