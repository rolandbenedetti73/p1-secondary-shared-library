# P1 Secondary Shared Library

A comprehensive Puck component library built with Tailwind CSS v4, featuring marketing, editorial, and layout blocks.

## 🚀 Quick Start

### Development
```bash
npm install
npm run storybook
```

Opens Storybook at `http://localhost:6006` to preview components.

## 📦 Component Categories

- **🌐 Global** - Header, Footer
- **🎯 Attention** - Hero, Announcement
- **🤝 Trust** - Logos, Testimonials, Stats, Team Grid
- **💎 Value** - Features, Feature Media, Steps, Timeline
- **🖼️ Showcase** - Card Grid, Image, Gallery
- **🚀 Convert** - Pricing, FAQ, Lead Capture, CTA, Comparison Table
- **📰 Editorial** - Article Header, Rich Text, Figure, Pull Quote, Embed, Callout
- **🧱 Layout** - Columns, Container, Tabs, Accordion
- **✍️ Content** - Heading, Paragraph, Quote, List, Button, Divider, Spacer

## 🔗 Usage in Your Project

### 1. Add as git submodule

```bash
git submodule add https://github.com/rolandbenedetti73/p1-secondary-shared-library.git lib/puck/secondary-components
```

### 2. **Import Required CSS** (Critical!)

Add these imports to your app's main stylesheet (e.g., `styles.css` or `app.css`):

```css
@import "tailwindcss";
@import "../lib/puck/secondary-components/styles/variables.css";
@import "../lib/puck/secondary-components/styles/theme.css";
```

**⚠️ Important:** Without these imports, components will have **no spacing or styling**. These files define the custom Tailwind tokens (`p1-xl`, `p1-lg`, `p1-primary`, etc.) used by all components.

### 3. Add component paths to Tailwind content

Update your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/puck/secondary-components/components/**/*.tsx',
  ],
  // ... rest of your config
};
```

### 4. Import components in your Puck config

```typescript
import { 
  HeroBlock, 
  TestimonialBlock, 
  FeatureCardsBlock,
  // ... or use the pre-configured bundle:
  marketingBlocks,
  secondaryLibraryCategories 
} from "./lib/puck/secondary-components/components/index";

// Use individual components
const config = {
  components: {
    HeroBlock,
    TestimonialBlock,
  }
};

// Or use the full bundle with categories
const config = {
  components: marketingBlocks,
  categories: secondaryLibraryCategories,
};
```

## 🎨 Customization

Override CSS variables in your global styles:
```css
:root {
  --p1-primary: #8b5cf6;      /* Change primary color to purple */
  --p1-spacing-md: 1.5rem;    /* Increase default spacing */
}
```

## 📚 Documentation

**Live Storybook:** https://rolandbenedetti73.github.io/p1-secondary-shared-library

## 🧪 Testing

```bash
npm test
```

## 📝 Adding Components

1. Create component in `components/`
2. Create story file: `components/your-component.stories.tsx`
3. Component appears in Storybook automatically
