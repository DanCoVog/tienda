'use client';
import { useState } from "react";

export default function Home() {
  const categories = ["Mens", "Womens", "Objects"];
  const [activeCategory, setActiveCategory] = useState("Mens");
<<<<<<< HEAD

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );
=======
  
  // Sample product data
  
>>>>>>> bd7677a1ace3d8f411ce3dfd7fb86f2ae7df5140

  const products = [
    // Mens products
    { id: 1, name: "Camisa Para Hombre Roja", price: 30000, img: "https://i.pinimg.com/736x/85/59/32/8559327ae237ba29caa06f68f1b5cb8d.jpg", category: "Mens" },
    { id: 2, name: "Camisa Para Hombre Verde", price: 30000, img: "https://i.pinimg.com/1200x/a9/b4/a1/a9b4a10c1cec1b1a87b78d2000171bfc.jpg", category: "Mens" },
    { id: 3, name: "Camisa Para Hombre Blanca", price: 30000, img: "https://i.pinimg.com/1200x/87/3a/73/873a73ef8c7bcc267bc490cf9652f7e8.jpg", category: "Mens" },
    { id: 4, name: "Camisa Para Hombre Negra", price: 30000, img: "https://i.pinimg.com/736x/cf/9a/72/cf9a726bd71f19c0846d04ba6fe69efb.jpg", category: "Mens" },
    { id: 5, name: "Camisa Para Hombre Gris", price: 30000, img: "https://i.pinimg.com/736x/ab/d3/58/abd35876c081a78a5c1953c2453dcf59.jpg", category: "Mens" },
    { id: 6, name: "Camisa Para Hombre Azul", price: 30000, img: "https://i.pinimg.com/1200x/d6/9b/45/d69b45df33eaf21a533615e382ccda3c.jpg", category: "Mens" },
    { id: 7, name: "Camisa Para Hombre Amarilla", price: 30000, img: "https://i.pinimg.com/736x/e3/d4/44/e3d44422419a5a27062dc8fba59f65fd.jpg", category: "Mens" },
    { id: 8, name: "Camisa Para Hombre Cafe", price: 30000, img: "https://i.pinimg.com/736x/f9/26/7c/f9267ce891e243dac91b27131deeb643.jpg", category: "Mens" },

    // Womens products
    { id: 9, name: "Vestido Para Mujer Roja", price: 30000, img: "https://i.pinimg.com/736x/9f/0b/c6/9f0bc6a7e2998c5a8c4102ed84749e51.jpg", category: "Womens" },
    { id: 10, name: "Saco Para Mujer Blanco", price: 30000, img: "https://i.pinimg.com/1200x/17/c2/9e/17c29e1ff4909a1b529fbfe77434a9bb.jpg", category: "Womens" },
    { id: 11, name: "Camisa Para Mujer Negra", price: 30000, img: "https://i.pinimg.com/1200x/d5/d2/aa/d5d2aa7ae503864d80d7080c90e3c9fa.jpg", category: "Womens" },
    { id: 12, name: "Saco Para Mujer Gris", price: 30000, img: "https://i.pinimg.com/736x/24/71/74/247174c1dbffab87e9f9ad95034d7561.jpg", category: "Womens" },
    { id: 13, name: "Saco Para Mujer Azul", price: 30000, img: "https://i.pinimg.com/736x/9b/9b/bc/9b9bbc37c1c7ebc952fbc41bfe9e79c4.jpg", category: "Womens" },
    { id: 14, name: "Camisa Para Mujer Rosa", price: 30000, img: "https://i.pinimg.com/736x/10/ec/c6/10ecc6cfcd02856a602b2750f07280f4.jpg", category: "Womens" },
    { id: 15, name: "Camisa Para Mujer Cafe", price: 30000, img: "https://i.pinimg.com/1200x/c3/b1/e6/c3b1e6504d058bd50df51b41a9894ab2.jpg", category: "Womens" },
    { id: 16, name: "Saco Para Mujer Verde", price: 30000, img: "https://i.pinimg.com/736x/66/54/44/66544492205d82f1aa6e9ca208b4de82.jpg", category: "Womens" },

    // Objects
    { id: 17, name: "Correa para hombre ", price: 45000, img: "https://i.pinimg.com/1200x/d3/d0/91/d3d0917b4efa0cc9c546cb34a6614fac.jpg", category: "Objects" },
    { id: 18, name: "Correa para mujer", price: 25000, img: "https://i.pinimg.com/736x/6a/c2/31/6ac231d5ded8295b0b536b5e367cb62e.jpg", category: "Objects" },
    { id: 19, name: "gorra", price: 20000, img: "https://i.pinimg.com/1200x/b2/03/a5/b203a528670e8f507351d47da3c4f03e.jpg", category: "Objects" },
    { id: 20, name: "Perfume para hombre ", price: 65000, img: "https://i.pinimg.com/736x/f5/b1/fb/f5b1fb29e95e1c9cc6b91d5d937449e4.jpg", category: "Objects" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="New Essential Tees"
          className="w-full h-96 object-cover"
        />
        
        <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 text-white">
          <div className="text-2xl font-bold tracking-widest">DKC</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-gray-300">Hombre</a>
            <a href="#" className="hover:text-gray-300">Mujer</a>
            <a href="#" className="hover:text-gray-300">Objetos</a>
            <a href="#" className="hover:text-gray-300">Diario</a>
          </nav>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-gray-300">Iniciar sesión</a>
            <a href="#" className="hover:text-gray-300">Ayuda</a>
            <a href="#" className="hover:text-gray-300">Contacto</a>
            <a href="#" className="hover:text-gray-300">Compras 🛒</a>
          </div>
        </header>

        {/* Texto sobre la imagen */}
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl font-bold mb-2">New Essential Tees</h2>
          <a href="#" className="text-sm underline hover:text-gray-300">Learn more →</a>
        </div>
      </div>

      <div className="px-8 py-10 bg-white">
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