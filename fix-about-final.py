#!/usr/bin/env python3

with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'r') as f:
    content = f.read()

# Fix line 94-99: merge styles
content = content.replace(
    '''style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          className="absolute left-[15%] top-[10%] h-64 w-64 rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, #00639A, transparent 70%)',
            filter: 'blur(60px)',
          }}''',
    '''className="absolute left-[15%] top-[10%] h-64 w-64 rounded-full opacity-[0.12]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -30]),
            background: 'radial-gradient(circle, #00639A, transparent 70%)',
            filter: 'blur(60px)',
          }}'''
)

# Fix line 104-109
content = content.replace(
    '''style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
          className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full opacity-[0.15]"
          style={{
            background: 'radial-gradient(circle, #21B6F3, transparent 70%)',
            filter: 'blur(80px)',
          }}''',
    '''className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full opacity-[0.15]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 40]),
            background: 'radial-gradient(circle, #21B6F3, transparent 70%)',
            filter: 'blur(80px)',
          }}'''
)

# Fix line 114-119
content = content.replace(
    '''style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10]"
          style={{
            background: 'radial-gradient(circle, #00BCA5, transparent 70%)',
            filter: 'blur(70px)',
          }}''',
    '''className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 20]),
            background: 'radial-gradient(circle, #00BCA5, transparent 70%)',
            filter: 'blur(70px)',
          }}'''
)

# Fix line 144-148
content = content.replace(
    '''style={{ y }}
          className="absolute left-[10%] top-[10%] h-[500px] w-[500px] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #00639A, transparent 60%)',
          }}''',
    '''className="absolute left-[10%] top-[10%] h-[500px] w-[500px] blur-[100px]"
          style={{
            y,
            background: 'radial-gradient(circle, #00639A, transparent 60%)',
          }}'''
)

with open('/workspace/bts-website-react/src/components/sections/AboutSection.tsx', 'w') as f:
    f.write(content)

print("✅ All duplicate styles fixed!")
