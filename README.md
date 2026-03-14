# younique-ui

A beautifully designed React UI component library built on [shadcn/ui](https://ui.shadcn.com/) and [Base UI](https://base-ui.com/).

[![npm version](https://img.shields.io/npm/v/younique-ui.svg)](https://www.npmjs.com/package/younique-ui)
[![license](https://img.shields.io/npm/l/younique-ui.svg)](https://github.com/Im-younique/YouniqueUI/blob/main/LICENSE)

## Features

- 21 production-ready components
- Built on [Base UI](https://base-ui.com/) unstyled primitives
- Styled with [Tailwind CSS v4](https://tailwindcss.com/) and [CVA](https://cva.style/)
- Full TypeScript support with exported types
- ESM and CJS dual output
- Light and dark mode via CSS variables
- Storybook for interactive documentation
- Tree-shakeable exports

## Installation

```bash
npm install younique-ui
```

## Quick Start

Import the stylesheet once in your root layout:

```tsx
import 'younique-ui/styles.css';
```

Then use the components:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'younique-ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| Avatar | User profile image with fallback |
| Badge | Status indicator and label |
| Button | Primary interaction element with variants |
| Card | Container with header, content, and footer |
| Checkbox | Toggle input for boolean values |
| Dialog | Modal overlay for focused interaction |
| DropdownMenu | Contextual menu with items and sub-menus |
| Input | Text input field |
| Label | Accessible form label |
| Popover | Floating content panel |
| Progress | Determinate progress indicator |
| Select | Dropdown selection input |
| Separator | Visual divider (horizontal/vertical) |
| Sheet | Slide-out side panel |
| Sidebar | Application navigation sidebar |
| Skeleton | Loading placeholder |
| Switch | Toggle between two states |
| Table | Data display with header, body, and footer |
| Tabs | Tabbed content panels |
| Textarea | Multi-line text input |
| Tooltip | Contextual hint on hover |

## Theming

younique-ui uses CSS custom properties (oklch color space) for theming. All components inherit from these variables:

```css
:root {
  --primary: oklch(0.55 0.18 230);
  --secondary: oklch(0.96 0.005 265);
  --destructive: oklch(0.58 0.22 27);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... */
}
```

Override these in your own CSS to customize the theme. For dark mode, add a `.dark` class to your root element.

### Advanced: Using your own Tailwind config

If you already run Tailwind CSS v4, you can import only the theme variables instead of the full stylesheet:

```css
@import 'younique-ui/theme.css';
```

Then add the library to your Tailwind content config:

```
node_modules/younique-ui/dist/**/*.js
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook dev server
npm run dev

# Build the library
npm run build

# Build static Storybook
npm run build-storybook
```

## Tech Stack

- [React 19](https://react.dev/) + TypeScript
- [Base UI](https://base-ui.com/) — Unstyled, accessible primitives
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [CVA](https://cva.style/) — Class variance authority for component variants
- [tsup](https://tsup.egoist.dev/) — TypeScript bundler
- [Storybook 8](https://storybook.js.org/) — Component documentation

## License

[MIT](LICENSE)
