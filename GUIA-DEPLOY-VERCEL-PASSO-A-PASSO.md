# 🚀 GUIA COMPLETO: DEPLOY NO VERCEL (5 MINUTOS)

## 📋 **CHECKLIST ANTES DE COMEÇAR:**

✅ Você tem conta no GitHub? (sim - seu repositório já está lá)
✅ Você tem email válido? (para criar conta Vercel)
⏰ Tempo necessário: **5 minutos**

---

# PASSO 1: CRIAR CONTA NO VERCEL (2 minutos)

## 1.1 - Acessar o Vercel

🌐 **Abra no navegador:**
```
https://vercel.com/signup
```

## 1.2 - Escolher método de cadastro

Você verá 3 opções:

```
┌─────────────────────────────────────────┐
│  Continue with GitHub    [RECOMENDADO]  │  ← CLIQUE AQUI!
├─────────────────────────────────────────┤
│  Continue with GitLab                   │
├─────────────────────────────────────────┤
│  Continue with Bitbucket                │
├─────────────────────────────────────────┤
│  Continue with Email                    │
└─────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Continue with GitHub"**

## 1.3 - Autorizar Vercel no GitHub

Uma janela do GitHub vai abrir:

```
┌────────────────────────────────────────────────┐
│  Authorize Vercel                              │
│                                                │
│  Vercel by Vercel wants to access your        │
│  theneilagencia account                        │
│                                                │
│  This application will be able to:            │
│  ✓ Read access to code                        │
│  ✓ Read access to metadata                    │
│  ✓ Read and write access to deployments       │
│                                                │
│      [ Authorize Vercel ]  [ Cancel ]         │
└────────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Authorize Vercel" (botão verde)**

## 1.4 - Verificar Email (se pedido)

Se o Vercel pedir verificação:

1. Abra seu email
2. Procure email do Vercel
3. Clique no link de confirmação
4. Volte para o Vercel

**✅ CONTA CRIADA!**

---

# PASSO 2: IMPORTAR O PROJETO (1 minuto)

## 2.1 - Adicionar Novo Projeto

Você estará no Dashboard do Vercel:

```
┌────────────────────────────────────────────────┐
│  Vercel                              [Profile] │
├────────────────────────────────────────────────┤
│                                                │
│  Let's build something new.                   │
│                                                │
│  [ + Add New... ▼ ]                           │
│     → Project                                  │  ← CLIQUE AQUI!
│     → Team                                     │
└────────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Add New" → "Project"**

## 2.2 - Importar do GitHub

Você verá uma lista de repositórios:

```
┌────────────────────────────────────────────────────────────┐
│  Import Git Repository                                     │
│                                                            │
│  [🔍 Search...                                           ] │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ 📁 theneilagencia/new-site-bts                       │ │  ← PROCURE ESTE!
│  │    Updated 3 minutes ago                             │ │
│  │                                    [ Import ] ────────┼─┼─ CLIQUE AQUI!
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  📁 theneilagencia/outro-repo                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**👉 PROCURE: "theneilagencia/new-site-bts"**
**👉 CLIQUE EM: "Import" (ao lado do repositório)**

---

# PASSO 3: CONFIGURAR O PROJETO (2 minutos)

## 3.1 - Configurações Básicas

Você verá esta tela:

```
┌─────────────────────────────────────────────────────────────┐
│  Configure Project                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Project Name:                                              │
│  [new-site-bts                                          ]   │  ← Deixe como está
│                                                             │
│  Framework Preset:                                          │
│  [ Vite ▼                                               ]   │  ← Deve detectar automático
│                                                             │
│  Root Directory:                                            │
│  [ ./ ▼                                    [ Edit ]     ]   │  ← IMPORTANTE!
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### ⚠️ **IMPORTANTE - CONFIGURAR ROOT DIRECTORY:**

**👉 CLIQUE EM: "Edit" (ao lado de Root Directory)**

Uma lista vai aparecer:

```
┌──────────────────────────────────┐
│  Select Root Directory           │
├──────────────────────────────────┤
│  ○ ./                            │
│  ○ bts-website-react             │  ← SELECIONE ESTE!
│  ○ FIGMA                         │
└──────────────────────────────────┘
```

**👉 SELECIONE: "bts-website-react"**

**👉 CLIQUE EM: "Continue"**

## 3.2 - Build Settings (Já está configurado!)

Verifique se está assim:

```
┌─────────────────────────────────────────────┐
│  Build and Output Settings                  │
├─────────────────────────────────────────────┤
│                                             │
│  Build Command:                             │
│  npm run build                              │  ✓ Correto!
│                                             │
│  Output Directory:                          │
│  dist                                       │  ✓ Correto!
│                                             │
│  Install Command:                           │
│  npm install                                │  ✓ Correto!
│                                             │
└─────────────────────────────────────────────┘
```

**✅ Se estiver assim, prossiga! Não precisa mudar nada!**

---

# PASSO 4: CRIAR O BANCO DE DADOS (1 minuto) ⚠️ IMPORTANTE!

## 4.1 - Ir para Storage

**⚠️ ATENÇÃO: Faça isso ANTES de clicar em Deploy!**

```
┌────────────────────────────────────────┐
│  Vercel Dashboard                      │
├────────────────────────────────────────┤
│  Overview                              │
│  Deployments                           │
│  Analytics                             │
│  → Storage                             │  ← CLIQUE AQUI PRIMEIRO!
│  Settings                              │
└────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Storage" (menu lateral)**

## 4.2 - Criar Database

```
┌────────────────────────────────────────────────┐
│  Storage                                       │
├────────────────────────────────────────────────┤
│                                                │
│  Databases                                     │
│                                                │
│  [ + Create Database ]                         │  ← CLIQUE AQUI!
│                                                │
└────────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Create Database"**

## 4.3 - Escolher Postgres

```
┌─────────────────────────────────────────────────┐
│  Create a New Database                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌────────────┐  ┌────────────┐  ┌───────────┐ │
│  │ Postgres   │  │   Redis    │  │    Blob   │ │
│  │            │  │  (KV)      │  │  Storage  │ │
│  │ [SELECT]   │  │            │  │           │ │  ← CLIQUE EM POSTGRES!
│  └────────────┘  └────────────┘  └───────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Postgres"**

## 4.4 - Configurar Database

```
┌──────────────────────────────────────────────┐
│  Create Postgres Database                    │
├──────────────────────────────────────────────┤
│                                              │
│  Database Name:                              │
│  [bts-global-db                          ]   │  ← Digite este nome
│                                              │
│  Region:                                     │
│  [ US East (iad1) ▼                      ]   │  ← Escolha mais próximo
│                                              │
│  Pricing:                                    │
│  ○ Hobby (Free)                              │  ← SELECIONE ESTE!
│  ○ Pro ($20/month)                           │
│                                              │
│  [ Create ]                                  │
└──────────────────────────────────────────────┘
```

**👉 PREENCHA:**
- Database Name: `bts-global-db`
- Region: Escolha o mais próximo (ex: US East para Brasil)
- Pricing: **Hobby (Free)**

**👉 CLIQUE EM: "Create"**

⏳ **Aguarde 30 segundos... (banco sendo criado)**

## 4.5 - Conectar Database ao Projeto

Após criar, você verá:

```
┌──────────────────────────────────────────────────────────┐
│  bts-global-db                                           │
├──────────────────────────────────────────────────────────┤
│  Status: Ready                                    ●      │
│                                                          │
│  [ Connect Project ]                                     │  ← CLIQUE AQUI!
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Connect Project"**

Selecione seu projeto:

```
┌───────────────────────────────────┐
│  Select Project                   │
├───────────────────────────────────┤
│  ☑ new-site-bts                   │  ← MARQUE ESTE!
│                                   │
│  [ Connect ]                      │
└───────────────────────────────────┘
```

**👉 MARQUE: "new-site-bts"**
**👉 CLIQUE EM: "Connect"**

**✅ DATABASE CRIADO E CONECTADO!**

---

# PASSO 5: CONFIGURAR VARIÁVEIS DE AMBIENTE (1 minuto)

## 5.1 - Voltar para o Projeto

```
┌────────────────────────────────────────┐
│  Vercel Dashboard                      │
├────────────────────────────────────────┤
│  → Overview                            │  ← CLIQUE AQUI!
│  Deployments                           │
│  Storage                               │
│  Settings                              │
└────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Overview"**

## 5.2 - Ir para Settings

```
┌────────────────────────────────────────┐
│  new-site-bts                          │
├────────────────────────────────────────┤
│  Deployments                           │
│  Analytics                             │
│  Logs                                  │
│  → Settings                            │  ← CLIQUE AQUI!
└────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Settings" (do projeto)**

## 5.3 - Ir para Environment Variables

```
┌────────────────────────────────────────┐
│  Settings                              │
├────────────────────────────────────────┤
│  General                               │
│  Domains                               │
│  Git                                   │
│  → Environment Variables               │  ← CLIQUE AQUI!
│  Security                              │
└────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Environment Variables"**

## 5.4 - Adicionar Variáveis

**⚠️ AS VARIÁVEIS DO DATABASE JÁ ESTÃO LÁ!** (auto-configuradas)

Você deve ver:

```
✓ POSTGRES_PRISMA_URL
✓ POSTGRES_URL_NON_POOLING
```

**Agora adicione as outras 3 variáveis:**

### **Variável 1: JWT_SECRET**

```
┌──────────────────────────────────────────────┐
│  Add New                                     │
├──────────────────────────────────────────────┤
│                                              │
│  Key:                                        │
│  [JWT_SECRET                             ]   │
│                                              │
│  Value:                                      │
│  [bts-global-super-secret-key-2024-xyz   ]   │  ← Use esta ou gere outra aleatória
│                                              │
│  Environment:                                │
│  ☑ Production                                │  ← Marque todos!
│  ☑ Preview                                   │
│  ☑ Development                               │
│                                              │
│  [ Save ]                                    │
└──────────────────────────────────────────────┘
```

**👉 PREENCHA:**
- Key: `JWT_SECRET`
- Value: `bts-global-super-secret-key-2024-xyz-change-this`
- Marque: Production, Preview, Development

**👉 CLIQUE EM: "Save"**

### **Variável 2: NODE_ENV**

```
Key:   NODE_ENV
Value: production

Marque: ☑ Production ☑ Preview ☑ Development
```

**👉 CLIQUE EM: "Save"**

### **Variável 3: OPENAI_API_KEY (OPCIONAL - mas recomendado)**

**❓ VOCÊ TEM CHAVE DA OPENAI?**

- **SIM →** Adicione agora:
```
Key:   OPENAI_API_KEY
Value: sk-sua-chave-openai-aqui

Marque: ☑ Production ☑ Preview ☑ Development
```

- **NÃO →** Pule por enquanto (você pode adicionar depois)
  - O site vai funcionar normalmente
  - Apenas o Chat AI não vai funcionar
  - Para criar chave: https://platform.openai.com/api-keys

**✅ VARIÁVEIS CONFIGURADAS!**

Você deve ter no mínimo:

```
✓ POSTGRES_PRISMA_URL          (auto)
✓ POSTGRES_URL_NON_POOLING     (auto)
✓ JWT_SECRET                   (manual)
✓ NODE_ENV                     (manual)
□ OPENAI_API_KEY              (opcional)
```

---

# PASSO 6: FAZER O DEPLOY! 🚀 (30 segundos)

## 6.1 - Voltar para Deployments

```
┌────────────────────────────────────────┐
│  new-site-bts                          │
├────────────────────────────────────────┤
│  → Deployments                         │  ← CLIQUE AQUI!
│  Analytics                             │
│  Settings                              │
└────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Deployments"**

## 6.2 - Iniciar Deploy

```
┌──────────────────────────────────────────────┐
│  Deployments                                 │
├──────────────────────────────────────────────┤
│                                              │
│  [ Deploy ]  ou  [ Redeploy ]                │  ← CLIQUE AQUI!
│                                              │
└──────────────────────────────────────────────┘
```

**👉 CLIQUE EM: "Deploy" (ou "Redeploy" se já houver deploy)**

## 6.3 - Aguardar Build

Você verá o log em tempo real:

```
┌────────────────────────────────────────────────┐
│  Building...                            [●]    │
├────────────────────────────────────────────────┤
│                                                │
│  > npm install                          ✓      │
│  > npm run build                        ✓      │
│  > Uploading...                         ●      │
│                                                │
└────────────────────────────────────────────────┘
```

⏳ **Aguarde 2-3 minutos...**

## 6.4 - SUCESSO! 🎉

```
┌────────────────────────────────────────────────┐
│  🎉 Deployment Ready                           │
├────────────────────────────────────────────────┤
│                                                │
│  Your project is live at:                     │
│                                                │
│  https://new-site-bts-xxx.vercel.app          │  ← SEU SITE!
│                                                │
│  [ Visit ]                                     │
└────────────────────────────────────────────────┘
```

**🎊 PARABÉNS! SEU SITE ESTÁ NO AR! 🎊**

---

# PASSO 7: INICIALIZAR O BANCO DE DADOS (1 minuto)

## 7.1 - Acessar o Database

**👉 Vá para: Storage → bts-global-db → Query**

```
┌────────────────────────────────────────┐
│  bts-global-db                         │
├────────────────────────────────────────┤
│  Data                                  │
│  → Query                               │  ← CLIQUE AQUI!
│  Settings                              │
└────────────────────────────────────────┘
```

## 7.2 - Verificar se as tabelas existem

Cole este comando:

```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

**👉 CLIQUE EM: "Run Query"**

### **Se mostrar tabelas:**
```
User
Proposal
AgenticConversation
_prisma_migrations
```

**✅ JÁ ESTÁ PRONTO! Prisma criou as tabelas automaticamente!**

### **Se NÃO mostrar tabelas:**

Cole este SQL completo:

```sql
-- Criar extensão para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Criar tabela User
CREATE TABLE "User" (
  id TEXT PRIMARY KEY DEFAULT 'user_' || gen_random_uuid()::text,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'partner' NOT NULL,
  company TEXT,
  phone TEXT,
  city TEXT,
  state TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Criar tabela Proposal
CREATE TABLE "Proposal" (
  id TEXT PRIMARY KEY DEFAULT 'prop_' || gen_random_uuid()::text,
  "userId" TEXT NOT NULL,
  "clientName" TEXT NOT NULL,
  "clientEmail" TEXT NOT NULL,
  "clientPhone" TEXT NOT NULL,
  "structureId" TEXT NOT NULL,
  "structureName" TEXT NOT NULL,
  quantity INTEGER DEFAULT 1 NOT NULL,
  "unitPrice" DOUBLE PRECISION NOT NULL,
  "totalPrice" DOUBLE PRECISION NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL,
  notes TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);

-- Criar tabela AgenticConversation
CREATE TABLE "AgenticConversation" (
  id TEXT PRIMARY KEY DEFAULT 'conv_' || gen_random_uuid()::text,
  "userId" TEXT,
  "sessionId" TEXT UNIQUE NOT NULL,
  messages JSONB NOT NULL DEFAULT '[]',
  context JSONB,
  status TEXT DEFAULT 'active' NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Criar índices
CREATE INDEX "User_email_idx" ON "User"(email);
CREATE INDEX "Proposal_userId_idx" ON "Proposal"("userId");
CREATE INDEX "Proposal_status_idx" ON "Proposal"(status);
CREATE INDEX "Proposal_createdAt_idx" ON "Proposal"("createdAt");
CREATE INDEX "AgenticConversation_sessionId_idx" ON "AgenticConversation"("sessionId");
CREATE INDEX "AgenticConversation_userId_idx" ON "AgenticConversation"("userId");

-- Inserir usuário admin de teste
INSERT INTO "User" (id, email, password, name, role)
VALUES (
  'admin_001',
  'admin@bts.com',
  '$2a$10$rN8qK3mVQj9YZxPvXJgP2eHhvD5Tk6iGVQZ1iYQN7ZbqYQN7ZbqYQ',
  'Administrador BTS',
  'admin'
);

-- Senha do admin: admin123
```

**👉 COLE TODO O SQL ACIMA**
**👉 CLIQUE EM: "Run Query"**

**✅ BANCO DE DADOS INICIALIZADO!**

---

# PASSO 8: TESTAR O SITE! 🎉

## 8.1 - Acessar o Site

**👉 Acesse sua URL:**
```
https://new-site-bts-xxx.vercel.app
```

(substitua xxx pelo seu domínio real)

## 8.2 - Testar Funcionalidades

### ✅ **Site Institucional:**
- Deve carregar com animações
- Chat AI no canto inferior direito (se configurou OpenAI)
- Todas as seções funcionando

### ✅ **Portal do Parceiro:**

**👉 Acesse:**
```
https://new-site-bts-xxx.vercel.app/#portal
```

**👉 CRIAR NOVA CONTA:**
1. Clique em "Criar Conta"
2. Preencha:
   - Email: `seu@email.com`
   - Senha: `senha123`
   - Nome: `Seu Nome`
   - Empresa: `Sua Empresa`
3. Clique em "Registrar"

**👉 FAZER LOGIN COM ADMIN:**
- Email: `admin@bts.com`
- Senha: `admin123`

### ✅ **Testar Chat AI:**
1. Clique no ícone flutuante (💬)
2. Digite: "Quais são os preços?"
3. O GPT-4 deve responder!

---

# 🎊 PRONTO! SEU SITE ESTÁ 100% NO AR!

## 📊 **O QUE VOCÊ TEM AGORA:**

✅ Site institucional completo
✅ Portal do parceiro funcionando
✅ Banco de dados PostgreSQL
✅ APIs REST rodando
✅ Chat AI com OpenAI (se configurou)
✅ Deploy automático (qualquer push = novo deploy)
✅ SSL/HTTPS automático
✅ CDN global

---

## 🔗 **SEUS LINKS:**

```
🌐 Site: https://seu-projeto.vercel.app
🔐 Portal: https://seu-projeto.vercel.app/#portal
⚙️ Dashboard: https://vercel.com/seu-usuario/new-site-bts
📊 Database: https://vercel.com/seu-usuario/stores/bts-global-db
```

---

## 📞 **PRECISA DE AJUDA?**

Se algo não funcionar, me diga qual passo e qual erro apareceu! 🚀

---

**Desenvolvido com ❤️ para BTS Global Corp**
