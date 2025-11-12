#!/bin/bash
set -e

echo "🔥 INICIANDO MIGRAÇÃO COMPLETA PARA FIGMA..."

# 1. Copiar componentes
echo "📦 Copiando componentes do Figma..."
cp /workspace/figma-reference/components/sections/hero-v2.tsx /workspace/bts-website-react/src/components/sections/HeroSection.tsx
cp /workspace/figma-reference/components/sections/why-v4.tsx /workspace/bts-website-react/src/components/sections/WhySection.tsx
cp /workspace/figma-reference/components/sections/privacy-v2.tsx /workspace/bts-website-react/src/components/sections/PrivacySection.tsx
cp /workspace/figma-reference/components/sections/trusted-v2.tsx /workspace/bts-website-react/src/components/sections/TrustedSection.tsx
cp /workspace/figma-reference/components/sections/solutions-v2.tsx /workspace/bts-website-react/src/components/sections/SolutionsSection.tsx
cp /workspace/figma-reference/components/sections/about-v3.tsx /workspace/bts-website-react/src/components/sections/AboutSection.tsx
cp /workspace/figma-reference/components/sections/partner-v6.tsx /workspace/bts-website-react/src/components/sections/PartnerSection.tsx
cp /workspace/figma-reference/components/layout/footer-v2.tsx /workspace/bts-website-react/src/components/layout/Footer.tsx
cp /workspace/figma-reference/components/layout/header-v2.tsx /workspace/bts-website-react/src/components/layout/Header.tsx

# 2. Remover HowItWorksSection
rm -f /workspace/bts-website-react/src/components/sections/HowItWorksSection.tsx

echo "✅ Componentes copiados!"
