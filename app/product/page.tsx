"use server";

import ProductModel from "@/app/_model/product";

import { TypeProduct } from "../_types/types";
import { connectDB } from "@/app/lib/monggoDB";


import NavbarUser from "../components/navbarUser";

export default async function Product() {
  await connectDB()
 
 // dapatkan semua product dari database , untuk di tampilkkan berdasarkan nama owner
  const products : TypeProduct[] = await ProductModel.find(); // ambil berdasarkan owner aja nantik

  console.info(products);

  const exampleproducts = [
    { id: 1, name: "Ayam Bakar", price: "25.000", img: "/img/ayam-bakar.jpg" },
    {
      id: 2,
      name: "Nasi Goreng",
      price: "18.000",
      img: "/img/nasi-goreng.jpg",
    },
    { id: 3, name: "Sate Ayam", price: "22.000", img: "/img/sate-ayam.jpg" },
    { id: 4, name: "Mie Ayam", price: "15.000", img: "/img/mie-ayam.jpg" },
    { id: 5, name: "Burger Spicy", price: "30.000", img: "/img/burger.jpg" },
    { id: 6, name: "Es Teh Manis", price: "5.000", img: "/img/esteh.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background text-text p-6">
      <h1 className="text-2xl font-bold mb-6 text-accent-orange">
        Product Makanan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exampleproducts.map((item) => (
          <div
            key={item.id}
            className="bg-[#3B3B3B] rounded-xl p-4 shadow-lg border border-[#4A4A4A] hover:scale-105 transition"
          >
            <div className="w-full h-40 bg-[#2A2A2A] rounded-lg overflow-hidden mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-[#F6C860] mt-1">Rp {item.price}</p>

            <button className="w-full mt-4 py-2 bg-accent-orange text-black font-semibold rounded-lg hover:bg-accent-red transition">
              Pesan
            </button>
          </div>
        ))}
      </div>

      <NavbarUser />
    </div>
  );
}
