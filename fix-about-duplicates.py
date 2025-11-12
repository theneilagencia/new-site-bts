#!/usr/bin/env python3
import re

print("🔧 Corrigindo duplicate styles em AboutSection...")

with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'r') as f:
    lines = f.readlines()

output = []
i = 0
skip_next = False

while i < len(lines):
    if skip_next:
        skip_next = False
        i += 1
        continue
    
    line = lines[i]
    
    # Se a linha tem "style={{ y: useTransform" e a próxima tem "style={{", pular a próxima
    if 'style={{ y: useTransform' in line and i+1 < len(lines) and 'style={{' in lines[i+1]:
        output.append(line)
        skip_next = True
        i += 1
        continue
    
    output.append(line)
    i += 1

with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'w') as f:
    f.writelines(output)

print("✅ Duplicate styles corrigidos!")
