"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg animate-pulse">
        Cargando producto...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:p-12">
      {/* Volver */}
      <Link
        href="/"
        className="text-sm text-gray-600 hover:text-black transition"
      >
        ← Volver al inicio
      </Link>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Imagen principal */}
        <div className="w-full relative group">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Info del producto */}
        <div className="flex flex-col gap-5 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-xl font-semibold text-black">
            ${product.price.toLocaleString()}
          </p>

          <p className="text-sm text-green-700 flex items-center gap-2 font-medium">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
            En stock
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <button
            onClick={() => addToCart(product, 1)}
            className="mt-4 px-6 py-3 bg-black text-white rounded-full text-sm font-medium 
            hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md active:scale-95"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Productos relacionados */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Productos relacionados
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl shadow-md bg-white border border-gray-100 mb-2">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:underline">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm">${p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
