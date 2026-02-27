"use client";

import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface LogoutModalProps {
  user: string;
}

export default function BtnLogout({ user }: LogoutModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnclose = () => {
    setIsOpen(false);
  };
  const handleOnOpen = () => {
    setIsOpen(true);
  };
  const handleOnLogout = () => {
    if (user) {
      fetch("/api/" + user, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("user  berhasil dihapus");
          } else {
            console.error("Gagal menghapus data");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <>
      <button
        onClick={handleOnOpen}
        className="w-full py-3 mt-4 bg-accent-red text-white font-semibold rounded-xl hover:bg-[#D1495B] transition"
      >
        Logout
      </button>
      <div
        className={`  ${isOpen ? "block" : "hidden "} fixed inset-0 z-50 flex items-center justify-center bg-black/50`}
      >
        {/* Modal Box */}
        <div className="bg-theme-secondary rounded-lg shadow-xl w-80 p-6 relative">
          {/* Close Button */}
          <button
            onClick={handleOnclose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-700"
          >
            <XMarkIcon className="h-5 w-5 text-white" />
          </button>

          {/* Modal Content */}
          <div className="text-center">
            <ArrowRightOnRectangleIcon className="h-12 w-12 mx-auto mb-4 text-theme-accent-red" />
            <h2 className="text-xl font-bold mb-2">Logout</h2>
            <p className="text-theme-soft-gray mb-6">
              Apakah kamu yakin ingin logout dari akunmu?
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleOnclose}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleOnLogout}
                className="px-4 py-2 rounded-lg bg-theme-accent-red hover:opacity-90 text-white flex items-center gap-2"
              >
                Logout
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
