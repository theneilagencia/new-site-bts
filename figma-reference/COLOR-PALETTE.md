# BTS Global Corp - Paleta de Cores Oficial

## 🎨 Cores Principais

### Primary Colors
- **Dark Blue**: `#1B2E3E` - Background principal
- **White**: `#FFFFFF` - Texto e elementos claros
- **Black**: `#000000` - Fundos e contrastes

### Highlight Color
- **Electric Blue**: `#1F4AFF` - CTAs, botões e elementos interativos

## 🌈 Cores Secundárias (Official Brand Guide)

- **S01**: `#1E365B` - Deep Navy Blue (azul navy profundo)
- **S02**: `#00639A` - Ocean Blue (azul oceano)
- **S03**: `#00BCA5` - Teal (verde-azulado)
- **S04**: `#2A7BA1` - Steel Blue (azul aço)
- **S05**: `#21B6F3` - Sky Blue (azul céu)
- **S06**: `#E8E8E8` - Light Gray (cinza claro)

## 📊 Uso no Design System

### Dark Mode (Tema Padrão)
- **Background Primary**: `#0B1221` - Deep Navy escuro
- **Background Secondary**: `#1B2B3E` - Dark Blue da BTS
- **Background Tertiary**: `#1E2B3E` - Variação média
- **Text Primary**: `#FFFFFF` - Branco puro
- **Text Secondary**: `rgba(255, 255, 255, 0.9)` - Branco 90%
- **Text Tertiary**: `rgba(255, 255, 255, 0.6)` - Branco 60%
- **Border Color**: `rgba(255, 255, 255, 0.1)` - Branco 10%
- **Accent Primary**: `#00639A` - S02 Ocean Blue
- **Accent Secondary**: `#21B6F3` - S05 Sky Blue
- **Accent Glow**: `rgba(0, 99, 154, 0.2)` - Glow do S02

### Light Mode
- **Background Primary**: `#FFFFFF` - Branco puro
- **Background Secondary**: `#F8F9FA` - Off White
- **Background Tertiary**: `#E8E8E8` - S06 Light Gray
- **Text Primary**: `#1B2B3E` - Dark Blue
- **Text Secondary**: `#1E2B3E` - Variação do Dark Blue
- **Text Tertiary**: `rgba(27, 43, 62, 0.7)` - Dark Blue 70%
- **Border Color**: `rgba(27, 43, 62, 0.1)` - Dark Blue 10%
- **Accent Primary**: `#1F4AFF` - Highlight Blue
- **Accent Secondary**: `#00639A` - S02 Ocean Blue
- **Accent Glow**: `rgba(31, 74, 255, 0.15)` - Glow do Highlight

## 🎯 Aplicações por Componente

### Hero Section
```tsx
// Radial gradients usando cores oficiais
background: 'radial-gradient(circle, #00639A 0%, transparent 70%)' // S02
background: 'radial-gradient(circle, #21B6F3 0%, transparent 60%)' // S05

// CTA Buttons
from-[#1F4AFF] to-[#21B6F3] // Highlight → Sky Blue
```

### Solutions Section
```tsx
// Offshore
gradient: 'from-[#1F4AFF] to-[#00639A]'  // Highlight → Ocean Blue
accentColor: '#1F4AFF'

// Foundation
gradient: 'from-[#00639A] to-[#2A7BA1]'  // Ocean Blue → Steel Blue
accentColor: '#00639A'

// Blocktrust
gradient: 'from-[#00BCA5] to-[#21B6F3]'  // Teal → Sky Blue
accentColor: '#21B6F3'
```

### About Section
```tsx
// Vision
color: '#1F4AFF'  // Highlight Blue

// Mission  
color: '#00639A'  // S02 Ocean Blue

// Values
color: '#21B6F3'  // S05 Sky Blue
```

### Partner Section
```tsx
// Benefits (6 cards)
color: '#1F4AFF'  // Benefit 1 - Highlight
color: '#00639A'  // Benefit 2 - S02
color: '#00BCA5'  // Benefit 3 - S03
color: '#2A7BA1'  // Benefit 4 - S04
color: '#21B6F3'  // Benefit 5 - S05
color: '#1E365B'  // Benefit 6 - S01
```

### Privacy Section
```tsx
// Features (3 items)
color: '#1F4AFF'  // Feature 1 - Highlight
color: '#00639A'  // Feature 2 - S02
color: '#21B6F3'  // Feature 3 - S05
```

## ✨ Gradientes Principais

### CTAs e Botões
```css
/* Primary CTA Gradient */
from-[#1F4AFF] to-[#21B6F3]

/* Hover State */
from-[#21B6F3] to-[#1F4AFF]
```

### Efeitos de Glow
```css
/* Logo Glow */
from-[#1F4AFF] to-[#21B6F3]

/* Accent Lines */
from-transparent via-[#00639A] to-transparent
from-transparent via-[#21B6F3] to-transparent
```

### Backgrounds Radiais
```css
/* Hero Background */
radial-gradient(circle, #00639A 0%, transparent 70%)
radial-gradient(circle, #21B6F3 0%, transparent 60%)
```

## 🔍 Regras de Uso

### ✅ SEMPRE Use:
- Cores da paleta oficial (S01-S06 + Highlight)
- Variáveis CSS para temas (`var(--accent-primary)`)
- Gradientes harmônicos (cores adjacentes)

### ❌ NUNCA Use:
- Cores fora da paleta oficial
- Roxo ou magenta (#206BBE antigo está BANIDO)
- Cyan brilhante (#00BCEE, #00BFF3, #74FFFB estão BANIDOS)
- Hardcoded colors que não existem na paleta

## 📐 Opacidades Padrão

### Text
- Primary: 100% (opaque)
- Secondary: 90% opacity
- Tertiary: 60% opacity

### Borders
- Default: 10% opacity
- Hover: 50% opacity
- Active: 100% opacity

### Backgrounds
- Primary: 100% (solid)
- Secondary: 50% opacity + backdrop-blur
- Tertiary: 1-5% opacity (subtle)

## 🎨 Acessibilidade

Todas as combinações de cores atendem ao padrão **WCAG AA**:

- Texto sobre fundos escuros: contraste mínimo 4.5:1
- Botões e elementos interativos: contraste mínimo 3:1
- Elementos grandes (≥24px): contraste mínimo 3:1

---

**✅ STATUS**: Paleta 100% implementada conforme brand guide oficial da BTS Global Corp  
**📅 Última Atualização**: Novembro 2025  
**🎯 Compliance**: WCAG AA | Brand Guidelines v1.0
