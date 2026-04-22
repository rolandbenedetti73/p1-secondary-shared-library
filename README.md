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

Add as git submodule:
```bash
git submodule add https://github.com/rolandbenedetti73/p1-secondary-shared-library.git lib/puck/secondary-components
```

Import in your registry:
```typescript
import { SecondTestBlock } from "./secondary-components/components/second-test";
import { TestBlock } from "./secondary-components/components/test";
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
