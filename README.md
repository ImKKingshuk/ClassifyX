<h1 align="center">🎨 ClassifyX 🎨</h1>

<p align="center">🎨 ClassifyX 🎨 : Your Ultimate CSS Class Manager! Simplify styling in JavaScript/TypeScript with dynamic class generation, conditional styling, and more. Seamlessly integrate with CSS Frameworks, support TypeScript, and enjoy automatic camelCase conversion. The go-to utility for cleaner and efficient styling workflows! 💻 🚀 
</p>

<br><br>

## Features

- **Dynamic Class Generation**: Easily generate class names based on conditions, values, and configurations.
- **TypeScript Support**: Fully typed with TypeScript for improved development experience.
- **Conditional Classes**: Apply classes conditionally based on boolean values.
- **Prefixing**: Add prefixes to all generated class names for namespacing or styling consistency.
- **CSS Module Support**: Integrate seamlessly with CSS modules for modular styling.
- **Automatic CamelCase Conversion**: Convert kebab-case class names to camelCase for JavaScript/TypeScript conventions.
- **Unique Classes**: Automatically remove duplicate classes for cleaner and more efficient styling.
- **Toggle Classes**: Conditionally toggle classes based on boolean conditions.
- **Server-Side Rendering (SSR) Support**: Designed to work well with server-side rendering environments.
- **Nested Arrays and Objects Support**: Handle nested arrays and objects to build complex class name structures.
- **Inline Boolean Expressions**: Easily include class names based on inline boolean expressions.

## Installation

npm

```bash
npm install classifyx
```

bun

```bash
bun install classifyx
```

yarn

```bash
yarn install classifyx
```

pnpm

```bash
pnpm install classifyx
```

## Usage

```jsx
import React from "react";
import ClassifyX from "classifyx";
import styles from "./path/to/your/cssModule.module.css";

const MyComponent = ({ isActive, isPrimary, isLarge, isDisabled, variant }) => {
  return (
    <div>
      {/* Basic Usage */}
      <div className={ClassifyX("box", "bordered", "rounded")}>
        Hello, World!
      </div>

      {/* Conditional Classes */}
      <button className={ClassifyX("button", { active: isActive })}>
        {isActive ? "Active Button" : "Inactive Button"}
      </button>

      {/* Toggling Classes */}
      <div className={ClassifyX.toggle("box", isPrimary, "primary")}>
        {isPrimary ? "Primary Box" : "Default Box"}
      </div>

      {/* Prefixing Classes */}
      <div className={ClassifyX.prefix("section", "dark", "wide")}>
        Prefixed Section
      </div>

      {/* Using CSS Modules */}
      <button className={ClassifyX.cssModule(styles, "button", "primary")}>
        Styled Button
      </button>

      {/* Conditional Inline Expressions */}
      <button
        className={ClassifyX(
          "button",
          ClassifyX.conditionalClass(isPrimary && isLarge, "large"),
          ClassifyX.conditionalClass(isDisabled, "disabled")
        )}
      >
        Click me
      </button>

      {/* Unique Classes */}
      <div className={ClassifyX.unique("box", "bordered", "box", "rounded")}>
        Unique Classes
      </div>

      {/* Concatenating Classes */}
      <div>{ClassifyX.concat("box", "bordered", "rounded")}</div>

      {/* Checking if Classes Exist */}
      {ClassifyX.has("box", "bordered") ? (
        <p>Classes exist!</p>
      ) : (
        <p>Classes do not exist!</p>
      )}

      {/* Combining Multiple Features */}
      <button
        className={ClassifyX(
          "button",
          "primary",
          ClassifyX.prefix("btn", "large", { disabled: isDisabled }),
          ClassifyX.cssModule(styles, "custom", "module")
        )}
      >
        Click me
      </button>

      {/* Dynamic Component Styling */}
      <div className={ClassifyX("card", variant === "featured" && "featured")}>
        <h2>Title</h2>
        <p>Description goes here</p>
      </div>
    </div>
  );
};

export default MyComponent;
```

### Super Complex scenarios :

Example 1 :

```jsx
// Suppose you have a dynamic application with various data sources, and you want to apply conditional styling to a component based on external data. The styling rules are complex and depend on multiple factors. ClassifyX can help manage the dynamic class names.

import React from "react";
import ClassifyX from "classifyx";

const ComplexStylingComponent = ({ data }) => {
  const shouldHighlight = data.some((item) => item.priority === "high");
  const shouldShowDetails = data.length > 5;

  return (
    <div
      className={ClassifyX(
        "complex-component",
        shouldHighlight && "highlight",
        shouldShowDetails && "show-details"
        // ... other complex conditions
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

export default ComplexStylingComponent;
```

Example 2:

```jsx
// Imagine you are building a sophisticated dashboard for a dynamic analytics application. This dashboard comprises various widgets, each serving a unique purpose, such as charts, maps, and other data representations. The widgets are loaded dynamically from external sources, and the application needs to handle a multitude of complex styling scenarios.

// The dashboard has a highly interactive user interface, allowing users to toggle between different widgets, and even switch between a light and dark theme. Each widget has its own set of complex styling conditions based on its type, the amount of data it represents, and whether it's currently selected by the user.

// ClassifyX is employed to manage this complexity by dynamically applying class names to the widgets and the overall dashboard. For instance, it handles the dynamic switch between light and dark themes, highlights selected widgets, categorizes widgets based on their types (e.g., charts, maps), and even identifies widgets with a substantial amount of data for special styling.

// This example showcases the power of ClassifyX in addressing an ultra-complex scenario where the styling rules are intricate, dynamic, and contingent on multiple factors. It provides a clean and efficient way to handle the diverse styling needs of a modern, data-driven dashboard.

import React, { useState, useEffect } from "react";
import ClassifyX from "classifyx";

const UltraComplexDashboard = () => {
  const [widgets, setWidgets] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate fetching dynamic widget data
    const fetchWidgets = async () => {
      const result = await fetch("https://api.example.com/widgets");
      const widgetData = await result.json();
      setWidgets(widgetData);
    };

    fetchWidgets();
  }, []);

  const handleWidgetClick = (widget) => {
    setSelectedWidget(widget);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={ClassifyX("dashboard", darkMode && "dark-mode")}>
      <div className="sidebar">
        <button
          className={ClassifyX("toggle-button", darkMode && "dark-mode-toggle")}
          onClick={handleToggleDarkMode}
        >
          Toggle Dark Mode
        </button>
        <ul>
          {widgets.map((widget) => (
            <li
              key={widget.id}
              className={ClassifyX(
                "widget",
                widget === selectedWidget && "selected-widget",
                widget.type === "chart" && "chart-widget",
                widget.type === "map" && "map-widget",
                widget.data.length > 100 && "large-data-widget"
                // ... other complex conditions based on widget properties
              )}
              onClick={() => handleWidgetClick(widget)}
            >
              {widget.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {selectedWidget && (
          <div className="widget-details">
            <h2>{selectedWidget.name}</h2>
            <p>{selectedWidget.description}</p>
            {/* Render widget details based on type */}
            {selectedWidget.type === "chart" && (
              <div className="chart-container">Chart goes here</div>
            )}
            {selectedWidget.type === "map" && (
              <div className="map-container">Map goes here</div>
            )}
            {/* ... other widget types */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UltraComplexDashboard;
```
