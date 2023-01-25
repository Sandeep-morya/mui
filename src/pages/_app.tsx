import {
	createTheme,
	CssBaseline,
	PaletteMode,
	ThemeProvider,
} from "@mui/material";
import LightTheme from "@/styles/lightTheme";
import DarkTheme from "@/styles/darkTheme";

import type { AppProps } from "next/app";
import { useCallback, useMemo, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = useState<PaletteMode>("light");

	const toggleColorMode = useCallback(() => {
		setMode((prev) => {
			const colorMode: typeof prev = prev === "light" ? "dark" : "light";
			localStorage.setItem("colorMode", colorMode);
			return colorMode;
		});
	}, []);

	const theme = useMemo(
		() => createTheme(mode === "light" ? LightTheme : DarkTheme),
		[mode],
	);

	return (
		// we are going to use our theme istead of MUI-theme

		<ThemeProvider {...{ theme }}>
			<CssBaseline enableColorScheme />
			<Component {...pageProps} {...{ toggleColorMode }} />
		</ThemeProvider>
	);
}
