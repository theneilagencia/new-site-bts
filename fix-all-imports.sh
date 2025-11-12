#!/bin/bash
set -e

echo "🔧 CORRIGINDO TODOS OS IMPORTS..."

cd /workspace/bts-website-react/src

# 1. Corrigir motion/react → framer-motion
find . -name "*.tsx" -type f -exec sed -i "s|from 'motion/react'|from 'framer-motion'|g" {} \;

# 2. Corrigir contexts
find . -name "*.tsx" -type f -exec sed -i "s|'../../contexts/language-context'|'@/contexts/LanguageContext'|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|'../../contexts/theme-context'|'@/contexts/ThemeContext'|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|'../../contexts/auth-context'|'@/contexts/AuthContext'|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|'../contexts/language-context'|'@/contexts/LanguageContext'|g" {} \;

# 3. Corrigir outros imports
find . -name "*.tsx" -type f -exec sed -i "s|'../ui/bts-logo'|'@/components/ui/BtsLogo'|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|'./mobile-menu'|'@/components/layout/MobileMenu'|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|BTSLogo|BtsLogo|g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|'../../lib/i18n'|'@/lib/i18n'|g" {} \;

# 4. Remover imports React desnecessários
find . -name "*.tsx" -type f -exec sed -i "s|^import React from 'react';||g" {} \;
find . -name "*.tsx" -type f -exec sed -i "s|^import React, ||g" {} \;

echo "✅ Imports corrigidos!"
