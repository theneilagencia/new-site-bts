# Design System - Bitcoin Capital Reserve
## Análise do Site WordPress (bitcoincapreserve.com)

**Data da Análise:** 2025-01-27  
**Tema WordPress:** Most (v1.4.0)  
**Page Builder:** Elementor (v3.33.0)  
**Hospedagem:** Kinghost

---

## 📐 1. ESTRUTURA E TECNOLOGIAS

### Stack Tecnológico
- **CMS:** WordPress 6.8.3
- **Tema:** Most Theme (v1.4.0)
- **Page Builder:** Elementor Pro
- **Framework CSS:** Bootstrap Grid
- **Bibliotecas:**
  - Swiper.js (v8.4.5) - Sliders
  - Magnific Popup - Lightbox
  - Plyr - Player de vídeo
  - Font Awesome - Ícones
- **Fontes:** Google Fonts (Plus Jakarta Sans, Inter, Roboto, Roboto Slab)

### Arquitetura CSS
- Sistema de variáveis CSS (Custom Properties)
- Suporte a Light/Dark Mode
- Design responsivo com breakpoints customizados
- Sistema de espaçamento baseado em unidades relativas

---

## 🎨 2. PALETA DE CORES

### 2.1 Cores Primárias

#### Cor Primária (Primary)
```css
--color-primary: hsl(12, 85%, 58%)  /* Laranja vibrante */
--color-primary-darker: hsl(12, 85%, 46%)
--color-primary-dark: hsl(12, 85%, 52%)
--color-primary-light: hsl(12, 85%, 64%)
--color-primary-lighter: hsl(12, 85%, 70%)
```
**Uso:** CTAs, links importantes, elementos de destaque

#### Cor de Destaque (Accent)
```css
--color-accent: hsl(342, 89%, 48%)  /* Rosa/Magenta */
--color-accent-darker: hsl(342, 89%, 28%)
--color-accent-dark: hsl(342, 89%, 38%)
--color-accent-light: hsl(342, 89%, 58%)
--color-accent-lighter: hsl(342, 89%, 68%)
```
**Uso:** Elementos secundários, hover states

### 2.2 Cores Semânticas

#### Sucesso (Success)
```css
--color-success: hsl(128, 51%, 47%)  /* Verde */
--color-success-darker: hsl(128, 51%, 35%)
--color-success-light: hsl(128, 51%, 53%)
```

#### Aviso (Warning)
```css
--color-warning: hsl(46, 100%, 61%)  /* Amarelo */
--color-warning-darker: hsl(46, 100%, 47%)
--color-warning-light: hsl(46, 100%, 71%)
```

#### Erro (Error)
```css
--color-error: hsl(357, 91%, 55%)  /* Vermelho */
--color-error-darker: hsl(357, 91%, 43%)
--color-error-light: hsl(357, 91%, 61%)
```

### 2.3 Cores de Contraste (Light Mode)

```css
--color-bg: hsl(0, 0%, 100%)  /* Branco */
--color-contrast-lower: hsl(0, 0%, 97%)  /* Cinza muito claro */
--color-contrast-low: hsl(0, 0%, 91%)  /* Cinza claro */
--color-contrast-medium: hsl(0, 0%, 46%)  /* Cinza médio */
--color-contrast-high: hsl(0, 0%, 17%)  /* Cinza escuro */
--color-contrast-higher: hsl(0, 0%, 0%)  /* Preto */
```

### 2.4 Cores de Contraste (Dark Mode)

```css
--color-bg: hsl(0, 0%, 11%)  /* Preto azulado */
--color-contrast-lower: hsl(0, 0%, 15%)
--color-contrast-low: hsl(0, 0%, 22%)
--color-contrast-medium: hsl(0, 0%, 57%)
--color-contrast-high: hsl(0, 0%, 81%)
--color-contrast-higher: hsl(0, 100%, 99%)  /* Quase branco */
```

### 2.5 Cores Específicas do Site

#### Footer
```css
background: #0B0F1F  /* Azul escuro profundo */
color: #FFFFFF
```

#### Cores Adicionais (Elementor)
- **Primary:** `#1258ca` (Azul)
- **Accent:** `#c70a1a` (Vermelho)
- **Success:** `#88c559` (Verde claro)
- **Contrast:** `#292a2d` (Cinza escuro)
- **Contrast Medium:** `#79797c` (Cinza médio)
- **Contrast Lower:** `#323639` (Cinza escuro claro)

### 2.6 Gradientes Disponíveis

```css
/* Gradientes do WordPress/Elementor */
--gradient-vivid-cyan-blue-to-vivid-purple
--gradient-light-green-cyan-to-vivid-green-cyan
--gradient-luminous-vivid-amber-to-luminous-vivid-orange
--gradient-luminous-vivid-orange-to-vivid-red
--gradient-very-light-gray-to-cyan-bluish-gray
--gradient-cool-to-warm-spectrum
--gradient-blush-light-purple
--gradient-blush-bordeaux
--gradient-luminous-dusk
--gradient-pale-ocean
--gradient-electric-grass
--gradient-midnight
```

---

## ✍️ 3. TIPOGRAFIA

### 3.1 Famílias de Fonte

#### Fonte Primária (Body Text)
```css
--font-primary: 'Inter'
```
- **Pesos disponíveis:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Uso:** Texto corrido, parágrafos, conteúdo geral
- **Fonte:** Google Fonts (localmente hospedada)

#### Fonte de Títulos (Headings)
```css
--font-heading: 'Plus Jakarta Sans'
```
- **Pesos disponíveis:** 200, 300, 400, 500, 600, 700, 800 (normal e itálico)
- **Uso:** Títulos, headings, elementos de destaque
- **Fonte:** Google Fonts

#### Fontes Adicionais (Elementor)
- **Roboto** - Usada em alguns widgets
- **Roboto Slab** - Usada em alguns elementos específicos

### 3.2 Escala Tipográfica

#### Tamanhos Base
```css
--global--font-size-base: 1.25rem  /* 20px */
--global--font-size-xs: 1rem  /* 16px */
--global--font-size-sm: 1.125rem  /* 18px */
--global--font-size-md: 1.25rem  /* 20px */
--global--font-size-lg: 1.5rem  /* 24px */
--global--font-size-xl: 2.25rem  /* 36px */
--global--font-size-xxl: 4rem  /* 64px */
--global--font-size-xxxl: 5rem  /* 80px */
```

#### Tamanhos Preset (WordPress)
```css
--wp--preset--font-size--small: 14px
--wp--preset--font-size--normal: 16px
--wp--preset--font-size--medium: 20px
--wp--preset--font-size--large: 24px
--wp--preset--font-size--huge: 28px
--wp--preset--font-size--x-large: 42px
```

#### Tamanhos Responsivos (Footer)
```css
/* Título do footer */
font-size: clamp(28px, 3.2vw, 48px)

/* Links sociais */
font-size: clamp(16px, 1.6vw, 22px)

/* Texto de direitos */
font-size: clamp(12px, 1.1vw, 16px)
```

### 3.3 Altura de Linha

```css
--global--line-height-body: 2.1
--global--line-height-heading: 1.3
--global--line-height-page-title: 1.1
--widget--line-height-list: 1.9
--widget--line-height-title: 1.4
```

### 3.4 Pesos de Fonte

- **100** - Thin
- **200** - Extra Light
- **300** - Light
- **400** - Regular (padrão)
- **500** - Medium
- **600** - Semi Bold
- **700** - Bold
- **800** - Extra Bold (usado em títulos principais)
- **900** - Black

---

## 📏 4. ESPAÇAMENTOS

### 4.1 Sistema de Espaçamento Base

```css
--space-unit: 1em  /* Base: 1em (1.25em em telas >= 64rem) */
--space-xxxxs: calc(0.125 * var(--space-unit))  /* 0.125em */
--space-xxxs: calc(0.25 * var(--space-unit))  /* 0.25em */
--space-xxs: calc(0.375 * var(--space-unit))  /* 0.375em */
--space-xs: calc(0.5 * var(--space-unit))  /* 0.5em */
--space-sm: calc(0.75 * var(--space-unit))  /* 0.75em */
--space-md: calc(1.25 * var(--space-unit))  /* 1.25em */
--space-lg: calc(2 * var(--space-unit))  /* 2em */
--space-xl: calc(3.25 * var(--space-unit))  /* 3.25em */
--space-xxl: calc(5.25 * var(--space-unit))  /* 5.25em */
--space-xxxl: calc(8.5 * var(--space-unit))  /* 8.5em */
--space-xxxxl: calc(13.75 * var(--space-unit))  /* 13.75em */
```

### 4.2 Espaçamentos Globais (WordPress)

```css
--global--spacing-unit: 20px
--global--spacing-horizontal: 25px
--global--spacing-vertical: 30px
--global--spacing-width: 810px
```

### 4.3 Espaçamentos Preset (WordPress)

```css
--wp--preset--spacing--20: 0.44rem
--wp--preset--spacing--30: 0.67rem
--wp--preset--spacing--40: 1rem
--wp--preset--spacing--50: 1.5rem
--wp--preset--spacing--60: 2.25rem
--wp--preset--spacing--70: 3.38rem
--wp--preset--spacing--80: 5.06rem
```

### 4.4 Espaçamentos Específicos

#### Footer
```css
padding: 56px 24px 40px  /* Desktop */
padding: 40px 20px  /* Mobile */
gap: 48px  /* Espaçamento entre links sociais (Desktop) */
gap: 28px  /* Espaçamento entre links sociais (Mobile) */
```

#### Header
```css
--main-header-width-md: 1320px
--main-header-height-md: 90px
```

---

## 🎭 5. COMPONENTES

### 5.1 Header/Navegação

#### Classes Principais
```css
.main-header
.main-header__inner
.main-header__logo
.main-header__nav
.main-header__nav-trigger
```

#### Características
- **Altura do logo:** 43px
- **Largura máxima:** 1320px (desktop)
- **Altura:** 90px (desktop)
- **Modos:** Transparente, auto-hide, full-width
- **Cores:** Suporte a logo-dark e logo-light

### 5.2 Botões

#### Classes Base
```css
.btn
.btn-circle
.btn--md
```

#### Características
- Sistema de botões flexível
- Suporte a diferentes tamanhos
- Estilos circulares disponíveis

### 5.3 Footer Customizado

#### Estrutura
```html
<footer id="bcr-footer">
  <div class="bcr-wrap">
    <h2 class="bcr-title">TÍTULO</h2>
    <hr class="bcr-divider">
    <div class="bcr-bottom">
      <div class="bcr-social">Links sociais</div>
      <div class="bcr-rights">Direitos autorais</div>
    </div>
  </div>
</footer>
```

#### Estilos
- Background: `#0B0F1F` (azul escuro)
- Texto: Branco
- Layout: Flexbox responsivo
- Tipografia responsiva com clamp()

### 5.4 Elementor Components

O site utiliza extensivamente componentes do Elementor:
- **Sliders:** Swiper.js integrado
- **Sections:** Full-width, boxed
- **Columns:** Sistema de grid responsivo
- **Widgets:** Text, Heading, Image, Button, etc.

---

## 🌓 6. LIGHT/DARK MODE

### 6.1 Sistema de Tema

O site suporta modo claro e escuro através do atributo `data-theme`:

```html
<body data-theme="light">  <!-- ou "dark" -->
```

### 6.2 Variáveis por Tema

As variáveis CSS são redefinidas para cada tema, mantendo a mesma estrutura mas com valores diferentes para contraste e background.

### 6.3 Modo Noturno Customizado

O site possui um modo noturno customizado (`bcr-night-mode`) que força texto branco:

```css
body.bcr-night-mode * {
  color: #fff !important;
}
```

---

## 📐 7. LAYOUT E GRID

### 7.1 Container

```css
.container {
  max-width: var(--responsive--alignwide-width)
}
```

### 7.2 Breakpoints Responsivos

#### Desktop
```css
@media (min-width: 822px) {
  --responsive--alignwide-width: min(calc(100vw - 8 * var(--global--spacing-horizontal)), 1320px)
}
```

#### Tablet
```css
@media (max-width: 992px) {
  /* Ajustes para tablet */
}
```

#### Mobile
```css
@media (max-width: 552px) {
  /* Ajustes para mobile */
}
```

### 7.3 Larguras Máximas

- **Container padrão:** 810px
- **Container wide:** 1320px
- **Header:** 1320px

---

## 🎨 8. SOMBRAS E EFEITOS

### 8.1 Sombras (Shadows)

```css
--shadow-xs: 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)
--shadow-sm: 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)
--shadow-md: 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)
--shadow-lg: 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)
--shadow-xl: 0 1.5px 2.1px -6px rgba(0, 0, 0, 0.012), 0 3.6px 5.2px -6px rgba(0, 0, 0, 0.035), 0 7.3px 10.6px -6px rgba(0, 0, 0, 0.07), 0 16.2px 21.9px -6px rgba(0, 0, 0, 0.117), 0 46px 60px -6px rgba(0, 0, 0, 0.2)
```

### 8.2 Sombras Preset (WordPress)

```css
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2)
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4)
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2)
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)
--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1)
```

### 8.3 Border Radius

```css
--radius-sm: calc(var(--radius, 0.25em)/2)
--radius-md: var(--radius, 0.25em)  /* 0.25em padrão */
--radius-lg: calc(var(--radius, 0.25em)*2)
--radius-xl: calc(var(--radius, 2em)*2)
```

---

## ⚡ 9. ANIMAÇÕES E TRANSIÇÕES

### 9.1 Easing Functions

#### Ease Padrão
```css
--ease-1: cubic-bezier(.25, 0, .5, 1)
--ease-2: cubic-bezier(.25, 0, .4, 1)
--ease-3: cubic-bezier(.25, 0, .3, 1)
--ease-4: cubic-bezier(.25, 0, .2, 1)
--ease-5: cubic-bezier(.25, 0, .1, 1)
```

#### Ease In
```css
--ease-in-1: cubic-bezier(.25, 0, 1, 1)
--ease-in-2: cubic-bezier(.50, 0, 1, 1)
--ease-in-3: cubic-bezier(.70, 0, 1, 1)
--ease-in-4: cubic-bezier(.90, 0, 1, 1)
--ease-in-5: cubic-bezier(1, 0, 1, 1)
```

#### Ease Out
```css
--ease-out-1: cubic-bezier(0, 0, .75, 1)
--ease-out-2: cubic-bezier(0, 0, .50, 1)
--ease-out-3: cubic-bezier(0, 0, .3, 1)
--ease-out-4: cubic-bezier(0, 0, .1, 1)
--ease-out-5: cubic-bezier(0, 0, 0, 1)
```

#### Ease In-Out
```css
--ease-in-out-1: cubic-bezier(.1, 0, .9, 1)
--ease-in-out-2: cubic-bezier(.3, 0, .7, 1)
--ease-in-out-3: cubic-bezier(.5, 0, .5, 1)
--ease-in-out-4: cubic-bezier(.7, 0, .3, 1)
--ease-in-out-5: cubic-bezier(.9, 0, .1, 1)
```

#### Ease Especiais
```css
--ease-elastic-1: cubic-bezier(.5, .75, .75, 1.25)
--ease-squish-1: cubic-bezier(.5, -.1, .1, 1.5)
--bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275)
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## 🔧 10. CLASSES UTILITÁRIAS

### 10.1 Margens

```css
.margin-top--xxxxs até .margin-top--xxxxl
.margin-bottom--xxxxs até .margin-bottom--xxxxl
.margin-bottom--none
```

### 10.2 Alinhamento

```css
.alignleft
.aligncenter
.alignright
```

### 10.3 Classes Customizadas do Site

```css
.bcr-wrap  /* Container do footer */
.bcr-title  /* Título do footer */
.bcr-divider  /* Linha divisória */
.bcr-bottom  /* Container inferior do footer */
.bcr-social  /* Links sociais */
.bcr-rights  /* Direitos autorais */
```

---

## 📱 11. RESPONSIVIDADE

### 11.1 Estratégia

- **Mobile First:** Não (usa breakpoints max-width)
- **Fluid Typography:** Sim (clamp() no footer)
- **Flexible Grid:** Bootstrap Grid + Elementor
- **Container Queries:** Não utilizado

### 11.2 Breakpoints Principais

- **Mobile:** < 552px
- **Tablet:** 552px - 992px
- **Desktop:** > 992px
- **Large Desktop:** > 822px (container wide)

---

## 🎯 12. PADRÕES DE USO

### 12.1 Hierarquia Visual

1. **Títulos Principais:** Plus Jakarta Sans, 800 weight, clamp(28px, 3.2vw, 48px)
2. **Subtítulos:** Plus Jakarta Sans, 600-700 weight
3. **Corpo:** Inter, 400 weight, 1.25rem base
4. **Links:** Cor primária (laranja) ou branco no dark mode

### 12.2 Cores por Contexto

- **CTAs e Botões:** Cor primária (laranja) ou accent (rosa)
- **Texto Principal:** Contraste alto (preto/branco conforme tema)
- **Texto Secundário:** Contraste médio
- **Backgrounds:** Branco (light) ou #0B0F1F/#11 (dark)
- **Footer:** #0B0F1F (azul escuro fixo)

### 12.3 Espaçamentos Recomendados

- **Entre seções:** `--space-xl` ou `--space-xxl`
- **Entre elementos:** `--space-md` ou `--space-lg`
- **Padding de containers:** 24px - 56px (conforme contexto)

---

## 📊 13. RESUMO EXECUTIVO

### Pontos Fortes
✅ Sistema de cores bem estruturado com variáveis CSS  
✅ Suporte completo a Light/Dark Mode  
✅ Tipografia moderna e legível (Inter + Plus Jakarta Sans)  
✅ Espaçamentos consistentes e escaláveis  
✅ Design responsivo bem implementado  
✅ Uso de clamp() para tipografia fluida  

### Áreas de Atenção
⚠️ Múltiplas fontes (Inter, Plus Jakarta Sans, Roboto, Roboto Slab) podem causar inconsistência  
⚠️ Algumas cores hardcoded no footer (#0B0F1F) ao invés de variáveis  
⚠️ Mistura de sistemas de espaçamento (em vs px)  
⚠️ Dependência forte do Elementor pode limitar customizações  

### Recomendações
1. Consolidar para 2 fontes principais (Inter + Plus Jakarta Sans)
2. Migrar cores hardcoded para variáveis CSS
3. Padronizar sistema de espaçamento (preferir rem/em)
4. Documentar componentes customizados do Elementor
5. Criar guia de estilo para desenvolvedores

---

## 📎 14. REFERÊNCIAS TÉCNICAS

### Arquivos CSS Principais
- `/wp-content/themes/most/assets/css/main.css` (Tema principal)
- `/wp-content/uploads/elementor/css/post-*.css` (Estilos do Elementor)
- Inline styles no `<head>` (Customizações específicas)

### Fontes
- Inter: Localmente hospedada em `/wp-content/fonts/inter/`
- Plus Jakarta Sans: Google Fonts CDN
- Roboto/Roboto Slab: Google Fonts (via Elementor)

### Plugins Relevantes
- **Elementor:** Page builder principal
- **Contact Form 7:** Formulários
- **Cookie Notice:** Aviso de cookies
- **Yoast SEO:** SEO

---

**Documento gerado automaticamente através de análise do código-fonte do site.**
