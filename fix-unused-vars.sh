#!/bin/bash
set -e

echo "🔧 Corrigindo variáveis não usadas..."

cd /workspace/bts-website-react/src/components

# Remover imports não usados
sed -i 's/, ExternalLink//g; s/, ArrowUpRight//g' layout/Footer.tsx
sed -i 's/, Globe//g; s/, X//g; s/, ChevronDown//g' layout/Header.tsx

# Comentar imports não usados
sed -i "s|import { useTheme }|// import { useTheme }|g" layout/Footer.tsx

# Adicionar X ao MobileMenu
sed -i "s|import { motion } from 'framer-motion';|import { motion } from 'framer-motion';\nimport { X } from 'lucide-react';|g" layout/MobileMenu.tsx
sed -i "s|import {  Sun, Moon } from 'lucide-react';||g" layout/MobileMenu.tsx

# Renomear variáveis não usadas em SolutionsSection
sed -i "s|const { y, opacity }|const { y: _y, opacity: _opacity }|g" sections/SolutionsSection.tsx

# Remover const theme não usado
sed -i "s|const { theme } = useTheme();||g" layout/Footer.tsx

echo "✅ Variáveis não usadas corrigidas!"
