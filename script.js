/* =============================================
   BANDEK â€” SCRIPTS PRINCIPALES
   ============================================= */

// â”€â”€ Datos de productos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const products = [
  {
    id: "banderilla-salchicha",
    name: "Banderillas de Salchicha",
    badge: "Popular",
    description:
      "Salchicha cubierta de masa crujiente y tu topping favorito. El clÃ¡sico callejero elevado a otro nivel.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["ClÃ¡sica", "$50"],
      ["Papa", "$60"],
      ["Ramen", "$60"],
      ["JalapeÃ±o", "$60"],
      ["Picante", "$60"],
      ["Cheddar", "$60"],
      ["Takis", "$60"],
      ["Acanaladas", "$60"],
      ["Nachos", "$60"],
    ],
  },
  {
    id: "banderilla-mixta",
    name: "Banderillas Mixtas",
    badge: null,
    description:
      "CombinaciÃ³n de proteÃ­nas con empanizado doradito e intenso. Para quienes quieren algo distinto sin pensarlo dos veces.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["ClÃ¡sica", "$65"],
      ["Papa", "$70"],
      ["Ramen", "$70"],
      ["JalapeÃ±o", "$70"],
      ["Picante", "$70"],
      ["Cheddar", "$70"],
      ["Takis", "$70"],
      ["Acanaladas", "$70"],
      ["Nachos", "$70"],
    ],
  },
  {
    id: "banderilla-queso",
    name: "Banderillas Base Queso",
    badge: "Favorita",
    description:
      "La versiÃ³n premium: base cremosa de queso, empanizado crunchy por fuera y suave por dentro. Un nivel diferente.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["ClÃ¡sica", "$70"],
      ["Papa", "$80"],
      ["Ramen", "$80"],
      ["JalapeÃ±o", "$80"],
      ["Picante", "$80"],
      ["Cheddar", "$80"],
      ["Takis", "$80"],
      ["Acanaladas", "$80"],
      ["Nachos", "$80"],
    ],
  },
  {
    id: "bolitas-queso",
    name: "Bolitas de Queso",
    badge: "6 piezas",
    description:
      "Bocaditos esfÃ©ricos de queso derretido con cobertura crujiente. Perfectos para dippear con tus salsas favoritas.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["ClÃ¡sica", "$90"],
      ["Papa", "$100"],
      ["Ramen", "$100"],
      ["JalapeÃ±o", "$100"],
      ["Picante", "$100"],
      ["Cheddar", "$100"],
      ["Nachos", "$100"],
      ["Combinadas", "$130"],
    ],
  },
  {
    id: "papas-francesa",
    name: "Papas a la Francesa",
    badge: null,
    description:
      "Papas doradas, crujientes y bien sazonadas. SÃºbeles el nivel con toppings y aderezos de tu elecciÃ³n.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["PorciÃ³n Chica", "$60"],
      ["PorciÃ³n Grande", "$100"],
    ],
  },
  {
    id: "salchipapas",
    name: "Salchipapas",
    badge: null,
    description:
      "La combinaciÃ³n irresistible de papas a la francesa con salchicha en trozos. Salsas incluidas para cerrar perfecto.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["PorciÃ³n Chica", "$70"],
      ["PorciÃ³n Grande", "$120"],
    ],
  },
  {
    id: "mega-banderilla",
    name: "Mega Banderilla",
    badge: "Nueva",
    description:
      "VersiÃ³n XXL con extra queso derretido. MÃ¡s grande, mÃ¡s cremosa, mÃ¡s todo. Para cuando el antojo es de verdad.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["ClÃ¡sica", "$120"],
      ["Papa", "$130"],
      ["Ramen", "$130"],
      ["JalapeÃ±o", "$130"],
      ["Picante", "$130"],
      ["Cheddar", "$130"],
      ["Takis", "$130"],
      ["Acanaladas", "$130"],
      ["Nachos", "$130"],
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    badge: null,
    description:
      "RefrÃ©squete con algo para acompaÃ±ar tu antojo. Aguas frescas del dÃ­a y refrescos bien frÃ­os.",
    image: "assets/placeholder-snack.svg",
    variants: [
      ["Horchata", "$20"],
      ["Jamaica", "$20"],
      ["LimÃ³n con ChÃ­a", "$20"],
      ["7up", "$20"],
      ["Pepsi", "$20"],
      ["Mirinda", "$20"],
      ["Manzanita", "$20"],
      ["Coca Cola", "$25"],
    ],
  },
];

// â”€â”€ Renderizar productos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
          Ver precios <span class="arrow">â–¼</span>
        </button>
        <div class="product-card__prices" id="prices-${p.id}">
          ${priceRows}
        </div>
        <button class="product-card__order-btn" onclick="openOrderModal('${p.id}')">
          Pedir ahora ðŸ›µ
        </button>
      </div>
    </article>
  `;
}).join("");

// â”€â”€ AcordeÃ³n de precios â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€ Navbar: cambio de estilo al hacer scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const navbar = document.getElementById("navbar");
const onScroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// â”€â”€ Navbar: menÃº mÃ³vil â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// Cerrar menÃº al hacer clic en un enlace
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// â”€â”€ Scroll reveal con IntersectionObserver â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// Observar todos los elementos .reveal (incluyendo los reciÃ©n creados)
const observeReveals = () => {
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
};
observeReveals();

// â”€â”€ Smooth scroll para links internos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* =============================================
   MODAL DE PEDIDO + CARRITO + MASCOTA KORI
   ============================================= */

const WA_NUMBER    = "529631337896";
const DELIVERY_FEE = 30;

// â”€â”€ Estado global â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let currentProduct       = null;
let selectedVariantIndex = 0;
let currentQty           = 1;
let cart                 = []; // { key, productId, productName, variant:[name,price], qty }

// â”€â”€ Referencias DOM â€” modal de producto â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const orderOverlay    = document.getElementById("orderOverlay");
const orderModalClose = document.getElementById("orderModalClose");
const orderAddBtn     = document.getElementById("orderAddBtn");
const variantGrid     = document.getElementById("variantGrid");
const orderTotalEl    = document.getElementById("orderTotal");
const qtyMinus        = document.getElementById("qtyMinus");
const qtyPlus         = document.getElementById("qtyPlus");
const qtyValueEl      = document.getElementById("qtyValue");
const koriModalImg    = document.getElementById("koriModalImg");

// â”€â”€ Referencias DOM â€” modal de carrito â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const cartOverlay        = document.getElementById("cartOverlay");
const cartModalClose     = document.getElementById("cartModalClose");
const cartSubmitBtn      = document.getElementById("cartSubmitBtn");
const cartItemsList      = document.getElementById("cartItemsList");
const cartEmpty          = document.getElementById("cartEmpty");
const cartDivider        = document.getElementById("cartDivider");
const cartDeliverySection = document.getElementById("cartDeliverySection");
const cartAddressSection = document.getElementById("cartAddressSection");
const cartAddress        = document.getElementById("cartAddress");
const cartAddressError   = document.getElementById("cartAddressError");
const cartNotes          = document.getElementById("cartNotes");
const cartTotalEl        = document.getElementById("cartTotal");
const cartBadge          = document.getElementById("cartBadge");
const fabCart            = document.getElementById("fabCart");
const koriCartImg        = document.getElementById("koriCartImg");

// â”€â”€ Referencias DOM â€” Kori flotante â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const koriImg        = document.getElementById("koriImg");
const koriBubbleText = document.getElementById("koriBubbleText");

const koriFrases = [
  "Â¡Hola! Â¿QuÃ© se te antoja hoy? ðŸ˜‹",
  "Las banderillas estÃ¡n increÃ­bles ðŸŒ¶ï¸",
  "Â¡Pide lo que quieras, todo estÃ¡ rico! ðŸ”¥",
  "Las bolitas de queso HOY estÃ¡n ðŸ§€",
];
let koriPhraseIdx = 0;

koriImg?.addEventListener("click", () => {
  koriPhraseIdx = (koriPhraseIdx + 1) % koriFrases.length;
  koriBubbleText.textContent = koriFrases[koriPhraseIdx];
  bounceKoriEl(koriImg);
});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  MODAL DE PRODUCTO
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function openOrderModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) return;

  document.getElementById("orderModalTitle").textContent = currentProduct.name;

  selectedVariantIndex = 0;
  currentQty = 1;
  qtyValueEl.textContent = "1";
  renderVariants();
  updateOrderSubtotal();
  setKoriModal("normal");

  orderOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  orderOverlay.classList.remove("open");
  if (!cartOverlay.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

// Variantes
function renderVariants() {
  variantGrid.innerHTML = currentProduct.variants
    .map(([name, price], i) => `
      <button class="variant-chip ${i === 0 ? "active" : ""}" data-index="${i}" aria-pressed="${i === 0}">
        <span class="variant-chip__name">${name}</span>
        <span class="variant-chip__price">${price}</span>
      </button>`)
    .join("");

  variantGrid.querySelectorAll(".variant-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedVariantIndex = Number(chip.dataset.index);
      variantGrid.querySelectorAll(".variant-chip").forEach((c, i) => {
        c.classList.toggle("active", i === selectedVariantIndex);
        c.setAttribute("aria-pressed", i === selectedVariantIndex);
      });
      updateOrderSubtotal();
    });
  });
}

function updateOrderSubtotal() {
  if (!currentProduct) return;
  const price = getVariantPrice(currentProduct.variants[selectedVariantIndex]);
  orderTotalEl.textContent = `$${price * currentQty}`;
}

function getVariantPrice(variant) {
  return Number(variant[1].replace(/[^0-9]/g, ""));
}

// Qty controls
qtyMinus?.addEventListener("click", () => {
  if (currentQty <= 1) return;
  currentQty--;
  qtyValueEl.textContent = currentQty;
  updateOrderSubtotal();
});

qtyPlus?.addEventListener("click", () => {
  if (currentQty >= 20) return;
  currentQty++;
  qtyValueEl.textContent = currentQty;
  updateOrderSubtotal();
});

// Agregar al carrito
orderAddBtn?.addEventListener("click", () => {
  if (!currentProduct) return;

  const variant = currentProduct.variants[selectedVariantIndex];
  const key     = `${currentProduct.id}__${selectedVariantIndex}`;

  const existing = cart.find((i) => i.key === key);
  if (existing) {
    existing.qty = Math.min(existing.qty + currentQty, 20);
  } else {
    cart.push({
      key,
      productId:   currentProduct.id,
      productName: currentProduct.name,
      variant,
      qty: currentQty,
    });
  }

  updateCartBadge();
  closeOrderModal();

  // Feedback de Kori
  const msgs = [
    "Â¡Listo! Agregado al pedido ðŸ›’",
    "Â¡Va para adentro! ðŸ”¥",
    "Â¡Buena elecciÃ³n! ðŸ˜‹",
    "Â¡Sigue pidiendo! ðŸŽ‰",
  ];
  koriBubbleText.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  setKoriState("feliz");
  setTimeout(() => setKoriState("normal"), 2800);
});

// Cerrar con X / overlay / ESC
orderModalClose?.addEventListener("click", closeOrderModal);
orderOverlay?.addEventListener("click", (e) => {
  if (e.target === orderOverlay) closeOrderModal();
});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  MODAL DEL CARRITO
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function openCartModal() {
  renderCartItems();
  updateCartTotal();
  updateCartDeliveryVisibility();
  setKoriCartImg("normal");

  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

fabCart?.addEventListener("click", openCartModal);
cartModalClose?.addEventListener("click", closeCartModal);
cartOverlay?.addEventListener("click", (e) => {
  if (e.target === cartOverlay) closeCartModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (cartOverlay.classList.contains("open"))  closeCartModal();
  if (orderOverlay.classList.contains("open")) closeOrderModal();
});

// Delivery radio dentro del carrito
document.querySelectorAll('input[name="cartDelivery"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    updateCartDeliveryVisibility();
    updateCartTotal();
  });
});

function updateCartDeliveryVisibility() {
  const isDelivery = document.getElementById("cartRadioDelivery").checked;
  cartAddressSection.style.display = isDelivery ? "block" : "none";
  if (!isDelivery) {
    cartAddress.value = "";
    cartAddress.classList.remove("error");
    cartAddressError.classList.remove("visible");
  }
}

cartAddress?.addEventListener("input", () => {
  if (cartAddress.value.trim()) {
    cartAddress.classList.remove("error");
    cartAddressError.classList.remove("visible");
  }
});

// Renderizar items del carrito
function renderCartItems() {
  const hasItems = cart.length > 0;
  cartEmpty.style.display          = hasItems ? "none"  : "flex";
  cartItemsList.style.display      = hasItems ? "flex"  : "none";
  cartDivider.style.display        = hasItems ? "block" : "none";
  cartDeliverySection.style.display = hasItems ? "block" : "none";
  cartSubmitBtn.disabled           = !hasItems;

  if (!hasItems) {
    cartItemsList.innerHTML = "";
    return;
  }

  cartItemsList.innerHTML = cart.map((item, idx) => {
    const unitPrice = getVariantPrice(item.variant);
    const subtotal  = unitPrice * item.qty;
    return `
      <div class="cart-item" data-idx="${idx}">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.productName}</div>
          <div class="cart-item__variant">${item.variant[0]}</div>
          <div class="cart-item__unit-price">$${unitPrice} c/u</div>
        </div>
        <div class="cart-item__qty">
          <button class="cart-item__qty-btn" data-action="dec" data-idx="${idx}" aria-label="Quitar uno">âˆ’</button>
          <span class="cart-item__qty-val">${item.qty}</span>
          <button class="cart-item__qty-btn" data-action="inc" data-idx="${idx}" aria-label="Agregar uno">+</button>
        </div>
        <div class="cart-item__total">$${subtotal}</div>
        <button class="cart-item__remove" data-idx="${idx}" aria-label="Eliminar">âœ•</button>
      </div>`;
  }).join("");

  // Eventos de botones dentro de la lista
  cartItemsList.querySelectorAll(".cart-item__qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx    = Number(btn.dataset.idx);
      const action = btn.dataset.action;
      if (action === "inc") {
        cart[idx].qty = Math.min(cart[idx].qty + 1, 20);
      } else {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      }
      updateCartBadge();
      renderCartItems();
      updateCartTotal();
    });
  });

  cartItemsList.querySelectorAll(".cart-item__remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart.splice(Number(btn.dataset.idx), 1);
      updateCartBadge();
      renderCartItems();
      updateCartTotal();
    });
  });
}

function updateCartTotal() {
  const itemsTotal = cart.reduce((sum, item) => {
    return sum + getVariantPrice(item.variant) * item.qty;
  }, 0);
  const delivery = (cart.length > 0 && document.getElementById("cartRadioDelivery")?.checked)
    ? DELIVERY_FEE : 0;
  cartTotalEl.textContent = `$${itemsTotal + delivery}`;
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  cartBadge.textContent = total;
  fabCart.style.display = total > 0 ? "flex" : "none";
  // Re-animar badge
  cartBadge.style.animation = "none";
  void cartBadge.offsetWidth;
  cartBadge.style.animation = "";
}

// Enviar pedido
cartSubmitBtn?.addEventListener("click", () => {
  if (cart.length === 0) return;

  const isDelivery = document.getElementById("cartRadioDelivery").checked;
  const address    = cartAddress.value.trim();
  const notes      = cartNotes.value.trim();

  if (isDelivery && !address) {
    cartAddress.classList.add("error");
    cartAddressError.classList.add("visible");
    cartAddress.focus();
    cartAddress.animate(
      [{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }],
      { duration: 300, iterations: 2 }
    );
    return;
  }

  // Construir mensaje
  let msg = `Â¡Hola BANDEK! ðŸŸ Quiero hacer un pedido:\n\n`;

  cart.forEach((item, i) => {
    const unitPrice = getVariantPrice(item.variant);
    msg += `${i + 1}. *${item.productName}* â€“ ${item.variant[0]}`;
    if (item.qty > 1) msg += ` Ã— ${item.qty}`;
    msg += ` = $${unitPrice * item.qty}\n`;
  });

  const itemsTotal = cart.reduce((s, i) => s + getVariantPrice(i.variant) * i.qty, 0);

  msg += `\n`;
  if (isDelivery) {
    msg += `ðŸ›µ *EnvÃ­o a domicilio* (+$${DELIVERY_FEE})\n`;
    msg += `ðŸ“ *DirecciÃ³n:* ${address}\n`;
  } else {
    msg += `ðŸ  *Recoger en local*\n`;
  }
  msg += `ðŸ’° *Total:* $${itemsTotal + (isDelivery ? DELIVERY_FEE : 0)}\n`;
  if (notes) msg += `ðŸ“ *Notas:* ${notes}\n`;

  // Kori feliz en el modal y flotante
  setKoriCartImg("feliz");
  setKoriState("feliz");
  koriBubbleText.textContent = "Â¡Que lo disfrutes mucho! ðŸŽ‰";

  setTimeout(() => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    cart = [];
    updateCartBadge();
    closeCartModal();
    cartAddress.value = "";
    cartNotes.value   = "";
    setTimeout(() => setKoriState("normal"), 3000);
  }, 900);
});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  HELPERS DE KORI
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function bounceKoriEl(el) {
  el.classList.remove("kori-bounce");
  void el.offsetWidth;
  el.classList.add("kori-bounce");
}

function setKoriState(state) {
  if (!koriImg) return;
  koriImg.src = state === "feliz" ? "kori-feliz.png" : "kori-normal.png";
  bounceKoriEl(koriImg);
}

function setKoriModal(state) {
  if (!koriModalImg) return;
  koriModalImg.src = state === "feliz" ? "kori-feliz.png" : "kori-normal.png";
  if (state === "feliz") bounceKoriEl(koriModalImg);
}

function setKoriCartImg(state) {
  if (!koriCartImg) return;
  koriCartImg.src = state === "feliz" ? "kori-feliz.png" : "kori-normal.png";
  if (state === "feliz") bounceKoriEl(koriCartImg);
}

