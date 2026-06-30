const products = [
  {
    series: 'ADV SYSTEM',
    name: 'W110-J MK24 "HUNTER"',
    type: 'Tactical Backpack',
    price: 299.00,
    badge: 'NEW',
    image: '/assets/products/w110-hunter.png',
  },
  {
    series: 'ADV SYSTEM',
    name: 'W120-J MK24 "ASYM"',
    type: 'Urban Pack',
    price: 319.00,
    badge: null,
    image: '/assets/products/w120-asym.png',
  },
  {
    series: 'CORE SERIES',
    name: 'W220-J "STINGER"',
    type: 'Sling Bag',
    price: 229.00,
    badge: 'BESTSELLER',
    image: '/assets/products/w220-stinger.png',
  },
  {
    series: 'MOD SYSTEM',
    name: 'W007-P "FLYTRAP"',
    type: 'Modular Pouch',
    price: 139.00,
    badge: null,
    image: '/assets/products/w007-flytrap.png',
  },
  {
    series: 'SLING SYSTEM',
    name: 'M-S "RAVEN" MK3',
    type: 'Messenger Sling',
    price: 189.00,
    badge: 'SALE',
    originalPrice: 219.00,
    image: '/assets/products/m-raven.png',
  },
  {
    series: 'CORE SERIES',
    name: 'C101 "PATHFINDER"',
    type: 'Daypack',
    price: 249.00,
    badge: null,
    image: '/assets/products/c101-pathfinder.png',
  },
  {
    series: 'ADV SYSTEM',
    name: 'R201 "SENTINEL" MK25',
    type: 'Travel System',
    price: 359.00,
    badge: 'NEW',
    image: '/assets/products/r201-sentinel.png',
  },
  {
    series: 'ACCESSORIES',
    name: 'ORG KIT V2',
    type: 'Organization Panel',
    price: 49.00,
    badge: null,
    image: '/assets/products/org-kit-v2.png',
  },
];

const productGrid = document.getElementById('productGrid');

products.forEach((p) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-card-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="product-card-badge">${p.badge}</span>` : ''}
    </div>
    <div class="product-card-body">
      <div class="product-card-series">${p.series}</div>
      <div class="product-card-title">${p.name}</div>
      <div class="product-card-subtitle">${p.type}</div>
      <div class="product-card-price">
        ${p.originalPrice ? `<span class="original">$${p.originalPrice.toFixed(2)}</span>` : ''}
        $${p.price.toFixed(2)}
      </div>
    </div>
  `;
  productGrid.appendChild(card);
});

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.addEventListener('click', (e) => {
  if (e.target === mobileNav) {
    mobileNav.classList.remove('open');
  }
});

document.querySelectorAll('.mobile-nav-inner a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});
