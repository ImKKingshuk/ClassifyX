<h1 align="center">ClassifyX</h1>

<p align="center">
ClassifyX: Your Ultimate Style Utility! Effortlessly generate dynamic classes, create and manage variants, merge classes, and apply conditional styles. With full TypeScript support and seamless integration with Tailwind CSS and other frameworks, streamline your styling workflow! 💻 🚀
</p>

<br> <br>

## Features

- **Dynamic Class Generation**: Generate class names dynamically based on conditions, values, and configurations. This allows for flexible and powerful styling logic that adapts to different use cases.

- **Variant-Based Styling**: Support for defining styling variants, enabling dynamic styling based on different variant properties. You can define default variants and apply them with the flexibility of using variant-specific properties.

- **Class Merging**: Automatically merge classes with a built-in conflict resolution mechanism. This ensures that multiple class names, including those with Tailwind CSS, are merged efficiently, removing duplicate classes and resolving conflicting styles.

- **Conditional Classes**: Apply classes conditionally based on boolean values or dynamic properties. This allows you to toggle styles without the need for complex logic.

- **Additional Classes Support**: You can pass additional classes as arguments, making it easy to extend the base and variant classes with extra styling without any hassle.

- **CSS Module Integration**: Seamlessly integrate with CSS Modules, allowing you to use scoped styles in modular fashion, while still benefiting from the dynamic class generation and merging features.

- **TypeScript Support**: Fully typed, offering enhanced developer experience with improved code completion, type safety, and error checking in TypeScript environments.

- **Server-Side Rendering (SSR) Compatibility**: Designed to work well with server-side rendering environments, ensuring that class names are generated and handled correctly during the SSR process.

- **Inline Boolean Expressions**: Easily include class names based on inline boolean expressions, enabling simple and concise syntax for conditional styling.

## Installation

Install `ClassifyX` using your preferred package manager:

### bun

```bash
bun add classifyx
```

### npm

```bash
npm install classifyx
```

### pnpm

```bash
pnpm add classifyx
```

### yarn

```bash
yarn add classifyx
```

## API Reference

### `cfx(baseStyles, variantsConfigOrClassName?, variantProps?, ...additionalClasses)`

| Parameter                   | Type                                | Description                                                                                                                              |
| --------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `baseStyles`                | `string \| ClassValue`              | Base class or classes to apply.                                                                                                          |
| `variantsConfigOrClassName` | `Record<string, any> \| ClassValue` | Variant configuration object or additional class name(s).                                                                                |
| `variantProps`              | `VariantProps<any>`                 | Variant properties for applying conditional variant-based styles. A configuration object for managing dynamic styling based on variants. |
| `additionalClasses`         | `ClassValue[]`                      | Additional class names to merge and apply conditionally.                                                                                 |

## Usage

### Basic Class Merging

```jsx
import { cfx } from 'classifyx';

const Button = ({ isActive }) => (
  <button className={cfx('base-btn', isActive && 'active-btn')}>
    {isActive ? 'Active' : 'Inactive'}
  </button>
);
```

---

### Variants: Dynamic Styling Example

#### Define a Component with Variants

```jsx
import { cfx } from 'classifyx';

const AlertBox = ({ type }) => (
  <div
    className={cfx(
      'alert',
      {
        variants: {
          type: {
            success: 'alert-success',
            error: 'alert-error',
            warning: 'alert-warning',
          },
        },
        defaultVariants: { type: 'success' },
      },
      { type },
    )}
  >
    This is a {type} alert!
  </div>
);
```

#### Example

```jsx
<AlertBox type="error" />
<AlertBox type="warning" />
<AlertBox /> {/* Defaults to 'success' */}
```

---

### Combining Base Styles, Variants, and Additional Classes

```jsx
const Card = ({ isSelected, size }) => (
  <div
    className={cfx(
      'base-card',
      {
        variants: {
          size: {
            small: 'card-small',
            large: 'card-large',
          },
          selected: {
            true: 'card-selected',
          },
        },
        defaultVariants: {
          size: 'small',
        },
      },
      { size, selected: isSelected },
      'extra-shadow',
    )}
  >
    Card Content
  </div>
);
```

#### Example

```jsx
<Card size="large" isSelected={true} />
<Card /> {/* small and not selected by default */}
```

---

### Conditional Class Merging

```jsx
const NavItem = ({ isActive }) => (
  <a
    className={cfx('nav-item', {
      active: isActive,
      inactive: !isActive,
    })}
  >
    {isActive ? 'Active' : 'Inactive'}
  </a>
);
```

---

### Merging Tailwind CSS Classes with Conflict Resolution

```jsx
const ProfilePic = ({ isRounded }) => (
  <img
    className={cfx('h-12 w-12 border', isRounded && 'rounded-full')}
    src="/profile.jpg"
    alt="Profile"
  />
);
```

---

### Complex Variant-Based Styling with Custom Properties

```jsx
const Badge = ({ type, size, isOutlined }) => (
  <span
    className={cfx(
      'badge',
      {
        variants: {
          type: {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-blue-500',
          },
          size: {
            small: 'text-sm px-2',
            large: 'text-lg px-4',
          },
        },
        defaultVariants: {
          type: 'info',
          size: 'small',
        },
      },
      { type, size },
      isOutlined && 'border border-current',
    )}
  >
    Badge
  </span>
);
```

#### Usage

```jsx
<Badge type="error" size="large" isOutlined />
<Badge type="success" />
<Badge size="small" />
```

---

### Dynamic Class Names for Lists

```jsx
const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li
        key={task.id}
        className={cfx('task-item', task.completed ? 'completed' : 'pending')}
      >
        {task.name}
      </li>
    ))}
  </ul>
);
```

---

### Inline Boolean Expressions for Conditional Styles

```jsx
const Button = ({ disabled }) => (
  <button
    className={cfx(
      'btn',
      disabled && 'cursor-not-allowed opacity-50',
      !disabled && 'hover:bg-blue-500',
    )}
    disabled={disabled}
  >
    Click Me
  </button>
);
```

## License

This project is licensed under the GPL-3.0-or-later License.
