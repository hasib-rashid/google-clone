import { ViewGridIcon } from '@heroicons/react/solid'
import React from 'react'
import Avatar from './Avatar'

const Header = () => {
    return (
        <header className="flex justify-between h-7">
            {/* Header Left */}
            <div className="select-none">
                <h1 className="text-white">Google Clone</h1>
            </div>

            {/* Header Right */}
            <div>
                <ul className="flex justify-center items-center h-14">
                    <li className="mx-4">Gmail</li>
                    <li className="mx-4">Image</li>
                    <li className="mx-4"><ViewGridIcon className="w-7 rounded-full hover:bg-gray-100 cursor-pointer" /></li>
                    <li className="mx-4"><Avatar url="https://res.cloudinary.com/dthcbsgjy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1619081473/Profile%20Pic/Screenshot_20210123-230914_v5r9jl.png" className="" /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
