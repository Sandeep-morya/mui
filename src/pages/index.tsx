import { Button, PaletteMode, Stack, Switch, Typography } from "@mui/material";
import NextSEO from "components/NextSEO";
import { useRouter } from "next/router";
import { memo, useContext, useRef, useState } from "react";

function Home({ toggleColorMode }: { toggleColorMode: () => void }) {
	const Router = useRouter();
	return (
		<>
			<NextSEO title="Use of Material-UI" />
			<main>
				<Stack bgcolor={"background.default"} gap={5}>
					<Button variant="contained" color={"primary"}>
						I am a Button
					</Button>
					<Button
						onClick={() => Router.push("/nr")}
						variant="outlined"
						color={"primary"}>
						I am a Button
					</Button>
					<Switch onChange={toggleColorMode} />
				</Stack>
			</main>
		</>
	);
}
export default memo(Home);
