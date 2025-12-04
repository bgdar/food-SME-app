'use client';
import  { useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

import Navbar from "../components/navbar";
// FavoriteFoodPage.jsx
// React component that shows a "Netflix-like" horizontal content layout for favorite foods.
// Uses Tailwind CSS utility classes. The color palette is embedded as CSS variables so you
// can easily hook it up to your Tailwind config or use these variables in global CSS.

export default function FavoriteFoodPage() {
  const [favorites, setFavorites] = useState(() => new Set([1, 3]));

  const toggleFav = (id : number) => {
    const copy = new Set(favorites);
    if (copy.has(id)) copy.delete(id);
    else copy.add(id);
    setFavorites(copy);
  };

  const rows = [
    {
      id: "trending",
      title: "Trending Now",
      items: sampleFoods,
    },
    {
      id: "spicy",
      title: "Spicy Picks",
      items: sampleFoods.slice().reverse(),
    },
  ];

  return (
    <div
      className="min-h-screen px-6 pb-12"
         >
      <header className="flex  items-center justify-between py-6">
        <h1 className="text-2xl font-semibold text-icon">Favourite Foods</h1>
        <nav className="flex gap-3 items-center">
          <button
            className="px-3 py-1 rounded-md text-sm font-medium bg-card text-icon"
            aria-label="Profile"
          >
            Profile
          </button>
        </nav>
      </header>

      <main>
        {rows.map((row) => (
          <section key={row.id} className="mb-8">
            <h2 className="text-lg mb-4 text-icon font-medium">{row.title}</h2>
            {/* Horizontal scroll area like Netflix */}
            <div className="-ml-2 flex space-x-4 overflow-x-auto pb-4">
              {row.items.map((item) => (
                <article
                  key={`${row.id}-${item.id}`}
                  className="relative w-48 min-w-[12rem] rounded-lg overflow-hidden transform-gpu transition-transform duration-200 hover:scale-105"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="relative h-36 bg-[var(--soft-dark)]">
                    {/* Image placeholder */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    {/* gradient overlay for readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
                      }}
                    />
                    {/* favorite button */}
                    <button
                      onClick={() => toggleFav(item.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-black/40 backdrop-blur"
                      aria-label={favorites.has(item.id) ? "Remove favorite" : "Add favorite"}
                    >
                      {favorites.has(item.id) ? (
                        <HeartSolid className="h-5 w-5 text-accent-red" />
                      ) : (
                        <HeartOutline className="h-5 w-5 text-icon" />
                      )}
                    </button>
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-icon">{item.title}</h3>
                    <p className="text-xs mt-1 text-soft-gray">{item.description}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-block text-xs px-2 py-0.5 rounded-full text-card bg-accent-yellow">{item.category}</span>
                      </div>
                      <div className="text-xs font-medium text-icon">{item.price}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>


      <Navbar/>
    </div>
  );
}

// ====== Sample data and helpers ======
const sampleFoods = [
  {
    id: 1,
    title: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan sambal khas dan telur mata sapi.",
    category: "Chicken",
    price: "Rp25k",
    image:
      "https://images.unsplash.com/photo-1604908177522-9a9b0c4d1a93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c2a7d3f8b9a6cde",
  },
  {
    id: 2,
    title: "Sate Ayam Madura",
    description: "Sate legit dengan bumbu kacang pekat.",
    category: "Chicken",
    price: "Rp30k",
    image:
      "https://images.unsplash.com/photo-1604908177845-8a5b4c2e4c4d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2b5c2d4f2e3a1b",
  },
  {
    id: 3,
    title: "Rendang Daging",
    description: "Rendang daging empuk dengan bumbu kaya rempah.",
    category: "Spicy",
    price: "Rp45k",
    image:
      "https://images.unsplash.com/photo-1604908178123-2b3c4d5e6f7a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7e6d5c4b3a2d1e",
  },
  {
    id: 4,
    title: "Gado-Gado Segar",
    description: "Sayuran fresh dengan bumbu kacang.",
    category: "Fresh",
    price: "Rp20k",
    image:
      "https://images.unsplash.com/photo-1604908178321-3c4d5e6f7a8b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7g8h",
  },
];

