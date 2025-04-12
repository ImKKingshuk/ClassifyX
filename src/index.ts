/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

export function cfx(
  baseStyles: string | ClassValue,
  variantsConfigOrClassName?: Record<string, any> | ClassValue | null,
  variantProps?: Record<string, any>,
  ...additionalClasses: ClassValue[]
) {
  const baseClassString = clsx(baseStyles);

  // Handle case when second argument is just classes, not variants config
  if (
    typeof variantsConfigOrClassName === 'string' ||
    Array.isArray(variantsConfigOrClassName)
  ) {
    return twMerge(
      clsx(baseClassString, variantsConfigOrClassName, ...additionalClasses),
    );
  }
  // Handle case with variant configuration
  else if (
    typeof variantsConfigOrClassName === 'object' &&
    variantsConfigOrClassName !== null
  ) {
    const variantFn = cva(baseClassString, {
      variants: variantsConfigOrClassName.variants,
      defaultVariants: variantsConfigOrClassName.defaultVariants,
    });

    let variantClass = '';
    if (variantProps) {
      variantClass = variantFn(variantProps);
    }

    return twMerge(clsx(baseClassString, variantClass, ...additionalClasses));
  }

  // Default case - just base styles and additional classes
  return twMerge(clsx(baseClassString, ...additionalClasses));
}
