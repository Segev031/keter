/**
 * ===================================================
 * כתר רהיטים – script.js
 * Vanilla JS | RTL | Accessible | WCAG 2.1 AA
 * ===================================================
 */

'use strict';

/* ===================================================
   1. PRODUCT DATA
   ================================================== */
const products = [
  {
    id: 'p001',
    name: 'ארון קיר קלאסי 3 דלתות',
    price: 2499,
    category: 'ארונות קיר',
    description: 'ארון קיר מרווח ואיכותי עם 3 דלתות מרופדות. מיוצר מעץ MDF בציפוי מלמין עמיד. מגיע עם 2 מוטות לתליית בגדים, 3 מדפים ו-4 מגירות פנימיות. גמר מבריק בצבע לבן מט.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'
  },
  {
    id: 'p002',
    name: 'ארון הזזה פנורמי 2 דלתות',
    price: 3200,
    category: 'ארונות הזזה',
    description: 'ארון הזזה מודרני עם דלתות מראה מלאות המגדילות אופטית את החדר. מסילות אלומיניום שקטות ועמידות. ניתן להתאמה אישית לגובה תקרה מלא. זמין בצבעים: שחור, לבן, אפור.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'
  },
  {
    id: 'p003',
    name: 'עמדת עבודה ביתית מינימל',
    price: 1290,
    category: 'עמדות עבודה',
    description: 'עמדת עבודה ארגונומית לעבודה מהבית עם שולחן רחב, מגירת קלטות ומדף למסך. עיצוב נקי ומינימליסטי. משטח עבודה מעוגל לנוחות מרבית. מתאים לחדר ממוצע.',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80'
  },
  {
    id: 'p004',
    name: 'כוורת ספרים מודרנית 5 מדפים',
    price: 890,
    category: 'כוורות',
    description: 'כוורת ספרים אסתטית עם 5 מדפים בגדלים שונים. מושלמת לספרים, קישוטים ועציצים. עשויה עץ אורן מלא עם שמן אלתית. ניתנת לתלייה על קיר או עמידה עצמאית.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
  },
  {
    id: 'p005',
    name: 'כוניית DVD 4 תאים',
    price: 590,
    category: 'כונניות',
    description: 'כוניית מדיה מסוגננת עם 4 תאים בגדלים שונים. מתאימה לדיסקים, ספרים קטנים וגאדג\'טים. עיצוב גיאומטרי מודרני. עשויה ברזל ועץ במנבה משולבת.',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80'
  },
  {
    id: 'p006',
    name: 'מגירת שירות 3 מגירות',
    price: 750,
    category: 'מגירות שירות',
    description: 'ארגונית שירות עם 3 מגירות רחבות לאחסון חפצים שונים. מסילות דאמפר שקטות. אידיאלי לחדר שינה, סלון או מטבח. זמין בצבע לבן, שחור ועץ טבעי.',
    imageUrl: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80'
  },
  {
    id: 'p007',
    name: 'ארון קיר פרמיום 4 דלתות',
    price: 3990,
    category: 'ארונות קיר',
    description: 'ארון קיר יוקרתי עם 4 דלתות, תאורת LED פנימית וידיות אלומיניום. מארגן פנימי מלא כולל: 3 מוטות, 6 מדפים, 8 מגירות ומדף נעליים. הגדרה חדשה של ארגון.',
    imageUrl: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },
  {
    id: 'p008',
    name: 'ארון הזזה 3 דלתות זכוכית',
    price: 4500,
    category: 'ארונות הזזה',
    description: 'ארון הזזה יוקרתי עם 3 דלתות זכוכית מחוסמת. מסגרות אלומיניום אנודייז. ידית מוסתרת לעיצוב נקי. מאורגן פנימית עם מדפים ומוטות. בנוי בהתאמה אישית לחלל שלך.',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80'
  },
  {
    id: 'p009',
    name: 'עמדת עבודה L-Shape',
    price: 2100,
    category: 'עמדות עבודה',
    description: 'עמדת עבודה בצורת L עם שני משטחי עבודה גדולים, מדף מרחף ו-3 מגירות. פתרון מושלם למשרד ביתי. מתאימה לפינה ומנצלת את שטח הרצפה במיטבו. גמר עץ אגוז יוקרתי.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'
  },
  {
    id: 'p010',
    name: 'כוורת קיר גיאומטרית',
    price: 1100,
    category: 'כוורות',
    description: 'כוורת קיר בעיצוב גיאומטרי מרהיב עם 8 תאים בצורות שונות. יוצרת מיצג אמנותי על הקיר תוך שמירה על פונקציונליות. ניתן לשלב עם תמונות ועציצים. עץ אלון מלא.',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80'
  },
  {
    id: 'p011',
    name: 'כוניית ספרים גבוהה',
    price: 1350,
    category: 'כונניות',
    description: 'כוניית ספרים גבוהה עם 6 מדפים ומגירה תחתונה. גובה 180 ס"מ, ניצול מקסימלי של גובה החדר. מסוגננת ועמידה. מתאימה לחדר ילדים, סלון או ספרייה ביתית.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'
  },
  {
    id: 'p012',
    name: 'מגירת שירות 5 מגירות',
    price: 1190,
    category: 'מגירות שירות',
    description: 'ארגונית שירות גדולה עם 5 מגירות רחבות. אידיאלי לחדר שינה ראשי. מסילות ball-bearing שקטות ועמידות. כולל ידיות עץ מלא. פנל אחורי עמיד. מגיע מורכב.',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80'
  }
];

const heroSlides = [
  {
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4A3520 40%, #8B7355 100%)',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80',
    tag: '✨ קולקציית 2025',
    title: 'ריהוט שמספר\nסיפור חדש',
    subtitle: 'עיצוב פרמיום שמשנה את האווירה בביתך',
    cta: 'גלה את הקולקציה',
    section: 'products',
  },
  {
    gradient: 'linear-gradient(135deg, #0D2137 0%, #1B4F72 45%, #2E86C1 100%)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    tag: '🧱 ארונות קיר',
    title: 'אחסון חכם,\nעיצוב מרשים',
    subtitle: 'ארונות קיר מותאמים אישית לכל מרחב',
    cta: 'הכיר את הארונות',
    section: 'products',
    catFilter: 'ארונות קיר',
  },
  {
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #3D3D3D 100%)',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80',
    tag: '💻 עמדות עבודה',
    title: 'המשרד הביתי\nשחלמת עליו',
    subtitle: 'עמדות עבודה ארגונומיות לפרודוקטיביות מקסימלית',
    cta: 'גלה עמדות עבודה',
    section: 'products',
    catFilter: 'עמדות עבודה',
  },
  {
    gradient: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #40916C 100%)',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80',
    tag: '📚 כונניות',
    title: 'ספריית חלומות\nמעוצבת',
    subtitle: 'כוורות וכונניות לכל חלל ולכל סגנון',
    cta: 'גלה כונניות',
    section: 'products',
    catFilter: 'כונניות',
  },
];

/* ===================================================
   2. STATE
   ================================================== */
let currentCategory = 'all';
let currentSearch = '';
let favorites = [];
let currentView = 'products'; // 'products' | 'detail'
let currentProductId = null;
let carouselIndex = 0;
const carouselTotal = 4;
let heroCarouselIndex = 0;
let heroCarouselInterval = null;

/* ===================================================
   3. DOM REFERENCES
   ================================================== */
const dom = {
  // Navbar
  navbar:           document.querySelector('.navbar'),
  searchToggle:     document.getElementById('searchToggle'),
  searchClose:      document.getElementById('searchClose'),
  searchBar:        document.getElementById('searchBar'),
  searchInput:      document.getElementById('searchInput'),
  favNavBtn:        document.getElementById('favNavBtn'),
  favCount:         document.getElementById('favCount'),
  hamburger:        document.getElementById('hamburger'),
  mobileMenu:       document.getElementById('mobileMenu'),
  mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),

  // Hero Carousel
  heroCarousel:      document.getElementById('heroCarousel'),
  heroCarouselTrack: document.getElementById('heroCarouselTrack'),
  heroPrevBtn:       document.getElementById('heroPrevBtn'),
  heroNextBtn:       document.getElementById('heroNextBtn'),
  heroCarouselDots:  document.getElementById('heroCarouselDots'),

  // Sections
  productsSection:  document.getElementById('products'),
  productsTitle:    document.getElementById('productsTitle'),
  productsGrid:     document.getElementById('productsGrid'),
  productsEmpty:    document.getElementById('productsEmpty'),
  productsCount:    document.getElementById('productsCount'),
  favoritesSection: document.getElementById('favorites'),
  favoritesGrid:    document.getElementById('favoritesGrid'),
  productDetail:    document.getElementById('product-detail'),
  productDetailInner: document.getElementById('productDetailInner'),
  backBtn:          document.getElementById('backBtn'),

  // Categories
  categoriesGrid:   document.querySelector('.categories__grid'),

  // Carousel
  carouselTrack:    document.getElementById('carouselTrack'),
  carouselPrev:     document.getElementById('carouselPrev'),
  carouselNext:     document.getElementById('carouselNext'),
  carouselDots:     document.getElementById('carouselDots'),

  // Contact
  contactForm:      document.getElementById('contactForm'),
  formSuccess:      document.getElementById('formSuccess'),

  // FAB / Accessibility
  accessibilityFab:   document.getElementById('accessibilityFab'),
  accessibilityPanel: document.getElementById('accessibilityPanel'),
  accessibilityClose: document.getElementById('accessibilityClose'),
  a11yIncreaseText:   document.getElementById('a11yIncreaseText'),
  a11yDecreaseText:   document.getElementById('a11yDecreaseText'),
  a11yHighContrast:   document.getElementById('a11yHighContrast'),
  a11yReduceMotion:   document.getElementById('a11yReduceMotion'),
  a11yHighlightLinks: document.getElementById('a11yHighlightLinks'),
  a11yReset:          document.getElementById('a11yReset'),

  // Footer
  currentYear:      document.getElementById('currentYear'),

  // Mobile nav links
  mobileNavLinks:   document.querySelectorAll('.mobile-nav-link'),
  navLinks:         document.querySelectorAll('.nav-link'),
};

const categoryDefinitions = Array.from(document.querySelectorAll('.category-card')).map(card => ({
  value: card.dataset.category,
  icon: card.querySelector('.cat-icon')?.textContent?.trim() || '',
  name: card.querySelector('.cat-name')?.textContent?.trim() || card.dataset.category,
  ariaLabel: card.getAttribute('aria-label') || `סנן לפי ${card.dataset.category}`,
}));

/* ===================================================
   4. INITIALIZATION
   ================================================== */
function init() {
  loadFavorites();
  loadA11ySettings();
  renderCategoryCards();
  renderHeroCarousel();
  renderProducts();
  renderFavorites();
  bindDealCardEvents();
  syncDealFavoriteButtons();
  renderCarouselDots();
  updateCarousel();
  updateFavCount();
  setupIntersectionObserver();
  bindEvents();
  dom.currentYear.textContent = new Date().getFullYear();
  handleHashRouting();
}

/* ===================================================
   4.1 HERO CAROUSEL
   ================================================== */
function renderHeroCarousel() {
  if (!dom.heroCarouselTrack || !heroSlides.length) return;

  dom.heroCarouselTrack.innerHTML = heroSlides.map((slide, index) => {
    const title = escapeHtml(slide.title).replace(/\n/g, '<br />');
    return `
      <article
        class="hero-carousel-slide"
        role="group"
        aria-roledescription="slide"
        aria-label="שקופית ${index + 1} מתוך ${heroSlides.length}"
        aria-hidden="${index === 0 ? 'false' : 'true'}"
        style="background-image:${slide.gradient}, url('${escapeHtml(slide.image || '')}'); background-size:cover; background-position:center;"
      >
        <div class="hero-carousel-slide-content">
          <span class="slide-tag">${escapeHtml(slide.tag)}</span>
          <h1>${title}</h1>
          <p>${escapeHtml(slide.subtitle)}</p>
          <button
            class="slide-cta"
            data-section="${escapeHtml(slide.section)}"
            ${slide.catFilter ? `data-cat-filter="${escapeHtml(slide.catFilter)}"` : ''}
            aria-label="${escapeHtml(slide.cta)}"
          >
            ${escapeHtml(slide.cta)}
          </button>
        </div>
      </article>`;
  }).join('');

  renderHeroDots();
  updateHeroCarousel();
  bindHeroSlideCtas();
}

function renderHeroDots() {
  if (!dom.heroCarouselDots) return;
  dom.heroCarouselDots.innerHTML = '';

  heroSlides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `עבור לשקופית ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToHeroSlide(i));
    dom.heroCarouselDots.appendChild(dot);
  });
}

function updateHeroCarousel() {
  if (!dom.heroCarouselTrack) return;
  dom.heroCarouselTrack.style.transform = `translateX(-${heroCarouselIndex * 100}%)`;

  const dots = dom.heroCarouselDots ? dom.heroCarouselDots.querySelectorAll('.hero-carousel-dot') : [];
  dots.forEach((dot, i) => {
    const isActive = i === heroCarouselIndex;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  const slides = dom.heroCarouselTrack.querySelectorAll('.hero-carousel-slide');
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === heroCarouselIndex ? 'false' : 'true');
  });
}

function goToHeroSlide(index) {
  heroCarouselIndex = (index + heroSlides.length) % heroSlides.length;
  updateHeroCarousel();
}

function heroNextSlide() {
  goToHeroSlide(heroCarouselIndex + 1);
}

function heroPrevSlide() {
  goToHeroSlide(heroCarouselIndex - 1);
}

function startHeroAutoplay() {
  if (heroCarouselInterval) clearInterval(heroCarouselInterval);
  heroCarouselInterval = setInterval(heroNextSlide, 5000);
}

function stopHeroAutoplay() {
  if (heroCarouselInterval) {
    clearInterval(heroCarouselInterval);
    heroCarouselInterval = null;
  }
}

function bindHeroSlideCtas() {
  if (!dom.heroCarouselTrack) return;

  dom.heroCarouselTrack.querySelectorAll('.slide-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      const catFilter = btn.dataset.catFilter;

      if (catFilter) {
        setCategory(catFilter);
      }

      if (section) {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', `#${section}`);
        }
      }
    });
  });
}

/* ===================================================
   5. PRODUCT RENDERING
   ================================================== */

/**
 * Returns the filtered list of products based on
 * current category and search query.
 */
function getFilteredProducts() {
  return products.filter(product => {
    const matchCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchSearch   = product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          product.category.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });
}

/**
 * Renders a product image or placeholder.
 * @param {Object} product
 * @param {string} [altText]
 * @returns {string} HTML string
 */
function renderProductImage(product, altText) {
  const alt = altText || `תמונת המוצר: ${product.name}`;
  if (product.imageUrl) {
    return `<img
      class="product-card__img"
      src="${escapeHtml(product.imageUrl)}"
      alt="${escapeHtml(alt)}"
      loading="lazy"
      width="280"
      height="220"
    />`;
  }
  // Placeholder (כאן ניתן להחליף לכתובת תמונה משלך)
  const iconMap = {
    'ארונות קיר':   '🗄️',
    'ארונות הזזה':  '🚪',
    'עמדות עבודה': '🖥️',
    'כוורות':       '📚',
    'כונניות':      '🗂️',
    'מגירות שירות': '🗃️',
  };
  const icon = iconMap[product.category] || '🛋️';
  return `
    <div class="product-card__img-placeholder" role="img" aria-label="${escapeHtml(alt)}">
      <span style="font-size:3rem" aria-hidden="true">${icon}</span>
      <span style="font-size:0.75rem;color:var(--color-text-light)">כאן ניתן להחליף לכתובת תמונה משלך</span>
    </div>`;
}

/**
 * Builds a single product card HTML string.
 * @param {Object} product
 * @returns {string}
 */
function buildProductCard(product) {
  const isFav = favorites.includes(product.id);

  return `
    <div
      class="product-card-wrapper"
      data-id="${escapeHtml(product.id)}"
    >
      <article
        class="product-card"
        tabindex="0"
        role="button"
        aria-label="${escapeHtml(product.name)}, ${formatPrice(product.price)}, לחץ לפרטים"
        aria-pressed="false"
        data-id="${escapeHtml(product.id)}"
      >
        <!-- Front -->
        <div class="product-card__face product-card__front" aria-hidden="false">
          <div class="product-card__img-wrap">
            ${renderProductImage(product)}
            <button
              class="product-card__fav-quick${isFav ? ' active' : ''}"
              data-id="${escapeHtml(product.id)}"
              aria-label="${isFav ? 'הסר ממועדפים' : 'הוסף למועדפים'}: ${escapeHtml(product.name)}"
              aria-pressed="${isFav ? 'true' : 'false'}"
            >
              ♥
            </button>
          </div>
          <div class="product-card__body">
            <span class="product-card__category">${escapeHtml(product.category)}</span>
            <h3 class="product-card__name">${escapeHtml(product.name)}</h3>
            <p class="product-card__price">${formatPrice(product.price)}</p>
            <p class="product-card__hint">לחץ להפיכת הכרטיס</p>
          </div>
        </div>

        <!-- Back -->
        <div class="product-card__face product-card__back" aria-hidden="true">
          <h3 class="product-card__back-title">${escapeHtml(product.name)}</h3>
          <p class="product-card__back-desc">${escapeHtml(product.description)}</p>
          <p class="product-card__back-price">${formatPrice(product.price)}</p>
          <p class="product-card__hint">לחץ שוב כדי לחזור לצד הקדמי</p>
        </div>
      </article>
    </div>`;
}

/**
 * Renders all product cards into the grid.
 */
function renderProducts() {
  const filtered = getFilteredProducts();

  // Update count label
  dom.productsCount.textContent = filtered.length
    ? `מוצגים ${filtered.length} מוצרים`
    : '';

  if (filtered.length === 0) {
    dom.productsGrid.innerHTML = '';
    dom.productsEmpty.hidden = false;
    return;
  }

  dom.productsEmpty.hidden = true;
  dom.productsGrid.innerHTML = filtered.map(buildProductCard).join('');
  bindCardEvents();
}

/**
 * Renders favorites section.
 */
function renderFavorites() {
  const favProducts = products.filter(p => favorites.includes(p.id));

  if (favProducts.length === 0) {
    dom.favoritesSection.hidden = true;
    return;
  }

  dom.favoritesSection.hidden = false;
  dom.favoritesGrid.innerHTML = favProducts.map(buildProductCard).join('');
  bindCardEvents(dom.favoritesGrid);
}

/* ===================================================
   6. PRODUCT DETAIL VIEW
   ================================================== */
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentProductId = productId;
  currentView = 'detail';

  const isFav = favorites.includes(product.id);

  dom.productDetailInner.innerHTML = `
    <div class="product-detail__img-wrap">
      ${product.imageUrl
        ? `<img
            class="product-detail__img"
            src="${escapeHtml(product.imageUrl)}"
            alt="תמונת המוצר: ${escapeHtml(product.name)}"
            width="600"
            height="400"
          />`
        : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem" aria-label="אין תמונה זמינה">
            ${getProductIcon(product.category)}
           </div>`
      }
    </div>
    <div class="product-detail__info">
      <span class="product-detail__category">${escapeHtml(product.category)}</span>
      <h2 id="productDetailTitle" class="product-detail__name">${escapeHtml(product.name)}</h2>
      <p class="product-detail__price">${formatPrice(product.price)}</p>
      <p class="product-detail__desc">${escapeHtml(product.description)}</p>
      <div class="hero__cta" style="margin-top:1rem">
        <button
          class="btn btn--primary${isFav ? '' : ''}"
          id="detailFavBtn"
          data-id="${escapeHtml(product.id)}"
          aria-pressed="${isFav ? 'true' : 'false'}"
          aria-label="${isFav ? 'הסר ממועדפים' : 'הוסף למועדפים'}"
        >
          ${isFav ? '❤️ במועדפים' : '🤍 הוסף למועדפים'}
        </button>
        <a
          href="https://api.whatsapp.com/send?phone=972587208090&text=שלום, אני מתעניין ב${encodeURIComponent(product.name)}"
          class="btn btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שאל עלינו בוואטסאפ (נפתח בחלון חדש)"
        >
          💬 שאל עלינו
        </a>
      </div>
    </div>`;

  // Show detail, hide products
  dom.productsSection.hidden   = true;
  dom.favoritesSection.hidden  = true;
  dom.productDetail.hidden     = false;

  // Focus management
  dom.productDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    const titleEl = document.getElementById('productDetailTitle');
    if (titleEl) titleEl.focus();
  }, 400);

  // Bind fav btn in detail
  const detailFavBtn = document.getElementById('detailFavBtn');
  if (detailFavBtn) {
    detailFavBtn.addEventListener('click', () => toggleFavorite(product.id, detailFavBtn));
  }
}

function hideProductDetail() {
  currentView = 'products';
  currentProductId = null;
  dom.productDetail.hidden    = true;
  dom.productsSection.hidden  = false;
  updateFavoritesVisibility();
  dom.productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getProductIcon(category) {
  const map = {
    'ארונות קיר':   '🗄️',
    'ארונות הזזה':  '🚪',
    'עמדות עבודה': '🖥️',
    'כוורות':       '📚',
    'כונניות':      '🗂️',
    'מגירות שירות': '🗃️',
  };
  return map[category] || '🛋️';
}

/* ===================================================
   7. FAVORITES
   ================================================== */
function loadFavorites() {
  try {
    const stored = localStorage.getItem('keter_favorites');
    favorites = stored ? JSON.parse(stored) : [];
  } catch {
    favorites = [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem('keter_favorites', JSON.stringify(favorites));
  } catch {
    // localStorage may be unavailable
  }
}

function toggleFavorite(productId, triggerBtn) {
  const idx = favorites.indexOf(productId);
  const isAdding = idx === -1;

  if (isAdding) {
    favorites.push(productId);
  } else {
    favorites.splice(idx, 1);
  }

  saveFavorites();
  updateFavCount();

  // Update the triggering button if provided
  if (triggerBtn) {
    const product = products.find(p => p.id === productId);
    const name = product ? product.name : '';
    triggerBtn.setAttribute('aria-pressed', isAdding ? 'true' : 'false');
    triggerBtn.setAttribute('aria-label', `${isAdding ? 'הסר ממועדפים' : 'הוסף למועדפים'}: ${name}`);
    triggerBtn.classList.toggle('active', isAdding);

    if (triggerBtn.classList.contains('product-card__fav-quick') || triggerBtn.classList.contains('deal-card__fav-quick')) {
      triggerBtn.textContent = '♥';
      triggerBtn.classList.remove('fav-pop');
      if (isAdding) {
        // Reflow to restart animation when user adds favorite repeatedly.
        void triggerBtn.offsetWidth;
        triggerBtn.classList.add('fav-pop');
      }
    } else {
      triggerBtn.textContent = isAdding ? '❤️ מועדף' : '🤍 הוסף';
    }
  }

  // Re-render favorites section
  renderFavorites();

  // Re-render all cards to reflect updated state
  renderProducts();
  syncDealFavoriteButtons();
}

function syncDealFavoriteButtons() {
  document.querySelectorAll('.deal-card__fav-quick').forEach(btn => {
    const productId = btn.dataset.productId;
    if (!productId) return;

    const isFav = favorites.includes(productId);
    const productName = products.find(p => p.id === productId)?.name || '';
    btn.textContent = '♥';
    btn.classList.toggle('active', isFav);
    btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
    btn.setAttribute('aria-label', `${isFav ? 'הסר ממועדפים' : 'הוסף למועדפים'}: ${productName}`);
  });
}

function updateFavCount() {
  const count = favorites.length;
  dom.favCount.textContent = count;
  dom.favCount.classList.toggle('visible', count > 0);
  dom.favCount.setAttribute('aria-label', `${count} מוצרים במועדפים`);
}

function updateFavoritesVisibility() {
  const favProducts = products.filter(p => favorites.includes(p.id));
  dom.favoritesSection.hidden = favProducts.length === 0;
}

/* ===================================================
   8. CATEGORY FILTER
   ================================================== */
function setCategory(cat) {
  currentCategory = cat;
  renderCategoryCards();
  renderProducts();

  // Scroll to products
  dom.productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateProductsTitle() {
  if (!dom.productsTitle) return;
  dom.productsTitle.textContent = currentCategory === 'all' ? 'כל המוצרים' : currentCategory;
}

function renderCategoryCards() {
  if (!dom.categoriesGrid) return;

  const cards = [];

  if (currentCategory !== 'all') {
    cards.push(`
      <button class="category-card" data-category="all" role="listitem" aria-pressed="false" aria-label="הצג כל המוצרים">
        <span class="cat-icon" aria-hidden="true">🛋️</span>
        <span class="cat-name">הכל</span>
      </button>
    `);
  }

  categoryDefinitions.forEach(category => {
    if (category.value === currentCategory) return;
    cards.push(`
      <button class="category-card" data-category="${escapeHtml(category.value)}" role="listitem" aria-pressed="false" aria-label="${escapeHtml(category.ariaLabel)}">
        <span class="cat-icon" aria-hidden="true">${escapeHtml(category.icon)}</span>
        <span class="cat-name">${escapeHtml(category.name)}</span>
      </button>
    `);
  });

  dom.categoriesGrid.innerHTML = cards.join('');
  updateProductsTitle();
}

/* ===================================================
   9. SEARCH
   ================================================== */
function openSearch() {
  dom.searchBar.classList.add('open');
  dom.searchBar.setAttribute('aria-hidden', 'false');
  dom.searchToggle.setAttribute('aria-expanded', 'true');
  dom.searchInput.focus();
}

function closeSearch() {
  dom.searchBar.classList.remove('open');
  dom.searchBar.setAttribute('aria-hidden', 'true');
  dom.searchToggle.setAttribute('aria-expanded', 'false');
  dom.searchInput.value = '';
  currentSearch = '';
  renderProducts();
}

/* ===================================================
   10. MOBILE MENU
   ================================================== */
function openMobileMenu() {
  dom.mobileMenu.classList.add('open');
  dom.mobileMenu.setAttribute('aria-hidden', 'false');
  dom.mobileMenuOverlay.classList.add('visible');
  dom.hamburger.classList.add('open');
  dom.hamburger.setAttribute('aria-expanded', 'true');
  dom.hamburger.setAttribute('aria-label', 'סגור תפריט');

  // Trap focus in mobile menu
  const firstLink = dom.mobileMenu.querySelector('a');
  if (firstLink) firstLink.focus();
}

function closeMobileMenu() {
  dom.mobileMenu.classList.remove('open');
  dom.mobileMenu.setAttribute('aria-hidden', 'true');
  dom.mobileMenuOverlay.classList.remove('visible');
  dom.hamburger.classList.remove('open');
  dom.hamburger.setAttribute('aria-expanded', 'false');
  dom.hamburger.setAttribute('aria-label', 'פתח תפריט');
}

/* ===================================================
   11. CAROUSEL (RTL-aware)
   ================================================== */
function renderCarouselDots() {
  dom.carouselDots.innerHTML = '';
  for (let i = 0; i < carouselTotal; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `עבור לשקף ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToSlide(i));
    dom.carouselDots.appendChild(dot);
  }
}

function updateCarousel() {
  const visualIndex = (carouselTotal - 1 - carouselIndex + carouselTotal) % carouselTotal;
  const offset = visualIndex * 100;
  dom.carouselTrack.style.transform = `translateX(-${offset}%)`;

  // Update dots
  const dots = dom.carouselDots.querySelectorAll('.carousel__dot');
  dots.forEach((dot, i) => {
    const isActive = i === visualIndex;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update slides aria-hidden
  const slides = dom.carouselTrack.querySelectorAll('.carousel__slide');
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i !== visualIndex ? 'true' : 'false');
  });
}

function goToSlide(index) {
  carouselIndex = (index + carouselTotal) % carouselTotal;
  updateCarousel();
}

// RTL gallery direction: advancing should move right-to-left.
function nextSlide() { goToSlide(carouselIndex - 1); }
function prevSlide() { goToSlide(carouselIndex + 1); }

/* ===================================================
   12. ACCESSIBILITY PANEL
   ================================================== */
let a11ySettings = {
  textLevel:      0,    // increments of 0.1rem
  highContrast:   false,
  reduceMotion:   false,
  highlightLinks: false,
};

function loadA11ySettings() {
  try {
    const stored = localStorage.getItem('keter_a11y');
    if (stored) {
      a11ySettings = { ...a11ySettings, ...JSON.parse(stored) };
      applyA11ySettings();
    }
  } catch {
    // ignore
  }
}

function saveA11ySettings() {
  try {
    localStorage.setItem('keter_a11y', JSON.stringify(a11ySettings));
  } catch {
    // ignore
  }
}

function applyA11ySettings() {
  const html = document.documentElement;

  // Font size
  const basePx = 16 + a11ySettings.textLevel * 1.5;
  html.style.fontSize = `${basePx}px`;

  // High contrast
  document.body.classList.toggle('high-contrast', a11ySettings.highContrast);
  dom.a11yHighContrast.setAttribute('aria-pressed', a11ySettings.highContrast ? 'true' : 'false');

  // Reduce motion
  document.body.classList.toggle('reduce-motion', a11ySettings.reduceMotion);
  dom.a11yReduceMotion.setAttribute('aria-pressed', a11ySettings.reduceMotion ? 'true' : 'false');

  // Highlight links
  document.body.classList.toggle('highlight-links', a11ySettings.highlightLinks);
  dom.a11yHighlightLinks.setAttribute('aria-pressed', a11ySettings.highlightLinks ? 'true' : 'false');
}

function openAccessibilityPanel() {
  dom.accessibilityPanel.hidden = false;
  dom.accessibilityPanel.classList.add('panel-open');
  dom.accessibilityPanel.setAttribute('aria-hidden', 'false');
  dom.accessibilityFab.setAttribute('aria-expanded', 'true');
  dom.accessibilityClose.focus();
}

function closeAccessibilityPanel() {
  dom.accessibilityPanel.classList.remove('panel-open');
  dom.accessibilityPanel.setAttribute('aria-hidden', 'true');
  dom.accessibilityFab.setAttribute('aria-expanded', 'false');
  setTimeout(() => { dom.accessibilityPanel.hidden = true; }, 300);
}

/* ===================================================
   13. CONTACT FORM VALIDATION
   ================================================== */
function validateContactForm() {
  let valid = true;

  const name  = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const msg   = document.getElementById('contactMsg');

  // Reset errors
  ['nameError', 'emailError', 'msgError'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
  [name, email, msg].forEach(el => el.classList.remove('error'));

  if (!name.value.trim()) {
    document.getElementById('nameError').textContent = 'אנא הכנס שם מלא';
    name.classList.add('error');
    valid = false;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    document.getElementById('emailError').textContent = 'אנא הכנס כתובת מייל תקינה';
    email.classList.add('error');
    valid = false;
  }

  if (!msg.value.trim()) {
    document.getElementById('msgError').textContent = 'אנא כתוב הודעה';
    msg.classList.add('error');
    valid = false;
  }

  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ===================================================
   14. INTERSECTION OBSERVER (Fade-In)
   ================================================== */
function setupIntersectionObserver() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ===================================================
   15. NAVBAR SCROLL EFFECT
   ================================================== */
function setupScrollEffect() {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        dom.navbar.classList.toggle('scrolled', window.scrollY > 20);
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  dom.navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ===================================================
   16. HASH ROUTING (Basic SPA)
   ================================================== */
function handleHashRouting() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}

/* ===================================================
   17. BIND CARD EVENTS
   ================================================== */
function bindCardEvents(container) {
  const gridEl = container || dom.productsGrid;

  // Product card flip toggle only (click / keyboard)
  gridEl.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't flip if clicking a button inside
      if (e.target.closest('button') || e.target.closest('a')) return;
      flipCard(card);
    });

    // Keyboard: Enter / Space toggles flip state
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (e.target.closest('button') || e.target.closest('a')) return;
        flipCard(card);
      }
    });
  });

  // Quick favorite from card front
  gridEl.querySelectorAll('.product-card__fav-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.id;
      toggleFavorite(productId, btn);
    });
  });
}

function bindDealCardEvents() {
  document.querySelectorAll('.deal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      flipDealCard(card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (e.target.closest('button') || e.target.closest('a')) return;
        flipDealCard(card);
      }
    });
  });
}

function flipDealCard(card) {
  const isFlipped = card.classList.toggle('flipped');
  card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
  const front = card.querySelector('.deal-card__front');
  const back = card.querySelector('.deal-card__back');
  if (front) front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
  if (back) back.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
}

function flipCard(card) {
  const isFlipped = card.classList.toggle('flipped');
  card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
  card.setAttribute('aria-label',
    isFlipped
      ? `${card.querySelector('.product-card__name')?.textContent || ''} – לחץ לסגירה`
      : `${card.querySelector('.product-card__name')?.textContent || ''} – לחץ לפרטים`
  );

  const front = card.querySelector('.product-card__front');
  const back  = card.querySelector('.product-card__back');
  if (front) front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
  if (back)  back.setAttribute('aria-hidden',  isFlipped ? 'false' : 'true');
}

/* ===================================================
   18. BIND ALL EVENTS
   ================================================== */
function bindEvents() {
  // ---- Navbar scroll ----
  setupScrollEffect();

  // ---- Search ----
  dom.searchToggle.addEventListener('click', () => {
    const isOpen = dom.searchBar.classList.contains('open');
    if (isOpen) closeSearch(); else openSearch();
  });

  dom.searchClose.addEventListener('click', closeSearch);

  dom.searchInput.addEventListener('input', () => {
    currentSearch = dom.searchInput.value;
    renderProducts();
  });

  dom.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });

  // ---- Hamburger / Mobile Menu ----
  dom.hamburger.addEventListener('click', () => {
    const isOpen = dom.mobileMenu.classList.contains('open');
    if (isOpen) closeMobileMenu(); else openMobileMenu();
  });

  dom.mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  dom.mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dom.mobileMenu.classList.contains('open')) closeMobileMenu();
      if (dom.searchBar.classList.contains('open')) closeSearch();
      if (!dom.accessibilityPanel.hidden) closeAccessibilityPanel();
    }
  });

  // ---- Categories ----
  if (dom.categoriesGrid) {
    dom.categoriesGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.category-card');
      if (!card) return;
      setCategory(card.dataset.category);
    });

    dom.categoriesGrid.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.category-card');
      if (!card) return;
      e.preventDefault();
      setCategory(card.dataset.category);
    });
  }

  // ---- Back button (product detail) ----
  dom.backBtn.addEventListener('click', hideProductDetail);

  // ---- Hero carousel ----
  if (dom.heroPrevBtn) dom.heroPrevBtn.addEventListener('click', heroPrevSlide);
  if (dom.heroNextBtn) dom.heroNextBtn.addEventListener('click', heroNextSlide);

  if (dom.heroCarousel) {
    startHeroAutoplay();

    dom.heroCarousel.addEventListener('mouseenter', stopHeroAutoplay);
    dom.heroCarousel.addEventListener('mouseleave', startHeroAutoplay);

    let touchStartX = 0;
    dom.heroCarousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    dom.heroCarousel.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) heroPrevSlide(); else heroNextSlide();
      }
    }, { passive: true });
  }

  // ---- Carousel ----
  dom.carouselPrev.addEventListener('click', prevSlide);
  dom.carouselNext.addEventListener('click', nextSlide);

  // ---- Deals quick favorite ----
  document.querySelectorAll('.deal-card__fav-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.productId;
      if (!productId) return;
      toggleFavorite(productId);
    });
  });

  // Carousel keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === dom.heroPrevBtn ||
        document.activeElement === dom.heroNextBtn ||
        (dom.heroCarouselDots && dom.heroCarouselDots.contains(document.activeElement))) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') heroPrevSlide();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowDown') heroNextSlide();
    }

    if (document.activeElement === dom.carouselPrev ||
        document.activeElement === dom.carouselNext ||
        dom.carouselDots.contains(document.activeElement)) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') prevSlide();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowDown') nextSlide();
    }
  });

  // Auto-play carousel
  let carouselInterval = setInterval(nextSlide, 5000);
  const carouselEl = document.querySelector('.carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carouselEl.addEventListener('mouseleave', () => {
      clearInterval(carouselInterval);
      carouselInterval = setInterval(nextSlide, 5000);
    });
    // Touch support
    let touchStartX = 0;
    carouselEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    carouselEl.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) prevSlide(); else nextSlide();
      }
    }, { passive: true });
  }

  // ---- Accessibility FAB ----
  dom.accessibilityFab.addEventListener('click', () => {
    const isOpen = !dom.accessibilityPanel.hidden && dom.accessibilityPanel.classList.contains('panel-open');
    if (isOpen) closeAccessibilityPanel(); else openAccessibilityPanel();
  });

  dom.accessibilityClose.addEventListener('click', closeAccessibilityPanel);

  // A11y options
  dom.a11yIncreaseText.addEventListener('click', () => {
    if (a11ySettings.textLevel < 4) {
      a11ySettings.textLevel++;
      applyA11ySettings();
      saveA11ySettings();
    }
  });

  dom.a11yDecreaseText.addEventListener('click', () => {
    if (a11ySettings.textLevel > -2) {
      a11ySettings.textLevel--;
      applyA11ySettings();
      saveA11ySettings();
    }
  });

  dom.a11yHighContrast.addEventListener('click', () => {
    a11ySettings.highContrast = !a11ySettings.highContrast;
    applyA11ySettings();
    saveA11ySettings();
  });

  dom.a11yReduceMotion.addEventListener('click', () => {
    a11ySettings.reduceMotion = !a11ySettings.reduceMotion;
    applyA11ySettings();
    saveA11ySettings();
  });

  dom.a11yHighlightLinks.addEventListener('click', () => {
    a11ySettings.highlightLinks = !a11ySettings.highlightLinks;
    applyA11ySettings();
    saveA11ySettings();
  });

  dom.a11yReset.addEventListener('click', () => {
    a11ySettings = { textLevel: 0, highContrast: false, reduceMotion: false, highlightLinks: false };
    applyA11ySettings();
    saveA11ySettings();
    document.documentElement.style.fontSize = '16px';
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (
      !dom.accessibilityPanel.hidden &&
      dom.accessibilityPanel.classList.contains('panel-open') &&
      !dom.accessibilityPanel.contains(e.target) &&
      !dom.accessibilityFab.contains(e.target)
    ) {
      closeAccessibilityPanel();
    }
  });

  // ---- Contact Form ----
  if (dom.contactForm) {
    dom.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateContactForm()) {
        // Focus first error field
        const firstError = dom.contactForm.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Simulate form submission
      dom.formSuccess.hidden = false;
      dom.contactForm.reset();

      setTimeout(() => {
        dom.formSuccess.hidden = true;
      }, 6000);
    });
  }

  // ---- Smooth hash navigation ----
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL
        history.pushState(null, '', href);
      }
    });
  });

  // ---- Handle hashchange ----
  window.addEventListener('hashchange', handleHashRouting);
}

/* ===================================================
   19. UTILITIES
   ================================================== */

/**
 * Formats a number as Israeli currency string.
 * @param {number} price
 * @returns {string}
 */
function formatPrice(price) {
  return `₪${price.toLocaleString('he-IL')}`;
}

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ===================================================
   20. LAUNCH
   ================================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
