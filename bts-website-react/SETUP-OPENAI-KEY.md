# 🔑 CONFIGURAR API KEY DA OPENAI - GUIA RÁPIDO

## ⚡ ATIVAÇÃO EM 3 PASSOS

### PASSO 1: OBTER API KEY (5 minutos)

#### 1.1 Criar conta OpenAI
```
🔗 Acesse: https://platform.openai.com/signup
```

- Clique em "Sign up"
- Use seu email ou conta Google
- Confirme email se necessário
- Complete o cadastro

#### 1.2 Gerar API Key
```
🔗 Acesse: https://platform.openai.com/api-keys
```

1. Clique em **"+ Create new secret key"**
2. Nome: `BTS-Production`
3. Permissões: Deixe padrão (All)
4. **COPIE A CHAVE AGORA!** (começa com `sk-...`)
5. ⚠️ **IMPORTANTE:** Guarde em lugar seguro - não será mostrada novamente

**Exemplo de chave:**
```
sk-proj-abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGH
```

#### 1.3 Configurar Billing (OBRIGATÓRIO)
```
🔗 Acesse: https://platform.openai.com/account/billing/overview
```

1. Clique em **"Add payment method"**
2. Adicione cartão de crédito
3. Configure limite de gasto:
   - Recomendado: **$50 USD/mês** (para começar)
   - Ajuste depois conforme uso real

**💰 Custos estimados:**
- 1 conversa = ~$0.05 USD
- 100 conversas/mês = ~$5 USD
- 1000 conversas/mês = ~$50 USD

---

### PASSO 2: CONFIGURAR NO VERCEL (2 minutos)

#### Opção A: Via Dashboard (MAIS FÁCIL) ✅

1. **Acesse Vercel Dashboard:**
   ```
   🔗 https://vercel.com/theneilagencia/bts-website-react/settings/environment-variables
   ```

2. **Adicionar variável:**
   - Clique em **"Add New"** ou **"Edit"**
   - **Key:** `OPENAI_API_KEY`
   - **Value:** Cole sua chave (sk-...)
   - **Environment:** Selecione `Production`, `Preview`, `Development` (todos)
   - Clique em **"Save"**

3. **Fazer Redeploy:**
   - Vá em: https://vercel.com/theneilagencia/bts-website-react
   - Aba **"Deployments"**
   - Clique nos 3 pontinhos do último deploy
   - Clique em **"Redeploy"**
   - ✅ Aguarde ~2-3 minutos

#### Opção B: Via Terminal (AVANÇADO)

```bash
# 1. Fazer login no Vercel
vercel login

# 2. Entrar no diretório do projeto
cd /workspace/bts-website-react

# 3. Adicionar variável de ambiente
vercel env add OPENAI_API_KEY

# Quando perguntar:
# - Environment: production (digite 'production' e Enter)
# - Value: Cole sua chave sk-... e Enter

# 4. Adicionar para development também
vercel env add OPENAI_API_KEY

# Quando perguntar:
# - Environment: development (digite 'development' e Enter)
# - Value: Cole sua chave sk-... e Enter

# 5. Fazer redeploy
vercel --prod
```

---

### PASSO 3: TESTAR (1 minuto)

#### 3.1 Aguardar deploy
- ⏱️ Aguarde 2-3 minutos após o redeploy
- Vercel irá detectar a nova variável de ambiente

#### 3.2 Testar no site
```
🔗 Abra: https://new-site-bts.vercel.app/
```

1. **Procure o botão azul** no canto inferior direito
2. **Clique no ícone de chat** (💬)
3. **Digite uma mensagem teste:**
   ```
   Olá! Quais soluções vocês oferecem?
   ```

4. **✅ FUNCIONOU se você ver:**
   - Chat abre com "BTS Assistant"
   - Loading spinner ("Pensando...")
   - Resposta inteligente sobre Digital Offshore, Digital Foundation, BTS BlockTrust

5. **❌ NÃO FUNCIONOU se você ver:**
   - Erro "OpenAI API not configured"
   - Erro "Chat failed"
   - **Solução:** Verifique se a API Key foi salva corretamente no Vercel

---

## 🔧 TROUBLESHOOTING

### Erro: "OpenAI API not configured"

**Causa:** API Key não foi configurada ou está incorreta

**Solução:**
1. Verifique no Vercel Dashboard:
   ```
   https://vercel.com/theneilagencia/bts-website-react/settings/environment-variables
   ```
2. Confirme que `OPENAI_API_KEY` existe
3. Verifique se a chave está correta (começa com `sk-`)
4. Faça redeploy novamente

### Erro: "Incorrect API key provided"

**Causa:** Chave OpenAI inválida ou expirada

**Solução:**
1. Gere nova chave em: https://platform.openai.com/api-keys
2. Atualize no Vercel
3. Redeploy

### Erro: "You exceeded your current quota"

**Causa:** Limite de billing ou créditos esgotados

**Solução:**
1. Adicione créditos em: https://platform.openai.com/account/billing
2. Ou adicione método de pagamento

### Chat não aparece no site

**Causa:** Cache do navegador

**Solução:**
1. Faça Hard Refresh:
   - **Windows/Linux:** Ctrl + Shift + R
   - **Mac:** Cmd + Shift + R
2. Ou limpe cache do navegador

---

## ✅ VERIFICAÇÃO FINAL

Após configurar, você deve conseguir:

- [x] Ver botão de chat no site
- [x] Abrir interface do chat
- [x] Enviar mensagens
- [x] Receber respostas inteligentes
- [x] Conversa é persistida (mensagens anteriores aparecem)
- [x] AI responde em português quando você escreve em português
- [x] AI responde em inglês quando você escreve em inglês

---

## 📊 MONITORAR CUSTOS

### Ver uso da API
```
🔗 https://platform.openai.com/usage
```

Monitore:
- Total de requests
- Tokens usados
- Custo acumulado

### Configurar alertas
```
🔗 https://platform.openai.com/account/billing/limits
```

Configure:
- Email alert quando atingir % do limite
- Hard limit para evitar surpresas

---

## 🎯 RESUMO RÁPIDO

```bash
1. Criar conta OpenAI → https://platform.openai.com/signup
2. Gerar API Key → https://platform.openai.com/api-keys
3. Adicionar billing → https://platform.openai.com/account/billing
4. Configurar no Vercel → Adicionar OPENAI_API_KEY
5. Redeploy → https://vercel.com (Deployments → Redeploy)
6. Testar → https://new-site-bts.vercel.app/
```

**⏱️ Tempo total: ~10 minutos**

---

## 📞 PRECISA DE AJUDA?

Se encontrar problemas:

1. **Verifique os logs do Vercel:**
   ```
   https://vercel.com/theneilagencia/bts-website-react/deployments
   ```
   - Clique no último deployment
   - Vá em "Functions"
   - Procure erros nas chamadas `/api/agentic/chat`

2. **Teste a API Key manualmente:**
   ```bash
   curl https://api.openai.com/v1/chat/completions \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer sk-sua-chave-aqui" \
     -d '{
       "model": "gpt-4-turbo-preview",
       "messages": [{"role": "user", "content": "Hello"}]
     }'
   ```

3. **Verifique status OpenAI:**
   ```
   🔗 https://status.openai.com/
   ```

---

**🚀 Depois de configurar, o chat estará 100% funcional no site!**
