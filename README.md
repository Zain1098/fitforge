# FitForge - Transform Your Fitness Journey

A stunning, motion-rich fitness tracking web application built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

### Public Pages
- **Landing Page** - Animated hero, features showcase, testimonials
- **About** - Mission, values, and journey timeline
- **Pricing** - Free vs Premium plans comparison
- **Contact** - Form with animated UI
- **Privacy & Terms** - Legal pages

### Authenticated Features
- **Dashboard** - Welcome banner, stats cards, charts, quick actions
- **Workouts** - Log and track training sessions
- **Nutrition** - Monitor meals and macros
- **Progress** - Visualize weight and strength trends
- **AI Plans** - Premium AI-powered training plans (placeholder)
- **Reports** - Download fitness data exports
- **Reminders** - Schedule workout and meal notifications
- **Profile** - Manage account settings and preferences

## 🎨 Design System

**Color Palette:**
- Primary: Electric Green (#00ff88)
- Secondary: Cyan Blue (#00d4ff)
- Accent: Vibrant Purple (#a855f7)
- Base: Dark cyberpunk theme

**Typography:**
- Headings: Orbitron (futuristic)
- Body: Inter (clean, readable)

**Visual Effects:**
- Glassmorphism cards
- Neon glow effects
- Smooth Framer Motion transitions
- Animated gradients
- Floating background elements

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** TailwindCSS + CSS Variables
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **State:** React Context API

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Public navigation
│   │   ├── Footer.tsx           # Site footer
│   │   └── DashboardSidebar.tsx # Dashboard nav
│   ├── ui/                      # Shadcn components
│   │   └── motion-div.tsx       # Animation wrappers
│   └── StatCard.tsx             # Reusable stat display
├── contexts/
│   ├── AuthContext.tsx          # Authentication state
│   └── ThemeContext.tsx         # Light/Dark mode
├── pages/
│   ├── Home.tsx                 # Landing page
│   ├── About.tsx                # About page
│   ├── Pricing.tsx              # Pricing page
│   ├── Contact.tsx              # Contact form
│   ├── Privacy.tsx              # Privacy policy
│   ├── Terms.tsx                # Terms of service
│   ├── Login.tsx                # Login form
│   ├── Signup.tsx               # Signup form
│   ├── Dashboard.tsx            # Main dashboard
│   ├── Workouts.tsx             # Workout tracking
│   ├── Nutrition.tsx            # Meal logging
│   ├── Progress.tsx             # Progress charts
│   ├── AIPlans.tsx              # AI plans (premium)
│   ├── Reports.tsx              # Data exports
│   ├── Reminders.tsx            # Notifications
│   ├── Profile.tsx              # Settings
│   └── NotFound.tsx             # 404 page
├── hooks/
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── lib/
│   └── utils.ts                 # Utilities (cn)
├── App.tsx                      # Route configuration
├── main.tsx                     # Entry point
└── index.css                    # Design system tokens
```

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project
cd fitforge

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 🔐 Authentication

Currently uses mock authentication with localStorage. In production, integrate with a backend service like:
- Supabase Auth
- Firebase Auth
- Custom API

## 📊 Mock Data

All data (workouts, meals, stats) is currently mocked for demonstration. To connect to a real backend:

1. Replace mock data with API calls
2. Update context providers to fetch from backend
3. Implement proper error handling

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 158 100% 50%;        /* Green */
  --secondary: 192 100% 50%;      /* Blue */
  --accent: 280 80% 65%;          /* Purple */
}
```

### Fonts
Fonts are loaded from Google Fonts in `index.html`. To change:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update `tailwind.config.ts`:

```js
fontFamily: {
  'custom': ['YourFont', 'sans-serif'],
}
```

### Animations
Modify animation timings in `tailwind.config.ts` under `theme.extend.keyframes` and `theme.extend.animation`.

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Features Roadmap

- [ ] Real backend integration
- [ ] Social authentication
- [ ] Workout video tutorials
- [ ] Exercise library
- [ ] Meal planning AI
- [ ] Community features
- [ ] Mobile app (React Native)
- [ ] Wearable device sync

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- **Shadcn/ui** for beautiful component primitives
- **Framer Motion** for smooth animations
- **Recharts** for data visualization
- **Lucide** for crisp icons

---

Built with ❤️ by the FitForge team

**Transform Your Body. Forge Your Future.**
