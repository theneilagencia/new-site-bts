# 🔍 DIAGNÓSTICO DO SITE - new-site-bts.vercel.app

## ❌ **PROBLEMA IDENTIFICADO:**

```
HTTP/2 404 
NOT_FOUND
```

**TODOS os endpoints retornam 404:**
- ❌ Site principal: 404
- ❌ API Auth: 404
- ❌ API Proposals: 404
- ❌ API Agentic: 404

---

## 🎯 **CAUSA RAIZ:**

O deploy foi feito, MAS do **diretório errado**!

### **O que aconteceu:**

O Vercel deployou a **raiz do repositório** (`/workspace/`) ao invés da pasta **`bts-website-react/`**

**Estrutura atual (ERRADO):**
```
/workspace/
├── README.md                ← Vercel deployou ISTO (vazio!)
├── FIGMA/
└── bts-website-react/      ← O site está AQUI! (não foi deployado)
    ├── src/
    ├── api/
    ├── dist/
    └── package.json
```

---

## ✅ **SOLUÇÃO - CONFIGURAR ROOT DIRECTORY:**

### **PASSO 1: Ir para Settings do Projeto**

1. Acesse: https://vercel.com/dashboard
2. Clique no projeto: **new-site-bts**
3. Vá em: **Settings**

### **PASSO 2: Configurar Root Directory**

1. No menu lateral, clique em: **General**
2. Role até: **Root Directory**
3. Clique em: **Edit**
4. Selecione: **`bts-website-react`** ← IMPORTANTE!
5. Clique em: **Save**

```
┌──────────────────────────────────────┐
│ Root Directory                       │
├──────────────────────────────────────┤
│                                      │
│ [ ./              ▼ ]  [ Edit ]     │ ← Clique em Edit
│                                      │
│ Opções:                              │
│   ○ ./                               │
│   ● bts-website-react   ← SELECIONE │
│   ○ FIGMA                            │
│                                      │
│ [ Save ]                             │
└──────────────────────────────────────┘
```

### **PASSO 3: Verificar Build Settings**

Na mesma página (Settings → General), verifique:

```
Build Command:        npm run build          ✓
Output Directory:     dist                   ✓
Install Command:      npm install            ✓
```

Se estiver diferente, corrija!

### **PASSO 4: Fazer Redeploy**

1. Vá em: **Deployments**
2. No último deploy, clique nos **3 pontinhos** (⋯)
3. Clique em: **Redeploy**
4. Aguarde ~2 minutos

**OU**

1. Vá em: **Deployments**
2. Clique em: **Redeploy** (botão no topo)

---

## 🔄 **OPÇÃO ALTERNATIVA - DELETAR E REIMPORTAR:**

Se não funcionar, delete e crie novo:

### **1. Deletar Projeto Atual:**
- Settings → General → Delete Project

### **2. Criar Novo:**
- Dashboard → Add New → Project
- Import: `theneilagencia/new-site-bts`
- **Root Directory:** `bts-website-react` ← IMPORTANTE!
- Deploy

---

## ✅ **APÓS CORRIGIR, VOCÊ DEVE VER:**

### **Site funcionando:**
```
✅ https://new-site-bts.vercel.app/
   → Carrega o site institucional

✅ https://new-site-bts.vercel.app/#portal
   → Carrega a página de login do portal
```

### **APIs retornando (mesmo que com erro de auth/db):**
```
✅ /api/auth/login
   → {"success":false,"error":"Invalid credentials"}
   (erro esperado, mas API responde!)

✅ /api/proposals/list
   → {"success":false,"error":"Unauthorized"}
   (erro esperado, mas API responde!)
```

---

## 📊 **PRÓXIMOS PASSOS (APÓS CORRIGIR ROOT):**

### **1. Configurar Banco de Dados:**
- Storage → Create Database → Postgres
- Nome: `bts-global-db`
- Connect to Project

### **2. Configurar Environment Variables:**
- Settings → Environment Variables
- Adicionar:
  - `JWT_SECRET` (ex: bts-secret-key-2024)
  - `OPENAI_API_KEY` (opcional)
  - `NODE_ENV` (production)
  - `POSTGRES_PRISMA_URL` (do database)
  - `POSTGRES_URL_NON_POOLING` (do database)

### **3. Inicializar Banco:**
- Storage → bts-global-db → Query
- Rodar SQL para criar tabelas

---

## 🎯 **RESUMO:**

```
PROBLEMA:   Deploy do diretório errado (root ao invés de bts-website-react)
SOLUÇÃO:    Settings → General → Root Directory → bts-website-react
RESULTADO:  Site vai funcionar após redeploy!
```

---

## 💬 **ME AVISE:**

Depois de configurar o Root Directory e fazer o redeploy, me diga:

✅ "Configurei e fiz redeploy"

E eu testo novamente para verificar se funcionou! 🚀
