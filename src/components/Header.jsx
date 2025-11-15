"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="w-full border-b bg-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest text-gray-900">
        <Link href="/">DCK</Link>
      </div>

      {/* Menú principal */}
      <nav className="flex gap-8 text-gray-900 uppercase text-sm">
        <Link href="/">Inicio</Link>
        <Link href="/hombres">Hombres</Link>
        <Link href="/mujeres">Mujeres</Link>
        <Link href="/objetos">Objetos</Link>
      </nav>

      {/* Opciones derechas */}
      <div className="flex items-center gap-6 text-sm text-gray-900">
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/ayuda" className="hover:underline">Ayuda</Link>
        <Link href="/contact" className="hover:underline">Contacto</Link>
        <Link href="/carrito" className="flex items-center gap-2">
          <ShoppingCart size={18} />
          <span>Carrito</span>
          <span className="ml-1 text-sm font-medium text-white bg-black rounded-full px-2 py-0.5">
            {count}
          </span>
        </Link>
      </div>
    </header>
  );
}
