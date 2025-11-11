# BTS Global Corp - Especificações do Design Figma

## 📋 Estrutura Geral

- **Framework Original**: React + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fontes**: Inter (400-600) e Inter Tight (600-800)

## 🎨 Paleta de Cores

### Cores Principais
```css
--color-bts-dark-blue: #1b2e3e
--color-bts-black: #000
--color-bts-white: #fff
--color-bts-highlight: #1f4aff     /* Azul destaque */
--color-bts-s01: #1e365b            /* Azul escuro */
--color-bts-s02: #00639a            /* Azul principal */
--color-bts-s03: #00bca5            /* Verde/Turquesa */
--color-bts-s04: #2a7ba1            /* Azul médio */
--color-bts-s05: #21b6f3            /* Azul claro */
```

### Cores Auxiliares
```css
--color-gray-10: #ffffff1a
--color-gray-20: #ffffff33
--color-gray-40: #ffffff66
--color-gray-60: #ffffff99
--color-gray-80: #ffffffcc
```

### Theme Light
```css
--bg-primary: #fff
--bg-secondary: #f8f9fa
--bg-tertiary: #e8e8e8
--text-primary: #1b2b3e
--text-secondary: #1e2b3e
--text-tertiary: #1b2b3eb3
--border-color: #1b2b3e1a
--accent-primary: #00639a
--accent-secondary: #21b6f3
--accent-glow: #00639a26
```

### Theme Dark
```css
--bg-primary: #0b1221
--bg-secondary: #1b2b3e
--bg-tertiary: #1e2b3e
--text-primary: #fff
--text-secondary: #ffffffe6
--text-tertiary: #ffffff99
--border-color: #ffffff1a
--accent-primary: #00639a
--accent-secondary: #21b6f3
--accent-glow: #00639a33
```

## 📏 Tipografia

### Headings
```css
h1: 88px / 700 / Inter Tight / line-height: 1.1 / letter-spacing: -0.03em
h2: 64px / 700 / Inter Tight / line-height: 1.1 / letter-spacing: -0.02em
h3: 40px / 600 / Inter Tight / line-height: 1.2 / letter-spacing: -0.01em
h4: 24px / 600 / Inter / line-height: 1.3
p:  18px / 400 / Inter / line-height: 1.7 / color: var(--text-tertiary)
```

### Responsive
```css
@media (width <= 768px) {
  h1: 40px / line-height: 1.15
  h2: 32px
  h3: 24px
  p:  16px
}
```

## 🧩 Componentes Principais

### Header (HeaderV2)
- Fixed, top: 0, z-index: 50
- Altura: 80px
- Background: transparente → blur ao scroll
- Efeito: `backdrop-blur-xl` quando `scrollY > 20`
- Logo: BTSLogo component (SVG)
- Nav items: Solutions, About, Partner
- Actions: Theme toggle, Language selector, Portal button
- Mobile menu: Hamburger → Full screen overlay

### Hero (HeroV2)
- Min-height: 100vh
- Background: Grid animado (80px x 80px) com opacity 0.03
- Gradientes radiais: #00639A e #21B6F3
- 20 partículas flutuantes animadas
- Título com gradiente de texto
- 2 CTAs: Primary "Get Started" + Secondary "Watch Demo"
- Parallax scroll effect

### About (AboutV3)
- Grid background 80px com opacity 0.08
- Linhas geométricas diagonais (±12°)
- 3 valores com números grandes (01, 02, 03)
- Tabs: Vision / Mission
- Cards com hover effects
- Floating shapes (círculos com blur)

### Solutions (SolutionsV2)
- Cards em grid 3 colunas
- Ícones com gradiente
- Hover: scale + glow shadow
- Background: Grid sutil

### Why (WhyV4)
- Cards com ícones
- Numbering: 01, 02, 03, 04
- Animações stagger

### Privacy (PrivacyV2)
- Focus em segurança
- Ícones de cadeado/shield
- Features em lista

### Trusted (TrustedV2)
- Logos de parceiros/clientes
- Scroll infinito (opcional)
- Grayscale → Color no hover

### Partner (PartnerV6)
- CTA Final
- Form de contato
- Background com efeitos

### Footer (FooterV2)
- 4 colunas: Logo, Links, Resources, Contact
- Social media icons
- Copyright

## 🎭 Efeitos Visuais

### Backgrounds
1. **Grid Pattern**:
```css
background-image: 
  linear-gradient(var(--border-color) 1px, transparent 1px),
  linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
background-size: 80px 80px;
```

2. **Radial Gradients**:
```css
background: radial-gradient(circle, #00639A 0%, transparent 70%);
```

3. **Blur Effects**:
```css
filter: blur(60px);
backdrop-filter: blur(16px);
```

### Animações
1. **Floating Particles**: translateY + opacity loop
2. **Parallax**: useTransform do Framer Motion
3. **Hover Effects**: scale(1.05) + glow shadow
4. **Scroll Progress**: opacity fade

### Shadows
```css
--shadow-subtle: 0 0 40px #1f4aff26;
--glow-highlight: 0 0 30px #00bcee4d;
```

## 📱 Responsive Breakpoints
```css
sm: 40rem (640px)
md: 48rem (768px)
lg: 64rem (1024px)
xl: 80rem (1280px)
```

## 🎯 Funcionalidades Especiais

1. **Theme Switching**: Light/Dark com transição suave
2. **Multi-language**: EN/PT
3. **Smooth Scroll**: Para navegação entre seções
4. **Portal Access**: Botão para área restrita
5. **Mobile Menu**: Full screen com animação
6. **Scroll Animations**: Intersection Observer + Framer Motion
7. **Glassmorphism**: Header e cards
8. **Gradient Text**: Titles com bg-clip-text

## 🔧 Spacing
```css
--spacing-section: 96px
--spacing-internal: 64px
```

## 📦 Componentes Reutilizáveis
- BTSLogo (SVG)
- ButtonPrimary
- ButtonSecondary
- CardSolution
- BadgeAgentic
- AnimatedGlobe
- NetworkTopology
- LogicParticles
- OrbitalGlobe
