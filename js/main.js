// ---- Mobile Nav Toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // ---- Age Gate ----
  const ageGate = document.querySelector('.age-gate');
  if (ageGate) {
    if (sessionStorage.getItem('age_verified') === 'true') {
      ageGate.classList.add('hidden');
    } else {
      ageGate.classList.remove('hidden');
    }
  }
});

function ageVerify(isOfAge) {
  const gate = document.querySelector('.age-gate');
  if (isOfAge) {
    sessionStorage.setItem('age_verified', 'true');
    gate.classList.add('hidden');
  } else {
    window.location.href = 'https://www.google.com';
  }
}

// ---- Product Data (inlined for file:// compatibility) ----
const PRODUCTS = [
  {"id":1,"name":"The Everyday","category":"Vibrators","price":29.99,"wholesale_cost":16.49,"material":"Medical-Grade Silicone","description":"Compact bullet vibrator with 10 intensity settings. Waterproof, USB rechargeable, and whisper-quiet.","tagline":"10 settings. Waterproof. Rechargeable.","image_color":"#7B68AE"},
  {"id":2,"name":"The Overachiever","category":"Vibrators","price":79.99,"wholesale_cost":47.99,"material":"Medical-Grade Silicone","description":"Dual-stimulation rabbit vibrator with 12 vibration patterns and 3 rotation speeds. USB rechargeable with a 90-minute battery life.","tagline":"Dual stimulation. 12 patterns. 90-min battery.","image_color":"#9B5D7A"},
  {"id":3,"name":"The Minimalist","category":"Vibrators","price":34.99,"wholesale_cost":19.24,"material":"Medical-Grade Silicone","description":"Slim, elegant vibrator with a single-button interface and 5 vibration modes.","tagline":"Small, like your husband's penis.","image_color":"#A8B5A0"},
  {"id":4,"name":"The Wanderer","category":"Vibrators","price":64.99,"wholesale_cost":38.99,"material":"Medical-Grade Silicone + ABS Plastic","description":"Full-size wand massager with a flexible neck and deep vibrations. Corded for unlimited power.","tagline":"Full-size wand. Flexible neck. Corded.","image_color":"#6B8E9B"},
  {"id":5,"name":"The Diplomat","category":"Vibrators","price":54.99,"wholesale_cost":32.99,"material":"Medical-Grade Silicone","description":"Curved G-spot vibrator with a precision tip and 10 pulsation patterns. Ergonomic handle for comfortable use.","tagline":"G-spot. Precision tip. 10 patterns.","image_color":"#8E7BAE"},
  {"id":6,"name":"The Night Shift","category":"Vibrators","price":24.99,"wholesale_cost":13.74,"material":"Medical-Grade Silicone","description":"Stretchy vibrating ring with a compact motor. Rechargeable, waterproof, and designed to be worn during use.","tagline":"Vibrating ring. Stretchy. Waterproof.","image_color":"#5B6E8A"},
  {"id":7,"name":"The Executive","category":"Vibrators","price":119.99,"wholesale_cost":71.99,"material":"Medical-Grade Silicone + Stainless Steel Accents","description":"Premium vibrator with aerospace-grade motor, 20 vibration settings, and a satin storage pouch. Travel-lock feature for discreet transport.","tagline":"Premium. 20 settings. Travel lock.","image_color":"#4A4A5A"},
  {"id":8,"name":"The Commuter","category":"Vibrators","price":39.99,"wholesale_cost":21.99,"material":"Medical-Grade Silicone","description":"Compact travel vibrator with a magnetic charging case that doubles as storage. 8 vibration modes in a pocket-sized package.","tagline":"Travel-sized. Magnetic case. 8 modes.","image_color":"#9BAFAF"},
  {"id":9,"name":"The Classic","category":"Non-Vibrating Toys","price":44.99,"wholesale_cost":26.99,"material":"Medical-Grade Silicone","description":"Smooth silicone dildo with a suction cup base. 6.5 inches insertable, 1.4 inch diameter. Harness-compatible.","tagline":"Suction cup. 6.5 inches. Harness-compatible.","image_color":"#C4A882"},
  {"id":10,"name":"The Gentleman","category":"Non-Vibrating Toys","price":59.99,"wholesale_cost":35.99,"material":"Borosilicate Glass","description":"Hand-blown borosilicate glass dildo with subtle ridges. Temperature-responsive — can be warmed or cooled. Dishwasher safe.","tagline":"Glass. Temperature play. Dishwasher safe.","image_color":"#8FBCD4"},
  {"id":11,"name":"The Architect","category":"Non-Vibrating Toys","price":89.99,"wholesale_cost":53.99,"material":"Polished Stainless Steel","description":"Double-ended stainless steel dildo with a mirror finish. Heavy, smooth, and extremely durable.","tagline":"Stainless steel. Double-ended. Mirror finish.","image_color":"#B0B0B8"},
  {"id":12,"name":"The Natural","category":"Non-Vibrating Toys","price":49.99,"wholesale_cost":29.99,"material":"Medical-Grade Silicone","description":"Realistic silicone dildo with a dual-density core — firm inside, soft outside. Suction cup base. 7 inches insertable.","tagline":"Dual-density. Realistic. Suction cup base.","image_color":"#D4A98A"},
  {"id":13,"name":"The Statement","category":"Non-Vibrating Toys","price":54.99,"wholesale_cost":32.99,"material":"Medical-Grade Silicone","description":"Large silicone dildo for experienced users. 8.5 inches insertable, 1.8 inch diameter. Suction cup base, harness-compatible. The dildo that makes a statement. And that statement is \"I masturbate.\"","tagline":"The statement is \"I masturbate.\"","image_color":"#8B6B8E"},
  {"id":14,"name":"The Compromise","category":"Couples' Toys","price":69.99,"wholesale_cost":41.99,"material":"Medical-Grade Silicone","description":"Wearable couples' vibrator designed for use during intercourse. Flexible arms, slim profile, 10 vibration modes.","tagline":"Wearable. 10 modes. Slim profile.","image_color":"#A87BA8"},
  {"id":15,"name":"The Icebreaker","category":"Couples' Toys","price":89.99,"wholesale_cost":53.99,"material":"Medical-Grade Silicone + ABS Plastic","description":"Couples' exploration kit including a blindfold, massage candle, vibrating ring, feather tickler, and a silicone vibrator. Presented in a gift box with conversation prompt cards.","tagline":"5-piece kit. Gift box. Prompt cards included.","image_color":"#7A9B8E"},
  {"id":16,"name":"The Conversation Starter","category":"Couples' Toys","price":74.99,"wholesale_cost":44.99,"material":"Medical-Grade Silicone","description":"App-controlled vibrator with Bluetooth connectivity. Works from any distance. 12 vibration patterns, custom pattern creation, and a chat feature.","tagline":"App-controlled. Bluetooth. Any distance.","image_color":"#6B8EA8"},
  {"id":17,"name":"The Essentials","category":"Lubricants & Accessories","price":14.99,"wholesale_cost":7.49,"material":"Water-Based Formula","description":"Water-based personal lubricant. 8 oz. Paraben-free, glycerin-free, hypoallergenic. Compatible with all toy materials and latex condoms.","tagline":"Water-based. 8 oz. Hypoallergenic.","image_color":"#A8C4D4"},
  {"id":18,"name":"The Toolkit","category":"Lubricants & Accessories","price":24.99,"wholesale_cost":13.74,"material":"Various","description":"Toy care kit: antibacterial toy cleaner spray (4 oz), microfiber storage pouch, and a satin-lined zipper case.","tagline":"Cleaner. Storage pouch. Zipper case.","image_color":"#C4C4B0"},
  {"id":19,"name":"The Conversation Piece","category":"Gag Gifts & Novelty","price":34.99,"wholesale_cost":19.24,"material":"Medical-Grade Silicone","description":"Oversized silicone dildo. 12 inches. Popular for bachelorette parties, white elephant gifts, and novelty purposes.","tagline":"12 inches. Novelty. Bachelorette favorite.","image_color":"#E07A7A"},
  {"id":20,"name":"The Gift Receipt","category":"Gag Gifts & Novelty","price":49.99,"wholesale_cost":27.49,"material":"Various","description":"Mystery box containing 3-5 curated products from our catalog. Each box includes a mix of practical and novelty items.","tagline":"Mystery box. 3-5 products. Curated.","image_color":"#D4A864"}
];

function loadProducts() {
  return Promise.resolve(PRODUCTS);
}

function createProductCard(product) {
  const card = document.createElement('a');
  card.href = `product.html?id=${product.id}`;
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.innerHTML = `
    <div class="product-image">
      <img src="img/${product.id}.jpg" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-tagline">${product.tagline}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
    </div>
  `;
  return card;
}

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}
