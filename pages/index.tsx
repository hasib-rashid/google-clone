import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MicrophoneIcon, SearchCircleIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const handleKeyDown = (e: Event) => {
		// @ts-ignore
		if (e.key === 'Enter') {
			// @ts-ignore
			const term = searchInputRef.current?.value;

			if (!term) return;


			window.location.replace(`/search?term=${term}`);
		}
	}

	const search = (e: any) => {
		// @ts-ignore
		const term = searchInputRef.current?.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<main>
			<Header />
			<div className="flex flex-col justify-center items-center mt-10">
				<Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" width={272} height={92} />
				<div className="flex mt-5 border-2 border-gray-100 rounded-3xl px-4 py-2 w-1/2">
					<SearchIcon className="w-6 text-gray-400" />
					<input type="text" ref={searchInputRef} onKeyPress={(e: any) => handleKeyDown(e)} className="w-full mx-3 outline-none"></input>
					<button className="hidden" onClick={search}>Hidden</button>
					{/* Microphone */}
					<svg className="h-7 w-7 align-middle" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
				</div>
				<section className="flex mt-6">
					<button onClick={search} className="mx-3 px-4 py-2 bg-gray-100 text-sm rounded-md">Google Search</button>
					<button onClick={search} className="mx-3 px-4 py-2 bg-gray-100 text-sm rounded-md">I'm Feeling Lucky</button>
				</section>
				<Footer />
			</div>
		</main>
	)
}

export default Home
