"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const categories = ["Todos", "Hombres", "Mujeres", "Objetos", "Revistas"];
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();

  // Cargar productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error cargando productos:", error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  // Filtrado seguro
  const filteredProducts =
    activeCategory === "Todos"
      ? products || []
      : (products || []).filter((p) => {
          return (
            (activeCategory === "Hombres" && p.category === "Mens") ||
            (activeCategory === "Mujeres" && p.category === "Womens") ||
            (activeCategory === "Objetos" && p.category === "Objects") ||
            (activeCategory === "Revistas" && p.category === "Revistas")
          );
        });

  // Sincronizar categoría desde URL
  useEffect(() => {
    const param = searchParams?.get?.("category");

    if (param) {
      const normalized =
        param.charAt(0).toUpperCase() + param.slice(1).toLowerCase();

      if (categories.includes(normalized)) {
        setActiveCategory(normalized);
      }
    } else {
      setActiveCategory("Todos");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="New Essential Tees"
          className="w-full h-96 object-cover"
        />

        <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
          <h2 className="text-3xl font-bold mb-2">New Essential Tees</h2>
          <Link href="/hombres" className="text-sm underline hover:text-gray-300">
            Ver colección de Hombres →
          </Link>
        </div>
      </div>

      {/* Productos */}
      <div className="px-6 md:px-8 py-10 bg-white">

        {/* Categorías */}
        <div className="flex justify-center gap-8 mb-10 border-b pb-2 flex-wrap">
          {categories.map((cat) => {
            const href = cat === "Todos" ? "/" : `/${cat.toLowerCase()}`;
            return (
              <Link
                key={cat}
                href={href}
                onClick={() => setActiveCategory(cat)}
                className={`text-lg font-medium transition-colors ${
                  activeCategory === cat
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(filteredProducts || []).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </div>
  );
}
