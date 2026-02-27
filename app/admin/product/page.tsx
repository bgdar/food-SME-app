"use server";
// server component hanya menampilkan daftar product tidak ada hootk
import {
  CubeIcon,
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { connectDB } from "@/app/lib/monggoDB";
import Product from "@/app/_model/product";
import { cookies } from "next/headers";

type Product = {
  _id: string;
  product_name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
};

export default async function ProductListPage() {
  await connectDB();

  const cookiesStore = await cookies();

  const products = await Product.find({
    owner: cookiesStore.get("adminname"),
  });

  return (
    <div className="min-h-screen bg-[#312F30] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <CubeIcon className="w-8 text-[#F4A261]" />
              Product List
            </h1>
            <p className="text-[#6D6767]">Semua produk makanan di database</p>
          </div>

          <Link
            href="/admin/products/add"
            className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:opacity-90"
          >
            <PlusIcon className="w-5" />
            Add Product
          </Link>
        </div>

        {/* Table Card */}
        <div className="bg-[#3B3B3B] border border-[#4A4A4A] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#2A2A2A] text-[#F6C860]">
              <tr className="text-left">
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Created</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t border-[#4A4A4A] hover:bg-[#2A2A2A] transition"
                >
                  <td className="p-4">
                    <div className="font-semibold text-white">
                      {product.product_name}
                    </div>
                    <div className="text-sm text-[#6D6767] line-clamp-1">
                      {product.description}
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-[#5A4E4D] text-[#F2E8CF]">
                      {product.category}
                    </span>
                  </td>

                  <td className="p-4 text-[#6ECB63] font-semibold">
                    Rp {product.price.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {product.stock > 0 ? (
                      <span className="text-[#4CAF50] font-medium">
                        {product.stock}
                      </span>
                    ) : (
                      <span className="text-[#F44336] font-medium">
                        Out of Stock
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-[#6D6767] text-sm">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 rounded-lg bg-[#2196F3]/20 text-[#2196F3] hover:bg-[#2196F3]/30">
                        <PencilSquareIcon className="w-5" />
                      </button>

                      <button className="p-2 rounded-lg bg-[#E76F51]/20 text-[#E76F51] hover:bg-[#E76F51]/30">
                        <TrashIcon className="w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-[#6D6767]">
                    Belum ada produk
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
