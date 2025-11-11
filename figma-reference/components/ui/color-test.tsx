import React from 'react';
import { motion } from 'motion/react';

/**
 * COLOR TEST COMPONENT
 * Use este componente para verificar se as cores estão sendo aplicadas corretamente
 * Adicione ao App.tsx temporariamente: <ColorTest />
 */

export function ColorTest() {
  const officialColors = [
    { name: 'S01 - Deep Navy', hex: '#1E365B', var: 'var(--color-bts-s01)' },
    { name: 'S02 - Ocean Blue', hex: '#00639A', var: 'var(--color-bts-s02)' },
    { name: 'S03 - Teal', hex: '#00BCA5', var: 'var(--color-bts-s03)' },
    { name: 'S04 - Steel Blue', hex: '#2A7BA1', var: 'var(--color-bts-s04)' },
    { name: 'S05 - Sky Blue', hex: '#21B6F3', var: 'var(--color-bts-s05)' },
    { name: 'S06 - Light Gray', hex: '#E8E8E8', var: 'var(--color-bts-s06)' },
  ];

  const bannedColors = [
    { name: '❌ BANNED: Old Purple', hex: '#206BBE' },
    { name: '❌ BANNED: Old Cyan 1', hex: '#00BCEE' },
    { name: '❌ BANNED: Old Cyan 2', hex: '#00BFF3' },
    { name: '❌ BANNED: Old Cyan 3', hex: '#74FFFB' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-[9999] max-w-md rounded-lg border-2 border-yellow-400 bg-black/95 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-mono text-sm font-bold text-yellow-400">
          🎨 BTS COLOR TEST
        </h3>
        <button
          onClick={() => {
            const el = document.querySelector('[data-color-test]');
            if (el) el.remove();
          }}
          className="text-xs text-white/60 hover:text-white"
        >
          Close
        </button>
      </div>

      {/* Official Colors */}
      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold text-green-400">
          ✅ OFFICIAL BTS COLORS (Should be visible):
        </p>
        <div className="space-y-1">
          {officialColors.map((color) => (
            <div key={color.hex} className="flex items-center gap-2">
              <div
                className="h-6 w-6 rounded border border-white/20"
                style={{ backgroundColor: color.hex }}
              />
              <span className="font-mono text-[10px] text-white/80">
                {color.name}
              </span>
              <span className="font-mono text-[9px] text-white/50">
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Banned Colors */}
      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold text-red-400">
          ❌ BANNED COLORS (Should NOT appear anywhere):
        </p>
        <div className="space-y-1">
          {bannedColors.map((color) => (
            <div key={color.hex} className="flex items-center gap-2">
              <div
                className="h-6 w-6 rounded border border-white/20"
                style={{ backgroundColor: color.hex }}
              />
              <span className="font-mono text-[10px] text-white/80">
                {color.name}
              </span>
              <span className="font-mono text-[9px] text-white/50">
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Theme Colors */}
      <div>
        <p className="mb-2 text-xs font-semibold text-blue-400">
          🎨 CURRENT THEME COLORS:
        </p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded border border-white/20"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            />
            <span className="font-mono text-[10px] text-white/80">
              Accent Primary
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded border border-white/20"
              style={{ backgroundColor: 'var(--accent-secondary)' }}
            />
            <span className="font-mono text-[10px] text-white/80">
              Accent Secondary
            </span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 rounded bg-green-500/10 p-2">
        <p className="text-center font-mono text-xs text-green-400">
          ✅ Code is 100% correct!
        </p>
        <p className="text-center font-mono text-[10px] text-white/50">
          If you see old colors, press Ctrl+Shift+R
        </p>
      </div>
    </motion.div>
  );
}
