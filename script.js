/* =============================================
   LA CASA DE LOS SNACK'S — SCRIPTS PRINCIPALES
   ============================================= */

// ── Datos de productos ─────────────────────────────────────────
const products = [
  {
    id: "banderilla-salchicha",
    name: "Banderillas de Salchicha",
    badge: "Popular",
    description:
      "Salchicha cubierta de masa crujiente y tu topping favorito. El clásico callejero elevado a otro nivel.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Clásica", "$50"],
      ["Papa", "$60"],
      ["Ramen", "$60"],
      ["Jalapeño", "$60"],
      ["Flaminhot", "$60"],
      ["Cheddar Chetos", "$60"],
      ["Takis Azules", "$60"],
      ["Ruffles", "$60"],
    ],
  },
  {
    id: "banderilla-mixta",
    name: "Banderillas Mixtas",
    badge: null,
    description:
      "Combinación de proteínas con empanizado doradito e intenso. Para quienes quieren algo distinto sin pensarlo dos veces.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Clásica", "$65"],
      ["Papa", "$70"],
      ["Ramen", "$70"],
      ["Jalapeño", "$70"],
      ["Flaminhot", "$70"],
      ["Cheddar Chetos", "$70"],
      ["Takis Azules", "$70"],
      ["Ruffles", "$70"],
    ],
  },
  {
    id: "banderilla-queso",
    name: "Banderillas Base Queso",
    badge: "Favorita",
    description:
      "La versión premium: base cremosa de queso, empanizado crunchy por fuera y suave por dentro. Un nivel diferente.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Clásica", "$70"],
      ["Papa", "$80"],
      ["Ramen", "$80"],
      ["Jalapeño", "$80"],
      ["Flaminhot", "$80"],
      ["Cheddar Chetos", "$80"],
      ["Takis Azules", "$80"],
      ["Ruffles", "$80"],
    ],
  },
  {
    id: "bolitas-queso",
    name: "Bolitas de Queso",
    badge: "6 piezas",
    description:
      "Bocaditos esféricos de queso derretido con cobertura crujiente. Perfectos para dippear con tus salsas favoritas.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Clásica", "$90"],
      ["Papa", "$100"],
      ["Ramen", "$100"],
      ["Jalapeño", "$100"],
      ["Flaminhot", "$100"],
      ["Cheddar Chetos", "$100"],
      ["Combinadas", "$130"],
    ],
  },
  {
    id: "papas-francesa",
    name: "Papas a la Francesa",
    badge: null,
    description:
      "Papas doradas, crujientes y bien sazonadas. Súbeles el nivel con toppings y aderezos de tu elección.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Porción Chica", "$60"],
      ["Porción Grande", "$100"],
    ],
  },
  {
    id: "salchipapas",
    name: "Salchipapas",
    badge: null,
    description:
      "La combinación irresistible de papas a la francesa con salchicha en trozos. Salsas incluidas para cerrar perfecto.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Porción Chica", "$70"],
      ["Porción Grande", "$120"],
    ],
  },
];

// ── Renderizar productos ───────────────────────────────────────
const productGrid = document.getElementById("product-grid");

productGrid.innerHTML = products.map((p, index) => {
  const priceRows = p.variants
    .map(([name, price]) =>
      `<div class="price-row">
        <span class="price-label">${name}</span>
        <span class="price-val">${price}</span>
      </div>`
    )
    .join("");

  const badge = p.badge
    ? `<span class="product-card__badge">${p.badge}</span>`
    : "";

  return `
    <article class="product-card reveal" style="transition-delay:${index * 80}ms">
      <div class="product-card__img-wrap">
        <img src="${p.image}" alt="Imagen de prueba de ${p.name}" loading="lazy" />
        ${badge}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <button
          class="product-card__toggle"
          aria-expanded="false"
          data-target="prices-${p.id}"
        >
          Ver precios <span class="arrow">▼</span>
        </button>
        <div class="product-card__prices" id="prices-${p.id}">
          ${priceRows}
        </div>
      </div>
    </article>
  `;
}).join("");

// ── Acordeón de precios ────────────────────────────────────────
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".product-card__toggle");
  if (!btn) return;

  const panel = document.getElementById(btn.dataset.target);
  if (!panel) return;

  const isOpen = panel.classList.contains("open");

  // Cerrar todos los abiertos
  document.querySelectorAll(".product-card__prices.open").forEach((el) => {
    el.classList.remove("open");
    const b = document.querySelector(`[data-target="${el.id}"]`);
    if (b) b.setAttribute("aria-expanded", "false");
  });

  // Abrir el clickeado (si no estaba abierto)
  if (!isOpen) {
    panel.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
});

// ── Navbar: cambio de estilo al hacer scroll ──────────────────
const navbar = document.getElementById("navbar");
const onScroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ── Navbar: menú móvil ────────────────────────────────────────
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ── Scroll reveal con IntersectionObserver ────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

// Observar todos los elementos .reveal (incluyendo los recién creados)
const observeReveals = () => {
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
};
observeReveals();

// ── Smooth scroll para links internos ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
