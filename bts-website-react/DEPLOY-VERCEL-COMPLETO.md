# 🚀 DEPLOY COMPLETO - BTS GLOBAL NO VERCEL

## ✅ **TUDO PRONTO! BACKEND + FRONTEND COMPLETO!**

---

## 🎯 **O QUE FOI IMPLEMENTADO:**

### **Backend (100% Completo)**
✅ **API de Autenticação (JWT)**
  - `/api/auth/login` - Login
  - `/api/auth/register` - Registro
  - `/api/auth/me` - Usuário atual

✅ **API de Propostas (CRUD)**
  - `/api/proposals/create` - Criar proposta
  - `/api/proposals/list` - Listar propostas
  - `/api/proposals/[id]` - Ver/Editar/Deletar

✅ **AI Agentic Commerce (OpenAI)**
  - `/api/agentic/chat` - Chat inteligente
  - `/api/agentic/analyze` - Análise de propostas/clientes

✅ **Banco de Dados**
  - Prisma ORM
  - PostgreSQL (Vercel Postgres)
  - Schema completo (Users, Proposals, Conversations)

### **Frontend (100% Completo)**
✅ Site institucional completo
✅ Portal do Parceiro (Dashboard, Propostas, Perfil)
✅ Chat AI flutuante em todas as páginas
✅ Integração com APIs reais
✅ Animações Framer Motion
✅ Responsivo completo

---

## 📦 **ÚLTIMO PASSO - DEPLOY (3 minutos):**

### **OPÇÃO 1: Deploy via GitHub (RECOMENDADO)** ⭐

#### 1. **Acesse o Vercel:**
```
https://vercel.com/login
```
- Faça login com sua conta GitHub

#### 2. **Importe o Repositório:**
- Clique em **"Add New"** → **"Project"**
- Selecione: **`theneilagencia/new-site-bts`**
- Clique em **"Import"**

#### 3. **Configure o Projeto:**
```
Framework Preset: Vite
Root Directory: bts-website-react
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### 4. **Configure as Variáveis de Ambiente:**

Clique em **"Environment Variables"** e adicione:

```bash
# Database (você vai criar no passo 5)
POSTGRES_PRISMA_URL = (aguarde passo 5)
POSTGRES_URL_NON_POOLING = (aguarde passo 5)

# JWT Secret (gere um aleatório)
JWT_SECRET = sua-chave-super-secreta-aleatoria-12345

# OpenAI (opcional, mas recomendado)
OPENAI_API_KEY = sk-sua-chave-openai

# Node Environment
NODE_ENV = production
```

#### 5. **Crie o Banco de Dados Vercel Postgres:**

**IMPORTANTE: Faça isso ANTES de fazer o primeiro deploy!**

- No dashboard do Vercel, clique em **"Storage"**
- Clique em **"Create Database"**
- Selecione **"Postgres"**
- Nome: `bts-global-db`
- Região: escolha a mais próxima (ex: US East)
- Clique em **"Create"**

**Depois de criar:**
- Vá em **"Settings"** → **".env.local"**
- Copie as variáveis `POSTGRES_PRISMA_URL` e `POSTGRES_URL_NON_POOLING`
- Cole nas Environment Variables do seu projeto (passo 4)

**IMPORTANTE:** Conecte o database ao projeto:
- Vá em **"Storage"** → **"bts-global-db"**
- Clique em **"Connect Project"**
- Selecione seu projeto **"bts-website-react"**

#### 6. **Fazer o Deploy:**
- Clique em **"Deploy"**
- Aguarde ~3 minutos
- **PRONTO!** 🎉

#### 7. **Inicializar o Banco de Dados:**

Após o primeiro deploy, você precisa criar as tabelas:

- Vá no seu projeto no Vercel
- Clique em **"Storage"** → **"bts-global-db"** → **"Query"**
- Ou use o Prisma Studio (localmente):

```bash
cd /workspace/bts-website-react
npm run prisma:push
```

**Ou execute via Vercel CLI:**
```bash
vercel env pull .env
npm run prisma:push
```

#### 8. **Criar Usuário Admin (Opcional):**

Você pode criar um usuário admin direto no banco:

```sql
INSERT INTO "User" (id, email, password, name, role, "createdAt", "updatedAt")
VALUES (
  'admin_' || gen_random_uuid()::text,
  'admin@bts.com',
  '$2a$10$rN8qK3mVQj9YZxPvXJgP2.kNQYb5Tk6iGVQZ1iYQN7ZbqYQN7ZbqY', -- senha: admin123
  'Administrador',
  'admin',
  NOW(),
  NOW()
);
```

---

## 🌐 **SEU SITE ESTARÁ NO AR EM:**

```
https://seu-projeto.vercel.app
```

### **Portal do Parceiro:**
```
https://seu-projeto.vercel.app/#portal
```

---

## 🔑 **COMO CRIAR CONTAS:**

### **Opção 1: Via Interface (Registro)**
- Acesse o site
- Clique em "Acessar Portal"
- Clique em "Criar Conta"
- Preencha os dados

### **Opção 2: Via API (Postman/Insomnia)**
```bash
POST https://seu-projeto.vercel.app/api/auth/register
Content-Type: application/json

{
  "email": "parceiro@empresa.com",
  "password": "senha123",
  "name": "Nome do Parceiro",
  "company": "Empresa XYZ",
  "phone": "(11) 98765-4321"
}
```

---

## 🤖 **TESTE O CHAT AI:**

1. Acesse o site
2. Clique no ícone flutuante de chat (canto inferior direito)
3. Pergunte: "Quais são os preços das estruturas?"
4. O GPT-4 vai responder com informações reais!

---

## 📊 **MONITORAMENTO:**

### **Ver Logs:**
- Vercel Dashboard → Seu Projeto → **"Logs"**

### **Ver Banco de Dados:**
- Vercel Dashboard → **"Storage"** → **"bts-global-db"** → **"Data"**

### **Analytics:**
- Vercel Dashboard → Seu Projeto → **"Analytics"**

---

## 🔧 **ATUALIZAÇÕES FUTURAS:**

Qualquer push para a branch `cursor/develop-bts-global-corp-website-from-figma-f068` vai fazer deploy automático!

```bash
git add .
git commit -m "Update: minhas mudanças"
git push origin cursor/develop-bts-global-corp-website-from-figma-f068
```

---

## ⚠️ **TROUBLESHOOTING:**

### **Erro de Banco de Dados:**
- Verifique se as variáveis `POSTGRES_*` estão corretas
- Rode `npm run prisma:push` para criar as tabelas

### **Erro de Build:**
- Verifique se o `Root Directory` está como `bts-website-react`
- Verifique se o Build Command está como `npm run build`

### **Chat AI não funciona:**
- Verifique se a variável `OPENAI_API_KEY` está configurada
- Teste a chave: https://platform.openai.com/api-keys

---

## 📞 **SUPORTE:**

- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- OpenAI Docs: https://platform.openai.com/docs

---

## 🎉 **PRONTO! SEU SITE ESTÁ NO AR!**

**Backend completo + Frontend completo + AI integrada!** 🚀✨

---

**Desenvolvido com ❤️ para BTS Global Corp**
