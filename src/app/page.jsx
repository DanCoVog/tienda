'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const categories = ["Mens", "Womens", "Objects"];
  const [activeCategory, setActiveCategory] = useState("Mens");
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);

  //Cargar productos desde el backend (API route)
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  //Filtra productos por categoría
  function filterProductsByCategory(category) {
    setActiveCategory(category);
    setProductFilter(products.filter((p) => p.category === category));
  }
  const filteredProducts = productFilter;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="New Essential Tees"
          className="w-full h-96 object-cover"
        />

        <header className="absolute top-0 left-0 right-0 flex flex-wrap justify-between items-center px-6 md:px-8 py-6 text-white">
          <div className="text-2xl font-bold tracking-widest">DKC</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-gray-300">Hombre</a>
            <a href="#" className="hover:text-gray-300">Mujer</a>
            <a href="#" className="hover:text-gray-300">Objetos</a>
            <a href="#" className="hover:text-gray-300">Diario</a>
          </nav>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#" className="hover:text-gray-300">Iniciar sesión</a>
            <a href="#" className="hover:text-gray-300">Ayuda</a>
            <a href="#" className="hover:text-gray-300">Contacto</a>
            <a href="#" className="hover:text-gray-300">
              <span className="mr-2">Compras</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </header>

        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl font-bold mb-2">New Essential Tees</h2>
          <a href="#" className="text-sm underline hover:text-gray-300">Learn more →</a>
        </div>
      </div>

      {/* Productos */}
      <div className="px-6 md:px-8 py-10 bg-white">
        {/* Categorías */}
        <div className="flex justify-center gap-8 mb-10 border-b pb-2 flex-wrap">
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

        {/* Grid de productos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <Link href={`/product/${p.id}`} key={p.id}>
              <div className="text-center group cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
