import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest">
        <Link href="/">MYSHOP</Link>
      </div>

      {/* Menú principal */}
      <nav className="flex gap-8 text-gray-700 uppercase text-sm">
        <Link href="/">Inicio</Link>
        <Link href="/hombre">Hombre</Link>
        <Link href="/mujeres">Mujeres</Link>
      </nav>

      {/* Opciones derechas */}
      <div className="flex items-center gap-6 text-sm">
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/help" className="hover:underline">Ayuda</Link>
        <Link href="/contact" className="hover:underline">Contacto</Link>
        <Link href="/carrito" className="flex items-center gap-1">
          <ShoppingCart size={18} />
          <span>Carrito</span>
        </Link>
      </div>
    </header>
  );
}
