# 🤝 PARTNER SECTION - ESPECIFICAÇÃO COMPLETA

## ⚠️ SEÇÃO CRÍTICA - MÁXIMA ATENÇÃO

Esta é a seção MAIS IMPORTANTE do site, responsável por capturar leads de parceiros estratégicos.

---

## ESTRUTURA HTML COMPLETA

```html
<section id="partner" class="partner-section">
  <!-- Grid Background -->
  <div class="grid-background"></div>
  
  <!-- Radial Gradients -->
  <div class="partner-section__gradients">
    <div class="gradient-orb" style="left: 25%; top: 33%; background: radial-gradient(circle, rgba(0, 99, 154, 0.12), transparent 70%);"></div>
    <div class="gradient-orb" style="right: 25%; bottom: 33%; background: radial-gradient(circle, rgba(33, 182, 243, 0.10), transparent 65%);"></div>
  </div>
  
  <div class="container partner-container">
    <!-- Badge com shimmer effect -->
    <div class="section-badge">
      <div class="badge-shimmer"></div>
      <div class="badge-pulse"></div>
      <span class="badge-text">STRATEGIC PARTNERSHIP</span>
    </div>
    
    <!-- Header -->
    <div class="partner-header">
      <h2 class="section-title">
        Become a <span class="title-highlight">BTS Global Partner</span>
      </h2>
      
      <p class="section-subtitle">
        Join our ecosystem of strategic partners and unlock new 
        opportunities for growth and innovation.
      </p>
      
      <p class="partner-intro">
        The BTS Global Partner Program is designed for companies that 
        want to expand their offerings with cutting-edge AI and data 
        analytics technology. We provide complete support, specialized 
        training, and priority access to our solutions.
      </p>
    </div>
    
    <!-- Section 01: Infrastructure & Support -->
    <div class="partner-block">
      <!-- Number + Title -->
      <div class="partner-block-header">
        <span class="block-number">01</span>
        <div class="block-title-wrapper">
          <div class="block-line"></div>
          <h3 class="block-title">Infrastructure & Support</h3>
        </div>
      </div>
      
      <p class="block-intro">
        We provide all the foundation you need for success:
      </p>
      
      <!-- Infrastructure Items (2-column grid) -->
      <div class="infrastructure-grid">
        <div class="infrastructure-item">
          <div class="item-indicator"></div>
          <p>Customizable white-label platform with your brand identity</p>
        </div>
        
        <div class="infrastructure-item">
          <div class="item-indicator"></div>
          <p>Complete API and detailed technical documentation</p>
        </div>
        
        <div class="infrastructure-item">
          <div class="item-indicator"></div>
          <p>Sandbox environment for testing and development</p>
        </div>
        
        <div class="infrastructure-item">
          <div class="item-indicator"></div>
          <p>24/7 priority technical support with guaranteed SLA</p>
        </div>
      </div>
    </div>
    
    <!-- Section 02: Growth Acceleration -->
    <div class="partner-block">
      <!-- Number + Title -->
      <div class="partner-block-header">
        <span class="block-number">02</span>
        <div class="block-title-wrapper">
          <div class="block-line" style="background: linear-gradient(to right, rgba(42, 123, 161, 0.3), transparent);"></div>
          <h3 class="block-title">Growth Acceleration</h3>
        </div>
      </div>
      
      <!-- Growth Features (Vertical Stack) -->
      <div class="growth-stack">
        <div class="growth-feature">
          <div class="feature-accent-line"></div>
          <div class="feature-content">
            <h4 class="feature-title">Co-branded Marketing</h4>
            <p class="feature-text">
              Marketing materials, success stories and joint campaigns 
              to amplify your reach and credibility in the market.
            </p>
          </div>
        </div>
        
        <div class="growth-feature">
          <div class="feature-accent-line"></div>
          <div class="feature-content">
            <h4 class="feature-title">Training & Certification</h4>
            <p class="feature-text">
              Complete training programs for your team to become 
              certified experts in our solutions and methodologies.
            </p>
          </div>
        </div>
        
        <div class="growth-feature">
          <div class="feature-accent-line"></div>
          <div class="feature-content">
            <h4 class="feature-title">Qualified Leads</h4>
            <p class="feature-text">
              Sharing business opportunities and access to our 
              potential customer base for mutual growth.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section 03: Approval Process -->
    <div class="partner-block">
      <!-- Number + Title -->
      <div class="partner-block-header">
        <span class="block-number">03</span>
        <div class="block-title-wrapper">
          <div class="block-line" style="background: linear-gradient(to right, rgba(33, 182, 243, 0.3), transparent);"></div>
          <h3 class="block-title">Approval Process</h3>
        </div>
      </div>
      
      <p class="block-description">
        Our selection process is rigorous yet transparent. We seek 
        partners aligned with our values of excellence, innovation 
        and customer focus. Upon approval, you will have immediate 
        access to all program benefits.
      </p>
      
      <!-- What You Get -->
      <div class="benefits-section">
        <h4 class="benefits-title">What you get:</h4>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-check"></div>
            <p>Competitive commissions and revenue share structure</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-check"></div>
            <p>Early access to new products and features</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-check"></div>
            <p>Exclusive dashboard for customer management</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-check"></div>
            <p>Personalized sales and onboarding materials</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-check"></div>
            <p>Private partner community for networking</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Dual CTA (Igual ao Hero) -->
    <div class="partner-ctas">
      <!-- Primary CTA: Apply to Program -->
      <button class="btn-partner-primary" id="partner-apply-btn">
        <div class="btn-gradient"></div>
        <div class="btn-content">
          <span>Apply to Program</span>
          <svg class="btn-arrow" width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 0L16 8L8 16" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <div class="btn-hover-effect"></div>
      </button>
      
      <!-- Secondary CTA: Partner Portal Login -->
      <a href="#portal" class="btn-partner-secondary">
        <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16">
          <path d="M11 2V8H5V2H11Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <path d="M8 8V11" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Partner Portal</span>
      </a>
    </div>
  </div>
</section>
```

---

## CSS COMPLETO

```css
/* ===== PARTNER SECTION ===== */
.partner-section {
  position: relative;
  padding: var(--spacing-section) 0;
  background: var(--bg-primary);
  overflow: hidden;
}

.partner-container {
  max-width: 960px;
}

/* Badge com efeitos especiais */
.section-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  backdrop-filter: blur(var(--blur-lg));
  margin: 0 auto 64px;
  overflow: hidden;
}

.badge-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 99, 154, 0.1), transparent);
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  from { transform: translateX(-200%); }
  to { transform: translateX(200%); }
}

.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-bts-s02);
  box-shadow: 0 0 12px rgba(0, 99, 154, 0.6);
  animation: pulse 2s ease-in-out infinite;
  z-index: 1;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* Header */
.partner-header {
  text-align: center;
  margin-bottom: 128px;
}

.partner-intro {
  max-width: 700px;
  margin: 24px auto 0;
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-tertiary);
}

/* Partner Block */
.partner-block {
  margin-bottom: 128px;
  opacity: 0;
  transform: translateY(40px);
  animation: slideInUp 1s ease forwards;
  animation-play-state: paused;
}

.partner-block.visible {
  animation-play-state: running;
}

.partner-block:nth-child(1) { animation-delay: 0.2s; }
.partner-block:nth-child(2) { animation-delay: 0.4s; }
.partner-block:nth-child(3) { animation-delay: 0.6s; }

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.partner-block-header {
  display: flex;
  align-items: baseline;
  gap: 24px;
  margin-bottom: 48px;
}

.block-number {
  font-family: var(--font-mono);
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-tertiary);
  opacity: 0.3;
}

@media (max-width: 768px) {
  .block-number {
    font-size: 60px;
  }
}

.block-title-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.block-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, rgba(0, 99, 154, 0.3), transparent);
}

.block-title {
  font-size: 40px;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .block-title {
    font-size: 28px;
  }
}

.block-intro {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-tertiary);
  margin-bottom: 40px;
  max-width: 600px;
}

.block-description {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-tertiary);
  margin-bottom: 64px;
  max-width: 800px;
}

/* Infrastructure Grid */
.infrastructure-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
}

.infrastructure-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.item-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-bts-s02);
  margin-top: 8px;
  flex-shrink: 0;
}

.infrastructure-item p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-tertiary);
}

/* Growth Stack */
.growth-stack {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.growth-feature {
  display: flex;
  gap: 24px;
}

.feature-accent-line {
  width: 2px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(42, 123, 161, 0.6), transparent);
  margin-top: 8px;
  flex-shrink: 0;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.feature-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-tertiary);
}

/* Benefits Section */
.benefits-section {
  margin-top: 64px;
}

.benefits-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.benefit-check {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent-secondary);
  margin-top: 8px;
  flex-shrink: 0;
}

.benefit-item p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-tertiary);
}

/* Dual CTA */
.partner-ctas {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
}

/* Primary Button (Apply) - IGUAL AO HERO */
.btn-partner-primary {
  position: relative;
  display: inline-flex;
  padding: 16px 32px;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-bts-s02), var(--accent-secondary));
  z-index: 0;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.btn-partner-primary:hover .btn-arrow {
  animation: arrowBounce 1.5s ease-in-out infinite;
}

@keyframes arrowBounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}

.btn-hover-effect {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 1;
}

.btn-partner-primary:hover .btn-hover-effect {
  opacity: 1;
}

.btn-partner-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

/* Secondary Button (Portal Login) */
.btn-partner-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: transparent;
  border: 2px solid var(--color-bts-s02);
  border-radius: var(--radius-md);
  color: var(--color-bts-s02);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
}

.btn-icon {
  transition: transform var(--transition-fast);
}

.btn-partner-secondary:hover {
  background: rgba(0, 99, 154, 0.05);
  border-color: var(--accent-secondary);
  color: var(--accent-secondary);
  transform: translateY(-2px);
}

.btn-partner-secondary:hover .btn-icon {
  transform: rotate(360deg);
}
```

---

## JAVASCRIPT - COMPORTAMENTOS ESPECIAIS

```javascript
// Partner Section Animations
function initPartnerSection() {
  // Intersection Observer para animações on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observar partner blocks
  document.querySelectorAll('.partner-block').forEach(block => {
    observer.observe(block);
  });
  
  // Apply Button Click Handler
  const applyBtn = document.getElementById('partner-apply-btn');
  if (applyBtn) {
    applyBtn.addEventListener('click', openPartnerApplicationModal);
  }
}

// Modal de Aplicação de Parceria (Integração com Agentic Commerce)
function openPartnerApplicationModal() {
  // Aqui vai a integração com Agentic Commerce da OpenAI
  // Ver arquivo AGENTIC-COMMERCE-INTEGRATION.md para detalhes
  
  console.log('Opening partner application...');
  
  // Trigger AI Agent
  if (window.agenticCommerce) {
    window.agenticCommerce.startPartnershipFlow();
  } else {
    // Fallback: abrir formulário tradicional
    showPartnerForm();
  }
}

// Mostrar formulário tradicional (fallback)
function showPartnerForm() {
  // Criar modal com formulário
  const modal = document.createElement('div');
  modal.className = 'partner-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closePartnerModal()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closePartnerModal()">×</button>
      
      <h3>Apply to Partner Program</h3>
      <p>Fill out the form below to start your application.</p>
      
      <form id="partner-application-form" class="partner-form">
        <div class="form-grid">
          <div class="form-group">
            <label>Company Name *</label>
            <input type="text" name="companyName" required />
          </div>
          
          <div class="form-group">
            <label>Your Name *</label>
            <input type="text" name="contactName" required />
          </div>
          
          <div class="form-group">
            <label>Email *</label>
            <input type="email" name="email" required />
          </div>
          
          <div class="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" />
          </div>
          
          <div class="form-group">
            <label>Industry *</label>
            <select name="industry" required>
              <option value="">Select...</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Company Size *</label>
            <select name="companySize" required>
              <option value="">Select...</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label>Why do you want to partner with BTS Global? *</label>
          <textarea name="motivation" rows="4" required></textarea>
        </div>
        
        <button type="submit" class="btn-submit">
          Submit Application
          <svg class="btn-arrow" width="16" height="16">
            <path d="M8 0L16 8L8 16" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Form submit handler
  document.getElementById('partner-application-form').addEventListener('submit', handlePartnerFormSubmit);
}

function closePartnerModal() {
  const modal = document.querySelector('.partner-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

async function handlePartnerFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    // Aqui faz a requisição para o backend
    const response = await fetch('/api/partnerships/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Mostrar mensagem de sucesso
      showSuccessMessage('Application submitted successfully! We will contact you within 5-7 business days.');
      closePartnerModal();
    } else {
      showErrorMessage(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    showErrorMessage('Network error. Please check your connection and try again.');
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initPartnerSection);
```

---

## MODAL CSS

```css
/* ===== PARTNER MODAL ===== */
.partner-modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn 0.3s ease;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

.modal-content {
  position: relative;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-xl);
  animation: slideInUp 0.4s ease;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 24px;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--accent-glow);
  border-color: var(--accent-primary);
  color: var(--text-primary);
}

.modal-content h3 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.modal-content > p {
  font-size: 16px;
  color: var(--text-tertiary);
  margin-bottom: 32px;
}

/* Partner Form */
.partner-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 16px;
  font-family: inherit;
  transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  background: var(--bg-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, var(--color-bts-s02), var(--accent-secondary));
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

---

## 🎯 PONTOS CRÍTICOS

1. **Estrutura Exata**: Seguir EXATAMENTE a estrutura do Figma (3 blocos numerados: 01, 02, 03)
2. **Gradientes BTS**: Usar cores BTS corretas em cada bloco
3. **CTAs Duplos**: Primary (Apply) + Secondary (Portal) - IGUAIS ao Hero
4. **Modal de Aplicação**: Integrado com Agentic Commerce
5. **Animações**: Scroll animations com Intersection Observer
6. **Responsividade**: Grid adaptativo para mobile

---

**PRÓXIMO**: Footer, Conteúdo Bilíngue, JavaScript Completo
