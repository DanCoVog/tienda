import Link from "next/link";

export default function Ayuda() {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Ayuda</h1>
      <p className="mb-4">Aquí encontrarás respuestas a las preguntas frecuentes y recursos de soporte.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Preguntas frecuentes sobre envíos y devoluciones.</li>
        <li>Información sobre tallas y materiales.</li>
        <li>Contacto: <a href="mailto:soporte@tienda.example">soporte@tienda.example</a></li>
      </ul>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 underline">Volver a la tienda</Link>
      </div>
    </div>
  );
}
