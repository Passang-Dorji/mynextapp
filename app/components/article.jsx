export default function Article({ title, paragraphs }) {
	return (
		<>
		<i class="material-icons .icon width: 100px;height: 100px;border-radius:50%; background-colour:#ccc;display: flex;justify-content: center;align-items: center;
		">pusa
		</i>

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