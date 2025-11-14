# Análise do Design System - Bitcoin Capital Reserve

**Site:** https://bitcoincapreserve.com/  
**Plataforma:** WordPress  
**Hospedagem:** Kinghost  
**Tema:** Most (v1.4.0)  
**Page Builder:** Elementor (v3.33.0)  
**Data da Análise:** Janeiro 2025

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Espaçamentos](#espaçamentos)
5. [Componentes](#componentes)
6. [Sombras e Bordas](#sombras-e-bordas)
7. [Layout e Grid](#layout-e-grid)
8. [Animações e Transições](#animações-e-transições)
9. [Tecnologias Utilizadas](#tecnologias-utilizadas)
10. [Modo Escuro](#modo-escuro)

---

## 🎨 Visão Geral

O site Bitcoin Capital Reserve utiliza um design system moderno baseado em CSS Variables (Custom Properties), permitindo fácil customização e suporte a temas claro/escuro. O tema "Most" fornece a base estrutural, enquanto o Elementor é usado para construção de páginas.

---

## 🎨 Paleta de Cores

### Cores Principais (HSL)

#### Cor Primária (Primary)
- **Base:** `hsl(12, 85%, 58%)` - Laranja/vermelho vibrante
- **Variações:**
  - Darker: `hsl(12, 85%, 46%)`
  - Dark: `hsl(12, 85%, 52%)`
  - Base: `hsl(12, 85%, 58%)`
  - Light: `hsl(12, 85%, 64%)`
  - Lighter: `hsl(12, 85%, 70%)`

#### Cor de Destaque (Accent)
- **Base:** `hsl(342, 89%, 48%)` (Light Mode) / `hsl(342, 92%, 54%)` (Dark Mode)
- **Variações:**
  - Darker: `hsl(342, 89%, 28%)` / `hsl(342, 92%, 41%)`
  - Dark: `hsl(342, 89%, 38%)` / `hsl(342, 92%, 47%)`
  - Base: `hsl(342, 89%, 48%)` / `hsl(342, 92%, 54%)`
  - Light: `hsl(342, 89%, 58%)` / `hsl(342, 92%, 60%)`
  - Lighter: `hsl(342, 89%, 68%)` / `hsl(342, 92%, 65%)`

### Cores de Contraste (Light Mode)

| Nome | HSL | Uso |
|------|-----|-----|
| Contrast Higher | `hsl(0, 0%, 0%)` | Texto principal |
| Contrast High | `hsl(0, 0%, 17%)` | Texto secundário |
| Contrast Medium | `hsl(0, 0%, 46%)` | Texto terciário |
| Contrast Low | `hsl(0, 0%, 91%)` | Bordas, divisores |
| Contrast Lower | `hsl(0, 0%, 97%)` | Backgrounds sutis |
| Background | `hsl(0, 0%, 100%)` | Fundo principal |

### Cores de Contraste (Dark Mode)

| Nome | HSL | Uso |
|------|-----|-----|
| Contrast Higher | `hsl(0, 100%, 99%)` | Texto principal |
| Contrast High | `hsl(0, 0%, 81%)` | Texto secundário |
| Contrast Medium | `hsl(0, 0%, 57%)` | Texto terciário |
| Contrast Low | `hsl(0, 0%, 22%)` | Bordas, divisores |
| Contrast Lower | `hsl(0, 0%, 15%)` | Backgrounds sutis |
| Background | `hsl(0, 0%, 11%)` | Fundo principal |

### Cores Semânticas

#### Success (Sucesso)
- Base: `hsl(128, 51%, 47%)` (Light) / `hsl(122, 50%, 60%)` (Dark)
- Variações: darker, dark, light, lighter

#### Warning (Aviso)
- Base: `hsl(46, 100%, 61%)`
- Variações: darker, dark, light, lighter

#### Error (Erro)
- Base: `hsl(357, 91%, 55%)` (Light) / `hsl(342, 92%, 54%)` (Dark)
- Variações: darker, dark, light, lighter

### Cores WordPress Block Editor

| Nome | Hex | Descrição |
|------|-----|-----------|
| Primary | `#1258ca` | Azul primário |
| Accent | `#c70a1a` | Vermelho de destaque |
| Success | `#88c559` | Verde de sucesso |
| Black | `#263654` | Preto customizado |
| White | `#ffffff` | Branco |
| Contrast | `#292a2d` | Contraste escuro |
| Contrast Medium | `#79797c` | Contraste médio |
| Contrast Lower | `#323639` | Contraste baixo |

### Cores Específicas do Site

- **Footer Background:** `#0B0F1F` (azul escuro)
- **Cookie Notice Background:** `rgba(50,50,58,1)`
- **Cookie Button:** `#e2851b` (laranja)

---

## 📝 Tipografia

### Famílias de Fontes

#### Fonte Primária (Body)
- **Nome:** Inter
- **Uso:** Texto do corpo, parágrafos, conteúdo geral
- **Fonte:** Google Fonts (localizada via Elementor)

#### Fonte de Títulos (Headings)
- **Nome:** Plus Jakarta Sans
- **Pesos disponíveis:** 200, 300, 400, 500, 600, 700, 800 (normal e itálico)
- **Uso:** Títulos, headings, elementos de destaque
- **Fonte:** Google Fonts

#### Fontes Adicionais (Elementor)
- **Roboto:** Disponível localmente
- **Roboto Slab:** Disponível localmente

### Tamanhos de Fonte

#### Escala Global (CSS Variables)
```css
--global--font-size-base: 1.25rem (20px)
--global--font-size-xs: 1rem (16px)
--global--font-size-sm: 1.125rem (18px)
--global--font-size-md: 1.25rem (20px)
--global--font-size-lg: 1.5rem (24px)
--global--font-size-xl: 2.25rem (36px)
--global--font-size-xxl: 4rem (64px)
--global--font-size-xxxl: 5rem (80px)
```

#### Escala WordPress Block Editor
- Small: `14px`
- Normal: `16px`
- Medium: `20px`
- Large: `24px`
- X-Large: `42px`
- Huge: `28px`

#### Tamanhos Responsivos (Footer)
- Título: `clamp(28px, 3.2vw, 48px)`
- Links sociais: `clamp(16px, 1.6vw, 22px)`
- Direitos autorais: `clamp(12px, 1.1vw, 16px)`

### Line Heights

- **Body:** `2.1`
- **Headings:** `1.3`
- **Page Title:** `1.1`
- **Widget Title:** `1.4`
- **Widget List:** `1.9`

### Letter Spacing

- Padrão: `normal`
- Footer título: `0.02em`

---

## 📏 Espaçamentos

### Sistema de Espaçamento (CSS Variables)

Baseado em `--space-unit: 1em` (1.25em em telas ≥64rem)

| Nome | Cálculo | Valor Aproximado |
|------|---------|------------------|
| xxxxx | `0.125 * unit` | 0.125em |
| xxxx | `0.25 * unit` | 0.25em |
| xxx | `0.375 * unit` | 0.375em |
| xx | `0.5 * unit` | 0.5em |
| xs | `0.75 * unit` | 0.75em |
| sm | `1.25 * unit` | 1.25em |
| md | `2 * unit` | 2em |
| lg | `3.25 * unit` | 3.25em |
| xl | `5.25 * unit` | 5.25em |
| xxl | `8.5 * unit` | 8.5em |
| xxxl | `13.75 * unit` | 13.75em |

### Espaçamentos WordPress Block Editor

| Nome | Valor |
|------|-------|
| spacing-20 | `0.44rem` |
| spacing-30 | `0.67rem` |
| spacing-40 | `1rem` |
| spacing-50 | `1.5rem` |
| spacing-60 | `2.25rem` |
| spacing-70 | `3.38rem` |
| spacing-80 | `5.06rem` |

### Espaçamentos Globais

- **Spacing Unit:** `20px`
- **Spacing Horizontal:** `25px`
- **Spacing Vertical:** `30px`
- **Component Padding:** `var(--space-md)` (1.25em)

### Espaçamentos Específicos

- **Header Height (MD):** `90px`
- **Header Width (MD):** `1320px`
- **Logo Height:** `43px`
- **Footer Padding:** `56px 24px 40px` (desktop), `40px 20px` (mobile)
- **Footer Social Gap:** `48px` (desktop), `28px` (mobile)

---

## 🧩 Componentes

### Botões

#### Botão WordPress Block
```css
background-color: #32373c
color: #fff
border-radius: 9999px (pill shape)
padding: calc(.667em + 2px) calc(1.333em + 2px)
font-size: 1.125em
```

#### Botão Circle (Tema Most)
- Classes: `.btn`, `.btn-circle`, `.btn--md`
- Uso: Botões circulares de navegação

### Header

#### Estrutura
- **Classe principal:** `.main-header`
- **Altura:** `90px` (desktop)
- **Largura máxima:** `1320px`
- **Logo:** Altura `43px`
- **Transparência:** Suporta header transparente
- **Auto-hide:** Funcionalidade de ocultar ao scroll

#### Navegação
- **Classe:** `.main-header__nav`
- **Menu:** `.navbar-nav`
- **Trigger:** `.main-header__nav-trigger` (mobile)

### Footer Customizado

#### Estrutura
- **ID:** `#bcr-footer`
- **Background:** `#0B0F1F` (azul escuro)
- **Cor do texto:** `#FFFFFF`
- **Max-width:** `1320px`

#### Elementos
- **Título:** `.bcr-title` - Uppercase, font-weight 800
- **Divisor:** `.bcr-divider` - Linha branca com opacidade 0.8
- **Social Links:** `.bcr-social` - Gap de 48px (desktop)
- **Direitos:** `.bcr-rights` - Opacidade 0.9

### Slider/Carousel

#### Componente MS Slider
- **Classe:** `.ms-slider`
- **Navegação:** `.ms-slider--nav`
- **Controles:** `.ms-nav--next`, `.ms-nav--prev`
- **Tamanho:** `.nav-size--lg`

### Cards e Containers

#### Container Principal
- **Max-width:** `1320px` (header e footer)
- **Padding:** Variável conforme componente

---

## 🌑 Sombras e Bordas

### Sombras (CSS Variables)

| Nome | Valor |
|------|-------|
| shadow-xs | `0 0.1px 0.3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)` |
| shadow-sm | `0 0.3px 0.4px rgba(0,0,0,0.025), 0 0.9px 1.5px rgba(0,0,0,0.05), 0 3.5px 6px rgba(0,0,0,0.1)` |
| shadow-md | `0 0.9px 1.5px rgba(0,0,0,0.03), 0 3.1px 5.5px rgba(0,0,0,0.08), 0 14px 25px rgba(0,0,0,0.12)` |
| shadow-lg | `0 1.2px 1.9px -1px rgba(0,0,0,0.014), 0 3.3px 5.3px -1px rgba(0,0,0,0.038), 0 8.5px 12.7px -1px rgba(0,0,0,0.085), 0 30px 42px -1px rgba(0,0,0,0.15)` |
| shadow-xl | Múltiplas camadas com offsets negativos |

### Sombras WordPress Block Editor

| Nome | Valor |
|------|-------|
| natural | `6px 6px 9px rgba(0, 0, 0, 0.2)` |
| deep | `12px 12px 50px rgba(0, 0, 0, 0.4)` |
| sharp | `6px 6px 0px rgba(0, 0, 0, 0.2)` |
| outlined | `6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)` |
| crisp | `6px 6px 0px rgba(0, 0, 0, 1)` |

### Border Radius

| Nome | Valor |
|------|-------|
| radius-sm | `calc(var(--radius, 0.25em) / 2)` |
| radius-md | `var(--radius, 0.25em)` |
| radius-lg | `calc(var(--radius, 0.25em) * 2)` |
| radius-xl | `calc(var(--radius, 2em) * 2)` |

**Nota:** Botões WordPress usam `border-radius: 9999px` (pill shape)

---

## 📐 Layout e Grid

### Sistema de Grid

- **Framework:** Bootstrap Grid (via tema Most)
- **Breakpoints:** Padrão Bootstrap

### Container Widths

| Tipo | Valor |
|------|-------|
| Default Width | `810px` (base) |
| Align Wide Width | `1320px` (desktop) |
| Full Width | `100%` |

### Responsividade

#### Breakpoints Principais
- **Mobile:** `< 552px`
- **Tablet:** `552px - 992px`
- **Desktop:** `> 992px`
- **Large Desktop:** `≥ 822px`

#### Ajustes Responsivos

**Mobile (< 552px):**
- Spacing horizontal reduzido
- Layout simplificado

**Tablet (552px - 992px):**
- Spacing horizontal médio
- Layout adaptado

**Desktop (≥ 822px):**
- Max-width: `1320px`
- Spacing horizontal aumentado

### Aspect Ratios (WordPress)

- Square: `1:1`
- 4:3, 3:4
- 3:2, 2:3
- 16:9, 9:16

---

## ✨ Animações e Transições

### Easing Functions (CSS Variables)

#### Ease Padrão
- `--ease-1` até `--ease-5`: Curvas progressivas
- `--ease-in-1` até `--ease-in-5`: Entrada acelerada
- `--ease-out-1` até `--ease-out-5`: Saída desacelerada
- `--ease-in-out-1` até `--ease-in-out-5`: Entrada e saída

#### Ease Especiais
- `--ease-elastic-1` até `--ease-elastic-5`: Efeito elástico
- `--ease-squish-1` até `--ease-squish-5`: Efeito compressão
- `--ease-step-1` até `--ease-step-5`: Animações em steps

#### Ease Customizados
- `--bounce`: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- `--ease-in-out`: `cubic-bezier(0.645, 0.045, 0.355, 1)`
- `--ease-in`: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`
- `--ease-out`: `cubic-bezier(0.215, 0.61, 0.355, 1)`
- `--ease-out-back`: `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Font Smoothing

- **Light Mode:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`
- **Dark Mode:** Mesmas configurações aplicadas

---

## 🛠 Tecnologias Utilizadas

### Core
- **WordPress:** 6.8.3
- **Tema:** Most v1.4.0
- **Page Builder:** Elementor 3.33.0

### Bibliotecas CSS/JS

#### CSS Frameworks
- **Bootstrap Grid:** Sistema de grid responsivo
- **Swiper:** v8.4.5 - Carrosséis e sliders
- **Magnific Popup:** Modais e lightboxes
- **Plyr:** Player de vídeo
- **Font Awesome:** Ícones

#### Plugins WordPress
- **Contact Form 7:** v6.1.3
- **Cookie Notice:** v2.5.8
- **Yoast SEO:** v26.3
- **Most Google Fonts:** Gerenciamento de fontes

### Fontes
- **Plus Jakarta Sans:** Google Fonts (headings)
- **Inter:** Google Fonts (body, localizada)
- **Roboto:** Local (via Elementor)
- **Roboto Slab:** Local (via Elementor)

---

## 🌙 Modo Escuro

### Suporte

O design system possui suporte completo a modo escuro através de atributo `data-theme="dark"` no elemento raiz.

### Variáveis CSS

Todas as cores principais possuem variações para light e dark mode, definidas via `@supports (--css:variables)`.

### Classes Especiais

#### Modo Noturno Customizado
- **Classe:** `.bcr-night-mode` no `<body>`
- **Efeito:** Força texto branco em todos os elementos
- **Exceções:** SVG, path, ícones (dashicons)

### Footer Dark Mode

```css
body[data-theme=dark] .ms-footer {
  background-color: hsl(0, 0%, 15%);
}
```

---

## 📊 Gradientes Disponíveis

### WordPress Block Editor Gradients

1. **Vivid Cyan Blue to Vivid Purple**
2. **Light Green Cyan to Vivid Green Cyan**
3. **Luminous Vivid Amber to Luminous Vivid Orange**
4. **Luminous Vivid Orange to Vivid Red**
5. **Very Light Gray to Cyan Bluish Gray**
6. **Cool to Warm Spectrum**
7. **Blush Light Purple**
8. **Blush Bordeaux**
9. **Luminous Dusk**
10. **Pale Ocean**
11. **Electric Grass**
12. **Midnight**

---

## 🎯 Observações Importantes

### Customizações Específicas

1. **Footer Customizado:** O site possui um footer completamente customizado (`#bcr-footer`) que sobrescreve o footer padrão do tema.

2. **Modo Noturno Forçado:** Existe uma classe `.bcr-night-mode` que força texto branco em todo o site, independente do tema.

3. **Header Transparente:** O header suporta transparência e auto-hide ao scroll.

4. **Responsividade:** Uso extensivo de `clamp()` para tipografia responsiva.

5. **CSS Variables:** Sistema robusto de variáveis CSS permite fácil customização e manutenção.

---

## 📝 Conclusão

O design system do Bitcoin Capital Reserve é bem estruturado, utilizando:
- ✅ CSS Variables para fácil customização
- ✅ Suporte a modo claro/escuro
- ✅ Tipografia responsiva com clamp()
- ✅ Sistema de espaçamento consistente
- ✅ Componentes reutilizáveis
- ✅ Animações suaves e profissionais
- ✅ Integração com Elementor para flexibilidade

O sistema demonstra boas práticas de design moderno, com foco em acessibilidade, performance e manutenibilidade.

---

**Documento gerado automaticamente através de análise do código-fonte do site.**
