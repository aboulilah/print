// ============================================
// MATCH PRINT ADVERTISING — interactive service picker
// ============================================

const WHATSAPP_NUMBER = "60108870233";

// Real category photography, hotlinked directly from matchprintadvertising.com
const CATEGORIES = [
  {
    id: "labels",
    name: "Labels & Stickers",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/category_stickers_labels-1024x1024.png",
    price: "RM29",
    accent: "var(--pink)",
    products: [
      { name: "Mirrorcoat Sticker", desc: "Reflective metallic finish for premium branding." },
      { name: "Transparent Sticker", desc: "Clear film, great for glass & packaging." },
      { name: "Vinyl Sticker", desc: "Durable, weatherproof, cut to any shape." },
      { name: "White PP Sticker", desc: "Opaque white base, sharp colour print." },
      { name: "Silver Sticker", desc: "Metallic silver finish for a bold look." }
    ]
  },
  {
    id: "banner",
    name: "Banner & Bunting",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_banner_bunting-1024x1024.png",
    price: "RM35",
    accent: "var(--orange)",
    products: [
      { name: "PVC Banner", desc: "Outdoor-ready banner, eyelets included." },
      { name: "Bunting Flags", desc: "String buntings for launches & events." },
      { name: "Roll-Up Banner", desc: "Portable stand banner for booths & events." },
      { name: "Event Backdrop", desc: "Large-format backdrop for stage & photo walls." }
    ]
  },
  {
    id: "booklet",
    name: "Booklets",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_booklet_menu-1024x1024.png",
    price: "RM120",
    accent: "var(--cyan)",
    products: [
      { name: "Menu Booklet", desc: "Laminated, food-safe restaurant menus." },
      { name: "Company Profile Book", desc: "Multi-page saddle-stitch or perfect bound." },
      { name: "Product Catalog", desc: "Full-colour catalog for your product range." },
      { name: "Guide / Manual Book", desc: "Manuals, guides, workbook printing." }
    ]
  },
  {
    id: "packaging",
    name: "Packaging & Bags",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_box_packaging-1024x1024.png",
    price: "RM80",
    accent: "var(--green)",
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
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_design_services-1024x1024.png",
    price: "Quote",
    accent: "var(--pink)",
    products: [
      { name: "Logo Design", desc: "Original logo concepts for your brand." },
      { name: "Brand Identity Package", desc: "Logo, colours, fonts & guidelines." },
      { name: "Packaging Design", desc: "Print-ready artwork for box or label." },
      { name: "Social Media Design Set", desc: "Templates for posts, stories & ads." }
    ]
  },
  {
    id: "marketing",
    name: "Marketing Materials",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_materketing_material-1024x1024.png",
    price: "RM35",
    accent: "var(--yellow)",
    products: [
      { name: "Flyers", desc: "A5 / A6 flyers for promos & handouts." },
      { name: "Brochures", desc: "Tri-fold or bi-fold, full colour." },
      { name: "Table Calendar", desc: "Corporate desk calendars, custom design." },
      { name: "Posters", desc: "A3 to large-format promotional posters." }
    ]
  },
  {
    id: "namecard",
    name: "Name Cards",
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_namecard-1024x1024.png",
    price: "RM29",
    accent: "var(--cyan)",
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
    img: "https://matchprintadvertising.com/wp-content/uploads/2024/07/match-print-advertising-category_premium_gifts-1024x1024.png",
    price: "RM45",
    accent: "var(--orange)",
    products: [
      { name: "Custom Printed Mug", desc: "Full-colour print, your logo or design." },
      { name: "Corporate Tumbler", desc: "Branded tumblers for staff & clients." },
      { name: "Tote Bag", desc: "Canvas tote, screen or full-colour print." },
      { name: "Lanyard", desc: "Custom woven or printed lanyards." }
    ]
  }
];

const state = { category: null, product: null };

// ---------------- render categories ----------------
const catGrid = document.getElementById("cat-grid");
CATEGORIES.forEach(cat => {
  const card = document.createElement("button");
  card.className = "cat-card reveal";
  card.style.setProperty("--accent", cat.accent);
  card.innerHTML = `
    <div class="cat-thumb"><img src="${cat.img}" alt="${cat.name}" loading="lazy"></div>
    <div class="accent-bar"></div>
    <div class="cat-body">
      <h3>${cat.name}</h3>
      <span class="price-tag"><span class="from">from</span> ${cat.price}</span>
    </div>
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
    card.style.setProperty("--accent", state.category.accent);
    card.innerHTML = `
      <div class="prod-thumb"><img src="${state.category.img}" alt="${p.name}" loading="lazy"></div>
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

const catObserver = new MutationObserver(() => {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
});
catObserver.observe(document.getElementById("prod-grid"), { childList: true });

// ---------------- hero CTA ----------------
document.getElementById("hero-cta").addEventListener("click", () => {
  document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
});
