'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (!data?.id) {
          setProduct(null);
          setLoading(false);
          return;
        }
        setProduct(data);

        // 🔁 Buscar productos relacionados por categoría
        const allRes = await fetch("/api/products");
        const all = await allRes.json();
        const relatedProducts = all.filter(
          (p) => p.category === data.category && p.id !== data.id
        );
        setRelated(relatedProducts);
      } catch (err) {
        console.error("Error cargando producto:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Cargando producto...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* 🔙 Volver */}
      <Link href="/" className="text-sm text-gray-600 hover:underline">
        ← Volver al inicio
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* 🖼 Imagen principal */}
        <div className="w-full">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>

        {/* 📋 Información del producto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700">
            Precio: <span className="font-medium">${product.price.toLocaleString()}</span>
          </p>
          <p className="text-sm text-green-600 font-medium">Disponible ✓</p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <button className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all w-fit">
            🛒 Agregar al carrito
          </button>
        </div>
      </div>

      {/* 🛍 Productos relacionados */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group block text-center"
              >
                <div className="overflow-hidden rounded-lg mb-2">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{p.name}</h3>
                <p className="text-gray-500">${p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
