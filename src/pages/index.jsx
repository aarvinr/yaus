export default function HomePage() {
	return (
		<main className="flex h-dvh flex-col items-center justify-center gap-3 bg-black text-white">
			<h1 className="text-3xl font-bold">Yet Another URL Shortener</h1>

			<form className="flex items-center gap-2">
				<input
					className="rounded border border-neutral-900 bg-neutral-950 p-1.5 transition-colors outline-none hover:border-neutral-800 focus:border-neutral-800"
					type="url"
				/>
				<button className="rounded bg-white p-1.5 text-black" type="submit">
					Shorten
				</button>
			</form>
		</main>
	);
}
