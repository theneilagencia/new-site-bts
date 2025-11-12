# ⚛️ BTS Global Corp - Website Institucional + Partner Portal

![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-ff0055?logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff?logo=vite)

> **Website institucional + Partner Portal desenvolvido com React + TypeScript + Framer Motion**

✨ **100% idêntico ao design Figma Make** - Mesma stack, mesmas animações, mesma UX/UI!

---

## 📖 SOBRE O PROJETO

Site institucional da **BTS Global Corp**, empresa especializada em **Industrialização da Construção Civil** através do sistema BTS (Building and Transport System).

### ✨ Destaques

- ⚛️ **React 18.3** + TypeScript 5.2
- 🎬 **Framer Motion 11.0** - Animações 100% idênticas ao Figma
- 🎨 **Tailwind CSS 4.0** - Design System completo
- ⚡ **Vite 5.0** - Build ultra-rápido
- 🏢 **Partner Portal** - Área logada para parceiros
- 👨‍💼 **Admin Dashboard** - Gestão de propostas e usuários
- 🤖 **Agentic Commerce** - Integração OpenAI
- 🌍 **Multi-idioma** - PT/EN
- 🌓 **Dark/Light Mode** - Tema switchable
- 📱 **100% Responsivo** - Mobile-first

---

## 🏗️ ESTRUTURA DO PROJETO

```
/bts-global-website
├── /public
│   ├── favicon.ico
│   └── /images
├── /src
│   ├── /components
│   │   ├── /layout          # Header, Footer, MobileMenu
│   │   ├── /sections        # HeroSection, WhySection, etc.
│   │   ├── /ui              # Button, Badge, Card, Modal
│   │   └── /portal          # LoginPage, PortalLayout, etc.
│   │       └── /admin       # AdminDashboard, AdminProposals, etc.
│   ├── /contexts            # LanguageContext, ThemeContext, AuthContext
│   ├── /hooks               # Custom hooks (useScrollAnimation, etc.)
│   ├── /lib                 # Utils, animations, constants
│   ├── /styles              # globals.css, variables.css
│   ├── /types               # TypeScript types
│   ├── /data                # translations.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 QUICK START

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/btsglobal/bts-website.git
cd bts-website

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Comandos Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (hot reload)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Executar ESLint
npm run type-check   # Verificar tipos TypeScript
```

---

## 📦 DEPENDÊNCIAS PRINCIPAIS

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
  "tailwindcss": "^4.0.0-alpha.1",
  "@tailwindcss/vite": "^4.0.0-alpha.1",
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

## 🎨 DESIGN SYSTEM

### Cores BTS

```css
--color-bts-primary: #00639A  /* Azul BTS principal */
--color-bts-s02: #00639A      /* Azul escuro */
--color-bts-s03: #2A7BA1      /* Azul médio */
--color-bts-s04: #2A7BA1      /* Azul médio-claro */
--color-bts-s05: #21B6F3      /* Azul claro (accent) */
```

### Tipografia

- **Primary Font:** Inter (sans-serif)
- **Mono Font:** JetBrains Mono

### Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## 🎬 ANIMAÇÕES FRAMER MOTION

### Principais Variants

```typescript
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

// Fade in com movimento vertical
<motion.div variants={fadeInUp} />

// Scale in (para cards)
<motion.div variants={scaleIn} />

// Lista com stagger
<motion.div variants={staggerContainer}>
  <motion.div variants={staggerItem} />
</motion.div>
```

### Hover Effects

```typescript
// Scale no hover
<motion.button whileHover={{ scale: 1.05 }} />

// Lift no hover (cards)
<motion.div whileHover={{ y: -8 }} />

// Tap scale
<motion.button whileTap={{ scale: 0.95 }} />
```

Veja documentação completa em `REACT-ANIMATIONS-FRAMER.md`

---

## 🏢 PARTNER PORTAL

### Login

**Demo Credentials:**
- **Partner:** `parceiro@demo.com` / `demo123`
- **Admin:** `admin@btsglobal.com` / `admin123`

### Funcionalidades

#### Para Parceiros
- ✅ Dashboard com métricas
- ✅ Criar nova proposta (gerador de contratos)
- ✅ Histórico de propostas
- ✅ Visualizar/Download PDF
- ✅ Perfil e configurações

#### Para Administradores
- ✅ Dashboard administrativo
- ✅ Gerenciar propostas (aprovar/rejeitar)
- ✅ Gerenciar usuários (CRUD completo)
- ✅ Configurações do sistema

---

## 🤖 AGENTIC COMMERCE PROTOCOL

Integração com **OpenAI** para:

- 💬 Chat inteligente para suporte
- 📝 Geração automática de propostas
- 📊 Análise de dados de vendas
- 🎯 Recomendações personalizadas

Veja detalhes em `SPEC-AGENTIC-COMMERCE-DETALHADA.md`

---

## 🌍 MULTI-IDIOMA

### Uso

```typescript
import { useLanguage } from '@/contexts/LanguageContext';

const { language, setLanguage, t } = useLanguage();

<button onClick={() => setLanguage('en')}>
  {t.nav.home}
</button>
```

**Idiomas suportados:** Português (PT-BR), English (EN)

---

## 🌓 DARK MODE

### Uso

```typescript
import { useTheme } from '@/contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();

<button onClick={toggleTheme}>
  {theme === 'dark' ? '☀️' : '🌙'}
</button>
```

---

## 📱 RESPONSIVIDADE

- **Mobile First:** Design otimizado para mobile
- **Breakpoints:** sm, md, lg, xl, 2xl
- **Touch-friendly:** Botões e áreas de toque otimizadas
- **Hamburger Menu:** Menu mobile animado
- **Sidebar colapsável:** No portal (mobile)

---

## ⚡ PERFORMANCE

### Otimizações

- ✅ Code Splitting (Vite)
- ✅ Tree Shaking
- ✅ Lazy Loading de componentes
- ✅ Image optimization
- ✅ CSS Purging (Tailwind)
- ✅ Gzip/Brotli compression
- ✅ CDN-ready

### Métricas Esperadas

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** ~500kb (gzipped: ~150kb)

---

## 📚 DOCUMENTAÇÃO COMPLETA

| Arquivo | Descrição |
|---------|-----------|
| `INDICE-GERAL-REACT.md` | 📋 Índice completo (START HERE!) |
| `MIGRATION-REACT-FRAMER.md` | Decisão de migração + Setup |
| `REACT-COMPONENTS-SPEC.md` | Especificação de componentes |
| `REACT-ANIMATIONS-FRAMER.md` | Animações Framer Motion |
| `REACT-CONTEXTS-HOOKS.md` | Contexts + Custom Hooks |
| `REACT-PARTNER-PORTAL-SPEC.md` | Partner Portal em React |
| `FIGMA-DESIGN-SPECS.md` | Análise do design Figma |
| `SPEC-AGENTIC-COMMERCE-DETALHADA.md` | Integração OpenAI |
| `SPEC-RESPONSIVE-PERFORMANCE.md` | Responsive + Performance |

**📖 LEIA PRIMEIRO:** `INDICE-GERAL-REACT.md`

---

## 🧪 TESTING

```bash
# Instalar dependências de teste
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Executar testes
npm run test

# Coverage
npm run test:coverage
```

---

## 🚀 DEPLOY

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Build Manual

```bash
npm run build
# Arquivos em /dist
```

---

## 🤝 CONTRIBUINDO

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 LICENÇA

MIT License - Veja `LICENSE` para detalhes.

---

## 👥 EQUIPE

**BTS Global Corp**  
Website: [btsglobal.com](https://btsglobal.com)  
Email: contato@btsglobal.com

---

## 🙏 AGRADECIMENTOS

- Design original: Figma Make
- Animações: Framer Motion
- Icons: Lucide React
- Styling: Tailwind CSS
- Build Tool: Vite

---

**PRONTO PARA IMPLEMENTAÇÃO!** 🚀

Para começar, veja: `INDICE-GERAL-REACT.md`
