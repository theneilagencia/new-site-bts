# 🦶 FOOTER + JAVASCRIPT COMPLETO

## FOOTER - ESTRUTURA HTML

```html
<footer class="footer">
  <div class="grid-background"></div>
  
  <div class="container">
    <!-- Footer Content Grid (4 columns) -->
    <div class="footer-grid">
      
      <!-- Column 1: Brand + Social -->
      <div class="footer-column">
        <!-- Logo -->
        <div class="footer-logo">
          <span class="logo-text">BTS</span>
          <span class="logo-subtext">Global Corp</span>
        </div>
        
        <p class="footer-tagline">
          Empowering businesses with AI-driven intelligence 
          and data analytics since 2010.
        </p>
        
        <!-- Social Links -->
        <div class="footer-social">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <!-- LinkedIn icon -->
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <!-- Twitter/X icon -->
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <!-- GitHub icon -->
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <!-- YouTube icon -->
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Column 2: Platform -->
      <div class="footer-column">
        <h4 class="footer-title">Platform</h4>
        <ul class="footer-links">
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#api">API</a></li>
        </ul>
      </div>
      
      <!-- Column 3: Company -->
      <div class="footer-column">
        <h4 class="footer-title">Company</h4>
        <ul class="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#press">Press Kit</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#partner">Partners</a></li>
        </ul>
      </div>
      
      <!-- Column 4: Resources -->
      <div class="footer-column">
        <h4 class="footer-title">Resources</h4>
        <ul class="footer-links">
          <li><a href="#docs">Documentation</a></li>
          <li><a href="#tutorials">Tutorials</a></li>
          <li><a href="#support">Support Center</a></li>
          <li><a href="#status">System Status</a></li>
          <li><a href="#changelog">Changelog</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
        </ul>
      </div>
      
    </div>
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <!-- Copyright -->
        <p class="footer-copyright">
          &copy; 2025 BTS Global Corp. All rights reserved.
        </p>
        
        <!-- Legal Links -->
        <div class="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <span class="separator">•</span>
          <a href="#terms">Terms of Service</a>
          <span class="separator">•</span>
          <a href="#cookies">Cookie Policy</a>
        </div>
        
        <!-- Language Switcher -->
        <div class="footer-language">
          <button class="language-switcher" id="language-switcher">
            <svg class="language-icon" width="16" height="16">
              <!-- Globe icon -->
            </svg>
            <span id="current-language">EN</span>
            <svg class="chevron-icon" width="12" height="12">
              <!-- Chevron down -->
            </svg>
          </button>
          
          <!-- Language Dropdown -->
          <div class="language-dropdown" id="language-dropdown">
            <button class="language-option" data-lang="en">
              <span class="flag">🇺🇸</span>
              <span>English</span>
            </button>
            <button class="language-option" data-lang="pt">
              <span class="flag">🇧🇷</span>
              <span>Português</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

## FOOTER - CSS COMPLETO

```css
/* ===== FOOTER ===== */
.footer {
  position: relative;
  padding: 80px 0 40px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  overflow: hidden;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Footer Logo */
.footer-logo {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.footer-logo .logo-text {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-bts-s02), var(--accent-secondary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-logo .logo-subtext {
  font-size: 16px;
  font-weight: 400;
  color: var(--text-tertiary);
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-tertiary);
  max-width: 320px;
}

/* Social Links */
.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-tertiary);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--accent-glow);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

/* Footer Links */
.footer-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 14px;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.footer-links a::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent-primary);
  opacity: 0;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent-primary);
  padding-left: 12px;
}

.footer-links a:hover::before {
  opacity: 1;
}

/* Footer Bottom */
.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}

.footer-copyright {
  font-size: 14px;
  color: var(--text-tertiary);
}

/* Legal Links */
.footer-legal {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.footer-legal a {
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--accent-primary);
}

.separator {
  color: var(--text-tertiary);
  opacity: 0.3;
}

/* Language Switcher */
.footer-language {
  position: relative;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.language-switcher:hover {
  border-color: var(--accent-primary);
  background: var(--accent-glow);
}

.language-icon {
  color: var(--text-tertiary);
}

.chevron-icon {
  color: var(--text-tertiary);
  transition: transform var(--transition-fast);
}

.language-switcher.active .chevron-icon {
  transform: rotate(180deg);
}

/* Language Dropdown */
.language-dropdown {
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  min-width: 160px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all var(--transition-fast);
}

.language-dropdown.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.language-option:hover {
  background: var(--accent-glow);
}

.flag {
  font-size: 18px;
}
```

---

## ⚡ JAVASCRIPT COMPLETO - main.js

```javascript
// ===== BTS GLOBAL CORP - JAVASCRIPT PRINCIPAL =====

// ===== CONSTANTS =====
const MOBILE_BREAKPOINT = 768;
const SCROLL_THRESHOLD = 100;
const ANIMATION_DELAY = 100;

// ===== STATE =====
let currentLanguage = 'en';
let isMenuOpen = false;
let lastScrollY = window.scrollY;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🚀 BTS Global Corp', 'font-size: 24px; color: #00639A; font-weight: bold;');
  console.log('%cWebsite initialized successfully', 'color: #21B6F3;');
  
  initializeApp();
});

function initializeApp() {
  // Header & Navigation
  initHeader();
  initMobileMenu();
  initScrollEffects();
  
  // Sections
  initHeroSection();
  initWhySection();
  initTrustedSection();
  initSolutionsSection();
  initAboutSection();
  initPartnerSection();
  
  // Footer
  initFooter();
  initLanguageSwitcher();
  
  // Global
  initScrollAnimations();
  initSmoothScroll();
  initBackToTop();
  
  // Load translations
  loadTranslations(currentLanguage);
}

// ===== HEADER & NAVIGATION =====
function initHeader() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }, 10));
}

function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
  }
  
  // Close on nav link click
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        closeMobileMenu();
      }
    });
  });
}

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  
  if (isMenuOpen) {
    navMenu.classList.add('active');
    menuToggle.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  isMenuOpen = false;
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  window.addEventListener('scroll', debounce(() => {
    let current = '';
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-link');
      }
    });
  }, 50));
}

// ===== HERO SECTION =====
function initHeroSection() {
  const heroButtons = document.querySelectorAll('.hero-cta .btn-primary, .hero-cta .btn-secondary');
  
  heroButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      
      if (href === '#demo') {
        e.preventDefault();
        openDemoScheduler();
      }
    });
  });
}

function openDemoScheduler() {
  console.log('Opening demo scheduler...');
  // Integração com Agentic Commerce
  if (window.agenticCommerce) {
    window.agenticCommerce.startDemoFlow();
  } else {
    // Fallback
    alert('Demo scheduling coming soon!');
  }
}

// ===== WHY SECTION =====
function initWhySection() {
  // Animated stats counter
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }
  }, 16);
}

// ===== TRUSTED SECTION =====
function initTrustedSection() {
  const markers = document.querySelectorAll('.trust-marker');
  
  markers.forEach((marker, index) => {
    marker.style.animationDelay = `${index * 0.2}s`;
  });
}

// ===== SOLUTIONS SECTION =====
function initSolutionsSection() {
  const solutionItems = document.querySelectorAll('.solution-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  solutionItems.forEach(item => observer.observe(item));
}

// ===== ABOUT SECTION =====
function initAboutSection() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Remove active from all
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active to clicked
      btn.classList.add('active');
      document.querySelector(`[data-tab-content="${targetTab}"]`).classList.add('active');
    });
  });
}

// ===== PARTNER SECTION =====
function initPartnerSection() {
  const partnerBlocks = document.querySelectorAll('.partner-block');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  partnerBlocks.forEach(block => observer.observe(block));
  
  // Apply button
  const applyBtn = document.getElementById('partner-apply-btn');
  if (applyBtn) {
    applyBtn.addEventListener('click', openPartnerApplicationModal);
  }
}

function openPartnerApplicationModal() {
  console.log('Opening partner application...');
  
  if (window.agenticCommerce) {
    window.agenticCommerce.startPartnershipFlow();
  } else {
    showPartnerForm();
  }
}

function showPartnerForm() {
  // Ver detalhes em SPEC-PARTNER-SECTION.md
  alert('Partner application form coming soon!');
}

// ===== FOOTER =====
function initFooter() {
  // Smooth scroll for footer links
  const footerLinks = document.querySelectorAll('.footer-links a');
  
  footerLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

// ===== LANGUAGE SWITCHER =====
function initLanguageSwitcher() {
  const switcher = document.getElementById('language-switcher');
  const dropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (!switcher || !dropdown) return;
  
  switcher.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('active');
    dropdown.classList.toggle('active');
  });
  
  languageOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      switchLanguage(lang);
      switcher.classList.remove('active');
      dropdown.classList.remove('active');
    });
  });
  
  // Close on outside click
  document.addEventListener('click', () => {
    switcher.classList.remove('active');
    dropdown.classList.remove('active');
  });
}

function switchLanguage(lang) {
  currentLanguage = lang;
  document.getElementById('current-language').textContent = lang.toUpperCase();
  loadTranslations(lang);
  
  console.log(`Language switched to: ${lang}`);
}

function loadTranslations(lang) {
  // Integração com translations.js
  if (window.translations && window.translations[lang]) {
    const t = window.translations[lang];
    
    // Atualizar conteúdo da página
    // Ver src/utils/translations.js para estrutura completa
    
    console.log(`Translations loaded for: ${lang}`);
  }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#' || href === '#demo') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  let backToTopBtn = document.getElementById('back-to-top');
  
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M10 4L10 16M10 4L4 10M10 4L16 10" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    `;
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
  }
  
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, 100));
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== UTILITIES =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log(`LCP: ${entry.renderTime || entry.loadTime}ms`);
      }
    }
  });
  
  observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// ===== EXPORT (if using modules) =====
// export { switchLanguage, openDemoScheduler, openPartnerApplicationModal };
```

---

## 🎨 BACK TO TOP BUTTON CSS

```css
/* ===== BACK TO TOP BUTTON ===== */
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: var(--z-fixed);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-bts-s02), var(--accent-secondary));
  border: none;
  border-radius: var(--radius-md);
  color: white;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-lg);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.back-to-top:active {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
}
```

---

**PRÓXIMO**: Responsividade Completa + Performance
