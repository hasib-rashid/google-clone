import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-600 bottom-0 absolute w-screen">
            <article className="px-6 pl-10 py-3 border-b-2 border-gray-300">
                Made with ❤ Hasib Al Rashid. No code copied from any other sources. <u>https://github.com/hasib-rashid/google-clone/</u>
            </article>
            <section className="flex justify-between px-6 py-3">
                <div className="flex">
                    <li className="mx-4">About</li>
                    <li className="mx-4">Advertising</li>
                    <li className="mx-4">Business</li>
                    <li className="mx-4">How Search Works</li>
                </div>
                <div className="flex">
                    <li className="mx-4">Privacy</li>
                    <li className="mx-4">Term</li>
                    <li className="mx-4">Settings</li>
                </div>
            </section>
        </footer>
    )
}

export default Footer
