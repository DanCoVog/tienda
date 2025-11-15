'use client';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function CarritoPage(){
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();

  if(!cart || cart.length === 0){
    return (
      <div className="min-h-screen p-8">
        <h2 className="text-xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600">Agrega productos desde la tienda para comenzar.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-semibold mb-6">Carrito de compras</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
            <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-sm text-gray-700">${(item.price).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500">Cantidad:</p>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(e)=> updateQty(item.id, Math.max(1, Number(e.target.value)||1))}
                  className="w-20 p-1 border rounded"
                />
                <button onClick={()=> removeFromCart(item.id)} className="text-sm text-red-600">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Total:</p>
          <p className="text-xl font-semibold">${total.toLocaleString()}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={()=> clearCart()} className="px-4 py-2 border rounded">Vaciar carrito</button>
          <button className="px-4 py-2 bg-black text-white rounded">Finalizar compra</button>
        </div>
      </div>
    </div>
  )
}
