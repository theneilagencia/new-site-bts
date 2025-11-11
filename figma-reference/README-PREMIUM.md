# BTS Global Corp - Premium Modular Website

## Overview
Microsite institucional premium inspirado em Stripe Atlas, com design cinematográfico e tecnologia silenciosa.

## 🎨 Design System

### Tipografia
- **Font Family**: Montserrat
- **Weights**: 
  - Light (300) - Body text
  - Regular (400) - Standard text
  - ExtraBold (800) - Headlines

### Paleta de Cores
```css
--color-white: #FFFFFF
--color-dark: #122539
--color-deep-blue: #18365B
--color-primary: #185AB4
--color-secondary: #006DA5
--color-border: #E8E8E8
--color-gray: #6B7280
--color-black: #000000
--color-navy: #0A2540
--color-off-white: #F6F9FC
```

### Gradientes
- Linear: `from-[#122539] to-[#006DA5]` (45°)
- Glow diagonal animado (opacity 30%)

## 🧩 Módulos (Sections)

### 1. Portal Layer - Hero Section
**Componente**: `SectionHeroPremium`
- Globo 3D animado com linhas orbitais
- Gradiente azul profundo com partículas em movimento
- CTA duplo com microanimações
- Scroll indicator animado

### 2. Credibility Layer - Privacy & Why BTS Exists
**Componente**: `SectionPrivacyPremium`
- Fundo com malha digital translúcida
- Cards em glassmorphism com hover elevado
- Ícones animados com rotação 360°
- "One-Way Mirror of Trust" destacado

### 3. Interactive Layer - How It Works
**Componente**: `SectionHowItWorksPremium`
- Timeline horizontal interativa (desktop)
- Timeline vertical (mobile)
- Linha de progresso animada
- Steps com hover states e pulse effect

### 4. Trust Layer - Trusted Worldwide
**Componente**: `SectionTrustedPremium`
- Starfield background animado
- Light beams verticais em movimento
- Stats cards com glassmorphism
- Trust indicators com logos placeholder

### 5. Narrative Layer - About / Be Anywhere
**Componente**: `SectionAboutPremium`
- Video manifesto placeholder
- Cards em glassmorphism (Vision, Mission, Values)
- Scroll progress indicator lateral
- Hover elevado 4px em cards

### 6. Product Layer - Solutions
**Componente**: `SectionSolutionsPremium`
- 3 soluções: Digital Offshore, Digital Foundation, BTS BlockTrust
- Cards informativos com hover animado
- Features tables com check icons
- CTAs personalizados por solução

### 7. Conversion Layer - Partner Program
**Componente**: `SectionPartnerPremium`
- Canvas animado com mapa mundial pontilhado
- Starfield background
- Benefits grid 2×3
- CTA centralizado com "Strict Approval Process"

### 8. Trust Layer - Footer
**Componente**: `FooterPremium`
- Background azul-marinho escuro (#0A2540)
- Compliance badges (SOC 2, ISO 27001, GDPR, ACP)
- Links com underline progressivo
- "Privacy by Design" tagline

## 🎭 Microinterações

| Ação | Efeito |
|------|--------|
| Hover em botões | Glow suave + diagonal shine (1.2s) |
| Scroll | Fade-up + parallax leve |
| Hover em ícones | Rotação 360° + aura azul |
| CTA principal | Brilho diagonal em movimento |
| Transição seção | Crossfade com delay 0.15s |
| Cards | Elevação 8px + shadow intensified |

## 🌐 Internacionalização (i18n)

- **Idiomas**: Português (PT) e Inglês (EN)
- **Auto-detecção**: Navegador
- **Persistência**: localStorage
- **Context**: React Context API
- **Hook**: `useLanguage()`

## 🛠️ Tecnologias

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Canvas**: Native HTML5 Canvas (Globe, World Map)
- **Build**: Next.js ready

## 📦 Estrutura de Arquivos

```
/components
  ├── sections/
  │   ├── header-main.tsx
  │   ├── section-hero-premium.tsx
  │   ├── section-privacy-premium.tsx
  │   ├── section-howitworks-premium.tsx
  │   ├── section-trusted-premium.tsx
  │   ├── section-about-premium.tsx
  │   ├── section-solutions-premium.tsx
  │   ├── section-partner-premium.tsx
  │   └── footer-premium.tsx
  ├── animated-globe.tsx
  ├── button-primary.tsx
  ├── button-secondary.tsx
  ├── language-selector.tsx
  └── badge-agentic.tsx
/contexts
  └── language-context.tsx
/lib
  └── i18n.ts
/styles
  └── globals.css
```

## 🎬 Características Premium

### Glassmorphism
- Background blur: `backdrop-blur-sm` / `backdrop-blur-md` / `backdrop-blur-xl`
- Transparência: `bg-white/5` até `bg-white/80`
- Borders sutis: `border-white/10`

### Animações Canvas
1. **Globe 3D** (Hero)
   - Meridians e parallels
   - Partículas orbitais (60 pontos)
   - Rotação contínua

2. **World Map** (Partner)
   - 30 pontos animados
   - Conexões dinâmicas
   - Pulse effect

### Efeitos de Luz
- Starfield (100 estrelas)
- Light beams verticais
- Diagonal glow animado
- Radial gradients em cards

## 🚀 Próximos Passos

1. Adicionar imagens cinematográficas reais
2. Implementar vídeo manifesto
3. Conectar CTAs a fluxos reais
4. Adicionar mais idiomas
5. Implementar analytics
6. Otimizar performance (lazy loading)

## 📝 Conteúdo

Todo o conteúdo textual está centralizado em `/lib/i18n.ts` e pode ser facilmente editado/expandido.

## 🎯 Experiência do Usuário

> "O usuário não lê — ele experiencia a confiança. O design é silencioso, cinematográfico e profundamente humano."

---

**BTS Global Corp** - Be Anywhere
