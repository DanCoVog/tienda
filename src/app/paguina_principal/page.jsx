import Link from "next/link";

export default function PaguinaPrincipal() {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Página Principal</h1>
      <p className="mb-4">Esta es una página de ejemplo para la sección principal de la tienda. Añade aquí banners, categorías destacadas y novedades.</p>

      <div className="mt-6 space-x-4">
        <Link href="/hombres" className="text-blue-600 underline">Hombres</Link>
        <Link href="/mujeres" className="text-blue-600 underline">Mujeres</Link>
        <Link href="/objetos" className="text-blue-600 underline">Objetos</Link>
      </div>
    </div>
  );
}
