"use client";


import { HomeIcon, HeartIcon, MapIcon, UserIcon,ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="fixed bottom-0 md:px-20 left-0 right-0 bg-card py-3 px-6 flex items-center justify-between shadow-xl rounded-t-2xl">
      <Link href={{ pathname: "/" }} className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all ">
        <HomeIcon className="w-6 h-6" />
          Home
      </Link>

      <Link href={{ pathname: "/favorite" }} className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all ">
        <HeartIcon className="w-6 h-6" />
          favorite
      </Link>

<div className="w-13 h-13 flex items-center transition-all duration-300   justify-center bg-text shadow-soft-gray hover:-mt-8 rounded-full group cursor-pointer">
  <Link
    href="/product"
    className="flex flex-col items-center
               text-accent-orange group-hover:text-accent-red"
  >
    <ShoppingBagIcon
      className="w-8 h-8 transition-all duration-300
                 translate-y-0 group-hover:-translate-y-1 group-hover:scale-110"
    />
  </Link>
</div>



      <Link href={{  pathname : "/map" }} className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all ">
        <MapIcon/>map
      </Link>


      <Link href={{ pathname: "/user" }} className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all ">
        <UserIcon className="w-6 h-6" />
          profile
      </Link>
    </nav>
  )
}
