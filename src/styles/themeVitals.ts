import { Comfortaa } from "@next/font/google";
import { PaletteMode } from "@mui/material";

export const mainFont = Comfortaa({
	weight: ["300", "400", "500", "700"],
	display: "swap",
	subsets: ["latin"],
	fallback: ["cursive", "sans-serif"],
});

export const FONT_SIZE = 16;
export const defaultTypography = {
	fontFamily: mainFont.style.fontFamily,
	fontSize: FONT_SIZE,
};
export interface ColorOptionsType {
	main: string;
	contrastText?: string;
}
export interface BackgroundType {
	paper: string;
	default: string;
}
export interface PaletteType {
	primary: ColorOptionsType;
	secondary: ColorOptionsType;
	error: ColorOptionsType;
	success: ColorOptionsType;
	mode: PaletteMode;
	background: BackgroundType;
}
export interface MyThemeType {
	palette: PaletteType;
	typography: typeof defaultTypography;
}
