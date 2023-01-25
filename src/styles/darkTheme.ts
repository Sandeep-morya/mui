import { MyThemeType } from "./themeVitals";
import { defaultTypography } from "./themeVitals";

const DarkTheme: MyThemeType = {
	palette: {
		primary: {
			main: "#16acea",
			contrastText: "#16213E",
		},
		secondary: {
			main: "#e8d71e",
		},
		error: {
			main: "#d71b3b",
		},
		success: {
			main: "#1b6535",
		},
		mode: "dark",
		background: {
			paper: "#16213E",
			default: "#16213E",
		},
	},
	typography: defaultTypography,
};

export default DarkTheme;
