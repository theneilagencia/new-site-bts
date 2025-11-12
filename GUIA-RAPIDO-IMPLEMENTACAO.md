# 🚀 GUIA RÁPIDO DE IMPLEMENTAÇÃO

## ⚡ Do Zero ao Deploy em 8 Etapas

**Tempo Total Estimado:** 50-60 horas (~7 dias úteis)

---

## 📋 ETAPA 0: PREPARAÇÃO (30 min)

### Leitura Obrigatória

1. ✅ `INDICE-GERAL-REACT.md` - Visão geral (15 min)
2. ✅ `MIGRATION-REACT-FRAMER.md` - Setup (10 min)
3. ✅ `README-REACT.md` - Overview (5 min)

### Ferramentas Necessárias

```bash
# Verificar versões
node --version   # >= 18.0.0
npm --version    # >= 9.0.0
git --version    # qualquer versão recente
```

---

## 📦 ETAPA 1: CRIAR PROJETO (15 min)

### 1.1 Criar Projeto Vite

```bash
# Criar projeto
npm create vite@latest bts-global-website -- --template react-ts

# Entrar na pasta
cd bts-global-website

# Abrir no editor
code .
```

### 1.2 Instalar Dependências

```bash
# Dependências principais
npm install framer-motion lucide-react clsx tailwind-merge

# Dependências de desenvolvimento
npm install -D tailwindcss@next @tailwindcss/vite@next @types/node prettier
```

### 1.3 Verificar Instalação

```bash
npm run dev
# Deve abrir http://localhost:5173
```

**✅ Checkpoint:** Site Vite padrão funcionando

---

## ⚙️ ETAPA 2: CONFIGURAÇÃO (30 min)

### 2.1 Vite Config

```bash
# Copiar configuração
cp ../vite.config.ts.example vite.config.ts
```

**Ou criar manualmente seguindo:** `MIGRATION-REACT-FRAMER.md` seção 2

### 2.2 TypeScript Config

```bash
# Copiar configuração
cp ../tsconfig.json.example tsconfig.json
cp ../tsconfig.node.json.example tsconfig.node.json
```

### 2.3 Tailwind Config

```bash
# Copiar configuração
cp ../tailwind.config.js.example tailwind.config.js
cp ../postcss.config.js.example postcss.config.js
```

### 2.4 Environment Variables

```bash
# Copiar e editar
cp ../.env.example .env
# Edite .env com suas chaves de API
```

### 2.5 Criar globals.css

```bash
# Criar arquivo
touch src/styles/globals.css
```

Copiar conteúdo de `MIGRATION-REACT-FRAMER.md` seção 4

**✅ Checkpoint:** `npm run dev` funciona sem erros

---

## 📁 ETAPA 3: ESTRUTURA DE PASTAS (10 min)

```bash
# Criar estrutura completa
mkdir -p src/{components/{layout,sections,ui,portal/admin},contexts,hooks,lib,styles,types,data}

# Criar arquivos base
touch src/components/layout/{Header,Footer,MobileMenu}.tsx
touch src/components/sections/{HeroSection,WhySection,PrivacySection,TrustedSection,SolutionsSection,AboutSection,PartnerSection}.tsx
touch src/components/ui/{Button,Badge,Card,Modal}.tsx
touch src/components/portal/{LoginPage,PortalLayout,NewProposal,ProposalHistory,PartnerProfile}.tsx
touch src/components/portal/admin/{AdminDashboard,AdminProposals,AdminUsers}.tsx
touch src/contexts/{LanguageContext,ThemeContext,AuthContext}.tsx
touch src/hooks/{useIntersectionObserver,useMediaQuery,useScrollPosition,useDebounce,useLocalStorage,useToggle,useClickOutside}.ts
touch src/lib/{animations,utils,constants}.ts
touch src/types/index.ts
touch src/data/translations.ts
```

**✅ Checkpoint:** Estrutura de pastas criada

---

## 🎣 ETAPA 4: CONTEXTS E HOOKS (3h)

### 4.1 Criar Contexts (2h)

**Referência:** `REACT-CONTEXTS-HOOKS.md`

```bash
# Ordem de implementação:
1. src/contexts/LanguageContext.tsx    (30 min)
2. src/contexts/ThemeContext.tsx       (30 min)
3. src/contexts/AuthContext.tsx        (1h)
```

**Dicas:**
- Copiar código diretamente do `REACT-CONTEXTS-HOOKS.md`
- Testar cada context antes de passar para o próximo
- Adicionar no `App.tsx` conforme implementa

### 4.2 Criar Custom Hooks (1h)

**Referência:** `REACT-CONTEXTS-HOOKS.md`

```bash
# Ordem de implementação:
1. src/hooks/useIntersectionObserver.ts  (10 min)
2. src/hooks/useMediaQuery.ts            (10 min)
3. src/hooks/useScrollPosition.ts        (5 min)
4. src/hooks/useDebounce.ts              (5 min)
5. src/hooks/useLocalStorage.ts          (10 min)
6. src/hooks/useToggle.ts                (5 min)
7. src/hooks/useClickOutside.ts          (10 min)
```

### 4.3 Criar Types (15 min)

**Referência:** `REACT-CONTEXTS-HOOKS.md` seção 5

```typescript
// src/types/index.ts
// Copiar todos os types do documento
```

**✅ Checkpoint:** Todos os contexts e hooks funcionando

---

## 🎬 ETAPA 5: ANIMATION LIBRARY (1h)

**Referência:** `REACT-ANIMATIONS-FRAMER.md`

### 5.1 Criar lib/animations.ts

```typescript
// src/lib/animations.ts
// Copiar TODO o conteúdo da seção 1 de REACT-ANIMATIONS-FRAMER.md
```

### 5.2 Criar lib/utils.ts

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 5.3 Criar lib/constants.ts

```typescript
// src/lib/constants.ts
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const BTS_COLORS = {
  primary: '#00639A',
  s02: '#00639A',
  s03: '#2A7BA1',
  s04: '#2A7BA1',
  s05: '#21B6F3',
} as const;
```

**✅ Checkpoint:** Animation library importável

---

## 🧩 ETAPA 6: COMPONENTES BASE (8h)

**Referência:** `REACT-COMPONENTS-SPEC.md`

### 6.1 App.tsx (30 min)

```typescript
// src/App.tsx
// Copiar da seção 1 de REACT-COMPONENTS-SPEC.md
```

### 6.2 Header (2h)

```typescript
// src/components/layout/Header.tsx
// Copiar da seção 2 de REACT-COMPONENTS-SPEC.md
```

**Teste:** Header aparece e funciona

### 6.3 Footer (1h)

Criar baseado no padrão do Header (estrutura similar)

### 6.4 MobileMenu (1h)

Criar componente de menu mobile animado

### 6.5 Componentes UI (2h)

```bash
# Implementar:
- Button.tsx    (30 min)
- Badge.tsx     (30 min)
- Card.tsx      (30 min)
- Modal.tsx     (30 min)
```

### 6.6 Translations (30 min)

```typescript
// src/data/translations.ts
// Criar estrutura PT/EN
// Usar conteúdo de ESPECIFICACAO-COMPLETA-BTS-GLOBAL.md
```

**✅ Checkpoint:** App.tsx com Header e Footer funcionando

---

## 🏠 ETAPA 7: SECTIONS (12h)

**Referência:** `REACT-COMPONENTS-SPEC.md`

### Ordem de Implementação

```bash
1. HeroSection.tsx        (2h)   # Copiar seção 3 completa
2. WhySection.tsx         (1.5h) # Adaptar padrão
3. PrivacySection.tsx     (1.5h) # Adaptar padrão
4. TrustedSection.tsx     (1.5h) # Adaptar padrão
5. SolutionsSection.tsx   (2h)   # Adaptar padrão
6. AboutSection.tsx       (1.5h) # Adaptar padrão
7. PartnerSection.tsx     (2h)   # Copiar seção 4 completa
```

### Padrão para Adaptar

Todas as sections seguem este padrão:

```typescript
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function SectionName() {
  const { t } = useLanguage();

  return (
    <section id="section-id" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32">
      {/* Grid Background */}
      {/* Radial Gradients */}
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

**✅ Checkpoint:** Homepage completa visível

---

## 🏢 ETAPA 8: PARTNER PORTAL (14h)

**Referência:** `REACT-PARTNER-PORTAL-SPEC.md`

### Ordem de Implementação

```bash
1. LoginPage.tsx          (2h)   # Copiar seção 1 completa
2. PortalLayout.tsx       (3h)   # Copiar seção 2 completa
3. NewProposal.tsx        (3h)   # Copiar seção 3 completa
4. ProposalHistory.tsx    (2h)   # Implementar tabela + cards
5. PartnerProfile.tsx     (2h)   # Form de perfil
6. Admin Components       (2h)   # Dashboard, Proposals, Users
```

### Routing (React Router)

Se necessário, adicionar React Router:

```bash
npm install react-router-dom
npm install -D @types/react-router-dom
```

```typescript
// src/main.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/portal" element={<PortalLayout><Dashboard /></PortalLayout>} />
    <Route path="/portal/login" element={<LoginPage />} />
    {/* ... mais rotas */}
  </Routes>
</BrowserRouter>
```

**✅ Checkpoint:** Portal completo funcionando

---

## 🤖 ETAPA 9: AGENTIC COMMERCE (6h - Opcional)

**Referência:** `SPEC-AGENTIC-COMMERCE-DETALHADA.md`

### Backend Setup

1. Criar backend Node.js/Express (2h)
2. Integrar OpenAI API (1h)
3. Configurar CRM integration (1h)
4. Criar endpoints (1h)
5. Conectar frontend (1h)

**Nota:** Pode ser implementado posteriormente

---

## 🧪 ETAPA 10: TESTING E POLISH (8h)

### 10.1 Testing (4h)

```bash
# Instalar Vitest
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Criar testes
- Contexts tests
- Components tests
- Hooks tests
```

### 10.2 Performance (2h)

- Lazy loading de componentes
- Image optimization
- Bundle analysis
- Code splitting

### 10.3 Accessibility (1h)

- ARIA labels
- Keyboard navigation
- Screen reader testing

### 10.4 Cross-browser (1h)

- Testar em Chrome, Firefox, Safari, Edge
- Mobile devices (iOS, Android)

**✅ Checkpoint:** Tudo testado e funcionando

---

## 🚀 ETAPA 11: BUILD E DEPLOY (2h)

### 11.1 Build Production

```bash
# Build
npm run build

# Preview
npm run preview
```

### 11.2 Deploy Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### 11.3 Deploy Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**✅ Checkpoint:** Site no ar! 🎉

---

## 📊 RESUMO DE TEMPO

| Etapa | Descrição | Tempo |
|-------|-----------|-------|
| 0 | Preparação | 30 min |
| 1 | Criar Projeto | 15 min |
| 2 | Configuração | 30 min |
| 3 | Estrutura de Pastas | 10 min |
| 4 | Contexts e Hooks | 3h |
| 5 | Animation Library | 1h |
| 6 | Componentes Base | 8h |
| 7 | Sections | 12h |
| 8 | Partner Portal | 14h |
| 9 | Agentic Commerce | 6h (opcional) |
| 10 | Testing e Polish | 8h |
| 11 | Build e Deploy | 2h |
| **TOTAL** | | **~50h** |

**Com Agentic Commerce:** ~56h  
**Sem Agentic Commerce:** ~50h

---

## 🎯 CHECKLIST GERAL

### Setup
- [ ] Projeto Vite criado
- [ ] Dependências instaladas
- [ ] Configurações aplicadas
- [ ] Estrutura de pastas criada
- [ ] Dev server funcionando

### Core
- [ ] Contexts implementados (3)
- [ ] Custom Hooks implementados (7)
- [ ] Animation Library criada
- [ ] Utils e Constants criados
- [ ] Types definidos

### Components
- [ ] App.tsx
- [ ] Header
- [ ] Footer
- [ ] MobileMenu
- [ ] Button, Badge, Card, Modal
- [ ] Translations

### Sections
- [ ] HeroSection
- [ ] WhySection
- [ ] PrivacySection
- [ ] TrustedSection
- [ ] SolutionsSection
- [ ] AboutSection
- [ ] PartnerSection

### Portal
- [ ] LoginPage
- [ ] PortalLayout
- [ ] NewProposal
- [ ] ProposalHistory
- [ ] PartnerProfile
- [ ] AdminDashboard
- [ ] AdminProposals
- [ ] AdminUsers

### Integration
- [ ] Agentic Commerce (opcional)
- [ ] CRM Integration (opcional)

### Quality
- [ ] Testes escritos
- [ ] Performance otimizada
- [ ] Acessibilidade verificada
- [ ] Cross-browser testado

### Deploy
- [ ] Build production funciona
- [ ] Deploy realizado
- [ ] Site acessível

---

## 🆘 TROUBLESHOOTING

### Erro: "Module not found"

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Cannot find module '@/...'"

```bash
# Verificar tsconfig.json paths
# Verificar vite.config.ts alias
```

### Animações não funcionam

```bash
# Verificar se Framer Motion está instalado
npm list framer-motion

# Verificar imports
import { motion } from 'framer-motion';
```

### Tailwind não funciona

```bash
# Verificar se globals.css tem:
@import "tailwindcss";

# Verificar se está importado em main.tsx:
import './styles/globals.css';
```

---

## 📖 REFERÊNCIAS RÁPIDAS

### Documentação

- 📋 **INDICE-GERAL-REACT.md** - Índice completo
- ⚛️ **MIGRATION-REACT-FRAMER.md** - Setup
- 🧩 **REACT-COMPONENTS-SPEC.md** - Componentes
- 🎬 **REACT-ANIMATIONS-FRAMER.md** - Animações
- 🎣 **REACT-CONTEXTS-HOOKS.md** - State
- 🏢 **REACT-PARTNER-PORTAL-SPEC.md** - Portal

### Links Úteis

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [TypeScript Docs](https://www.typescriptlang.org)

---

## 🎉 PRONTO!

Siga este guia passo a passo e você terá o site completo em **~50 horas**.

**BOA IMPLEMENTAÇÃO!** 🚀

_Última atualização: 2025-11-11_
