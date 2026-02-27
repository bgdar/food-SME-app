"use client";

import { useState } from "react";
import {
  TagIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AddProductPage() {
  const [form, setForm] = useState({
    product_name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const [res, setRes] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      product_name: form.product_name,
      price: Number(form.price),
      category: form.category,
      description: form.description,
      stock: Number(form.stock),
    };

    console.log(payload);

    // kirim ke API
    await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      const data = res.json();
      console.log("res : ", data);
      // setRes(data.message);
    });
  };

  return (
    <div className="min-h-screen bg-background text-text p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ClipboardDocumentListIcon className="w-8 text-accent-orange" />
            Add Product
          </h1>
          <p className="text-warm-gray">
            Tambahkan produk makanan baru ke database.
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-soft-gray rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="label">
                <TagIcon className="w-5" />
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                value={form.product_name}
                onChange={handleChange}
                placeholder="Nama makanan"
                className="input"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="label">
                <CurrencyDollarIcon className="w-5" />
                Price
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="15000"
                className="input"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <Squares2X2Icon className="w-5" />
                Category
              </label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Food / Drink / Snack"
                className="input"
                required
              />
            </div>

            {/* Stock */}
            <div>
              <label className="label">
                <CubeIcon className="w-5" />
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="Jumlah stok"
                className="input"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Deskripsi makanan"
                className="input"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button type="submit" className="btn-primary">
                Simpan Produk
              </button>

              <button type="button" className="btn-secondary">
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
