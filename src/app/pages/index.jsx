export default function Home() {
  const products = [
    { id: 1, name: "Camiseta Roja", price: 30000, img: "https://via.placeholder.com/300x400/8b0000/ffffff" },
    { id: 2, name: "Camiseta Verde", price: 30000, img: "https://via.placeholder.com/300x400/006400/ffffff" },
    { id: 3, name: "Camiseta Blanca", price: 30000, img: "https://via.placeholder.com/300x400/ffffff/000000" },
    { id: 4, name: "Camiseta Negra", price: 30000, img: "https://via.placeholder.com/300x400/000000/ffffff" },
  ];

  return (

      <div className="px-8 py-10">
        {/* Hero */}
        <div className="mb-12">
          <img
            src="https://via.placeholder.com/1200x400/ddd/333?text=Banner+Tienda"
          alt="Hero" 
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Grid productos */}
      <h2 className="text-xl font-semibold mb-6">Productos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="text-center">
            <img src={p.img} alt={p.name} className="w-full h-72 object-cover rounded-lg mb-2" />
            <h3 className="text-sm font-medium">{p.name}</h3>
            <p className="text-gray-500">${p.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
