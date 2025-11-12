# 🚀 DEPLOY NO VERCEL - PASSO A PASSO

## ✅ Tudo Pronto Para Deploy!

O projeto está 100% configurado e otimizado para Vercel.

---

## 🎯 MÉTODO 1: Via Interface Web (RECOMENDADO - 3 minutos)

### Passo 1: Criar Conta Vercel
1. Acesse: https://vercel.com/signup
2. Escolha: **Continue with GitHub** (ou outra opção)
3. Autorize o Vercel

### Passo 2: Fazer Push para GitHub

**No seu terminal local:**

```bash
# 1. Criar repositório no GitHub
# Acesse: https://github.com/new
# Nome: bts-global-website
# Deixe público ou privado

# 2. Conectar e fazer push
cd /workspace/bts-website-react

git remote add origin https://github.com/SEU-USUARIO/bts-global-website.git
git branch -M main
git push -u origin main
```

### Passo 3: Importar no Vercel
1. No Vercel Dashboard: https://vercel.com/dashboard
2. Clique em **"Add New..."** → **"Project"**
3. Selecione seu repositório **bts-global-website**
4. Configurações serão detectadas automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **"Deploy"** 🚀

**Deploy em ~2 minutos!** ✨

### Passo 4: Obter URL
Após o deploy, você terá:
```
https://bts-global-website.vercel.app
```

---

## 🎯 MÉTODO 2: Via CLI (Para Usuários Avançados)

```bash
cd /workspace/bts-website-react

# 1. Login no Vercel
npx vercel login

# 2. Deploy
npx vercel --prod

# Siga as instruções:
# - Set up and deploy? [Y/n] → Y
# - Which scope? → Selecione sua conta
# - Link to existing project? [y/N] → N
# - What's your project's name? → bts-global-website
# - In which directory is your code located? → ./
# - Want to override the settings? [y/N] → N
```

**Deploy inicia automaticamente!** ⚡

---

## 🎯 MÉTODO 3: Deploy Manual (Alternativa)

Se não quiser usar Git:

```bash
cd /workspace/bts-website-react

# Login
npx vercel login

# Deploy direto da pasta dist
npx vercel --prod
```

---

## ⚙️ CONFIGURAÇÕES AUTOMÁTICAS

O Vercel detectará automaticamente:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

Tudo está em `vercel.json` ✅

---

## 🔧 VARIÁVEIS DE AMBIENTE (Opcional)

Se quiser configurar o Agentic Commerce:

1. No Vercel Dashboard
2. Project Settings → Environment Variables
3. Adicionar:
   ```
   VITE_OPENAI_API_KEY=sk-your-key-here
   VITE_API_URL=https://api.btsglobal.com
   VITE_ENABLE_AGENTIC_COMMERCE=true
   ```

---

## 🌍 DOMÍNIO CUSTOMIZADO (Opcional)

Após deploy, você pode adicionar domínio próprio:

1. Project Settings → Domains
2. Add Domain: `www.btsglobal.com`
3. Siga instruções DNS

**Certificado SSL automático!** 🔒

---

## 📊 MONITORAMENTO

O Vercel oferece:
- ✅ Analytics grátis
- ✅ Logs em tempo real
- ✅ Performance metrics
- ✅ Deploy preview em cada commit
- ✅ Rollback instantâneo

---

## 🔄 DEPLOYS AUTOMÁTICOS

Após conectar ao GitHub:
- **Push para `main`** → Deploy automático para produção
- **Push para outra branch** → Preview URL gerado
- **Pull Request** → Preview comentado automaticamente

---

## 🚨 TROUBLESHOOTING

### Erro: "No build output"
```bash
# Verificar build local
npm run build

# Se funcionar, commit e push novamente
git add .
git commit -m "fix: build configuration"
git push
```

### Erro: "Module not found"
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
npm run build
git add .
git commit -m "fix: dependencies"
git push
```

---

## 📱 COMPARTILHAR

Após deploy, compartilhe:
```
🚀 Site BTS Global no ar!
https://bts-global-website.vercel.app

✅ 100% React + TypeScript + Framer Motion
✅ Dark/Light Mode
✅ Multi-idioma (PT/EN)
✅ Portal de Parceiros
```

---

## ⚡ QUICK START

**Via Web (Mais Rápido):**
1. Push código para GitHub
2. Importar no Vercel: https://vercel.com/new
3. Deploy! ✨

**Tempo total:** ~3 minutos

---

## 🎉 RESULTADO

Você terá:
- ✅ URL pública permanente
- ✅ SSL automático (HTTPS)
- ✅ CDN global (super rápido)
- ✅ Deploy automático a cada push
- ✅ Preview de cada PR
- ✅ Analytics e logs
- ✅ 100% grátis para projetos pessoais

---

**Precisa de ajuda? Me chame!** 💬

BTS Global Corp © 2025
