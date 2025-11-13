"use client";

import { Toaster as Sonner, toast } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        style: {
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
        },
        className: 'glass',
      }}
    />
  );
}

export { toast };
