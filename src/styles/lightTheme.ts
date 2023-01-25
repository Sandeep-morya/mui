import { MyThemeType } from "./themeVitals";
import { defaultTypography } from "./themeVitals";

const LightTheme: MyThemeType = {
	palette: {
		primary: {
			main: "#16acea",
			contrastText: "#ffffff",
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
		mode: "light",
		background: {
			paper: "#ffffff",
			default: "#ffffff",
		},
	},
	typography: defaultTypography,
};

export default LightTheme;
