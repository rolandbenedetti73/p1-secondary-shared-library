// Tailwind preset for p1-secondary-shared-library
// Use this in consuming projects to ensure consistent styling

module.exports = {
  theme: {
    extend: {
      colors: {
        // P1 component colors (with CSS variable fallbacks)
        'p1-primary': 'var(--p1-primary, #3b82f6)',
        'p1-secondary': 'var(--p1-secondary, #64748b)',
        'p1-success': 'var(--p1-success, #10b981)',
        'p1-warning': 'var(--p1-warning, #f59e0b)',
        'p1-error': 'var(--p1-error, #ef4444)',
        'p1-bg-light': 'var(--p1-bg-light, #fef3c7)',
        'p1-bg-default': 'var(--p1-bg-default, #ffffff)',
        'p1-text': 'var(--p1-text, #111827)',
        'p1-text-muted': 'var(--p1-text-muted, #6b7280)',
        'p1-border': 'var(--p1-border, #e5e7eb)',
      },
      spacing: {
        // P1 component spacing
        'p1-xs': 'var(--p1-spacing-xs, 0.25rem)',
        'p1-sm': 'var(--p1-spacing-sm, 0.5rem)',
        'p1-md': 'var(--p1-spacing-md, 1rem)',
        'p1-lg': 'var(--p1-spacing-lg, 1.5rem)',
        'p1-xl': 'var(--p1-spacing-xl, 2rem)',
      },
      borderRadius: {
        'p1-sm': 'var(--p1-radius-sm, 0.25rem)',
        'p1-md': 'var(--p1-radius-md, 0.5rem)',
        'p1-lg': 'var(--p1-radius-lg, 0.75rem)',
      },
    },
  },
};
