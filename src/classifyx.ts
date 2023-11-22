//
// ClassifyX
// by ImKKingshuk
// Git-  https://github.com/ImKKingshuk/ClassifyX.git
// Copyright © 2023 , ImKKingshuk | All Rights Reserved.
//

type ClassValue = string | number | { [key: string]: any } | ClassValue[];

function isString(value: any): value is string {
  return typeof value === "string" || value instanceof String;
}

function isObject(value: any): value is { [key: string]: any } {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

function getPrefixedClassNames(
  prefix: string,
  classNames: string | string[]
): string[] {
  const classes = isArray(classNames) ? classNames : [classNames];
  return classes.map((className) => `${prefix}-${className}`);
}

function getCssModuleClassNames(
  module: Record<string, string>,
  classNames: string | string[]
): string[] {
  const classes = isArray(classNames) ? classNames : [classNames];
  return classes.map((className) => module[className] || className);
}

function getClassNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (isString(arg) || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (isArray(arg)) {
      classes.push(getClassNames(...arg));
    } else if (isObject(arg)) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

function ClassifyX(...args: ClassValue[]): string {
  const classes = getClassNames(...args);

  return classes;
}

ClassifyX.bind = function (...args: ClassValue[]): string {
  const classes = getClassNames(...args);

  return classes.trim();
};

ClassifyX.has = function (...args: ClassValue[]): boolean {
  const classes = getClassNames(...args);

  return classes.length > 0;
};

ClassifyX.concat = function (...args: ClassValue[]): string {
  const classes = getClassNames(...args);

  return classes;
};

ClassifyX.toggle = function (
  base: string,
  condition: boolean,
  className: string
): string {
  return condition ? ClassifyX(base, className) : base;
};

ClassifyX.unique = function (...args: ClassValue[]): string {
  const classes = getClassNames(...args);

  return [...new Set(classes)].join(" ");
};

ClassifyX.prefix = function (prefix: string, ...args: ClassValue[]): string {
  const classes = getClassNames(...args);
  const prefixedClasses = getPrefixedClassNames(prefix, classes);

  return prefixedClasses.join(" ");
};

ClassifyX.cssModule = function (
  module: Record<string, string>,
  ...args: ClassValue[]
): string {
  const classes = getClassNames(...args);
  const moduleClasses = getCssModuleClassNames(module, classes);

  return moduleClasses.join(" ");
};

module.exports = ClassifyX;
