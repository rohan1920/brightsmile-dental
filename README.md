## BrightSmile Dental Care

> Modern, premium dental clinic website with Apple/Stripe-inspired design — Expo Showcase Website (UI Only)

A **high-quality, modern, responsive dental clinic website** built for a **College Expo / Exhibition**. This project focuses on **branding, UX polish, animations, and presentation** — with **no backend** and **offline-ready local assets**.

### Design & branding
- **Clinic name**: BrightSmile Dental Care
- **Tagline**: Your Smile, Our Priority
- **Look & feel**: white + soft blue + light teal, rounded cards, subtle shadows, micro-interactions

### Sections included (Homepage)
- **Hero**: brand, tagline, dual CTAs, local dental illustration, entry animations
- **Stats / Highlights**: animated counters
- **About**: story + mission/philosophy + illustration
- **Services / Treatments**: icon cards with hover depth
- **Doctors / Team**: 4 doctor profiles + hover effects
- **Appointment Form (UI only)**: multi-step form + loading state + success modal (“Demo Mode”)
- **Testimonials**: slider with avatars, verified badge, star ratings
- **Gallery**: before/after grid + lightbox preview
- **Contact / CTA**: contact details + offline map placeholder card
- **Footer**: navigation, newsletter demo UI, social proof badges
- **Chatbot Widget**: floating bottom-right, typing indicator, quick replies, smooth open/close

### Tech stack
- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS v4 (CSS-first tokens)**
- **Framer Motion**
- **Lucide Icons**

### Key features (expo polish)
- Sticky navbar with blur
- Scroll progress indicator
- Section reveal animations
- Local SVG assets (works without internet)
- Micro-interactions (hover lift, smooth transitions)
- Accessibility-friendly contrast + focus states

### Folder structure (high-level)
- `src/app`: Next.js routes + layout
- `src/components/layout`: navbar/footer/container/progress
- `src/components/sections`: page sections (Hero, Services, etc.)
- `src/components/ui`: reusable UI primitives (Button, Card, Modal, Input)
- `src/components/widgets`: chatbot, sliders, counters, lightbox
- `src/lib`: data + utilities (brand content, `cn`)
- `public/images`: **offline-safe local SVG assets**

### Run locally

**⚠️ Important:** Make sure you're inside the `brightsmile-dental` folder before running commands!

```bash
# Step 1: Clone the repository
git clone https://github.com/rohan1920/brightsmile-dental.git

# Step 2: Navigate into the project folder
cd brightsmile-dental

# Step 3: Install dependencies
npm install

# Step 4: Start development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

### ⚠️ Troubleshooting

**Problem:** You see a "Vite + React" default page instead of the dental website.

**Causes & Solutions:**

1. **Wrong Directory:** You're running `npm run dev` from the wrong folder.
   ```bash
   # Check your current directory
   pwd  # (Linux/Mac) or
   cd   # (Windows - shows current path)
   
   # Make sure you see: .../brightsmile-dental
   # If not, navigate there:
   cd brightsmile-dental
   ```

2. **Dependencies Not Installed:** Run `npm install` inside `brightsmile-dental` folder.
   ```bash
   cd brightsmile-dental
   npm install
   npm run dev
   ```

3. **Wrong Port:** Make sure you're opening `http://localhost:3000` (Next.js default), not `http://localhost:5173` (Vite default).

4. **Verify Project:** Check if `next.config.ts` exists in your current directory.
   ```bash
   ls next.config.ts  # Should show the file
   ```

### Demo screenshots (placeholders)
- `docs/screenshots/01-hero.png`
- `docs/screenshots/02-services.png`
- `docs/screenshots/03-appointment.png`
- `docs/screenshots/04-testimonials.png`
- `docs/screenshots/05-gallery-lightbox.png`
- `docs/screenshots/06-chatbot.png`

### Tips for presenting at an expo
- Start with **Hero → Services** to sell the “startup-grade” brand instantly.
- Let visitors **try the multi-step appointment form** and show the **success modal**.
- Open the **chatbot widget** and use quick replies to guide the demo.
- Click a **gallery case** to show the **lightbox** (offline images).
- Mention “**UI-only, offline-ready**” as a deliberate product-demo choice for reliability.
