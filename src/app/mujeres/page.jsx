'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

// Estilos reforzados igual que en Hombres: degradado, animaciones, mejor tipografía.
export default function MujeresPage(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts((data || []).filter(p=> p.category === 'Womens'));
      }catch(e){
        console.error('Error cargando productos Mujeres', e);
      }
    }
    load();
  },[]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
            Mujeres
          </h1>
          <p className="mt-2 text-gray-600 text-lg">Colección exclusiva para ellas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(p=> (
            <div
              key={p.id}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}