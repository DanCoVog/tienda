'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

// Estilos reforzados: se agregaron fondos degradados, mejor spacing, animaciones suaves y un header más destacado.
export default function HombresPage(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts((data || []).filter(p=> p.category === 'Mens'));
      }catch(e){
        console.error('Error cargando productos Hombres', e);
      }
    }
    load();
  },[]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
            Hombres
          </h1>
          <p className="mt-2 text-gray-600 text-lg">Explora nuestra colección para ellos</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(p=> (
            <div
              key={p.id}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}