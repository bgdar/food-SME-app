
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";


export default function NotFound() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#312F30] text-white p-6">
      <div className="text-center">
        <ExclamationTriangleIcon className="w-24 h-24 mx-auto text-[#F4A261]" />


        <h1 className="text-6xl font-bold mt-6">404</h1>
        <p className="text-xl mt-4 text-[#F2E8CF]">Halaman tidak ditemukan</p>


        <div className="mt-8 bg-[#3B3B3B] p-6 rounded-2xl shadow-lg max-w-md mx-auto border border-[#4A4A4A]">
          <p className="text-[#FFFFFF] mb-4">
            Sepertinya halaman yang kamu cari tidak tersedia.
          </p>
          {/* <Link */}
          {/*   to="/" */}
          {/*   className="inline-block mt-4 px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105" */}
          {/*   style={{ */}
          {/*     background: "linear-gradient(90deg, #F4A261, #E76F51)", */}
          {/*   }} */}
          {/* > */}
          {/*   Kembali ke Beranda */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  )

}
