//
// ClassifyX
// by ImKKingshuk
// Git-  https://github.com/ImKKingshuk/ClassifyX.git
// Copyright © 2023 , @ImKKingshuk | All Rights Reserved.
// GNU General Public License v3.0 or later
//
// src/ClassifyXProvider.tsx
import React, { createContext, ReactNode } from "react";
import ClassifyX, { ClassValue } from "./ClassifyX";

type ClassifyXContextType = {
  ClassifyX: (...args: ClassValue[]) => string;
  bind: (...args: ClassValue[]) => string;
  has: (...args: ClassValue[]) => boolean;
  concat: (...args: ClassValue[]) => string;
  toggle: (base: string, condition: boolean, className: string) => string;
  unique: (...args: ClassValue[]) => string;
  prefix: (prefix: string, ...args: ClassValue[]) => string;
  cssModule: (module: Record<string, string>, ...args: ClassValue[]) => string;
  spacing: (size: number) => string;
  flex: (direction: string, align: string, justify: string) => string;
  flexItem: (flex: number) => string;
  fontSize: (size: number) => string;
  util: (utility: string) => string;
  textAlign: (align: string) => string;
};

const ClassifyXContext = createContext<ClassifyXContextType | undefined>(
  undefined
);

type ClassifyXProviderProps = {
  children: ReactNode;
};

export const ClassifyXProvider: React.FC<ClassifyXProviderProps> = ({
  children,
}: ClassifyXProviderProps) => {
  return (
    <ClassifyXContext.Provider
      value={{
        ClassifyX,
        bind: ClassifyX.bind,
        has: ClassifyX.has,
        concat: ClassifyX.concat,
        toggle: ClassifyX.toggle,
        unique: ClassifyX.unique,
        prefix: ClassifyX.prefix,
        cssModule: ClassifyX.cssModule,
        spacing: ClassifyX.spacing,
        flex: ClassifyX.flex,
        flexItem: ClassifyX.flexItem,
        fontSize: ClassifyX.fontSize,
        util: ClassifyX.util,
        textAlign: ClassifyX.textAlign,
      }}
    >
      {children}
    </ClassifyXContext.Provider>
  );
};

export default ClassifyXContext;
