# CL React UI

A modern React component library with SASS modules and TypeScript support. Built with React 19 and Sass 1.86.

## Installation

```bash
npm install cl-react-ui
```

## Usage

### Import Components

You can import components individually:

```jsx
// Import only the components you need - CSS is automatically included
import { Heading } from "cl-react-ui/Heading";
import { Button } from "cl-react-ui/Button";
```

Or import everything at once:

```jsx
import { Button, Heading } from "cl-react-ui";
```

No need to import CSS separately - it's automatically included with each component!

## Design Token System

This component library implements a comprehensive design token system with three abstraction levels:

### 1. Foundation Tokens

Foundation tokens represent the core design values:

```scss
// Colors
$color-blue-500: #3366ff;
$color-green-500: #34c759;
$color-orange-500: #ff9500;
$color-red-500: #ff3b30;
$color-gray-900: #333333;

// Typography
$font-size-xs: 0.875rem;
$font-size-sm: 1rem;
$font-size-md: 1.25rem;
$font-size-lg: 1.5rem;
$font-size-xl: 1.75rem;
$font-size-2xl: 2rem;
$font-size-3xl: 2.5rem;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 0.75rem;
$spacing-lg: 1rem;
$spacing-xl: 1.5rem;
```

### 2. Semantic Tokens

Semantic tokens map foundation tokens to functional purposes:

```scss
// Semantic Colors
$color-primary: $color-blue-500;
$color-success: $color-green-500;
$color-warning: $color-orange-500;
$color-error: $color-red-500;
$color-text-primary: $color-gray-900;

// Semantic Typography
$font-heading-1: $font-size-3xl;
$font-heading-2: $font-size-2xl;
$font-heading-3: $font-size-xl;
$font-heading-4: $font-size-lg;
$font-heading-5: $font-size-md;
$font-heading-6: $font-size-sm;

// Semantic Spacing
$spacing-button-sm: $spacing-xs $spacing-sm;
$spacing-button-md: $spacing-sm $spacing-lg;
$spacing-button-lg: $spacing-md $spacing-xl;
```

### 3. Component Tokens

Component tokens apply semantic tokens to specific UI elements:

```scss
// Button Tokens
$button-primary-bg: $color-primary;
$button-success-bg: $color-success;
$button-warning-bg: $color-warning;
$button-error-bg: $color-error;

$button-font-small: $font-size-xs;
$button-font-medium: $font-size-sm;
$button-font-large: $font-size-md;

$button-padding-small: $spacing-button-sm;
$button-padding-medium: $spacing-button-md;
$button-padding-large: $spacing-button-lg;

// Heading Tokens
$heading-h1-size: $font-heading-1;
$heading-h2-size: $font-heading-2;
$heading-h3-size: $font-heading-3;
```

This token approach enables consistent theming, supports design system evolution, and makes component styling maintainable.

### Using Components

#### Heading Component

```jsx
import { Heading } from "cl-react-ui/Heading";

function App() {
  return (
    <div>
      <Heading variant="h1" text="Hello World" color="primary" />
      <Heading variant="h2" text="This is a subheading" color="success" />
      <Heading variant="h3" text="Smaller heading" />
    </div>
  );
}
```

Heading props:

- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `text`: string
- `color`: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'
- `className`: optional additional CSS classes

#### Button Component

```jsx
import { Button } from "cl-react-ui/Button";

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="small">
        Small Secondary
      </Button>
      <Button variant="success" size="large">
        Large Success
      </Button>
    </div>
  );
}
```

Button props:

- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `className`: optional additional CSS classes
- All standard button attributes (onClick, disabled, etc.)

## Requirements

- React 19 or higher
- Modern browser support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the library
npm run build
```

## Local Testing with Symlinks

To test this component library in your project locally without publishing to npm:

### 1. Prepare the library

```bash
# From the component library directory
npm run build
npm link
```

### 2. Link to your project

```bash
# From your project directory
npm link cl-react-ui
```

### 3. If using React 19, resolve React versions

To avoid "Invalid Hook Call" errors from duplicate React instances:

```bash
# From the component library directory
npm link ../your-project/node_modules/react
npm link ../your-project/node_modules/react-dom
```

### 4. When you're done testing

```bash
# From your project directory
npm unlink cl-react-ui

# From the component library directory
npm unlink
```

### Troubleshooting Symlinks

- For Windows users with permission issues, run the terminal as administrator
- For npm v7+, you may need to use `--save` flag: `npm link cl-react-ui --save`
- Try using `pnpm` or `yarn` if experiencing issues with npm links

## License

MIT
