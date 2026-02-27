"use client";
import {
  UserCircleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  HeartIcon,
  ClockIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

import BtnLogout from "../components/btnLogout";

import NavbarUser from "../components/navbarUser";
export default function Profile() {
  return (
    <div className="min-h-screen bg-background text-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <UserCircleIcon className="w-16 h-16 text-accent-orange" />
        <div>
          <h1 className="cl-accent-yellow  font-bold">Zero User</h1>
          <p className=" text-acc text-sm">Member</p>
        </div>
      </div>

      <div className="bg-icon p-4 rounded-xl border border-card mb-6">
        <h2 className="text-lg font-semibold mb-4 text-accent-orange">
          Informasi Akun
        </h2>
        <div className="flex items-center gap-3 mb-3">
          <EnvelopeIcon className="w-6 h-6 text-accent-orange" />
          <span>zero@example.com</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <PhoneIcon className="w-6 h-6 text-accent-green" />
          <span>+62 812 3456 7890</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="w-6 h-6 text-accent-red" />
          <span>Jakarta, Indonesia</span>
        </div>
      </div>

      <div className="bg-card p-4 rounded-xl border border-[#4A4A4A] mb-6">
        <h2 className="text-lg font-semibold mb-4 text-accent-orange">
          Aktivitas
        </h2>
        <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg mb-3 cursor-pointer hover:bg-[#5A4E4D] transition">
          <div className="flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-accent-yellow" />
            <span>Riwayat Pesanan</span>
          </div>
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-gray-300" />
        </div>
        <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg mb-3 cursor-pointer hover:bg-[#5A4E4D] transition">
          <div className="flex items-center gap-3">
            <HeartIcon className="w-6 h-6 text-accent-red" />
            <span>Favorit</span>
          </div>
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-gray-300" />
        </div>
        <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg cursor-pointer hover:bg-[#5A4E4D] transition">
          <div className="flex items-center gap-3">
            <Cog6ToothIcon className="w-6 h-6 text-[#6ECB63]" />
            <span>Pengaturan Akun</span>
          </div>
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-gray-300" />
        </div>
      </div>

      <div className="flex  items-center justify-between p-3 ">
        <BtnLogout user="user" />
      </div>

      <NavbarUser />
    </div>
  );
}
