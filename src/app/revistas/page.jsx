"use client";
import { useEffect, useState } from "react";

export default function RevistasPage() {
  const [revistas, setRevistas] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // Filtrar revistas (aunque no existan aún)
        const filtered = (data || []).filter((p) => p.category === "Revistas");

        setRevistas(filtered);
      } catch (e) {
        console.error("Error cargando revistas", e);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">
            Revistas
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Colección de revistas, ediciones especiales y contenido visual.
          </p>
        </div>

        {/* Si no hay revistas */}
        {revistas.length === 0 && (
          <div className="w-full text-center py-16 bg-white rounded-xl shadow-md border">
            <h2 className="text-xl font-semibold text-gray-700">
              Aún no hay revistas disponibles 📚
            </h2>
            <p className="mt-2 text-gray-500">
              Cuando agregues productos con categoría <strong>"Revistas"</strong>,
              aparecerán aquí automáticamente.
            </p>
          </div>
        )}

        {/* Grid cuando existan */}
        {revistas.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {revistas.map((revista) => (
              <div
                key={revista.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <img
                  src={revista.img}
                  alt={revista.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {revista.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {revista.description}
                  </p>

                  <p className="font-bold text-gray-900 mt-3">
                    ${revista.price.toLocaleString()}
                  </p>

                  <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                    Ver revista
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
