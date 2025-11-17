"use client";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest text-gray-900">
          <Link href="/">DKC</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-gray-900 uppercase text-sm font-medium">
          <Link className="hover:text-gray-600" href="/">Inicio</Link>
          <Link className="hover:text-gray-600" href="/hombres">Hombres</Link>
          <Link className="hover:text-gray-600" href="/mujeres">Mujeres</Link>
          <Link className="hover:text-gray-600" href="/objetos">Objetos</Link>
          <Link className="hover:text-gray-600" href="/revistas">Revistas</Link>
        </nav>

        {/* Right Options */}
        <div className="hidden md:flex items-center gap-6 text-gray-900 text-sm">
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/ayuda" className="hover:underline">Ayuda</Link>
          <Link href="/contact" className="hover:underline">Contacto</Link>

          <Link href="/carrito" className="flex items-center gap-2 hover:text-gray-600">
            <ShoppingCart size={18} />
            <span>Carrito</span>
            <span className="ml-1 text-sm font-medium text-white bg-black rounded-full px-2 py-0.5">
              {count}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-white border-t px-6 py-4 text-gray-900 uppercase text-sm gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/hombres" onClick={() => setOpen(false)}>Hombres</Link>
          <Link href="/mujeres" onClick={() => setOpen(false)}>Mujeres</Link>
          <Link href="/objetos" onClick={() => setOpen(false)}>Objetos</Link>
          <Link href="/revistas" onClick={() => setOpen(false)}>Revistas</Link>

          <hr />

          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/ayuda" onClick={() => setOpen(false)}>Ayuda</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>

          <Link
            href="/carrito"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <ShoppingCart size={18} />
            <span>Carrito</span>
            <span className="ml-1 text-sm font-medium text-white bg-black rounded-full px-2 py-0.5">
              {count}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
