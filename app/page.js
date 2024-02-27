import Lyrics from "./components/lyrics"

async function getData() {
	const res = await fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<>
		<div className="bg-cover bg-my-bg-image w-full h-screen ">
			<Lyrics
				lyrics={data.lyrics}
				artist={"Coldplay"}
				title={"Adventure of a Lifetime"}
			/>
			</div>
		</>
	)
}