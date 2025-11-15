# 🔍 DIAGNÓSTICO DE PROBLEMAS - CHECKLIST COMPLETO

## ⚠️ SINTOMAS REPORTADOS

1. ❌ Não consegue criar usuários
2. ❌ "Esqueci minha senha" não funciona

---

## 🧪 TESTE 1: VERIFICAR CACHE DO NAVEGADOR

### Sintoma: Site não atualizou com as correções

**SOLUÇÃO OBRIGATÓRIA:**

1. **Limpar TODO o cache:**
   - **Chrome:** Ctrl + Shift + Delete (Windows/Linux) ou Cmd + Shift + Delete (Mac)
   - Selecione "Todo o período"
   - Marque: Cookies, Cache, Dados de sites
   - Clique "Limpar dados"

2. **Hard Refresh (MUITO IMPORTANTE):**
   - **Windows/Linux:** Ctrl + Shift + R (segure os 3 ao mesmo tempo)
   - **Mac:** Cmd + Shift + R
   - Repita 2-3 vezes se necessário

3. **Ou use aba anônima:**
   - **Chrome:** Ctrl + Shift + N
   - **Firefox:** Ctrl + Shift + P
   - Teste nela primeiro

---

## 🧪 TESTE 2: VERIFICAR SE ESTÁ LOGADO CORRETAMENTE

### Problema: Não está como admin

**VERIFICAR:**

1. **Faça login com:**
   ```
   Email: admin@btsglobalcorp.com
   Senha: BtS@13112025
   ```

2. **Certifique-se que:**
   - Email está EXATAMENTE como acima
   - Senha está EXATAMENTE como acima (case-sensitive!)
   - "B" é maiúsculo
   - "t" é minúsculo  
   - "S" é maiúsculo
   - "@" é arroba
   - Números: 13112025

3. **Após login, verifique:**
   - Menu lateral mostra: Dashboard, Propostas, Usuários, Configurações
   - Se não mostrar "Usuários", você NÃO está como admin

---

## 🧪 TESTE 3: CONSOLE DO NAVEGADOR

### Verificar erros JavaScript

**PASSO A PASSO:**

1. **Abra o Console:**
   - Pressione **F12**
   - Ou clique direito → Inspecionar
   - Vá na aba **Console**

2. **Limpe o console:**
   - Clique no ícone 🚫 (clear console)

3. **Tente criar usuário novamente**

4. **Procure por erros em vermelho:**
   ```
   ❌ Uncaught TypeError...
   ❌ Failed to fetch...
   ❌ ReferenceError...
   ```

5. **TIRE UM PRINT** de qualquer erro vermelho

6. **Me envie o print!**

---

## 🧪 TESTE 4: CRIAR USUÁRIO - DETALHADO

### Verificar cada passo

**PASSO 1: Acessar área de usuários**

```
1. Login: admin@btsglobalcorp.com / BtS@13112025
2. Menu lateral → Clique em "Usuários"
3. Você deve ver: Lista de usuários existentes
```

**PERGUNTA:** Você vê a lista de usuários? (SIM/NÃO)

---

**PASSO 2: Abrir formulário**

```
1. Procure botão "+ Novo Usuário" (canto superior direito)
2. Clique nele
3. Um modal deve abrir
```

**PERGUNTA:** O modal abre? (SIM/NÃO)

---

**PASSO 3: Preencher formulário**

```
1. Nome: Digite "Teste Silva"
2. E-mail: Digite "teste@example.com"
3. Senha: Digite "teste123"
4. Perfil: Selecione "partner"
```

**PERGUNTA:** Consegue preencher todos os campos? (SIM/NÃO)

---

**PASSO 4: Salvar**

```
1. Clique no botão "Salvar" (azul, no final do modal)
2. Aguarde uns 2 segundos
```

**O QUE ACONTECE?**

- [ ] A. Nada acontece (botão não responde)
- [ ] B. Modal fecha mas usuário não aparece na lista
- [ ] C. Aparece mensagem de erro vermelha
- [ ] D. Aparece mensagem de sucesso verde
- [ ] E. Página recarrega
- [ ] F. Outro: _______________

**Se C (erro), qual a mensagem?** _______________

---

## 🧪 TESTE 5: ESQUECI MINHA SENHA - DETALHADO

### Verificar modal de recuperação

**PASSO 1: Logout**

```
1. Se estiver logado, faça logout
2. Volte para tela de login
```

---

**PASSO 2: Botão "Esqueci minha senha"**

```
1. Na tela de login, procure o texto "Esqueci minha senha"
2. Ele fica abaixo do campo de senha
3. Cor azul (#1F4AFF)
```

**PERGUNTA:** Você vê o botão? (SIM/NÃO)

---

**PASSO 3: Clicar no botão**

```
1. Clique em "Esqueci minha senha"
2. Um modal deve abrir
```

**O QUE ACONTECE?**

- [ ] A. Nada acontece
- [ ] B. Modal abre (fundo escuro com formulário)
- [ ] C. Página recarrega
- [ ] D. Erro no console

**Se A (nada), abra Console (F12) e tire print**

---

**PASSO 4: Preencher email**

```
1. No modal, digite: teste@example.com
2. Clique em "Enviar"
```

**O QUE ACONTECE?**

- [ ] A. Nada acontece
- [ ] B. Modal mostra ícone verde de sucesso
- [ ] C. Modal mostra erro
- [ ] D. Modal fecha imediatamente

---

## 🧪 TESTE 6: VERIFICAR VERSÃO DO SITE

### Confirmar que está na versão mais recente

**OPÇÃO 1: Via Console**

```javascript
// Abra Console (F12) e cole isto:
console.log('Build hash:', document.querySelector('script[src*="index-"]')?.src);
```

**Resultado esperado:** Deve mostrar `index-BvQnSPtT.js`

---

**OPÇÃO 2: Via Network**

```
1. Abra DevTools (F12)
2. Aba "Network" ou "Rede"
3. Recarregue a página (F5)
4. Procure por arquivo "index-*.js"
5. Verifique o nome do arquivo
```

**Nome esperado:** `index-BvQnSPtT.js`

**Se for diferente:** Cache não foi limpo!

---

## 🧪 TESTE 7: TESTE EM OUTRO NAVEGADOR

### Descartar problema de browser

**TESTE EM:**

1. **Chrome** (se estava no Firefox)
2. **Firefox** (se estava no Chrome)
3. **Edge**
4. **Safari** (Mac)

**Modo anônimo obrigatório!**

---

## 📊 RELATÓRIO PARA MIM

Por favor, me envie:

### 1. Informações Básicas

```
Sistema Operacional: _______________
Navegador: _______________
Versão: _______________
```

### 2. Teste de Login

```
Conseguiu fazer login? (SIM/NÃO)
Email usado: _______________
Menu mostra "Usuários"? (SIM/NÃO)
```

### 3. Teste de Criar Usuário

```
Botão "+ Novo Usuário" existe? (SIM/NÃO)
Modal abre? (SIM/NÃO)
Consegue preencher campos? (SIM/NÃO)
O que acontece ao clicar "Salvar"? _______________
Mensagem de erro (se houver): _______________
```

### 4. Teste de Esqueci Senha

```
Botão "Esqueci minha senha" existe? (SIM/NÃO)
Botão funciona ao clicar? (SIM/NÃO)
Modal abre? (SIM/NÃO)
O que acontece ao enviar email? _______________
```

### 5. Console do Navegador

```
Há erros em vermelho? (SIM/NÃO)
Se SIM, cole aqui os erros:
_______________
_______________
_______________
```

### 6. Print de Tela

**TIRE PRINTS DE:**
- [ ] Tela de login
- [ ] Área de usuários (menu + lista)
- [ ] Modal de criar usuário (se abrir)
- [ ] Console com erros (F12)
- [ ] Network tab mostrando arquivos .js

---

## 🔧 SOLUÇÕES RÁPIDAS

### Se nada funcionar:

1. **Limpar TUDO:**
   ```
   1. Feche TODAS as abas do site
   2. Ctrl + Shift + Delete (limpar cache)
   3. Feche o navegador completamente
   4. Abra novamente
   5. Acesse o site em aba anônima
   ```

2. **Teste este link direto:**
   ```
   https://new-site-bts.vercel.app/?v=2024
   ```

3. **Force reload sem cache:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Marque "Cached images and files"
   - Period: "All time"
   - Clear data

4. **Disable extensions:**
   - Abra aba anônima (desabilita extensões)
   - Teste lá primeiro

---

## ✅ CONFIRMAÇÃO DE SUCESSO

Quando tudo funcionar, você verá:

### Criar Usuário:
✅ Toast verde: "Usuário criado com sucesso!"
✅ Nome e email do usuário aparecem
✅ Usuário aparece na lista imediatamente

### Esqueci Senha:
✅ Modal abre com formulário
✅ Após enviar: ícone verde de sucesso
✅ Mensagem: "E-mail Enviado!"
✅ Nota: "Funcionalidade em desenvolvimento"

---

**🆘 Se após tudo isso não funcionar, me envie o relatório acima!**
