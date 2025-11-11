# 📱 RESPONSIVIDADE + ⚡ PERFORMANCE

## 📐 BREAKPOINTS

```css
/* Mobile First Approach */
:root {
  /* Breakpoints */
  --breakpoint-xs: 375px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## 📱 RESPONSIVIDADE COMPLETA

### Base Mobile (< 640px)

```css
/* ===== BASE MOBILE STYLES ===== */

/* Typography */
@media (max-width: 640px) {
  :root {
    --font-h1: 40px;
    --font-h2: 32px;
    --font-h3: 24px;
    --font-h4: 20px;
    --font-h5: 18px;
    --font-h6: 16px;
    
    --spacing-section: 80px;
  }
  
  .container {
    padding: 0 20px;
  }
  
  /* Section Titles */
  .section-title {
    font-size: 32px;
    line-height: 1.2;
  }
  
  .section-subtitle {
    font-size: 16px;
  }
  
  /* Section Badge */
  .section-badge {
    padding: 8px 16px;
    font-size: 10px;
  }
}

/* Header */
@media (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: var(--bg-primary);
    border-left: 1px solid var(--border-color);
    padding: 80px 32px 32px;
    transition: right 0.3s ease;
    z-index: var(--z-fixed);
  }
  
  .nav__menu.active {
    right: 0;
  }
  
  .nav__list {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  
  .nav__link {
    font-size: 18px;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  /* Menu Overlay */
  .menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    z-index: calc(var(--z-fixed) - 1);
  }
  
  .menu-overlay.active {
    opacity: 1;
    visibility: visible;
  }
}

/* Hero Section */
@media (max-width: 768px) {
  .hero {
    padding: 120px 0 80px;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .hero-title {
    font-size: 40px;
    line-height: 1.1;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  
  .hero-cta .btn-primary,
  .hero-cta .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .hero-image {
    order: -1;
    height: 300px;
  }
}

/* Why Section */
@media (max-width: 768px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .stat-card {
    padding: 32px 24px;
  }
  
  .stat-number {
    font-size: 48px;
  }
  
  .stat-label {
    font-size: 14px;
  }
}

/* Privacy Section */
@media (max-width: 768px) {
  .privacy-content {
    padding: 48px 24px;
  }
  
  .privacy-title {
    font-size: 32px;
  }
  
  .privacy-features {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

/* Trusted Section */
@media (max-width: 768px) {
  .trusted-visual {
    height: 300px;
  }
  
  .trusted-markers {
    flex-direction: column;
    gap: 40px;
  }
  
  .trusted-line {
    width: 1px;
    height: 100%;
    left: 50%;
    top: 0;
    background: linear-gradient(180deg, transparent, var(--text-tertiary), transparent);
  }
}

/* Solutions Section */
@media (max-width: 768px) {
  .solutions-list {
    gap: 60px;
  }
  
  .solution-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .solution-number {
    font-size: 60px;
  }
  
  .solution-content {
    padding-left: 0;
  }
  
  .solution-title {
    font-size: 28px;
  }
  
  .solution-description {
    font-size: 16px;
  }
}

/* About Section */
@media (max-width: 768px) {
  .about-tabs {
    flex-direction: column;
    gap: 12px;
  }
  
  .tab-btn {
    width: 100%;
  }
  
  .about-text p {
    font-size: 18px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .value-card {
    padding: 32px 24px;
  }
}

/* Partner Section */
@media (max-width: 768px) {
  .partner-block {
    margin-bottom: 80px;
  }
  
  .partner-block-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .block-number {
    font-size: 60px;
  }
  
  .block-title {
    font-size: 28px;
  }
  
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
  
  .growth-feature {
    flex-direction: column;
    gap: 16px;
  }
  
  .feature-accent-line {
    width: 48px;
    height: 2px;
    margin-top: 0;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .partner-ctas {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-partner-primary,
  .btn-partner-secondary {
    width: 100%;
    justify-content: center;
  }
}

/* Footer */
@media (max-width: 768px) {
  .footer {
    padding: 60px 0 32px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .footer-tagline {
    margin: 0 auto;
  }
  
  .footer-social {
    justify-content: center;
  }
  
  .footer-links {
    align-items: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-legal {
    flex-direction: column;
    gap: 8px;
  }
  
  .separator {
    display: none;
  }
}

/* Modals */
@media (max-width: 640px) {
  .modal-content {
    padding: 32px 24px;
    max-height: 95vh;
  }
  
  .modal-content h3 {
    font-size: 24px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🖼️ TOUCH & MOBILE INTERACTIONS

```css
/* ===== MOBILE INTERACTIONS ===== */

/* Touch-friendly tap targets (min 44x44px) */
@media (max-width: 768px) {
  button,
  a,
  .nav__link,
  .btn,
  .tab-btn {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Remove hover effects on touch devices */
  @media (hover: none) {
    .btn:hover,
    .nav__link:hover,
    .card:hover {
      transform: none;
    }
  }
  
  /* Improve tap highlighting */
  * {
    -webkit-tap-highlight-color: rgba(0, 99, 154, 0.1);
  }
}

/* Safe area insets for notched devices */
@supports (padding: max(0px)) {
  .header {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }
  
  .footer {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
    padding-bottom: max(40px, env(safe-area-inset-bottom));
  }
}
```

---

## ⚡ PERFORMANCE & OTIMIZAÇÕES

### 1. Critical CSS (Inline no <head>)

```html
<style>
  /* Critical CSS - Above the fold */
  :root {
    --bg-primary: #ffffff;
    --text-primary: #111827;
    --accent-primary: #00639A;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
  }
  
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
  
  .hero {
    min-height: 100vh;
    padding-top: 120px;
  }
</style>
```

### 2. Resource Hints

```html
<head>
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://api.btsglobal.com">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/css/style.css" as="style">
  <link rel="preload" href="/js/main.js" as="script">
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
  
  <!-- Async CSS loading -->
  <link rel="stylesheet" href="/css/style.css" media="print" onload="this.media='all'">
</head>
```

### 3. Image Optimization

```html
<!-- Responsive Images with WebP -->
<picture>
  <source 
    srcset="/images/hero-mobile.webp 640w,
            /images/hero-tablet.webp 1024w,
            /images/hero-desktop.webp 1920w"
    type="image/webp"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 80vw,
           1200px"
  >
  <source 
    srcset="/images/hero-mobile.jpg 640w,
            /images/hero-tablet.jpg 1024w,
            /images/hero-desktop.jpg 1920w"
    type="image/jpeg"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 80vw,
           1200px"
  >
  <img 
    src="/images/hero-desktop.jpg" 
    alt="BTS Global Corp Platform"
    loading="lazy"
    decoding="async"
    width="1200"
    height="800"
  >
</picture>
```

### 4. Lazy Loading

```javascript
// Lazy load images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Lazy load sections
const lazyLoadSections = document.querySelectorAll('[data-lazy-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add('loaded');
      
      // Load section-specific JS
      if (section.dataset.lazyJs) {
        import(section.dataset.lazyJs);
      }
    }
  });
}, { rootMargin: '100px' });

lazyLoadSections.forEach(section => sectionObserver.observe(section));
```

### 5. Code Splitting

```html
<!-- Defer non-critical JavaScript -->
<script src="/js/main.js" defer></script>
<script src="/js/animations.js" defer></script>

<!-- Load heavy modules only when needed -->
<script>
  // Load partner form only when clicked
  document.getElementById('partner-apply-btn')?.addEventListener('click', async () => {
    const { openPartnerForm } = await import('/js/partner-form.js');
    openPartnerForm();
  }, { once: true });
</script>
```

### 6. Service Worker (PWA)

```javascript
// service-worker.js
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `bts-global-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/logo.svg',
];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch (Network First, Cache Fallback)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
```

### 7. Web Vitals Monitoring

```javascript
// web-vitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  // Send to analytics service
  console.log(`[Web Vitals] ${name}:`, value);
  
  if (window.gtag) {
    gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
  }
}

// Monitor all Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 8. CSS Optimizations

```css
/* ===== PERFORMANCE CSS ===== */

/* Use will-change sparingly for animations */
.hero-image,
.gradient-orb {
  will-change: transform;
}

/* Remove will-change after animation */
.hero-image.loaded {
  will-change: auto;
}

/* Use contain for isolated components */
.card,
.solution-item,
.value-card {
  contain: layout style paint;
}

/* Hardware acceleration for smooth animations */
.animated-element {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Optimize font rendering */
body {
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Dark mode optimization */
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}
```

---

## 🎯 PERFORMANCE TARGETS

| Metric | Target | Critical |
|--------|--------|----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ |
| **FID** (First Input Delay) | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ |
| **FCP** (First Contentful Paint) | < 1.8s | ✅ |
| **TTI** (Time to Interactive) | < 3.8s | ✅ |
| **Speed Index** | < 3.4s | ✅ |
| **Total Blocking Time** | < 200ms | ✅ |

---

## 🔧 BUILD OPTIMIZATION

### Minification & Compression

```bash
# HTML Minification
html-minifier --collapse-whitespace --remove-comments index.html -o dist/index.html

# CSS Minification
cssnano style.css -o dist/style.min.css

# JS Minification
terser main.js -o dist/main.min.js --compress --mangle

# Gzip Compression
gzip -9 -k dist/*.html dist/*.css dist/*.js

# Brotli Compression (better than gzip)
brotli -q 11 dist/*.html dist/*.css dist/*.js
```

### Image Optimization

```bash
# WebP Conversion
cwebp -q 85 hero.jpg -o hero.webp

# AVIF Conversion (next-gen format)
avifenc -q 75 hero.jpg hero.avif

# SVG Optimization
svgo --multipass --pretty *.svg
```

---

## 📊 MONITORING & ANALYTICS

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Performance Monitoring -->
<script>
  // Monitor page load time
  window.addEventListener('load', () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  });
</script>
```

---

**PRÓXIMO**: Integração Agentic Commerce Detalhada
