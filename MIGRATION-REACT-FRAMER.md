# ⚛️ MIGRAÇÃO PARA REACT + FRAMER MOTION

## ✅ DECISÃO: Stack 100% Idêntica ao Figma

Você escolheu migrar para **React + TypeScript + Framer Motion**, garantindo **100% de compatibilidade** com o Figma Make!

---

## 🎯 BENEFÍCIOS DESTA ESCOLHA

### ✅ Vantagens
1. **100% idêntico** ao Figma Make (mesma stack)
2. Animações exatamente iguais (Framer Motion)
3. Código componentizado e reutilizável
4. TypeScript para type safety
5. Fácil manutenção (componentes isolados)
6. Hot reload durante desenvolvimento
7. Código mais próximo do original
8. Spring animations nativas
9. Layout animations suaves
10. Melhor experiência do desenvolvedor

### ⚠️ Trade-offs
1. Bundle maior (~500kb vs ~50kb vanilla)
2. Precisa de build step (Vite)
3. Requer conhecimento de React
4. Mais complexo que HTML/CSS puro

**DECISÃO:** ✅ Os benefícios compensam! Vamos para React!

---

## 📦 STACK FINAL

### Frontend
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.2.2",
  "framer-motion": "^11.0.0",
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.0"
}
```

### Styling
```json
{
  "tailwindcss": "^4.0.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### Utils
```json
{
  "lucide-react": "^0.344.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0"
}
```

---

## 🏗️ NOVA ESTRUTURA DO PROJETO

```
/bts-global-website
├── /public
│   ├── favicon.ico
│   └── /images
├── /src
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── /sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhySection.tsx
│   │   │   ├── PrivacySection.tsx
│   │   │   ├── TrustedSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── PartnerSection.tsx
│   │   ├── /ui
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── /portal
│   │       ├── LoginPage.tsx
│   │       ├── PortalLayout.tsx
│   │       ├── NewProposal.tsx
│   │       ├── ProposalHistory.tsx
│   │       ├── PartnerProfile.tsx
│   │       └── /admin
│   │           ├── AdminDashboard.tsx
│   │           ├── AdminProposals.tsx
│   │           └── AdminUsers.tsx
│   ├── /contexts
│   │   ├── LanguageContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── AuthContext.tsx
│   ├── /hooks
│   │   ├── useScrollAnimation.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useMediaQuery.ts
│   ├── /lib
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   └── constants.ts
│   ├── /styles
│   │   ├── globals.css
│   │   └── variables.css
│   ├── /types
│   │   ├── index.ts
│   │   ├── proposal.ts
│   │   └── user.ts
│   ├── /data
│   │   └── translations.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 SETUP INICIAL

### 1. Criar Projeto Vite + React + TypeScript

```bash
# Criar projeto
npm create vite@latest bts-global-website -- --template react-ts

cd bts-global-website

# Instalar dependências
npm install

# Instalar Framer Motion
npm install framer-motion

# Instalar Tailwind CSS v4
npm install -D tailwindcss@next @tailwindcss/vite@next

# Instalar utils
npm install lucide-react clsx tailwind-merge

# Instalar tipos
npm install -D @types/node
```

### 2. Configurar Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

### 3. Configurar TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 4. Configurar Tailwind CSS v4

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  /* BTS Colors */
  --color-bts-primary: #00639A;
  --color-bts-s02: #00639A;
  --color-bts-s03: #2A7BA1;
  --color-bts-s04: #2A7BA1;
  --color-bts-s05: #21B6F3;
  
  /* Semantic Colors */
  --color-accent-primary: var(--color-bts-s02);
  --color-accent-secondary: var(--color-bts-s05);
  
  /* Light Theme */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-text-primary: #111827;
  --color-text-secondary: #374151;
  --color-text-tertiary: #6b7280;
  
  /* Dark Theme */
  --color-bg-primary-dark: #0f172a;
  --color-bg-secondary-dark: #1e293b;
  --color-text-primary-dark: #f8fafc;
  --color-text-secondary-dark: #cbd5e1;
  --color-text-tertiary-dark: #94a3b8;
  
  /* Spacing (mantém do design system) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 80px;
  --spacing-5xl: 96px;
  --spacing-6xl: 128px;
  --spacing-section: 160px;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Monaco', monospace;
  
  /* Animations */
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: var(--color-bg-primary-dark);
    --color-bg-secondary: var(--color-bg-secondary-dark);
    --color-text-primary: var(--color-text-primary-dark);
    --color-text-secondary: var(--color-text-secondary-dark);
    --color-text-tertiary: var(--color-text-tertiary-dark);
  }
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 5. Package.json Completo

```json
{
  "name": "bts-global-website",
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "tailwindcss": "^4.0.0-alpha.1",
    "@tailwindcss/vite": "^4.0.0-alpha.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.0"
  }
}
```

---

## 🎬 CONVERSÃO: HTML → REACT

Vou criar exemplos de como cada seção será convertida:

### PRÓXIMO ARQUIVO: `REACT-COMPONENTS-SPEC.md`

Onde vou especificar:
1. ✅ Todos os componentes React (.tsx)
2. ✅ Animações Framer Motion exatas
3. ✅ Types TypeScript
4. ✅ Hooks customizados
5. ✅ Contexts (Language, Theme, Auth)
6. ✅ Utils e helpers

---

**STATUS:** 🔄 Iniciando migração para React...

Vou criar os arquivos de especificação React agora! Continue aguardando...
