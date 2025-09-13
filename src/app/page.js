'use client';
import { useState } from "react";

export default function Home() {
  const categories = ["Mens", "Womens", "Objects"];
  const [activeCategory, setActiveCategory] = useState("Mens");

  const products = [
    // Mens products
    { id: 1, name: "Men's Essential Tee (Port)", price: 30000, img: "https://i.pinimg.com/1200x/63/24/0d/63240ded219f7d859000676e5718f596.jpg", category: "Mens" },
    { id: 2, name: "Men's Essential Tee (Deep Forest)", price: 30000, img: "https://i.pinimg.com/736x/6c/05/2d/6c052d834aeb686b7d37978603c5e1a0.jpg", category: "Mens" },
    { id: 3, name: "Men's Essential Tee (Bone)", price: 30000, img: "https://i.pinimg.com/736x/7a/9d/23/7a9d2307dcae556872fad6606a35365c.jpg", category: "Mens" },
    { id: 4, name: "Men's Essential Tee (Charcoal)", price: 30000, img: "https://i.pinimg.com/1200x/07/11/94/0711949b914d52884ac3f85a14bbbc3c.jpg", category: "Mens" },
    { id: 5, name: "Men's Essential Tee (Washed Indigo)", price: 30000, img: "https://i.pinimg.com/736x/2e/4f/8a/2e4f8a9c7f3d5b1a8e9c0f2d4a6b8e1c.jpg", category: "Mens" },
    { id: 6, name: "Men's Essential Tee (Black)", price: 30000, img: "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.jpg", category: "Mens" },
    { id: 7, name: "Men's Essential Tee (Grey)", price: 30000, img: "https://i.pinimg.com/736x/9f/8e/7d/9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c.jpg", category: "Mens" },
    { id: 8, name: "Men's Essential Tee (Olive)", price: 30000, img: "https://i.pinimg.com/736x/3c/4d/5e/3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f.jpg", category: "Mens" },
    
    // Womens products
    { id: 9, name: "Women's Essential Tee (Black)", price: 30000, img: "https://i.pinimg.com/736x/8b/9c/0d/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e.jpg", category: "Womens" },
    { id: 10, name: "Women's Essential Tee (White)", price: 30000, img: "https://i.pinimg.com/736x/5f/6a/7b/5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c.jpg", category: "Womens" },
    { id: 11, name: "Women's Essential Tee (Navy)", price: 30000, img: "https://i.pinimg.com/736x/2d/3e/4f/2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a.jpg", category: "Womens" },
    { id: 12, name: "Women's Essential Tee (Grey)", price: 30000, img: "https://i.pinimg.com/736x/7c/8d/9e/7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f.jpg", category: "Womens" },
    
    // Objects
    { id: 13, name: "Analog Starter Kit", price: 45000, img: "https://i.pinimg.com/736x/4b/5c/6d/4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e.jpg", category: "Objects" },
    { id: 14, name: "Gather Notebook", price: 25000, img: "https://i.pinimg.com/736x/1e/2f/3a/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.jpg", category: "Objects" },
    { id: 15, name: "UGMONK Mug", price: 20000, img: "https://i.pinimg.com/736x/6f/7a/8b/6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c.jpg", category: "Objects" },
    { id: 16, name: "Workspace Essentials", price: 65000, img: "https://i.pinimg.com/736x/9a/0b/1c/9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d.jpg", category: "Objects" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b">
        <div className="text-2xl font-bold tracking-widest">UGMONK</div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-gray-600 hover:text-black">Men</a>
          <a href="#" className="text-gray-600 hover:text-black">Women</a>
          <a href="#" className="text-gray-600 hover:text-black">Objects</a>
          <a href="#" className="text-gray-600 hover:text-black">Journal</a>
        </nav>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-gray-600">Login</a>
          <a href="#" className="text-gray-600">Help</a>
          <a href="#" className="text-gray-600">Contact Us</a>
          <a href="#" className="text-gray-600">🛒</a>
        </div>
      </header>

      <div className="px-8 py-10">
        {/* Hero */}
        <div className="mb-12 relative">
          <img
            src="https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg"
            alt="New Essential Tees"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-2xl font-bold mb-2">New Essential Tees</h2>
            <a href="#" className="text-sm underline">Learn more →</a>
          </div>
        </div>

        {/* Tabs de categorías */}
        <div className="flex justify-center gap-8 mb-10 border-b pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-medium transition-colors ${
                activeCategory === cat 
                  ? "border-b-2 border-black text-black" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid productos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((p) => p.category === activeCategory)
            .map((p) => (
              <div key={p.id} className="text-center group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{p.name}</h3>
                <p className="text-gray-500">${p.price.toLocaleString()}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}