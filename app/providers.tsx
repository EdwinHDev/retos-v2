"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AuthProvider } from "@/context/auth";
import { Toaster } from 'sonner';

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<AuthProvider>
			<NextUIProvider>
				<NextThemesProvider {...themeProps}>
					<Toaster position="bottom-center" richColors closeButton dir="auto" />
					{children}
				</NextThemesProvider>
			</NextUIProvider>
		</AuthProvider>
	);
}
