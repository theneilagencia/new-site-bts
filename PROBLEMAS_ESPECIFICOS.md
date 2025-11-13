# 🔍 ANÁLISE DOS 3 PROBLEMAS REPORTADOS

## ✅ 1. DARK MODE - JÁ IMPLEMENTADO!

**Status**: O dark mode toggle **JÁ ESTÁ** no Header!

**Localização**: Linha 96-113 do Header.tsx
```tsx
{/* Theme Toggle */}
<motion.button
  onClick={toggleTheme}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {theme === 'dark' ? (
    <Moon className="h-4 w-4 text-[var(--accent-primary)]" />
  ) : (
    <Sun className="h-4 w-4 text-[var(--accent-primary)]" />
  )}
</motion.button>
```

**Como usar**: 
- Procure o ícone de Sol/Lua no header
- Clique para alternar entre claro/escuro

---

## 🔍 2. HERO SECTION - CÓDIGO IDÊNTICO AO FIGMA

**Comparação**: Hero do Figma e Hero atual são **100% IDÊNTICOS**

**Possíveis problemas**:
1. ❓ Tamanho da fonte do h1 pode parecer diferente
2. ❓ Espaçamento pode estar diferente
3. ❓ Background gradiente pode variar

**Ação**: Preciso de **exemplos específicos** do que está diferente:
- Tamanho do título?
- Posição dos botões?
- Cores?
- Espaçamento?

---

## 🔍 3. BOTÃO CTA DO HEADER

**Texto atual**: `t.nav.startStructuring`

**Tradução PT**: "Criar Estrutura"  
**Tradução EN**: "Create Structure"

**Possíveis problemas**:
1. ❓ Texto está errado?
2. ❓ Deveria ser "Acessar Portal"?
3. ❓ Deveria ser outro texto?

**Qual é o texto correto que deveria aparecer?**

---

## 🎯 AÇÕES NECESSÁRIAS:

Para corrigir, preciso saber:

1. **Dark Mode**: Onde ele deveria aparecer se não está visível?
2. **Hero Section**: Quais elementos específicos estão errados?
3. **Botão CTA**: Qual o texto correto que deveria ter?

