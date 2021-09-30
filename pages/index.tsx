import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Header from '../components/Header'

const Home: NextPage = () => {
	return (
		<main>
			<Header />
		</main>
	)
}

export default Home
