export default function RootLayout({ children }) {
	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<title>Yet Another URL Shortener</title>
			{children}
		</>
	);
}
