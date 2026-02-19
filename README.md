# 🔥 Portfolio — Full Stack Developer

A bold, animated single-page portfolio built with **React** + **Framer Motion**.  
Orange & Black theme. Custom cursor. Scroll-triggered animations.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

```bash
# 1. Navigate into the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Your portfolio will open at **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template (Google Fonts loaded here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css  # Sticky nav with active section tracking
│   │   ├── Hero.jsx/css    # Typewriter effect + floating shapes
│   │   ├── About.jsx/css   # Slide-in with tech stack badges
│   │   ├── Skills.jsx/css  # Animated progress bars
│   │   ├── Projects.jsx/css # Filterable project cards with hover
│   │   └── Contact.jsx/css # Contact form + socials + footer
│   ├── styles/
│   │   └── global.css      # Design tokens, cursor, scrollbar
│   ├── App.jsx             # Root component + custom cursor logic
│   └── index.js            # React entry point
└── package.json
```

---

## ✏️ Customization Guide

### 1. Personal Info
Update these files with **your real info**:

| File | What to change |
|------|---------------|
| `Hero.jsx` | `YOUR NAME`, roles in `ROLES` array, stats |
| `About.jsx` | Bio text, tech stack, GitHub link |
| `Skills.jsx` | Skill names and percentage levels |
| `Projects.jsx` | Project titles, descriptions, tech, links |
| `Contact.jsx` | Location, social links, email |

### 2. Colors
Edit `src/styles/global.css` — change `--orange` to any color:
```css
:root {
  --orange: #FF6B00;        /* Main accent */
  --orange-bright: #FF8C00; /* Hover state */
  --orange-dim: #CC5500;    /* Gradient start */
}
```

### 3. Adding Your Photo
In `About.jsx`, replace the avatar placeholder div with:
```jsx
<img src="/photo.jpg" alt="Harsh Saini" className="avatar-photo" />
```
Then add CSS for `.avatar-photo` in `About.css`.

### 4. Resume
Drop your `resume.pdf` file in the `/public` folder — the download button in About is already linked to it.

### 5. Contact Form
The form is UI-only by default. To make it functional:
- **EmailJS** (free): https://emailjs.com
- **Formspree** (free): https://formspree.io
- Replace the `handleSubmit` function in `Contact.jsx`

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized build in `/build` — ready to deploy to:
- **Netlify** (drag & drop the `/build` folder)
- **Vercel** (`vercel deploy`)
- **GitHub Pages**

---

## 🎨 Tech Stack

- **React 18** — UI framework
- **Framer Motion 11** — Animations & scroll effects
- **CSS Modules** — Scoped styling per component
- **Bebas Neue + Syne + JetBrains Mono** — Typography trio
- **Google Fonts** — Font delivery

---

## 🌟 Features

- ✅ Custom animated cursor
- ✅ Typewriter effect (Hero)
- ✅ Mouse-parallax floating shapes (Hero)
- ✅ Scroll-triggered section animations
- ✅ Animated skill progress bars
- ✅ Filterable project cards with hover reveal
- ✅ Sticky navbar with active section tracking
- ✅ Mobile responsive + hamburger menu
- ✅ Contact form with success state
- ✅ Smooth scroll navigation
- ✅ Orange glow effects throughout

---

Built with 🔥 React + Framer Motion
