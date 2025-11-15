'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

export default function ObjetosPage(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function load(){
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts((data || []).filter(p=> (p.category||'').toLowerCase().includes('objeto')));
    }
    load();
  },[]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Objetos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
