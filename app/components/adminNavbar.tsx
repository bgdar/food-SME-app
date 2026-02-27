import { HeartIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function NavbarAdmin() {
  return (
    <nav className="fixed bottom-0 md:px-20 left-0 right-0 bg-card py-3 px-6 flex items-center justify-between shadow-xl rounded-t-2xl">
      <Link
        href={{ pathname: "/admin" }}
        className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all "
      >
        <HomeIcon className="w-6 h-6" />
        Home
      </Link>

      <Link
        href={{ pathname: "/admin/product" }}
        className=" cursor-pointer flex flex-col items-center text-text/80 hover:text-text transition-all "
      >
        <ShoppingBagIcon className="w-6 h-6" />
        product
      </Link>
    </nav>
  );
}
