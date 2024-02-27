"use client"

import { useState } from "react"
import Link from "next/link"

export default function Home() {
	const [quotes, setQuotes] = useState([])
	const [text, setText] = useState("Hello")

	return ( 
		
		<div className="bg-cover bg-my-bg-image w-full h-screen ">
			<Link href="/secound">
				<h1> Go to another page</h1>
			</Link>
		<div className="mx-auto w-fit mt-80">
			<div className="text-4xl text-red-500 text-center animate-bounce">
				{quotes.map((quote) => {
					return (
						<p class>
							{quote}
						</p>
					)
				})}
			</div>
			<div className="text-8xl text-green-500 text-center mt-12 bg-fuchsia-700 border-white rounded full">
				{text}
			</div>
			
			<input
				className="text-2xl text-black mt-12"
				type="text" 
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				className="text-2xl ml-8 font-bold border-4 px-2 border-white rounded"
				onClick={() => {
					const newQuotes = quotes.concat([text])
					setQuotes(newQuotes)
					setText("")
				}}
			>
				Save Text
			</button>
			<button
				className="text-2xl ml-8 font-bold border-4 px-2 border-white rounded"
				onClick={() => {
					const newQuotes = []
					setQuotes(newQuotes)
					setText("")
				}}
			>
				Delete Text
			</button>
			
			<div>
			<input
				className="text-2xl text-black mt-12"
				type="text" 
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				className="text-3xl font-bold border-5 px-7 ml-3 border-green rounded-full bg-cyan-900"
				onClick={() => {
					const squote=quotes.concat([text.split("").reverse().join("")])
					setQuotes(squote)
					setText("")

				}}
				>
			Reverse Text
			</button>
			</div>
			</div>
		</div>
	)
}
















