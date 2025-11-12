#!/bin/bash
# 🚀 BTS Global - Deploy Script

echo "🚀 BTS Global Corp - Vercel Deploy"
echo "=================================="
echo ""

# Check if logged in
echo "📋 Verificando autenticação Vercel..."
if npx vercel whoami 2>/dev/null; then
    echo "✅ Já autenticado!"
else
    echo "🔑 Fazendo login no Vercel..."
    echo "⚠️  Uma janela do navegador será aberta para autenticação"
    npx vercel login
fi

echo ""
echo "🏗️  Iniciando deploy..."
echo ""

# Deploy
npx vercel --prod

echo ""
echo "✅ Deploy concluído!"
echo ""
echo "🌐 Acesse seu site em: https://bts-global-website.vercel.app"
echo ""
