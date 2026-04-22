// Tailwind preset for p1-secondary-shared-library
// Use this in consuming projects to ensure consistent styling

module.exports = {
  theme: {
    extend: {
      colors: {
        // Puck component colors (with CSS variable fallbacks)
        'puck-primary': 'var(--puck-primary, #3b82f6)',
        'puck-secondary': 'var(--puck-secondary, #64748b)',
        'puck-success': 'var(--puck-success, #10b981)',
        'puck-warning': 'var(--puck-warning, #f59e0b)',
        'puck-error': 'var(--puck-error, #ef4444)',
        'puck-bg-light': 'var(--puck-bg-light, #fef3c7)',
        'puck-bg-default': 'var(--puck-bg-default, #ffffff)',
        'puck-text': 'var(--puck-text, #111827)',
        'puck-text-muted': 'var(--puck-text-muted, #6b7280)',
        'puck-border': 'var(--puck-border, #e5e7eb)',
      },
      spacing: {
        // Puck component spacing
        'puck-xs': 'var(--puck-spacing-xs, 0.25rem)',
        'puck-sm': 'var(--puck-spacing-sm, 0.5rem)',
        'puck-md': 'var(--puck-spacing-md, 1rem)',
        'puck-lg': 'var(--puck-spacing-lg, 1.5rem)',
        'puck-xl': 'var(--puck-spacing-xl, 2rem)',
      },
      borderRadius: {
        'puck-sm': 'var(--puck-radius-sm, 0.25rem)',
        'puck-md': 'var(--puck-radius-md, 0.5rem)',
        'puck-lg': 'var(--puck-radius-lg, 0.75rem)',
      },
    },
  },
};
