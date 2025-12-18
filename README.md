# Raya Ayurveda - React Frontend

A modern React application for Raya Ayurveda wellness retreats and bookings, converted from Next.js.

## Features

- 🌿 Beautiful, responsive UI for Ayurvedic wellness services
- 🧘‍♀️ Multiple pages: Home, About, Treatments, Bookings, FAQ, etc.
- 💚 Clean React architecture with React Router
- 🎨 Styled with Tailwind CSS
- ⚡ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy public assets:
   - Copy all files from `hotel-booking/public/` to `public/` in this project
   - This includes images, videos, fonts, and other assets

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, Footer)
├── pages/          # Page components for each route
├── App.jsx         # Main app with routing
├── main.jsx        # Entry point
└── index.css       # Global styles

public/             # Static assets (images, videos, fonts)
```

## Available Routes

- `/` - Home page
- `/about` - About us
- `/contact` - Contact form
- `/individual-stays` - Individual retreat bookings
- `/group-stays` - Group retreat bookings
- `/treatments` - Ayurvedic treatments
- `/consultation` - Book a consultation
- `/questionnaire` - Health questionnaire
- `/faq` - Frequently asked questions
- `/blogs` - Blog articles
- `/shop` - Product shop
- `/vouchers` - Gift vouchers
- `/policy` - Privacy policy
- `/destinations` - Travel destinations
- `/login` - User login

## Technologies Used

- **React** 18.2 - UI library
- **React Router** 6.20 - Client-side routing
- **Vite** 5.0 - Build tool and dev server
- **Tailwind CSS** 3.3 - Utility-first CSS framework
- **Lucide React** - Icon library

## Notes

- This is a front-end only application (no backend/API integration)
- Form submissions show demo alerts
- Login functionality is not implemented (front-end only)
- No AI consultation features (removed from original)

## Differences from Original Next.js Version

- Converted from Next.js to standard React with Vite
- Removed backend API routes
- Removed AI consultation features
- Replaced Next.js Image component with standard img tags
- Replaced Next.js Link with React Router Link
- Simplified routing with React Router

## License

Private - Raya Longlife © 2024

