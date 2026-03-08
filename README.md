# CommentCRM

Instagram → WhatsApp Sales CRM for Indian sellers.

---

## 🚀 Deploy to Vercel (10 minutes)

### Step 1 — Install Node (if not done)
Download from https://nodejs.org (LTS version)

### Step 2 — Copy project to your PC
Put this `commentcrm` folder somewhere on your PC, e.g.:
```
C:\Users\kamal\commentcrm\
```

### Step 3 — Open terminal in that folder
```bash
cd C:\Users\kamal\commentcrm
```

### Step 4 — Install dependencies
```bash
npm install
```

### Step 5 — Test locally
```bash
npm start
```
Opens at http://localhost:3000 — check everything works.

### Step 6 — Push to GitHub
```bash
git init
git add .
git commit -m "CommentCRM v1"
```
Go to github.com → New repository → name it `commentcrm` → copy the remote URL, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/commentcrm.git
git push -u origin main
```

### Step 7 — Deploy on Vercel
1. Go to https://vercel.com → Sign up with GitHub
2. Click "New Project" → Import your `commentcrm` repo
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy**
5. Your site is live at `commentcrm.vercel.app` 🎉

### Step 8 — Future updates (git push = auto deploy)
```bash
cd C:\Users\kamal\commentcrm
git add .
git commit -m "what you changed"
git push
```
Vercel redeploys automatically in ~30 seconds.

---

## ✏️ How to Edit Things Easily

### Change any text, pricing, or content
Edit one file: **`src/data/config.js`**
- Change pricing → `PRICING` object
- Change hero stats → `HERO_STATS`
- Change testimonials → `TESTIMONIALS`
- Change how-it-works steps → `STEPS`
- Change comparison table → `COMPARE_ROWS`
- Change ticker items → `TICKER_ITEMS`
- Change AI model → `AI_CONFIG`

### Change colors
Edit **`src/styles/global.css`** — just change the `:root` variables:
```css
--accent: #7c6dff;   /* main purple */
--a2:     #ff6b6b;   /* red/hot */
--a3:     #00d4aa;   /* teal/V3 */
--gold:   #ffb800;   /* NOVA gold */
```

### Change the V1 app logic/UI
Edit **`src/components/apps/V1App.jsx`**

### Change the V2 app
Edit **`src/components/apps/V2App.jsx`**

### Change V3 Analytics
Edit **`src/components/apps/V3App.jsx`**

### Change NOVA / V3 Pro
Edit **`src/components/apps/V3ProApp.jsx`**

### Change the navbar
Edit **`src/components/Navbar.jsx`**

### Change hero/sections/footer
Edit **`src/components/Sections.jsx`**

### Change reusable UI (buttons, modals, etc.)
Edit **`src/components/UI.jsx`**

---

## 📁 Project Structure

```
commentcrm/
├── public/
│   └── index.html          ← HTML shell (rarely need to edit)
├── src/
│   ├── data/
│   │   └── config.js       ← ⭐ EDIT THIS for all content/pricing
│   ├── styles/
│   │   └── global.css      ← ⭐ EDIT THIS for colors/fonts
│   ├── hooks/
│   │   └── index.js        ← localStorage, AI, scroll hooks
│   ├── components/
│   │   ├── UI.jsx           ← Button, Modal, Toast, AppFrame
│   │   ├── Navbar.jsx       ← Top navigation
│   │   ├── Sections.jsx     ← Hero, Problem, Pricing, Footer etc.
│   │   ├── AppShowcase.jsx  ← Version tab switcher
│   │   └── apps/
│   │       ├── V1App.jsx    ← Free CRM app
│   │       ├── V2App.jsx    ← Pro CRM app
│   │       ├── V3App.jsx    ← 5-year analytics
│   │       └── V3ProApp.jsx ← NOVA AI + 15 years
│   ├── App.jsx             ← Root component + modals
│   └── index.js            ← React entry point
├── package.json
├── vercel.json
└── README.md
```

---

## 💡 Common Edits

**Add a new testimonial:**
Open `src/data/config.js`, add to `TESTIMONIALS` array.

**Change V3 pricing:**
Open `src/data/config.js`, edit `PRICING.v3pro.price`.

**Add a new template to V2:**
Open `src/components/apps/V2App.jsx`, add to `TEMPLATES` array.

**Add a new lead source to V3:**
Open `src/components/apps/V3App.jsx`, add to the `sources` object in `genData()`.

**Change NOVA's personality:**
Open `src/components/apps/V3ProApp.jsx`, edit the `NOVA_SYSTEM` function.
