import Head from "next/head"
interface Props{
    title:string;
    href?:string;
}

const NextSEO = (props: Props) => {
  return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content="Generated by create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default NextSEO