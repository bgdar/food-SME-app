"use server";
import React from "react";
import { cookies } from "next/headers";
import NavbarUser from "../components/navbarUser";

const categories = [
  { name: "Chicken", color: "bg-theme-accent-orange" },
  { name: "Spicy", color: "bg-theme-accent-red" },
  { name: "Fresh", color: "bg-theme-accent-green" },
  { name: "Dessert", color: "bg-theme-accent-yellow" },
];

const posts = [
  {
    id: 1,
    title: "Grilled Chicken",
    category: "Chicken",
    desc: "Juicy grilled chicken with herbs.",
  },
  {
    id: 2,
    title: "Spicy Curry",
    category: "Spicy",
    desc: "Hot and spicy curry for spice lovers.",
  },
  {
    id: 3,
    title: "Fresh Salad",
    category: "Fresh",
    desc: "Healthy green salad with dressing.",
  },
  {
    id: 4,
    title: "Cheese Cake",
    category: "Dessert",
    desc: "Sweet and creamy dessert.",
  },
];

export default async function Home() {
  const username = (await cookies()).get("username");
  return (
    <div className="flex min-h-screen bg-theme-primary text-white font-sans">
      {/* Sidebar Kiri */}
      <aside className="w-72 p-6 border-r border-gray-700 hidden md:block">
        <div className="mb-8">
          <div className="bg-theme-secondary p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl">{username.value}</h2>
            <p className="text-sm text-theme-soft-gray">Food Enthusiast</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`p-3 rounded-lg cursor-pointer hover:opacity-80 ${cat.color}`}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Feed Utama */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Food Feed</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-theme-secondary p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <span className="inline-block text-sm mb-3 px-2 py-1 rounded-full text-black font-medium bg-gradient-green">
                {post.category}
              </span>
              <p className="text-sm text-theme-soft-gray">{post.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar Kanan */}
      <aside className="w-72 p-6 border-l border-gray-700 hidden lg:block">
        <div className="bg-theme-secondary p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Trending</h3>
          <ul className="space-y-2 text-sm text-theme-soft-gray">
            <li>Grilled Chicken Week</li>
            <li>Hot Spicy Challenge</li>
            <li>Fresh Salad Ideas</li>
            <li>New Dessert Recipes</li>
          </ul>
        </div>
      </aside>

      <NavbarUser />
    </div>
  );
}
