"use server";

import Image from "next/image";
import Link from "next/link";

import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default async function Dashboard() {
  return (
    <div className=" min-h-screen bg-background text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-text">
        Dashboard Image Manager
      </h1>

      {/* Grid Container */}
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="relative w-full h-[50vh] bg-card border border-soft-gray rounded-xl overflow-hidden"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 80px) 100%, 0 100%)",
          }}
        >
          <img
            src="/api/placeholder/800/600 "
            alt="Main"
            className="w-full h-full object-cover opacity-90"
          />
          Food SME
        </div>

        <div className="w-full h-40 bg-icon border border-soft-gray rounded-xl overflow-hidden">
          {/* <Image */}
          {/*   alt="home" */}
          {/*   className="w-full h-full object-cover opacity-90" */}
          {/*   src={""} */}
          {/* /> */}

          <Link href={"/home"}>
            <div className=" rounded-full border bg-background ">
              <ShoppingBagIcon className="w-12 h-12 text-icon shadow-2xl rounded-full" />
            </div>
            <p> come see the food </p>
          </Link>
        </div>

        <div className="w-full h-40 bg-[#3B3B3B] border border-soft-gray rounded-xl overflow-hidden">
          {/* <Image */}
          {/*   alt="admin" */}
          {/*   className="w-full h-full object-cover opacity-90" */}
          {/*   src={""} */}
          {/* /> */}

          <Link href={"/admin"}>
            <div
              className=" rounded-full border w-20
          h-20 bg-background "
            >
              <GlobeAsiaAustraliaIcon className="w-12 h-12 text-[#6D6767]" />
            </div>
            <p>Let's trade</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
