<h1 align="center">🎨 ClassifyX 🎨</h1>

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
bun

```bash
bun add classifyx
```

npm

```bash
npm install classifyx
```

pnpm

```bash
pnpm add classifyx
```

yarn

```bash
yarn add classifyx
```

## Usage

### Basic Example

```jsx
import React from 'react';
import { cfx } from 'classifyx';

const MyComponent = ({ isActive }) => (
  <button className={cfx('button', { active: isActive })}>
    {isActive ? 'Active' : 'Inactive'}
  </button>
);

export default MyComponent;
```

### Advanced Usage

ClassifyX handles dynamic styling scenarios with ease.

```jsx
import React from 'react';
import { cfx } from 'classifyx';

const MyComponent = ({ isActive, isPrimary, isLarge }) => (
  <div>
    {/* Conditional Classes */}
    <button className={cfx('button', { active: isActive })}>
      {isActive ? 'Active Button' : 'Inactive Button'}
    </button>

    {/* Toggle Class */}
    <div className={cfx('box', isPrimary && 'primary', isLarge && 'large')}>
      {isPrimary ? 'Primary Box' : 'Default Box'}
    </div>

    {/* Combining Multiple Classes */}
    <div className={cfx('section', 'dark', 'wide')}>Styled Section</div>
  </div>
);

export default MyComponent;
```

## Complex Scenarios

### Example 1: Styling Based on External Data

Dynamically style a component based on complex conditions from an external data source.

```jsx
import React from 'react';
import { cfx } from 'classifyx';

const ComplexComponent = ({ data }) => {
  const shouldHighlight = data.some((item) => item.priority === 'high');
  const shouldShowDetails = data.length > 5;

  return (
    <div
      className={cfx(
        'complex-component',
        shouldHighlight && 'highlight',
        shouldShowDetails && 'show-details',
      )}
    >
      <h2>Title</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplexComponent;
```

### Example 2: Ultra-Complex Dashboard

Handle complex styling conditions in a dynamic analytics dashboard.

```jsx
import React, { useState, useEffect } from 'react';
import { cfx } from 'classifyx';

const UltraComplexDashboard = () => {
  const [widgets, setWidgets] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate fetching widget data
    const fetchWidgets = async () => {
      const result = await fetch('https://api.example.com/widgets');
      const widgetData = await result.json();
      setWidgets(widgetData);
    };

    fetchWidgets();
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={cfx('dashboard', darkMode && 'dark-mode')}>
      <button
        className={cfx('toggle-button', darkMode && 'dark-mode-toggle')}
        onClick={handleToggleDarkMode}
      >
        Toggle Dark Mode
      </button>
      <ul>
        {widgets.map((widget) => (
          <li
            key={widget.id}
            className={cfx(
              'widget',
              widget === selectedWidget && 'selected-widget',
              widget.type === 'chart' && 'chart-widget',
              widget.type === 'map' && 'map-widget',
              widget.data.length > 100 && 'large-data-widget',
            )}
            onClick={() => setSelectedWidget(widget)}
          >
            {widget.name}
          </li>
        ))}
      </ul>
      <div className="main-content">
        {selectedWidget && (
          <div className="widget-details">
            <h2>{selectedWidget.name}</h2>
            <p>{selectedWidget.description}</p>
            {selectedWidget.type === 'chart' && (
              <div className="chart-container">Chart goes here</div>
            )}
            {selectedWidget.type === 'map' && (
              <div className="map-container">Map goes here</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UltraComplexDashboard;
```

## API Reference

### `cfx(baseStyles, variantsConfigOrClassName?, variantProps?, ...additionalClasses)`

- **`baseStyles`**: A string or array of base classes.
- **`variantsConfigOrClassName`**: An object to define variants or a class name string for additional styling.
- **`variantProps`**: A configuration object for managing dynamic styling based on variants.
- **`additionalClasses`**: Additional classes to apply conditionally.

## License

This project is licensed under the GPL-3.0-or-later License.
