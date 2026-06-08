# AKASH BJ — Portfolio Website

**KTM-themed** (Orange · Matte Black · White) single-page portfolio with **dark / light mode toggle**.

## Tech Stack
- React 18 + Vite 5
- No CSS framework dependency (all styles inline / global CSS)
- Google Fonts: Barlow + Barlow Condensed

---

## 🚀 Deploy to Vercel via GitHub — Step-by-Step

### 1. Push to GitHub

```bash
# In the project folder:
git init
git add .
git commit -m "Initial commit — AKASH BJ Portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/akashbj-portfolio.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to **https://vercel.com/new**
2. Click **"Add New → Project"**
3. Select your GitHub repo `akashbj-portfolio`
4. Vercel auto-detects **Vite** — click **Deploy**
5. 🎉 Live in ~60 seconds

### 3. Custom Domain (Optional)

In Vercel → Project → **Settings → Domains** → add your domain.

---

## 🖥 Local Development

```bash
npm install
npm run dev        # → http://localhost:5173
```

```bash
npm run build      # production build → /dist
npm run preview    # preview the build locally
```

---

## 📂 File Structure

```
akashbj-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx       ← ALL sections + theme logic
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## 🎨 Colour Palette (KTM Inspired)

| Token         | Dark Mode   | Light Mode  |
|---------------|-------------|-------------|
| Background    | `#0D0D0D`   | `#F2F2F2`   |
| Surface       | `#181818`   | `#FFFFFF`   |
| Card          | `#212121`   | `#FAFAFA`   |
| Text          | `#F0F0F0`   | `#111111`   |
| Subtext       | `#888888`   | `#555555`   |
| **KTM Orange**| `#FF6B00`   | `#FF6B00`   |

---

© 2026 AKASH BJ · All rights reserved.
