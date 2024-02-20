export default function Article({ title, paragraphs }) {
	return (
		<>
			<h1 className="text-xl text-center py-7 italic outline double">
				{title}
			</h1>
			{paragraphs.map((paragraph) => {
				return (
					<p className="py-4 px-16 animate-bounce	">
						{paragraph}
					</p>
				)
			})}
		</>
	)
}