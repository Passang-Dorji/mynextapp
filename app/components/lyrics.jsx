export default function Lyrics({ lyrics,artist,title }) {
	return (
		<>
			<div className="text-center">
			
			<div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

				<h1 className="text-4xl font-bold tracking-tight text-orange-700 bg-gradient-to-br sm:text-4xl ">
					{lyrics}
					
				</h1>
				<p className="mt-6 text-lg leading-8 text-white">
					- {lyrics} from {artist},{title}
				</p>
			</div>
		</>
	)
}