"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from 'jotai'
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <JotaiProvider>
      <SessionProvider>
        <NextUIProvider>
          <NextThemesProvider
            defaultTheme='system'
            attribute='class'
            {...themeProps}>
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </SessionProvider>
    </JotaiProvider>
  );
}
