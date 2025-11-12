# 🚪 PARTNER PORTAL - ESPECIFICAÇÃO COMPLETA

## 📋 OVERVIEW

O **Partner Portal** é uma área logada exclusiva para parceiros BTS Global Corp, onde eles podem:

1. **Gerar Propostas Contratuais** em PDF
2. **Gerenciar Histórico** de propostas criadas
3. **Acessar Perfil** e configurações de conta
4. **(ADMIN)** Dashboard administrativo completo

---

## 🏗️ ARQUITETURA

```
/partner-portal
├── /login.html              # Página de login
├── /portal
│   ├── index.html           # Dashboard principal
│   ├── nova-proposta.html   # Gerador de propostas
│   ├── historico.html       # Histórico de propostas
│   ├── perfil.html          # Perfil do usuário
│   └── /admin
│       ├── dashboard.html   # Dashboard admin
│       ├── propostas.html   # Gerenciar propostas
│       └── usuarios.html    # Gerenciar usuários
├── /css
│   └── portal.css           # Estilos do portal
├── /js
│   ├── auth.js              # Autenticação
│   ├── portal.js            # Lógica do portal
│   └── proposals.js         # Gerenciamento de propostas
└── /data
    └── proposals.json       # Dados (mock para desenvolvimento)
```

---

## 🎨 DESIGN SYSTEM - PARTNER PORTAL

### Cores Específicas do Portal (Dark Mode)

```css
:root {
  /* Portal Dark Theme */
  --portal-bg-primary: #050B18;
  --portal-bg-secondary: #0A1432;
  --portal-bg-card: rgba(255, 255, 255, 0.04);
  
  /* Portal Accents */
  --portal-accent-blue: #1F4AFF;
  --portal-accent-cyan: #00E5FF;
  --portal-accent-green: #10B981;
  --portal-accent-red: #EF4444;
  
  /* Portal Text */
  --portal-text-primary: #FFFFFF;
  --portal-text-secondary: #C6CEDF;
  --portal-text-tertiary: rgba(198, 206, 223, 0.7);
  
  /* Portal Borders */
  --portal-border: rgba(255, 255, 255, 0.1);
  --portal-border-focus: rgba(31, 74, 255, 0.5);
  
  /* Portal Shadows */
  --portal-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --portal-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --portal-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --portal-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Portal Glow */
  --portal-glow-blue: 0 0 40px rgba(31, 74, 255, 0.3);
  --portal-glow-cyan: 0 0 40px rgba(0, 229, 255, 0.3);
}
```

---

## 🔐 1. LOGIN PAGE

### login.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partner Portal - Login | BTS Global Corp</title>
  <link rel="stylesheet" href="/css/portal.css">
</head>
<body class="portal-login-page">
  <!-- Orbital Background -->
  <div class="portal-background">
    <div class="orbital-blur orbital-blur--1"></div>
    <div class="orbital-blur orbital-blur--2"></div>
  </div>
  
  <!-- Login Container -->
  <div class="login-container">
    <!-- BTS Logo -->
    <div class="login-logo">
      <div class="logo-icon">
        <span class="logo-text">BTS</span>
      </div>
      <h1 class="login-title">Partner Portal</h1>
      <p class="login-subtitle">Acesse sua conta BTS Global Corp</p>
    </div>
    
    <!-- Login Form -->
    <form id="login-form" class="login-form">
      <!-- Email -->
      <div class="form-group">
        <label for="email" class="form-label">E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="seu@email.com"
          class="form-input"
          autocomplete="email"
        />
      </div>
      
      <!-- Password -->
      <div class="form-group">
        <label for="password" class="form-label">Senha</label>
        <div class="password-input-wrapper">
          <input 
            type="password" 
            id="password" 
            name="password" 
            required
            placeholder="••••••••"
            class="form-input"
            autocomplete="current-password"
          />
          <button type="button" class="password-toggle" id="toggle-password">
            <svg class="icon-eye" width="20" height="20"><!-- Eye icon --></svg>
          </button>
        </div>
      </div>
      
      <!-- Remember Me -->
      <div class="form-checkbox">
        <input type="checkbox" id="remember" name="remember" />
        <label for="remember">Manter conectado</label>
      </div>
      
      <!-- Error Message -->
      <div id="login-error" class="login-error" style="display: none;">
        <svg class="error-icon" width="16" height="16"><!-- Alert icon --></svg>
        <span class="error-message">E-mail ou senha incorretos</span>
      </div>
      
      <!-- Submit Button -->
      <button type="submit" class="btn-login" id="btn-login">
        <span class="btn-text">Entrar</span>
        <svg class="btn-loader" width="20" height="20" style="display: none;">
          <!-- Spinner icon -->
        </svg>
      </button>
    </form>
    
    <!-- Footer Links -->
    <div class="login-footer">
      <a href="#" class="login-link">Esqueceu sua senha?</a>
      <span class="separator">•</span>
      <a href="/" class="login-link">Voltar ao site</a>
    </div>
    
    <!-- Demo Credentials -->
    <div class="demo-credentials">
      <p class="demo-title">🔐 Credenciais de Demonstração:</p>
      <div class="demo-grid">
        <div class="demo-item">
          <strong>Parceiro:</strong>
          <code>elcio@bts.com</code> / <code>demo123</code>
        </div>
        <div class="demo-item">
          <strong>Admin:</strong>
          <code>admin@bts.com</code> / <code>admin123</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

### CSS - Login Page

```css
/* ===== LOGIN PAGE ===== */
.portal-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--portal-bg-primary), var(--portal-bg-secondary));
  padding: 24px;
  position: relative;
  overflow: hidden;
}

/* Orbital Background */
.portal-background {
  position: fixed;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
}

.orbital-blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: orbitalFloat 20s ease-in-out infinite;
}

.orbital-blur--1 {
  top: 0;
  left: -25%;
  width: 600px;
  height: 600px;
  background: var(--portal-accent-blue);
  animation-delay: 0s;
}

.orbital-blur--2 {
  bottom: 0;
  right: -25%;
  width: 500px;
  height: 500px;
  background: var(--portal-accent-cyan);
  animation-delay: -10s;
}

@keyframes orbitalFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
}

/* Login Container */
.login-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 480px;
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border: 1px solid var(--portal-border);
  border-radius: 24px;
  padding: 48px;
  box-shadow: var(--portal-shadow-xl);
}

@media (max-width: 640px) {
  .login-container {
    padding: 32px 24px;
  }
}

/* Login Logo */
.login-logo {
  text-align: center;
  margin-bottom: 40px;
}

.logo-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border-radius: 16px;
  box-shadow: var(--portal-glow-blue);
}

.logo-icon .logo-text {
  font-size: 24px;
  font-weight: 800;
  color: white;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--portal-text-primary);
  margin-bottom: 8px;
}

.login-subtitle {
  font-size: 14px;
  color: var(--portal-text-tertiary);
}

/* Login Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--portal-text-secondary);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--portal-border);
  border-radius: 12px;
  color: var(--portal-text-primary);
  font-size: 16px;
  transition: all 0.2s ease;
}

.form-input::placeholder {
  color: var(--portal-text-tertiary);
}

.form-input:focus {
  outline: none;
  border-color: var(--portal-border-focus);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(31, 74, 255, 0.1);
}

/* Password Input */
.password-input-wrapper {
  position: relative;
}

.password-input-wrapper .form-input {
  padding-right: 48px;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--portal-text-tertiary);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.password-toggle:hover {
  color: var(--portal-text-secondary);
}

/* Checkbox */
.form-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid var(--portal-border);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}

.form-checkbox label {
  font-size: 14px;
  color: var(--portal-text-secondary);
  cursor: pointer;
  user-select: none;
}

/* Error Message */
.login-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: var(--portal-accent-red);
  font-size: 14px;
}

/* Login Button */
.btn-login {
  position: relative;
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: var(--portal-glow-blue);
}

.btn-login:active {
  transform: translateY(0);
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Login Footer */
.login-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--portal-border);
}

.login-link {
  font-size: 14px;
  color: var(--portal-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.login-link:hover {
  color: var(--portal-accent-cyan);
}

.separator {
  color: var(--portal-text-tertiary);
}

/* Demo Credentials */
.demo-credentials {
  margin-top: 24px;
  padding: 16px;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
}

.demo-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--portal-accent-green);
  margin-bottom: 12px;
  text-align: center;
}

.demo-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-item {
  font-size: 12px;
  color: var(--portal-text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.demo-item code {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--portal-border);
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 11px;
  color: var(--portal-accent-cyan);
}
```

---

## 🗂️ 2. PORTAL LAYOUT (Sidebar + Header)

### portal-layout.html (Template)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partner Portal | BTS Global Corp</title>
  <link rel="stylesheet" href="/css/portal.css">
</head>
<body class="portal-page">
  <!-- Orbital Background -->
  <div class="portal-background">
    <div class="orbital-blur orbital-blur--1"></div>
    <div class="orbital-blur orbital-blur--2"></div>
  </div>
  
  <div class="portal-wrapper">
    <!-- Sidebar - Desktop -->
    <aside class="portal-sidebar" id="portal-sidebar">
      <!-- Logo + User Info -->
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <div class="logo-icon">
            <span>BTS</span>
          </div>
          <span class="logo-text">Global Corp</span>
        </div>
        
        <div class="sidebar-user">
          <p class="user-name" id="user-name">Elcio Reis</p>
          <p class="user-email" id="user-email">elcio@bts.com</p>
          <span class="user-badge" id="user-badge">Parceiro</span>
        </div>
      </div>
      
      <!-- Navigation -->
      <nav class="sidebar-nav">
        <ul class="nav-list" id="nav-list">
          <!-- Parceiro Menu -->
          <li class="nav-item">
            <a href="/portal/nova-proposta.html" class="nav-link" data-page="new-proposal">
              <svg class="nav-icon" width="20" height="20"><!-- FileText icon --></svg>
              <span>Nova Proposta</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/portal/historico.html" class="nav-link" data-page="history">
              <svg class="nav-icon" width="20" height="20"><!-- History icon --></svg>
              <span>Histórico</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/portal/perfil.html" class="nav-link" data-page="profile">
              <svg class="nav-icon" width="20" height="20"><!-- User icon --></svg>
              <span>Perfil</span>
            </a>
          </li>
          
          <!-- Admin Menu (hidden for partners) -->
          <li class="nav-divider admin-only" style="display: none;">
            <span>Administração</span>
          </li>
          <li class="nav-item admin-only" style="display: none;">
            <a href="/portal/admin/dashboard.html" class="nav-link" data-page="admin-dashboard">
              <svg class="nav-icon" width="20" height="20"><!-- LayoutDashboard icon --></svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="nav-item admin-only" style="display: none;">
            <a href="/portal/admin/propostas.html" class="nav-link" data-page="admin-proposals">
              <svg class="nav-icon" width="20" height="20"><!-- FileCheck icon --></svg>
              <span>Propostas</span>
            </a>
          </li>
          <li class="nav-item admin-only" style="display: none;">
            <a href="/portal/admin/usuarios.html" class="nav-link" data-page="admin-users">
              <svg class="nav-icon" width="20" height="20"><!-- Users icon --></svg>
              <span>Usuários</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <!-- Logout -->
      <div class="sidebar-footer">
        <button class="btn-logout" id="btn-logout">
          <svg class="logout-icon" width="20" height="20"><!-- LogOut icon --></svg>
          <span>Sair</span>
        </button>
      </div>
    </aside>
    
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-toggle" id="mobile-menu-toggle">
      <svg class="icon-menu" width="24" height="24"><!-- Menu icon --></svg>
      <svg class="icon-close" width="24" height="24" style="display: none;"><!-- X icon --></svg>
    </button>
    
    <!-- Mobile Overlay -->
    <div class="mobile-overlay" id="mobile-overlay"></div>
    
    <!-- Main Content -->
    <main class="portal-main">
      <div class="portal-content">
        <!-- Content goes here -->
        <!-- This will be replaced by specific pages -->
      </div>
    </main>
  </div>
  
  <script src="/js/auth.js"></script>
  <script src="/js/portal.js"></script>
</body>
</html>
```

### CSS - Portal Layout

```css
/* ===== PORTAL LAYOUT ===== */
.portal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--portal-bg-primary), var(--portal-bg-secondary));
  position: relative;
  overflow-x: hidden;
}

.portal-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  min-height: 100vh;
}

/* ===== SIDEBAR ===== */
.portal-sidebar {
  width: 288px;
  min-height: 100vh;
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border-right: 1px solid var(--portal-border);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  transition: transform 0.3s ease;
}

@media (max-width: 1024px) {
  .portal-sidebar {
    transform: translateX(-100%);
  }
  
  .portal-sidebar.open {
    transform: translateX(0);
  }
}

/* Sidebar Header */
.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid var(--portal-border);
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.sidebar-logo .logo-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--portal-accent-blue), var(--portal-accent-cyan));
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  color: white;
}

.sidebar-logo .logo-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--portal-text-primary);
}

/* User Info */
.sidebar-user {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--portal-text-primary);
}

.user-email {
  font-size: 12px;
  color: var(--portal-text-tertiary);
}

.user-badge {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 8px;
  background: rgba(31, 74, 255, 0.2);
  border: 1px solid rgba(31, 74, 255, 0.3);
  border-radius: 6px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--portal-accent-cyan);
  font-weight: 600;
  width: fit-content;
}

/* Sidebar Navigation */
.sidebar-nav {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-divider {
  padding: 16px 16px 8px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--portal-text-tertiary);
  font-weight: 600;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  color: var(--portal-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--portal-text-primary);
}

.nav-link.active {
  background: linear-gradient(135deg, rgba(31, 74, 255, 0.2), rgba(0, 229, 255, 0.2));
  border: 1px solid rgba(31, 74, 255, 0.3);
  color: var(--portal-text-primary);
}

.nav-icon {
  flex-shrink: 0;
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--portal-border);
}

.btn-logout {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: var(--portal-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout:hover {
  background: rgba(239, 68, 68, 0.1);
  color: var(--portal-accent-red);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 110;
  padding: 12px;
  background: var(--portal-bg-card);
  backdrop-filter: blur(40px);
  border: 1px solid var(--portal-border);
  border-radius: 12px;
  color: var(--portal-text-primary);
  cursor: pointer;
}

@media (max-width: 1024px) {
  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(5, 11, 24, 0.8);
  backdrop-filter: blur(4px);
  z-index: 90;
  opacity: 0;
  transition: opacity 0.3s ease;
}

@media (max-width: 1024px) {
  .mobile-overlay.active {
    display: block;
    opacity: 1;
  }
}

/* ===== MAIN CONTENT ===== */
.portal-main {
  flex: 1;
  margin-left: 288px;
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .portal-main {
    margin-left: 0;
  }
}

.portal-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
}

@media (min-width: 1024px) {
  .portal-content {
    padding: 48px 32px;
  }
}
```

---

## CONTINUAÇÃO...

Este arquivo está ficando muito grande. Vou criar arquivos separados para cada parte do portal. Aguarde...
