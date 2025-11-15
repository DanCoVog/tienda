"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      <Link href={`/product/${product.id}`}>
        <div className="w-full h-56 overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <span className="text-sm text-gray-700 font-medium">${product.price.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 bg-black text-white px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Añadir
          </button>
          <Link
            href={`/product/${product.id}`}
            className="px-3 py-2 rounded-md border text-sm text-gray-700 hover:bg-gray-50"
          >
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
}
