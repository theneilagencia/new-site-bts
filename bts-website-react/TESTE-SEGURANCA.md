# 🧪 ROTEIRO DE TESTES - SEGURANÇA E PERSISTÊNCIA

## ✅ O QUE FOI IMPLEMENTADO

1. ✅ **Usuários salvam permanentemente** (localStorage)
2. ✅ **Logout automático ao fechar navegador** (sessionStorage)
3. ✅ **Sessão expira em 4 horas**
4. ✅ **Validação de segurança aprimorada**

---

## 🔄 LIMPAR CACHE ANTES DE TESTAR

```bash
# IMPORTANTE: Faça isso PRIMEIRO

1. Abra https://new-site-bts.vercel.app/
2. Pressione: Ctrl+Shift+Delete (Windows/Linux)
   Ou: Cmd+Shift+Delete (Mac)
3. Selecione:
   ✅ Imagens e arquivos em cache
   ✅ Cookies e outros dados do site
4. Clique "Limpar dados"
5. Feche COMPLETAMENTE o navegador
6. Abra novamente
```

---

## 🧪 TESTE 1: CRIAR USUÁRIO E SALVAR

### Objetivo: Verificar se usuários persistem

```bash
1️⃣ Acesse: https://new-site-bts.vercel.app/
2️⃣ Clique "Área do Parceiro"
3️⃣ Login: admin@btsglobalcorp.com / BtS@13112025

4️⃣ Menu: Usuários
5️⃣ Clique "+ Novo Usuário"

6️⃣ Preencha:
   Nome: João Teste Silva
   Email: joao.teste@btsglobalcorp.com
   Senha: teste@123
   Perfil: partner

7️⃣ Clique "Salvar"
8️⃣ ✅ DEVE aparecer toast verde:
   "✅ Usuário criado e salvo com sucesso!"

9️⃣ ✅ Usuário DEVE aparecer na lista

🔟 Pressione F5 (recarregar página)
1️⃣1️⃣ ✅ Usuário DEVE continuar na lista

1️⃣2️⃣ Abra Console (F12) e digite:
   console.log(JSON.parse(localStorage.getItem('bts-all-users')));

1️⃣3️⃣ ✅ DEVE mostrar array com 2 usuários:
   - admin@btsglobalcorp.com
   - joao.teste@btsglobalcorp.com
```

### ✅ Resultado Esperado:
- Toast de sucesso aparece
- Usuário aparece na lista
- Após F5, usuário permanece
- localStorage contém o usuário

### ❌ Se NÃO funcionar:
```bash
# Envie no chat:
"TESTE 1 FALHOU
Mensagem que apareceu: [descrever]
Console.log: [copiar o resultado]"
```

---

## 🧪 TESTE 2: FAZER LOGIN COM USUÁRIO CRIADO

### Objetivo: Verificar se login funciona com novo usuário

```bash
1️⃣ Clique no botão de Logout (canto superior direito)
2️⃣ ✅ DEVE voltar para tela de login

3️⃣ Digite:
   Email: joao.teste@btsglobalcorp.com
   Senha: teste@123

4️⃣ Clique "Entrar"

5️⃣ ✅ DEVE entrar no portal
6️⃣ ✅ DEVE mostrar nome "João Teste Silva" no header
7️⃣ ✅ DEVE ter perfil "partner" (sem menu Usuários)
```

### ✅ Resultado Esperado:
- Login bem-sucedido
- Nome correto no header
- Permissões de partner (sem admin)

### ❌ Se NÃO funcionar:
```bash
# Envie no chat:
"TESTE 2 FALHOU
Erro ao logar: [descrever]
O que aconteceu: [descrever]"
```

---

## 🧪 TESTE 3: LOGOUT AUTOMÁTICO AO FECHAR

### Objetivo: Verificar logout automático

```bash
1️⃣ Faça login: admin@btsglobalcorp.com / BtS@13112025
2️⃣ ✅ Entre no portal
3️⃣ ✅ Veja o Dashboard

4️⃣ FECHE O NAVEGADOR COMPLETAMENTE
   - Windows: Clique no X
   - Mac: Cmd+Q
   - Não use apenas fechar aba!

5️⃣ Aguarde 5 segundos

6️⃣ ABRA O NAVEGADOR NOVAMENTE

7️⃣ Acesse: https://new-site-bts.vercel.app/

8️⃣ Clique "Área do Parceiro"

9️⃣ ✅ DEVE mostrar tela de LOGIN
   (NÃO deve entrar automaticamente)
```

### ✅ Resultado Esperado:
- Fechou navegador → Ao reabrir: tela de login
- NÃO entra automaticamente
- Precisa digitar email/senha novamente

### 📝 Teste Alternativo (mesma aba):
```bash
1️⃣ Faça login
2️⃣ Pressione F5 (recarregar)
3️⃣ ✅ DEVE manter login (não fazer logout)
```

**Resumo:**
- ✅ F5 (reload): MANTÉM login
- ✅ Fechar navegador: FAZ logout

### ❌ Se NÃO funcionar:
```bash
# Envie no chat:
"TESTE 3 FALHOU
Após fechar e abrir navegador:
[ ] Entrou automaticamente (errado)
[ ] Pediu login (correto)
O que aconteceu: [descrever]"
```

---

## 🧪 TESTE 4: RESETAR SENHA

### Objetivo: Verificar reset de senha

```bash
1️⃣ Login como admin: admin@btsglobalcorp.com / BtS@13112025
2️⃣ Menu: Usuários
3️⃣ Encontre: joao.teste@btsglobalcorp.com
4️⃣ Clique no ícone de CHAVE 🔑 (ao lado do usuário)

5️⃣ Digite nova senha: novaSenha@456
6️⃣ Clique "Resetar Senha"

7️⃣ ✅ DEVE aparecer toast:
   "✅ Senha resetada e salva!"

8️⃣ Faça logout

9️⃣ Tente logar com SENHA ANTIGA:
   Email: joao.teste@btsglobalcorp.com
   Senha: teste@123

🔟 ❌ DEVE FALHAR (senha antiga inválida)

1️⃣1️⃣ Tente logar com SENHA NOVA:
   Email: joao.teste@btsglobalcorp.com
   Senha: novaSenha@456

1️⃣2️⃣ ✅ DEVE FUNCIONAR
```

### ✅ Resultado Esperado:
- Toast de confirmação
- Senha antiga NÃO funciona
- Senha nova funciona

### ❌ Se NÃO funcionar:
```bash
# Envie no chat:
"TESTE 4 FALHOU
Toast apareceu? [sim/não]
Senha antiga ainda funciona? [sim/não]
Senha nova funciona? [sim/não]"
```

---

## 🧪 TESTE 5: ESQUECI MINHA SENHA

### Objetivo: Verificar modal de recuperação

```bash
1️⃣ Acesse tela de login
2️⃣ Clique "Esqueci minha senha" (azul, abaixo do campo senha)

3️⃣ ✅ DEVE ABRIR modal

4️⃣ Digite email: joao.teste@btsglobalcorp.com
5️⃣ Clique "Enviar Link"

6️⃣ ✅ DEVE aparecer mensagem verde:
   "✅ Link enviado com sucesso!"

7️⃣ Abra Console (F12)
8️⃣ ✅ DEVE ter log:
   "Password reset requested for: joao.teste@btsglobalcorp.com"

9️⃣ Modal fecha automaticamente após 3 segundos
```

### ✅ Resultado Esperado:
- Modal abre
- Formulário funcional
- Mensagem de sucesso
- Log no console
- Modal fecha sozinho

### ⚠️ NOTA IMPORTANTE:
```
📧 Email NÃO é enviado ainda (backend pendente)
✅ Interface funcional (frontend pronto)
⏳ Backend será implementado com Vercel Postgres
```

### ❌ Se NÃO funcionar:
```bash
# Envie no chat:
"TESTE 5 FALHOU
Modal abre? [sim/não]
Mensagem aparece? [sim/não]
Screenshot anexo: [enviar print]"
```

---

## 🧪 TESTE 6: VALIDAÇÕES DE SEGURANÇA

### Objetivo: Verificar validações

#### Teste 6A: Email duplicado
```bash
1️⃣ Login como admin
2️⃣ Usuários → + Novo Usuário
3️⃣ Tente criar com email existente:
   Email: admin@btsglobalcorp.com
4️⃣ ❌ DEVE aparecer erro:
   "E-mail já cadastrado!"
```

#### Teste 6B: Senha curta
```bash
1️⃣ Tente criar usuário com:
   Senha: 123
2️⃣ ❌ DEVE aparecer erro:
   "Senha deve ter no mínimo 6 caracteres!"
```

#### Teste 6C: Email inválido
```bash
1️⃣ Tente criar usuário com:
   Email: teste (sem @)
2️⃣ ❌ DEVE aparecer erro:
   "E-mail inválido!"
```

#### Teste 6D: Usuário inativo
```bash
1️⃣ Crie usuário: teste.inativo@test.com
2️⃣ Edite usuário, mude status para: Inativo
3️⃣ Faça logout
4️⃣ Tente logar com: teste.inativo@test.com
5️⃣ ❌ DEVE FALHAR (usuário inativo não pode logar)
```

### ✅ Resultado Esperado:
- Todas as validações funcionam
- Mensagens de erro aparecem
- Sistema impede operações inválidas

---

## 🧪 TESTE 7: SESSÃO EXPIRA (4 HORAS)

### Objetivo: Simular expiração de sessão

```bash
1️⃣ Faça login no sistema
2️⃣ Pressione F12 (abrir Console)
3️⃣ Cole este código:
   sessionStorage.setItem('bts-session-expiry', Date.now() - 1000);

4️⃣ Aguarde 35 segundos
   (sistema valida a cada 30s)

5️⃣ ✅ DEVE fazer logout automático
6️⃣ ✅ DEVE aparecer console:
   "⚠️ Sessão expirada!"
```

### ✅ Resultado Esperado:
- Após ~35s: logout automático
- Console mostra "Sessão expirada!"
- Redireciona para login

---

## 📊 DEBUG: INSPECIONAR DADOS

### Ver usuários salvos:

```javascript
// Abra Console (F12) e cole:

// 1. Ver todos os usuários:
console.table(JSON.parse(localStorage.getItem('bts-all-users')));

// 2. Ver sessão atual:
console.log('Usuário logado:', JSON.parse(sessionStorage.getItem('bts-user')));

// 3. Ver expiração:
const expiry = sessionStorage.getItem('bts-session-expiry');
console.log('Sessão expira em:', new Date(parseInt(expiry)));

// 4. Tempo restante:
const now = Date.now();
const exp = parseInt(sessionStorage.getItem('bts-session-expiry'));
const minutosRestantes = Math.floor((exp - now) / 60000);
console.log(`⏱️ Tempo restante: ${minutosRestantes} minutos`);
```

### Limpar tudo (reset completo):

```javascript
// Console (F12):
localStorage.removeItem('bts-all-users');
sessionStorage.clear();
alert('✅ Dados limpos! Recarregando...');
location.reload();
```

---

## 📝 CHECKLIST COMPLETO

Marque conforme testa:

```
□ Teste 1: Criar usuário e salvar
  □ Toast aparece
  □ Usuário na lista
  □ Persiste após F5
  □ Aparece no localStorage

□ Teste 2: Login com novo usuário
  □ Login bem-sucedido
  □ Nome correto no header
  □ Permissões corretas

□ Teste 3: Logout automático
  □ F5: mantém login
  □ Fechar navegador: faz logout
  □ Reabrir: pede login

□ Teste 4: Resetar senha
  □ Toast de confirmação
  □ Senha antiga inválida
  □ Senha nova funciona

□ Teste 5: Esqueci senha
  □ Modal abre
  □ Mensagem de sucesso
  □ Log no console

□ Teste 6: Validações
  □ Email duplicado: bloqueado
  □ Senha curta: bloqueado
  □ Email inválido: bloqueado
  □ Usuário inativo: não loga

□ Teste 7: Expiração (simulada)
  □ Logout automático após 35s
  □ Console mostra aviso
```

---

## ❌ SE ENCONTRAR PROBLEMAS

### Envie no chat:

```
🐛 RELATÓRIO DE ERRO

TESTE QUE FALHOU: [número]

O QUE ACONTECEU:
[descrever passo a passo]

RESULTADO ESPERADO:
[o que deveria acontecer]

RESULTADO OBTIDO:
[o que aconteceu de fato]

CONSOLE (F12):
[copiar erros do console]

SCREENSHOT:
[anexar se possível]

DADOS DO SISTEMA:
Navegador: [Chrome/Firefox/Safari]
Versão: [número]
Sistema: [Windows/Mac/Linux]

DADOS DE DEBUG:
// Cole o resultado de:
console.log(JSON.parse(localStorage.getItem('bts-all-users')));
console.log(JSON.parse(sessionStorage.getItem('bts-user')));
```

---

## ✅ SE TUDO FUNCIONAR

### Envie no chat:

```
✅ TODOS OS TESTES PASSARAM!

□ Usuários salvam: OK
□ Logout automático: OK
□ Login funciona: OK
□ Resetar senha: OK
□ Validações: OK

Sistema pronto para uso! 🎉
```

---

## 📚 DOCUMENTAÇÃO RELACIONADA

- `SEGURANCA-IMPLEMENTADA.md` - Detalhes técnicos
- `USUARIO-ADMIN-GUIA.md` - Guia do administrador
- `AGENTIC-COMMERCE-INTEGRATION.md` - Integração OpenAI
- `SETUP-OPENAI-KEY.md` - Configurar API Key

---

**🎯 Objetivo:** Validar que todas as funcionalidades estão operacionais

**⏱️ Tempo estimado:** 15-20 minutos

**🔄 Última atualização:** Deploy commit `4dc9451`
