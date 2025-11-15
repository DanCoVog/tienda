import Link from "next/link";

export default function Revistas() {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Revistas</h1>
      <p className="mb-4">Aquí puedes listar revistas, lookbooks o contenido editorial relacionado con las colecciones.</p>

      <div className="space-y-4">
        <article className="p-4 border rounded">
          <h2 className="font-semibold">Lookbook Otoño 2025</h2>
          <p className="text-sm text-gray-600">Colección inspirada en tonos tierra y básicos esenciales.</p>
        </article>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 underline">Volver a la tienda</Link>
      </div>
    </div>
  );
}
