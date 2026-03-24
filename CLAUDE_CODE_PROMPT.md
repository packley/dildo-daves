# Claude Code Prompt for Dildo Dave's Dildo Emporium Demo

## Instructions

Read BUSINESS_PLAN.md for full context. This is a humor-forward adult e-commerce brand called "Dildo Dave's Dildo Emporium." The comedic premise for video content is a used car salesman selling dildos, but the WEBSITE DESIGN should be clean, modern, and professional — like a real e-commerce store. The humor comes from the contrast: a beautifully designed, totally legitimate-looking online store that happens to be called "Dildo Dave's Dildo Emporium" and has deadpan, dry humor sprinkled throughout the copy. Think: the design of Maude or Dame (clean, modern sexual wellness brands) but with the name and voice of two guys who think "I masturbate" is peak comedy.

IMPORTANT: The founders' actual humor is dry, subtle, and deadpan — NOT wacky, cheesy, or over-the-top on the website itself. The over-the-top used-car-salesman energy is reserved for video content, not the site design. AI-generated jokes will be placeholders — the real comedy comes from the founders. Don't try too hard to be funny in the copy. When in doubt, be professional with a straight face. The name does most of the heavy lifting.

## What to Build

### 1. Full Storefront Mockup Website

Build a complete, polished e-commerce storefront as a static site (HTML/CSS/JS). This needs to look like a real store Dave could click through and think "oh shit, this is actually happening."

Design direction:
- Clean, modern, professional. Think Shopify premium theme quality.
- Minimal color palette — mostly white/off-white with one or two accent colors. NOT yellows and reds. NOT cheesy.
- Good typography. Plenty of whitespace. 
- The design should feel like it belongs next to brands like Maude, Dame, or Aesop — understated and confident.
- The humor comes from the NAME and the COPY, not the visual design.

Pages to build:
- **Landing page** with hero section, featured products, value props, email signup
- **Product listing page** showing a grid of ~20 real products (vibrators, non-vibrating toys, lubricants, accessories, novelty/gag gifts). Use real product categories and realistic prices ($15–$150 range). Make up plausible product names.
- **Individual product page template** with product image placeholder, description, price, add-to-cart button, reviews section
- **About page** — the origin story of Dildo Dave's. Two friends, forty years, a joke that became a business. Keep it mostly straight-faced.
- **FAQ page** — mix of real FAQs (shipping, returns, materials safety) with occasional deadpan humor

For product descriptions: write them mostly straight — what the product is, what it's made of, what it does. You can attempt dry humor but keep it subtle. The founders will rewrite these. Placeholder product images can just be colored rectangles or simple SVG placeholders with the product name.

### 2. Interactive Financial Calculator / Dashboard

This is the most important technical piece. Build a sophisticated, interactive financial model as a standalone web app (React or vanilla JS, whatever works best).

The calculator should let users adjust:
- **Orders per month** (slider, 0–5000)
- **Average order value** (slider, $30–$100, default $55)
- **Gross margin %** (slider, 25%–75%, default 35%)
- **Monthly fixed costs** (input, default $150)
- **Monthly ad spend** (slider, $0–$15,000)
- **Business model presets**: buttons for "Pure Dropshipping" (35% margin), "Hybrid/3PL" (50%), "Held Inventory" (60%), "Private Label" (70%) that set the margin slider

It should display in real-time:
- Monthly revenue
- Annual revenue
- Monthly gross profit
- Annual gross profit
- Annual operating costs
- Annual net profit
- **Per-founder annual income (assuming 50/50 split)**
- Break-even orders/month (given current costs and margin)
- Visual indicator: color-coded against milestones ($0, $50K, $100K, $200K per founder)

Additional features:
- A 5-year projection table that models growth. Let the user set an annual order growth rate (e.g., 50%, 100%, 200%) and a margin improvement schedule (e.g., margin increases 5% per year as you transition from dropshipping to held inventory). Show year-by-year revenue, costs, net profit, and per-founder income.
- A "time to income replacement" calculator: given the growth rate and current starting point, how many months until each founder is earning $X/year? Let them set the target income.
- Comparison view: show 3 scenarios side-by-side (conservative, moderate, optimistic) with different growth assumptions.
- Charts/graphs for the 5-year projection (line charts for revenue and per-founder income over time)

Design this to look good. This is going to a VP of Finance — it needs to feel credible and data-driven, not like a toy. Use a clean, professional design. Recharts or Chart.js for graphs.

### 3. Product Catalog Seed Data

Create a JSON file with 20 realistic products across these categories:
- Vibrators (8 products)
- Non-vibrating toys (5 products)  
- Couples' toys (3 products)
- Lubricants & accessories (2 products)
- Gag gifts / novelty (2 products)

Each product should have:
- name (plausible product name)
- category
- price (realistic, $15–$150)
- wholesale_cost (for margin calculations, ~50-65% of retail for dropship)
- material (silicone, stainless steel, glass, ABS, water-based, etc.)
- description (mostly straightforward product description, placeholder for founders to rewrite)
- tagline (one-liner, can attempt dry humor but keep it deadpan)

### 4. 90-Day Content Calendar

Create a structured content calendar (could be a page in the site, a standalone HTML page, or a well-formatted markdown file) with:
- 90 days of content ideas
- For each day: platform (TikTok, Instagram, Twitter/X, YouTube), content type (video, image, text post), brief concept description, and which founder(s) are involved
- Mix of content types from the business plan: "Deals of the Day" pitches, reaction content, educational comedy, seasonal tie-ins, behind-the-scenes
- The content IDEAS can be specific but the actual jokes/scripts should be marked as [FOUNDERS WRITE THIS] — don't try to write the comedy

## Technical Notes

- Use --dangerously-skip-permissions to move fast
- This is a demo/pitch tool, not production code. Optimize for looking impressive, not for maintainability.
- Everything should work as static files that can be opened in a browser — no backend required.
- Make it look GOOD. This needs to convince a VP of Finance that two guys can build a real business.
