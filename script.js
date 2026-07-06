// ============================================
// MATCH PRINT ADVERTISING — interactive job flow
// ============================================

const WHATSAPP_NUMBER = "60108870233"; // Match Print sales team, no + or leading 0s beyond country code

const ICONS = {
  sticker: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 8h20l10 10v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z"/><path d="M30 8v8a2 2 0 0 0 2 2h8"/></svg>`,
  banner: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h36v18H6z"/><path d="M6 30l6 8M42 30l-6 8M16 12v18M32 12v18"/></svg>`,
  booklet: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 10c-4-3-10-3-16-1v26c6-2 12-2 16 1 4-3 10-3 16-1V9c-6-2-12-2-16 1Z"/><path d="M24 10v26"/></svg>`,
  box: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l18-8 18 8-18 8-18-8Z"/><path d="M6 15v18l18 8 18-8V15"/><path d="M24 23v18"/></svg>`,
  design: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 40 6 30l24-24 4 4-24 24-2 6Z"/><path d="M30 10l8 8"/></svg>`,
  megaphone: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 20v8h6l16 10V10L12 20H6Z"/><path d="M28 16a8 8 0 0 1 0 16"/></svg>`,
  card: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="12" width="38" height="24" rx="2"/><path d="M12 24h10M12 30h6"/><circle cx="33" cy="24" r="4"/></svg>`,
  gift: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18h36v8H6z"/><path d="M8 26h32v14H8z"/><path d="M24 18v22"/><path d="M24 18c-3-8-14-8-14 0M24 18c3-8 14-8 14 0"/></svg>`
};

const CATEGORIES = [
  {
    id: "labels",
    name: "Labels & Stickers",
    tag: "01",
    icon: ICONS.sticker,
    blurb: "Vinyl, mirror coat, transparent & more",
    products: [
      { name: "Vinyl Stickers", desc: "Durable, weatherproof, cut to any shape." },
      { name: "Transparent Stickers", desc: "Clear film for glass & packaging." },
      { name: "Mirror Coat Stickers", desc: "Reflective metallic finish for premium branding." },
      { name: "Product / Barcode Labels", desc: "Roll or sheet labels for retail & FnB." }
    ]
  },
  {
    id: "banner",
    name: "Banner & Bunting",
    tag: "02",
    icon: ICONS.banner,
    blurb: "Outdoor-ready PVC, buntings & backdrops",
    products: [
      { name: "PVC Banner", desc: "Heavy-duty outdoor banner, eyelets included." },
      { name: "Bunting Flags", desc: "String buntings for launches & events." },
      { name: "Roll-Up Banner", desc: "Portable stand banner for booths & events." },
      { name: "Event Backdrop", desc: "Large-format backdrop for stage & photo walls." }
    ]
  },
  {
    id: "booklet",
    name: "Booklets",
    tag: "03",
    icon: ICONS.booklet,
    blurb: "Menus, catalogs & company profiles",
    products: [
      { name: "Menu Booklet", desc: "Laminated, food-safe restaurant menus." },
      { name: "Company Profile Book", desc: "Multi-page saddle-stitch or perfect bound." },
      { name: "Product Catalog", desc: "Full-colour catalog for your product range." },
      { name: "Instruction / Guide Book", desc: "Manuals, guides, workbook printing." }
    ]
  },
  {
    id: "packaging",
    name: "Packaging & Bags",
    tag: "04",
    icon: ICONS.box,
    blurb: "Custom boxes, paper bags & pouches",
    products: [
      { name: "Custom Printed Box", desc: "Retail & shipping boxes, your branding." },
      { name: "Paper Bag", desc: "Branded carrier bags, various sizes." },
      { name: "Food / Product Pouch", desc: "Stand-up pouches for FnB & retail." },
      { name: "Courier Bag", desc: "Custom-printed poly mailers." }
    ]
  },
  {
    id: "design",
    name: "Design Services",
    tag: "05",
    icon: ICONS.design,
    blurb: "Logo, brand identity & layout design",
    products: [
      { name: "Logo Design", desc: "Original logo concepts for your brand." },
      { name: "Brand Identity Package", desc: "Logo, colours, fonts & guidelines." },
      { name: "Packaging Design", desc: "Artwork ready for print, box or label." },
      { name: "Social Media Design Set", desc: "Templates for posts, stories & ads." }
    ]
  },
  {
    id: "marketing",
    name: "Marketing Materials",
    tag: "06",
    icon: ICONS.megaphone,
    blurb: "Flyers, brochures & calendars",
    products: [
      { name: "Flyers", desc: "A5/A6 flyers for promos & handouts." },
      { name: "Brochures", desc: "Tri-fold or bi-fold, full colour." },
      { name: "Table Calendar", desc: "Corporate desk calendars, custom design." },
      { name: "Posters", desc: "A3 to large-format promotional posters." }
    ]
  },
  {
    id: "namecard",
    name: "Name Cards",
    tag: "07",
    icon: ICONS.card,
    blurb: "Standard to premium textured finishes",
    products: [
      { name: "Standard Name Card", desc: "Matte or glossy, fast turnaround." },
      { name: "Premium Textured Card", desc: "Cotton / linen stock, embossed feel." },
      { name: "Metal Card", desc: "Stainless steel cards for a bold impression." },
      { name: "QR Digital Name Card", desc: "Card with scannable digital profile." }
    ]
  },
  {
    id: "gifts",
    name: "Premium Gifts",
    tag: "08",
    icon: ICONS.gift,
    blurb: "Mugs, tumblers, totes & lanyards",
    products: [
      { name: "Custom Printed Mug", desc: "Full-colour print, your logo or design." },
      { name: "Corporate Tumbler", desc: "Branded tumblers for staff & clients." },
      { name: "Tote Bag", desc: "Canvas tote, screen or full-colour print." },
      { name: "Lanyard", desc: "Custom woven or printed lanyards." }
    ]
  }
];

// ---------------- state ----------------
const state = { category: null, product: null };

// ---------------- render categories ----------------
const catGrid = document.getElementById("cat-grid");
CATEGORIES.forEach(cat => {
  const card = document.createElement("button");
  card.className = "cat-card reveal";
  card.setAttribute("data-id", cat.id);
  card.innerHTML = `
    <span class="tag">${cat.tag}</span>
    <div class="icon">${cat.icon}</div>
    <h3>${cat.name}</h3>
    <p>${cat.blurb}</p>
  `;
  card.addEventListener("click", () => selectCategory(cat.id, card));
  catGrid.appendChild(card);
});

function selectCategory(id, cardEl) {
  state.category = CATEGORIES.find(c => c.id === id);
  state.product = null;

  document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active"));
  cardEl.classList.add("active");

  renderProducts();
  updateDocket();

  document.getElementById("products-section").classList.add("show");
  document.getElementById("form-section").classList.remove("show");

  setTimeout(() => {
    document.getElementById("products-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

// ---------------- render products ----------------
function renderProducts() {
  const wrap = document.getElementById("prod-grid");
  wrap.innerHTML = "";
  document.getElementById("product-context").innerHTML =
    `Showing products in <b>${state.category.name}</b> — pick one to build your job order`;

  state.category.products.forEach(p => {
    const card = document.createElement("button");
    card.className = "prod-card reveal in";
    card.innerHTML = `
      <div class="prod-thumb">${state.category.icon}</div>
      <div class="prod-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <span class="prod-select">Select this →</span>
      </div>
    `;
    card.addEventListener("click", () => selectProduct(p, card));
    wrap.appendChild(card);
  });
}

function selectProduct(product, cardEl) {
  state.product = product;
  document.querySelectorAll(".prod-card").forEach(c => {
    c.classList.remove("active");
    c.querySelector(".prod-select").textContent = "Select this →";
  });
  cardEl.classList.add("active");
  cardEl.querySelector(".prod-select").textContent = "Selected ✓";

  updateDocket();
  updateOrderSummary();

  document.getElementById("form-section").classList.add("show");
  setTimeout(() => {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function updateOrderSummary() {
  document.getElementById("summary-category").textContent = state.category.name;
  document.getElementById("summary-product").textContent = state.product.name;
}

// ---------------- docket / stepper ----------------
function updateDocket() {
  const steps = document.querySelectorAll(".docket-step");
  steps.forEach(s => s.classList.remove("active", "done"));
  steps[0].classList.add(state.category ? "done" : "active");
  if (state.category && !state.product) steps[1].classList.add("active");
  if (state.category && state.product) { steps[1].classList.add("done"); steps[2].classList.add("active"); }
}

// ---------------- form submit -> whatsapp ----------------
const form = document.getElementById("order-form");
form.addEventListener("submit", e => {
  e.preventDefault();

  if (!state.category || !state.product) {
    showToast("Pick a category and product first ↑");
    document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const name = document.getElementById("f-name").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const company = document.getElementById("f-company").value.trim();
  const qty = document.getElementById("f-qty").value.trim();
  const notes = document.getElementById("f-notes").value.trim();

  if (!name || !phone) {
    showToast("Name and phone number are required");
    return;
  }

  const lines = [
    "*New Job Order — Match Print Advertising*",
    "",
    `*Category:* ${state.category.name}`,
    `*Product:* ${state.product.name}`,
    `*Quantity:* ${qty || "-"}`,
    "",
    `*Name:* ${name}`,
    `*Company:* ${company || "-"}`,
    `*Phone:* ${phone}`,
    notes ? `*Notes:* ${notes}` : null
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(url, "_blank");
  showToast("Opening WhatsApp with your job order…");
});

// ---------------- toast ----------------
let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

// ---------------- scroll reveal ----------------
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---------------- hero CTA ----------------
document.getElementById("hero-cta").addEventListener("click", () => {
  document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
});

// re-observe dynamically added product cards each time they're created
const catObserver = new MutationObserver(() => {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
});
catObserver.observe(document.getElementById("prod-grid"), { childList: true });
