import Link from "next/link";

// Versión con estilos añadidos (solo apariencia, no se modifica la lógica ni estructura)

export default function Ayuda() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">Ayuda</h1>
        <p className="mb-4 text-gray-600">Aquí encontrarás respuestas a las preguntas frecuentes y recursos de soporte.</p>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li className="hover:text-gray-900 transition">Preguntas frecuentes sobre envíos y devoluciones.</li>
          <li className="hover:text-gray-900 transition">Información sobre tallas y materiales.</li>
          <li className="hover:text-gray-900 transition">
            Contacto: <a href="mailto:soporte@tienda.example" className="text-blue-600 hover:text-blue-800 underline">soporte@tienda.example</a>
          </li>
        </ul>

        <div className="mt-8">
          <Link href="/" className="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition shadow">
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}