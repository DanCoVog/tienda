'use client';
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();

  // 🧺 Datos de ejemplo (podrías conectarlo a tu base luego)
  const products = [
    { id: 1, name: "Camisa Para Hombre Roja", price: 30000, img: "https://i.pinimg.com/736x/85/59/32/8559327ae237ba29caa06f68f1b5cb8d.jpg", category: "Mens", description: "Camisa de algodón suave, ideal para el uso diario. Corte moderno y cómodo." },
    { id: 2, name: "Camisa Para Hombre Verde", price: 30000, img: "https://i.pinimg.com/1200x/a9/b4/a1/a9b4a10c1cec1b1a87b78d2000171bfc.jpg", category: "Mens", description: "Camisa verde casual para hombres. Perfecta para días soleados." },
    { id: 9, name: "Vestido Para Mujer Roja", price: 30000, img: "https://i.pinimg.com/736x/9f/0b/c6/9f0bc6a7e2998c5a8c4102ed84749e51.jpg", category: "Womens", description: "Vestido elegante y ligero. Ideal para eventos casuales o formales." },
    { id: 10, name: "Saco Para Mujer Blanco", price: 30000, img: "https://i.pinimg.com/1200x/17/c2/9e/17c29e1ff4909a1b529fbfe77434a9bb.jpg", category: "Womens", description: "Saco blanco versátil. Combina con cualquier outfit." },
    { id: 17, name: "Correa para hombre", price: 45000, img: "https://i.pinimg.com/1200x/d3/d0/91/d3d0917b4efa0cc9c546cb34a6614fac.jpg", category: "Objects", description: "Correa de cuero genuino. Elegancia y durabilidad garantizada." },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Producto no encontrado.
      </div>
    );
  }

  // Productos relacionados
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* 🔙 Volver */}
      <Link href="/" className="text-sm text-gray-600 hover:underline">
        ← Volver al inicio
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* 🖼 Imagen principal */}
        <div className="w-full">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>

        {/* 📋 Información del producto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700">
            Precio: <span className="font-medium">${product.price.toLocaleString()}</span>
          </p>
          <p className="text-sm text-green-600 font-medium">Disponible ✓</p>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button
            className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all w-fit"
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>

      {/* 🛍 Productos relacionados */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group block text-center"
              >
                <div className="overflow-hidden rounded-lg mb-2">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{p.name}</h3>
                <p className="text-gray-500">${p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
