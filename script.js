// ============================================
// MATCH PRINT ADVERTISING — interactive service picker
// ============================================
const WHATSAPP_NUMBER = "60108870233";
// Product icons as SVG symbols
const ICONS = {
sticker:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l10 3v10a10 10 0 1 1-20 0V5l10-3z"/></svg>
` ,
banner:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M6 10h12M6 14h12"/></svg>
` ,
booklet:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
` ,
box:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
` ,
design:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M19.07 4.93l-2.14 2.14M19.07 4.93l5 5M9.93 19.07l-5-5M4.93 19.07l2.14-2.14M9 2h6M2 9v6M22 9v6M9 22h6"/></svg>
` ,
flyer:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 8h8M8 13h8M8 18h4"/></svg>
` ,
namecard:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="1"/><text x="12" y="13" text-anchor="middle" font-size="10" font-weight="bold">Card</text></svg>
` ,
gift:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M12 11v4M8 11v4M16 11v4"/></svg>
` 
};
const CATEGORIES = [
{
id:  "labels ",
name:  "Labels  & Stickers ",
img:  "assets/stickers.png ",
price:  "RM29 ",
products: [
{ name:  "Mirrorcoat Sticker ", desc:  "Reflective metallic finish for premium branding. ", icon: ICONS.sticker, img:  "https://images.unsplash.com/photo-1606107051939-5521cf54953a?w=400&h=300&fit=crop" },
{ name:  "Transparent Sticker ", desc:  "Clear film, great for glass  & packaging. ", icon: ICONS.sticker, img:  "https://images.unsplash.com/photo-1598556776374-0a3730003c3a?w=400&h=300&fit=crop" },
{ name:  "Vinyl Sticker ", desc:  "Durable, weatherproof, cut to any shape. ", icon: ICONS.sticker, img:  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop" },
{ name:  "White PP Sticker ", desc:  "Opaque white base, sharp colour print. ", icon: ICONS.sticker, img:  "https://images.unsplash.com/photo-1606107051939-5521cf54953a?w=400&h=300&fit=crop" },
{ name:  "Silver Sticker ", desc:  "Metallic silver finish for a bold look. ", icon: ICONS.sticker, img:  "https://images.unsplash.com/photo-1616423664045-6cd2b3839b94?w=400&h=300&fit=crop" }
]
},
{
id:  "banner ",
name:  "Banner  & Bunting ",
img:  "assets/banner.png ",
price:  "RM35 ",
products: [
{ name:  "PVC Banner ", desc:  "Outdoor-ready banner, eyelets included. ", icon: ICONS.banner, img:  "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=300&fit=crop" },
{ name:  "Bunting Flags ", desc:  "String buntings for launches  & events. ", icon: ICONS.banner, img:  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop" },
{ name:  "Roll-Up Banner ", desc:  "Portable stand banner for booths  & events. ", icon: ICONS.banner, img:  "https://images.unsplash.com/photo-1542206395-9feb3edaa6b8?w=400&h=300&fit=crop" },
{ name:  "Event Backdrop ", desc:  "Large-format backdrop for stage  & photo walls. ", icon: ICONS.banner, img:  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop" }
]
},
{
id:  "booklet ",
name:  "Booklets ",
img:  "assets/booklets.png ",
price:  "RM120 ",
products: [
{ name:  "Menu Booklet ", desc:  "Laminated, food-safe restaurant menus. ", icon: ICONS.booklet, img:  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" },
{ name:  "Company Profile Book ", desc:  "Multi-page saddle-stitch or perfect bound. ", icon: ICONS.booklet, img:  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop" },
{ name:  "Product Catalog ", desc:  "Full-colour catalog for your product range. ", icon: ICONS.booklet, img:  "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=400&h=300&fit=crop" },
{ name:  "Guide / Manual Book ", desc:  "Manuals, guides, workbook printing. ", icon: ICONS.booklet, img:  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop" }
]
},
{
id:  "packaging ",
name:  "Packaging  & Bags ",
img:  "assets/packaging.png ",
price:  "RM80 ",
products: [
{ name:  "Custom Printed Box ", desc:  "Retail  & shipping boxes, your branding. ", icon: ICONS.box, img:  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop" },
{ name:  "Paper Bag ", desc:  "Branded carrier bags, various sizes. ", icon: ICONS.box, img:  "https://images.unsplash.com/photo-1554132633-11cf85ecf1c0?w=400&h=300&fit=crop" },
{ name:  "Food / Product Pouch ", desc:  "Stand-up pouches for FnB  & retail. ", icon: ICONS.box, img:  "https://images.unsplash.com/photo-1629198174416-011b6c79d9c7?w=400&h=300&fit=crop" },
{ name:  "Courier Bag ", desc:  "Custom-printed poly mailers. ", icon: ICONS.box, img:  "https://images.unsplash.com/photo-1582560475093-6f2311e585d9?w=400&h=300&fit=crop" }
]
},
{
id:  "design ",
name:  "Design Services ",
img:  "assets/branding.png ",
price:  "Quote ",
products: [
{ name:  "Logo Design ", desc:  "Original logo concepts for your brand. ", icon: ICONS.design, img:  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop" },
{ name:  "Brand Identity Package ", desc:  "Logo, colours, fonts  & guidelines. ", icon: ICONS.design, img:  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" },
{ name:  "Packaging Design ", desc:  "Print-ready artwork for box or label. ", icon: ICONS.design, img:  "https://images.unsplash.com/photo-1634940616771-28348c5a4918?w=400&h=300&fit=crop" },
{ name:  "Social Media Design Set ", desc:  "Templates for posts, stories  & ads. ", icon: ICONS.design, img:  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" }
]
},
{
id:  "marketing ",
name:  "Marketing Materials ",
img:  "assets/marketing.png ",
price:  "RM35 ",
products: [
{ name:  "Flyers ", desc:  "A5 / A6 flyers for promos  & handouts. ", icon: ICONS.flyer, img:  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop" },
{ name:  "Brochures ", desc:  "Tri-fold or bi-fold, full colour. ", icon: ICONS.flyer, img:  "https://images.unsplash.com/photo-1589801258579-18e08f644473?w=400&h=300&fit=crop" },
{ name:  "Table Calendar ", desc:  "Corporate desk calendars, custom design. ", icon: ICONS.flyer, img:  "https://images.unsplash.com/photo-1506784365837-7a197702c0d3?w=400&h=300&fit=crop" },
{ name:  "Posters ", desc:  "A3 to large-format promotional posters. ", icon: ICONS.flyer, img:  "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=300&fit=crop" }
]
},
{
id:  "namecard ",
name:  "Name Cards ",
img:  "assets/namecard.png ",
price:  "RM29 ",
products: [
{ name:  "Standard Name Card ", desc:  "Matte or glossy, fast turnaround. ", icon: ICONS.namecard, img:  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop" },
{ name:  "Premium Textured Card ", desc:  "Cotton / linen stock, embossed feel. ", icon: ICONS.namecard, img:  "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&h=300&fit=crop" },
{ name:  "Metal Card ", desc:  "Stainless steel cards for a bold impression. ", icon: ICONS.namecard, img:  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop" },
{ name:  "QR Digital Name Card ", desc:  "Card with scannable digital profile. ", icon: ICONS.namecard, img:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" }
]
},
{
id:  "gifts ",
name:  "Premium Gifts ",
img:  "assets/gifts.png ",
price:  "RM45 ",
products: [
{ name:  "Custom Printed Mug ", desc:  "Full-colour print, your logo or design. ", icon: ICONS.gift, img:  "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop" },
{ name:  "Corporate Tumbler ", desc:  "Branded tumblers for staff  & clients. ", icon: ICONS.gift, img:  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop" },
{ name:  "Tote Bag ", desc:  "Canvas tote, screen or full-colour print. ", icon: ICONS.gift, img:  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" },
{ name:  "Lanyard ", desc:  "Custom woven or printed lanyards. ", icon: ICONS.gift, img:  "https://images.unsplash.com/photo-1551127481-43279ba57f86?w=400&h=300&fit=crop" }
]
}
];
const state = { category: null, product: null };
// Initialize sections visibility
document.getElementById("products-section").style.display = "none";
document.getElementById("form-section").style.display = "none";
// ============= CATEGORY RENDERING =============
const catGrid = document.getElementById("cat-grid");
CATEGORIES.forEach(cat => {
const card = document.createElement("button");
card.className = "cat-card";
card.innerHTML = `<div class="cat-thumb"> <img src="${cat.img}" alt="${cat.name}" loading="lazy"> </div> <div class="cat-body"> <h3>${cat.name}</h3> <span class="price-tag"><span class="from">from</span> ${cat.price}</span> </div>
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
document.getElementById("products-section").style.display = "block";
document.getElementById("form-section").style.display = "none";
setTimeout(() => {
document.getElementById("products-section").scrollIntoView({ behavior: "smooth", block: "start" });
}, 100);
}
// ============= PRODUCT RENDERING =============
function renderProducts() {
const wrap = document.getElementById("prod-grid");
wrap.innerHTML = "";
document.getElementById("product-context").innerHTML =
`Choose a product from <b>${state.category.name}</b>
`;
state.category.products.forEach(p => {
const card = document.createElement("button");
card.className = "prod-card in";
card.innerHTML = `<div class="prod-thumb"> <img src="${p.img}" alt="${p.name}" loading="lazy"> </div> <div class="prod-body"> <h4>${p.name}</h4> <p>${p.desc}</p> <span class="prod-select">Select →</span> </div>
`;
card.addEventListener("click", () => selectProduct(p, card));
wrap.appendChild(card);
});
}
function selectProduct(product, cardEl) {
state.product = product;
document.querySelectorAll( ".prod-card ").forEach(c => {
c.classList.remove( "active ");
c.querySelector( ".prod-select ").textContent =  "Select → ";
});
cardEl.classList.add( "active ");
cardEl.querySelector( ".prod-select ").textContent =  "Selected ✓ ";
updateOrderSummary();
document.getElementById("form-section").style.display = "block";
setTimeout(() => {
document.getElementById("form-section").scrollIntoView({ behavior: "smooth", block: "start" });
}, 100);
}
function updateOrderSummary() {
document.getElementById("summary-category").textContent = state.category.name;
document.getElementById("summary-product").textContent = state.product.name;
}
// ============= FORM SUBMISSION =============
const form = document.getElementById("order-form");
form.addEventListener("submit", e => {
e.preventDefault();
if (!state.category || !state.product) {
showToast("Pick a category and product first");
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
 " New Job Order — Match Print Advertising ",
 " ",
 `*Category:* ${state.category.name}
` ,
 `*Product:* ${state.product.name}
` ,
 `*Quantity:* ${qty || "-"}
` ,
 " ",
 `*Name:* ${name}
` ,
 `*Company:* ${company || "-"}
` ,
 `*Phone:* ${phone}
` ,
notes ?  `*Notes:* ${notes}
`  : null
].filter(Boolean);
const message = encodeURIComponent(lines.join("\n"));
const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}
`;
window.open(url, "_blank");
showToast("Opening WhatsApp with your job order…");
});
// ============= TOAST NOTIFICATIONS =============
let toastTimer;
function showToast(msg) {
const el = document.getElementById("toast");
el.textContent = msg;
el.classList.add("show");
clearTimeout(toastTimer);
toastTimer = setTimeout(() => el.classList.remove("show"), 3000);
}
// ============= HERO CTA =============
document.getElementById("hero-cta").addEventListener("click", () => {
document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
});
