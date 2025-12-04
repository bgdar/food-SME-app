import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
      <div className=" min-h-screen bg-background text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-text">Dashboard Image Manager</h1>

        {/* Grid Container */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="relative w-full h-80 bg-card border border-soft-gray rounded-xl overflow-hidden"
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

            PropTypes.func 
          </div>


          {/* Small Image Boxes */}
          <div className="w-full h-40 bg-icon border border-soft-gray rounded-xl overflow-hidden">
            <img
              src="/api/placeholder/400/300"
              alt="Small1"
              className="w-full h-full object-cover opacity-90"
            />
          </div>


          <div className="w-full h-40 bg-[#3B3B3B] border border-[#4A4A4A] rounded-xl overflow-hidden">
            <img
              src="/api/placeholder/400/300"
              alt="Small2"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      <Navbar />
      </div>


  );
}
