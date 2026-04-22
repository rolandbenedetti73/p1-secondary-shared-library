# P1 Secondary Shared Library

Shared Puck editor components for distributed use.

## 🚀 Quick Start

### Install
```bash
npm install
```

### Development
```bash
npm run storybook
```

Opens Storybook at `http://localhost:6006` to preview components.

## 📦 Components

- **SecondTestBlock** - Test component with yellow background
- **TestBlock** - Another test component

## 🔗 Usage in Main Project

### 1. Add as git submodule:
```bash
git submodule add https://github.com/rolandbenedetti73/p1-secondary-shared-library.git lib/puck/secondary-components
```

### 2. Configure Tailwind

Add the preset to your `tailwind.config.js`:
```javascript
module.exports = {
  presets: [
    require('./lib/puck/secondary-components/tailwind.preset'),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/puck/secondary-components/components/**/*.tsx',
  ],
  // ... rest of your config
};
```

### 3. Import CSS variables (optional)

Add to your global CSS:
```css
@import '../lib/puck/secondary-components/styles/variables.css';
```

### 4. Import in your registry:
```typescript
import { SecondTestBlock } from "./secondary-components/components/second-test";
import { TestBlock } from "./secondary-components/components/test";
```

## 🎨 Customization

Override CSS variables in your global styles:
```css
:root {
  --puck-primary: #8b5cf6;      /* Change primary color to purple */
  --puck-spacing-md: 1.5rem;    /* Increase default spacing */
}
```

## 📚 Documentation

Live Storybook: `https://rolandbenedetti73.github.io/p1-secondary-shared-library` (coming soon)

## 🧪 Testing

```bash
npm test
```

## 📝 Adding Components

1. Create component in `components/`
2. Create story file: `components/your-component.stories.tsx`
3. Component appears in Storybook automatically
