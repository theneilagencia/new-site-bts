# BTS Global Corp - Site Refatorado V2

## 🎨 Design System

### Paleta de Cores BTS Oficial
Baseado no brand guideline fornecido:

**Primary Colors:**
- Dark Blue: `#1B2B3E` (Background principal)
- White: `#FFFFFF`
- Black: `#000000`

**Highlight Color:**
- Electric Blue: `#1F4AFF` (CTAs e elementos interativos)

**Secondary Colors:**
- S01: `#1E2B3E` (Deep Navy)
- S02: `#1B5266` (Teal Dark)
- S03: `#0B6FAE` (Medium Blue)
- S04: `#009DA0` (Teal)
- S05: `#00BFEF` (Cyan/Light Blue)
- S06: `#86F0FF` (Very Light Cyan)

### Temas

#### Dark Mode (Padrão)
- Background: `#0B1221` → `#1B2B3E` (gradiente)
- Text: Branco com variações de opacidade
- Accents: `#00BFEF` (primário), `#1F4AFF` (secundário)

#### Light Mode
- Background: `#FFFFFF` → `#F8F9FA` (gradiente)
- Text: `#1B2B3E` com variações
- Accents: `#1F4AFF` (primário), `#0B6FAE` (secundário)

## ✨ Features Implementadas

### 1. Sistema de Temas (Dark/Light Mode)
- ThemeProvider com context API
- Persistência em localStorage
- Detecção automática de preferência do sistema
- Transições suaves entre temas
- Variáveis CSS customizadas para todos os elementos

### 2. Header Moderno
- Sticky header com blur backdrop
- Animação de aparição no scroll
- Toggle de tema com ícone animado
- Seletor de idioma (PT/EN) com indicador animado
- Logo com efeito de glow
- Navegação responsiva
- CTA com gradiente animado

### 3. Hero Section V2
- Parallax effect no scroll
- Grid animado de fundo
- Partículas flutuantes
- Gradiente radial dinâmico
- Animações de entrada escalonadas
- CTAs com hover effects sofisticados
- Scroll indicator animado
- Fade out progressivo

### 4. Why BTS Section
- Layout de problema → solução
- Boxes com corner accents animados
- Hover effects com gradientes
- Transição visual entre problema e solução
- Background com linhas animadas

### 5. Privacy Section
- Layout em grid 2 colunas
- Features com ícones coloridos
- Hover animations com slide lateral
- Gradientes dinâmicos por feature
- Border animations
- Background grid animado

### 6. Trusted Section
- Stats com animações de scale/pulse
- Números grandes com gradiente
- Border animations progressivas
- Background com linhas horizontais em movimento
- Efeitos de glow no hover

### 7. Solutions Section
- Cards 3D hover effect
- Gradient glow por solução
- Ícones com cores específicas
- Corner accents animados
- Border transitions
- CTA global com gradiente

### 8. About Section
- Vision & Mission em grid
- Values com ícones e cores únicas
- Cards com hover lift effect
- Gradient backgrounds sutis
- Icon animations

### 9. Partner Section
- Grid de benefícios 2x3
- Ícones coloridos por categoria
- Hover effects em todos os cards
- CTA box destacado com gradiente
- Corner accents

### 10. Footer Moderno
- Grid organizado (Brand + Solutions + Company)
- Badge "Agentic Commerce Enabled"
- Links com underline animation
- Background pattern sutil
- Copyright e legal links

### 11. Efeitos Globais

#### Cursor Glow (Desktop)
- Glow radial seguindo o cursor
- Dot indicator
- Smooth spring animations
- Não interferem com interações

#### Scroll to Top
- Botão flutuante animado
- Aparece após 500px de scroll
- Smooth scroll para o topo
- Hover effects

#### Page Loader
- Loading screen inicial
- Animação de anéis rotativos
- Logo pulsante
- Fade out suave

#### Section Transitions
- Componente reutilizável
- Variantes: line, dots, wave, gradient
- Animações suaves entre seções

## 🎯 Inspirações Palantir

### Elementos Implementados:
1. **Tipografia Limpa**: Inter para corpo, Inter Tight para headings
2. **Espaçamento Generoso**: Padding e margins amplos
3. **Micro-animações**: Hover states sutis mas impactantes
4. **Grid Técnico**: Backgrounds com grids e patterns
5. **Gradientes Sofisticados**: Uso estratégico de gradientes
6. **Glass Morphism**: Backdrop blur em cards e header
7. **Corner Accents**: Detalhes técnicos nos cantos
8. **Parallax Sutil**: Efeitos de profundidade no scroll
9. **Cursor Interativo**: Glow seguindo o mouse
10. **Loading States**: Transições suaves entre estados

## 🛠️ Tecnologias

- **React**: Componentes funcionais
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Utility-first styling
- **Motion (Framer Motion)**: Animações avançadas
- **Lucide React**: Ícones modernos
- **Context API**: State management (Theme + Language)

## 📱 Responsividade

Todos os componentes são totalmente responsivos:
- Mobile first approach
- Breakpoints: sm, md, lg, xl
- Grid layouts adaptáveis
- Typography responsiva com clamp()
- Touch-friendly interactions

## 🎭 Animações

### Tipos de Animações:
- **Fade In/Out**: Opacidade
- **Slide**: Translação X/Y
- **Scale**: Zoom in/out
- **Rotate**: Rotação de elementos
- **Spring**: Animações com bounce
- **Parallax**: Scroll-based
- **Stagger**: Sequencial com delay

### Performance:
- AnimatePresence para mount/unmount
- whileInView para lazy loading
- Transform e opacity (GPU accelerated)
- viewport={{ once: true }} para economizar recursos

## 🔧 Customização

### Cores
Editar `/styles/globals.css`:
```css
[data-theme='dark'] {
  --bg-primary: #0B1221;
  --accent-primary: #00BFEF;
  /* etc */
}
```

### Animações
Ajustar durations e delays nos componentes:
```tsx
transition={{ duration: 0.6, delay: 0.1 }}
```

### Conteúdo
Editar `/lib/i18n.ts` para textos em PT e EN

## 📦 Estrutura de Arquivos

```
/components
  /layout
    - header-v2.tsx
    - footer-v2.tsx
  /sections
    - hero-v2.tsx
    - why-v2.tsx
    - privacy-v2.tsx
    - trusted-v2.tsx
    - solutions-v2.tsx
    - about-v2.tsx
    - partner-v2.tsx
  /ui
    - cursor-glow.tsx
    - scroll-to-top.tsx
    - page-loader.tsx
    - section-transition.tsx
/contexts
  - theme-context.tsx
  - language-context.tsx
/lib
  - i18n.ts
/styles
  - globals.css
```

## 🚀 Performance

- CSS Variables para temas (sem re-render)
- Lazy animations com whileInView
- Transform/opacity para animações (GPU)
- Debounce em scroll listeners
- LocalStorage para persistência

## ♿ Acessibilidade

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast WCAG AA
- Reduced motion support (pode ser adicionado)

## 🌍 Internacionalização

- Português (pt)
- English (en)
- Fácil adicionar novos idiomas
- Persistência da escolha
- Auto-detecção do browser

---

**Desenvolvido com inspiração em Palantir, Apple Design e Stripe Atlas**
