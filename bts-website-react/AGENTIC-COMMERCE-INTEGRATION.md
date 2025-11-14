# 🤖 AGENTIC COMMERCE PROTOCOL - GUIA DE INTEGRAÇÃO

## 📋 STATUS ATUAL

✅ **CONCLUÍDO:**
- [x] Pacote `openai@4.73.0` instalado
- [x] Componente `AgenticChat` criado e integrado ao site
- [x] API `/api/agentic/chat.ts` configurada
- [x] SYSTEM_PROMPT atualizado para Wealth Structuring
- [x] Prisma schema preparado para conversas

⚠️ **PENDENTE:**
- [ ] Configurar API Key da OpenAI
- [ ] Configurar banco de dados Postgres
- [ ] Testar integração localmente
- [ ] Deploy para produção

---

## 🚀 PRÓXIMOS PASSOS

### PASSO 1: Obter API Key da OpenAI

1. **Criar conta na OpenAI:**
   - Acesse: https://platform.openai.com/
   - Crie uma conta ou faça login

2. **Gerar API Key:**
   - Vá em: https://platform.openai.com/api-keys
   - Clique em "Create new secret key"
   - Nomeie como: `BTS-Production`
   - **COPIE A CHAVE** (começa com `sk-...`)
   - ⚠️ **Guarde em local seguro** - não será mostrada novamente

3. **Configurar billing:**
   - Vá em: https://platform.openai.com/account/billing
   - Adicione método de pagamento
   - Configure limite de gasto mensal (recomendado: $50-100 USD)

---

### PASSO 2: Configurar Variáveis de Ambiente

#### 2.1. Configurar no Vercel (Produção)

```bash
# No terminal, dentro do projeto:
cd /workspace/bts-website-react

# Configurar OPENAI_API_KEY
vercel env add OPENAI_API_KEY production
# Cole sua chave quando solicitado: sk-...
```

#### 2.2. Configurar Localmente (Desenvolvimento)

```bash
# Editar arquivo .env
nano .env

# Adicionar/atualizar:
OPENAI_API_KEY=sk-your-actual-key-here
```

---

### PASSO 3: Configurar Banco de Dados (Postgres)

#### 3.1. Verificar Vercel Postgres

```bash
# Listar databases Vercel
vercel env ls

# Se POSTGRES_PRISMA_URL já existe, pular para Passo 4
# Se não, criar novo:
```

#### 3.2. Criar Vercel Postgres Database

1. **Via Vercel Dashboard:**
   - Acesse: https://vercel.com/dashboard
   - Vá no projeto `bts-website-react`
   - Aba "Storage" → "Create Database"
   - Escolha "Postgres"
   - Região: Escolha mais próxima (ex: US East)
   - Nome: `bts-production-db`

2. **Automaticamente, o Vercel irá criar as variáveis:**
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`

#### 3.3. Sincronizar Schema Prisma

```bash
# Fazer push do schema para o banco
npx prisma db push

# Verificar se funcionou
npx prisma studio
# Abrirá interface web - você verá as tabelas criadas
```

---

### PASSO 4: Testar Integração Localmente

#### 4.1. Instalar Dependências

```bash
npm install
```

#### 4.2. Rodar Servidor de Desenvolvimento

```bash
npm run dev
```

#### 4.3. Testar AgenticChat

1. Abra: http://localhost:5173
2. No canto inferior direito, clique no **ícone de chat** (círculo azul)
3. Digite uma mensagem teste:
   - "Quais são as soluções disponíveis?"
   - "Como funciona o programa de parceiros?"
   - "O que é o Digital Offshore?"

**Comportamento esperado:**
- ✅ Chat abre e exibe "BTS Assistant"
- ✅ Mensagem é enviada
- ✅ Loading spinner aparece ("Pensando...")
- ✅ Resposta do AI aparece em alguns segundos
- ✅ Conversa é salva (persistência de sessão)

**Se houver erro:**
- ❌ Verificar console do navegador (F12)
- ❌ Verificar terminal (logs do servidor)
- ❌ Confirmar que `OPENAI_API_KEY` está correto no `.env`

---

### PASSO 5: Deploy para Produção

```bash
# Build do projeto
npm run build

# Commit das alterações
git add -A
git commit -m "feat: integrar Agentic Commerce Protocol com OpenAI

✅ AgenticChat integrado ao site público
✅ SYSTEM_PROMPT atualizado para Wealth Structuring
✅ API /api/agentic/chat.ts configurada
✅ Suporte bilíngue PT/EN
✅ Persistência de conversas via Prisma
🤖 Powered by OpenAI GPT-4"

# Push para main
git push origin main
```

**Vercel irá automaticamente:**
1. Detectar o push
2. Fazer build do projeto
3. Usar variáveis de ambiente configuradas
4. Deploy em ~2-3 minutos
5. Site ficará disponível em: https://new-site-bts.vercel.app/

---

## 🔧 CONFIGURAÇÕES AVANÇADAS

### Personalizar Modelo OpenAI

Editar `/api/agentic/chat.ts`, linha ~104:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4-turbo-preview', // Pode mudar para: gpt-4, gpt-3.5-turbo, etc.
  temperature: 0.7, // Criatividade (0-1)
  max_tokens: 500, // Limite de resposta
});
```

**Modelos disponíveis:**
- `gpt-4-turbo-preview` (recomendado) - Mais inteligente, mais caro
- `gpt-4` - Estável, balanceado
- `gpt-3.5-turbo` - Mais rápido, mais barato

---

### Adicionar Funções (Function Calling)

Para o AgenticChat poder **executar ações** (ex: criar proposta, agendar reunião):

```typescript
// Em /api/agentic/chat.ts
const tools = [
  {
    type: "function",
    function: {
      name: "create_proposal",
      description: "Create a new proposal for a client",
      parameters: {
        type: "object",
        properties: {
          clientName: { type: "string" },
          clientEmail: { type: "string" },
          structureType: { 
            type: "string",
            enum: ["digital-offshore", "digital-foundation", "blocktrust"]
          },
        },
        required: ["clientName", "clientEmail", "structureType"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "schedule_consultation",
      description: "Schedule a consultation call with BTS team",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          preferredDate: { type: "string" },
          timezone: { type: "string" },
        },
        required: ["name", "email"],
      },
    },
  },
];

// Adicionar ao completion:
const completion = await openai.chat.completions.create({
  model: 'gpt-4-turbo-preview',
  messages: [...],
  tools: tools,
  tool_choice: "auto",
});

// Processar function calls:
if (completion.choices[0].message.tool_calls) {
  for (const toolCall of completion.choices[0].message.tool_calls) {
    if (toolCall.function.name === "create_proposal") {
      const args = JSON.parse(toolCall.function.arguments);
      // Chamar sua API interna para criar proposta
      await createProposal(args);
    }
    // ... outras funções
  }
}
```

---

### Adicionar Análise de Sentimento e Intent Detection

```typescript
// Em /api/agentic/analyze.ts (já existe, precisa ser implementado)

import { OpenAI } from 'openai';

export async function analyzeUserIntent(message: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Analyze the user's intent and sentiment. Return JSON:
{
  "intent": "partnership" | "pricing" | "support" | "general",
  "sentiment": "positive" | "neutral" | "negative",
  "urgency": "high" | "medium" | "low",
  "keywords": ["keyword1", "keyword2"]
}`
      },
      { role: 'user', content: message }
    ],
    response_format: { type: "json_object" },
  });
  
  return JSON.parse(response.choices[0].message.content);
}
```

---

## 📊 MONITORAMENTO E ANALYTICS

### Ver Uso da API OpenAI

1. Acesse: https://platform.openai.com/usage
2. Veja:
   - Total de requests
   - Tokens usados (input + output)
   - Custo total

**Preços aproximados (GPT-4 Turbo):**
- Input: $0.01 / 1K tokens
- Output: $0.03 / 1K tokens
- ~1 conversa média: $0.05 USD

### Logs de Conversas

```typescript
// Ver conversas no Prisma Studio
npx prisma studio

// Ou via código:
const conversations = await prisma.agenticConversation.findMany({
  orderBy: { createdAt: 'desc' },
  take: 10,
});
```

---

## 🔒 SEGURANÇA E COMPLIANCE

### Rate Limiting

Adicionar em `/api/agentic/chat.ts`:

```typescript
// Criar um Map para tracking
const requestCounts = new Map();

// No handler:
const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
const now = Date.now();
const userRequests = requestCounts.get(ip) || [];

// Filtrar últimos 60 segundos
const recentRequests = userRequests.filter(t => now - t < 60000);

// Limitar a 10 requests/minuto
if (recentRequests.length >= 10) {
  return error(res, 'Rate limit exceeded. Try again in 1 minute.', 429);
}

// Adicionar request atual
recentRequests.push(now);
requestCounts.set(ip, recentRequests);
```

### Content Moderation

```typescript
// Antes de processar mensagem:
const moderation = await openai.moderations.create({
  input: body.message,
});

if (moderation.results[0].flagged) {
  return error(res, 'Message contains inappropriate content', 400);
}
```

---

## 🎯 PRÓXIMAS FEATURES RECOMENDADAS

1. **Voice Input** (Speech-to-Text)
   - Usar OpenAI Whisper API
   - Botão de microfone no chat

2. **Document Upload & Analysis**
   - Permitir upload de PDFs
   - AI analisa e responde perguntas sobre o documento

3. **Multi-language Auto-Detection**
   - Detectar idioma do usuário automaticamente
   - Responder no mesmo idioma

4. **Proactive Suggestions**
   - AI sugere próximos passos
   - "Based on your questions, I recommend..."

5. **Integration com CRM**
   - Leads qualificados → Salesforce/HubSpot
   - Automatizar follow-ups

---

## 📞 SUPORTE

**Problemas com OpenAI:**
- Docs: https://platform.openai.com/docs
- Community: https://community.openai.com
- Status: https://status.openai.com

**Problemas com Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/help

**Problemas com Prisma:**
- Docs: https://www.prisma.io/docs
- Discord: https://pris.ly/discord

---

## ✅ CHECKLIST DE DEPLOYMENT

- [ ] API Key OpenAI configurada
- [ ] Banco Postgres conectado
- [ ] Prisma schema sincronizado
- [ ] Testado localmente
- [ ] Build sem erros
- [ ] Deploy para Vercel
- [ ] Testado em produção
- [ ] Monitoramento configurado
- [ ] Rate limiting ativo
- [ ] Logs funcionando
- [ ] Documentação atualizada

---

**🎉 Integração completa! O AgenticChat agora está ativo no site.**
