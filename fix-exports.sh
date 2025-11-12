#!/bin/bash
set -e

echo "🔧 RENOMEANDO EXPORTS..."

cd /workspace/bts-website-react/src/components/sections

# Renomear exports
sed -i 's/export function HeroV2/export function HeroSection/g' HeroSection.tsx
sed -i 's/export function WhyV4/export function WhySection/g' WhySection.tsx
sed -i 's/export function PrivacyV2/export function PrivacySection/g' PrivacySection.tsx
sed -i 's/export function TrustedV2/export function TrustedSection/g' TrustedSection.tsx
sed -i 's/export function SolutionsV2/export function SolutionsSection/g' SolutionsSection.tsx
sed -i 's/export function AboutV3/export function AboutSection/g' AboutSection.tsx
sed -i 's/export function PartnerV6/export function PartnerSection/g' PartnerSection.tsx

cd /workspace/bts-website-react/src/components/layout
sed -i 's/export function FooterV2/export function Footer/g' Footer.tsx
sed -i 's/export function HeaderV2/export function Header/g' Header.tsx

echo "✅ Exports renomeados!"
