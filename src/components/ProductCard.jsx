"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
      
      {/* Imagen */}
      <Link href={`/product/${product.id}`}>
        <div className="w-full h-56 overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Detalles */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Nombre + Precio */}
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-gray-800">
            ${product.price.toLocaleString()}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-xs text-gray-500 line-clamp-2 leading-snug">
          {product.description}
        </p>

        {/* Botones */}
        <div className="flex gap-2 mt-2">
          
          {/* Botón Añadir al carrito */}
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white px-3 py-2 rounded-md text-sm 
                       flex items-center justify-center gap-2 
                       hover:bg-gray-800 transition">
            <FontAwesomeIcon icon={faShoppingCart} />
            Añadir
          </button>

          {/* Botón Ver producto */}
          <Link
            href={`/product/${product.id}`}
            className="px-3 py-2 rounded-md border text-sm text-gray-700 
                       hover:bg-gray-50 transition">
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
}
