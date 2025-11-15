'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

export default function ObjetosPage(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts((data || []).filter(p=> p.category === 'Objects'));
      }catch(e){
        console.error('Error cargando productos Objetos', e);
      }
    }
    load();
  },[]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Objetos</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
