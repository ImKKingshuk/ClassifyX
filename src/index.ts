/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export function cfx(
  baseStyles: string | ClassValue,
  variantsConfigOrClassName?: Record<string, any> | ClassValue | null,
  variantProps?: VariantProps<any>,
  ...additionalClasses: ClassValue[]
) {
  const baseClassString = clsx(baseStyles);

  let variantClass = '';

  if (
    typeof variantsConfigOrClassName === 'string' ||
    Array.isArray(variantsConfigOrClassName)
  ) {
    return twMerge(
      clsx(baseClassString, variantsConfigOrClassName, ...additionalClasses),
    );
  } else if (
    typeof variantsConfigOrClassName === 'object' &&
    variantsConfigOrClassName !== null
  ) {
    const variantFn = tv({
      base: baseClassString,
      variants: variantsConfigOrClassName.variants,
      defaultVariants: variantsConfigOrClassName.defaultVariants,
    });

    if (variantProps) {
      variantClass = variantFn(variantProps);
    }

    return twMerge(clsx(baseClassString, variantClass, ...additionalClasses));
  }

  return twMerge(clsx(baseClassString, ...additionalClasses));
}
