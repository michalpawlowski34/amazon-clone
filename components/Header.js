import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header>

            {/* top bar */}
            <div className="flex items-center p-1 py-2 flex-grow bg-amazon_blue">

                {/* logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        alt=''
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" name="" id="" />
                    <SearchIcon className="h-12 p-4"/>
                </div>

                {/* right side */}
                <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello Majkel Pomodor!</p>
                        <p className="font-extrabold md:text-sm">Account and Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">and Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="font-extrabold hidden md:inline md:text-sm">Basket</p>
                    </div>
                </div>

            </div>

            {/* bottom bar */}
            <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today&apos;s deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food and Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health and Personal Care</p>
            </div>

        </header>
    )
}

export default Header
