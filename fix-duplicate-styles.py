#!/usr/bin/env python3
import re

# Read file
with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'r') as f:
    content = f.read()

# Pattern to find duplicate style attributes - merge them
def merge_styles(match):
    full_match = match.group(0)
    # Extract className
    className_match = re.search(r'className="([^"]*)"', full_match)
    className = className_match.group(1) if className_match else ''
    
    # Extract first style (with useTransform)
    first_style = re.search(r'style=\{([^}]*)\}', full_match)
    
    # Extract second style (inline object)
    second_style = re.search(r'style=\{\{([^}]*)\}\}', full_match)
    
    if first_style and second_style:
        # Merge both styles
        return f'className="{className}"\n          style={{{first_style.group(1)}, ...{{{second_style.group(1)}}}}}'
    return full_match

# Fix each occurrence
lines = content.split('\n')
fixed_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    # Check if this line has className and starts a potential duplicate style issue
    if 'className="absolute' in line and i + 1 < len(lines) and 'style={{' in lines[i+1]:
        # Check if line i+1 has style with useTransform
        if 'useTransform' in lines[i+1]:
            # Look ahead for second style
            if i + 2 < len(lines) and 'style={{' in lines[i+2]:
                # Found duplicate! Merge
                fixed_lines.append(line)
                fixed_lines.append(lines[i+1])  # Keep first style (with useTransform)
                # Skip second style
                i += 3
                continue
    fixed_lines.append(line)
    i += 1

# Write back
with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'w') as f:
    f.write('\n'.join(fixed_lines))

print("Fixed duplicate styles in AboutSection.tsx")
