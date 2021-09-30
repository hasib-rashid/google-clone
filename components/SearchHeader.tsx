import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import { PlayIcon, CogIcon, PhotographIcon, NewspaperIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import Avatar from './Avatar'
import { Router, useRouter } from 'next/router'

const SearchHeader = () => {
    const router = useRouter()
    const [input, setInput] = useState(router.query.term)

    const handleKeyDown = (e: Event) => {
        // @ts-ignore
        if (e.key === 'Enter') {
            window.location.replace(`/search?term=${input}`)
        }
    }

    return (
        <main className="w-screen">
            <article className="pl-32 search_header_main my-8">
                <header className="flex justify-between">
                    <div className="flex justify-center items-center">
                        <Image onClick={() => router.push("/")} className="cursor-pointer" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width={96} height={30} />
                        <div className="flex border-2 justify-between border-gray-100 rounded-3xl px-4 py-1 text-sm search_header_button mx-14">
                            <SearchIcon className="w-6 text-gray-400" />
                            {/* @ts-ignore */}
                            <input type="text" onKeyPress={(e: any) => handleKeyDown(e)} value={input} onChange={(e: any) => setInput(e.target.value)} className="w-full outline-none mx-2" />
                            {/* Microphone */}
                            <svg className="h-7 w-7 align-middle" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                        </div>
                    </div>
                    <div>
                        <ul className="flex justify-center items-center mr-10">
                            <li className="mx-3"><CogIcon className="w-7 rounded-full hover:bg-gray-100 cursor-pointer" /></li>
                            <li className="mx-3"><ViewGridIcon className="w-7 rounded-full hover:bg-gray-100 cursor-pointer" /></li>
                            <li className="mx-3"><Avatar url="https://res.cloudinary.com/dthcbsgjy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1619081473/Profile%20Pic/Screenshot_20210123-230914_v5r9jl.png" className="" /></li>
                        </ul>
                    </div>
                </header>

                <ul className="mt-7 ml-4 flex w-screen">
                    <li className="flex mx-4 text-blue-600 border-b-2 border-blue-600">
                        <div className="flex justify-center items-center pb-2">
                            <SearchIcon className="w-5 mr-1" />
                            <p>All</p>
                        </div>
                    </li>
                    <li className="flex mx-4 hover:text-blue-600 border-white">
                        <div className="flex justify-center items-center border-b-2 border-white hover:border-blue-600 pb-2">
                            <PlayIcon className="w-5 mr-1" />
                            <p>Videos</p>
                        </div>
                    </li>
                    <li className="flex mx-4 hover:text-blue-600">
                        <div className="flex justify-center items-center border-b-2 border-white hover:border-blue-600 pb-2">
                            <PhotographIcon className="w-5 mr-1" />
                            <p>Images</p>
                        </div>
                    </li>
                    <li className="flex mx-4 hover:text-blue-600">
                        <div className="flex justify-center items-center border-b-2 border-white hover:border-blue-600 pb-2">
                            <NewspaperIcon className="w-5 mr-1" />
                            <p>News</p>
                        </div>
                    </li>
                    <li className="flex mx-4 hover:text-blue-600">
                        <div className="flex justify-center items-center border-b-2 border-white hover:border-blue-600 pb-2">
                            <DotsVerticalIcon className="w-5 mr-1" />
                            <p>More</p>
                        </div>
                    </li>
                </ul>
            </article>
        </main>
    )
}

export default SearchHeader
