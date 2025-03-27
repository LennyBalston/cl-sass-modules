# CL React UI

A modern React component library with SASS modules and TypeScript support. Built with React 19 and Sass 1.86.

## Installation

```bash
npm install cl-react-ui
```

## Usage

### Import Components and Their Styles

You can import components individually along with their specific styles:

```jsx
// Import only the components you need with their specific styles
import { Heading } from "cl-react-ui/Heading";
import "cl-react-ui/Heading.css";

import { Button } from "cl-react-ui/Button";
import "cl-react-ui/Button.css";
```

Or import everything at once:

```jsx
import { Button, Heading } from "cl-react-ui";
import "cl-react-ui/Button.css";
import "cl-react-ui/Heading.css";
```

### Using Components

#### Heading Component

```jsx
import { Heading } from "cl-react-ui/Heading";
import "cl-react-ui/Heading.css";

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
import "cl-react-ui/Button.css";

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

## License

MIT
