'use client';
import { useEffect, useMemo, useState } from 'react';
import { useCart } from '../../context/CartContext';


export default function CarritoPage(){
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const TAX_RATE = 0.12;

  const subtotal = useMemo(() => {
    return cart.reduce((s, p) => s + (Number(p.price) || 0) * (Number(p.qty) || 0), 0);
  }, [cart]);

  const taxes = useMemo(() => +(subtotal * TAX_RATE), [subtotal]);
  const total = useMemo(() => +(subtotal + taxes), [subtotal, taxes]);

  function increase(item){ updateQty(item.id, (item.qty || 0) + 1); }
  function decrease(item){ const next = (item.qty || 0) - 1; next <= 0 ? removeFromCart(item.id) : updateQty(item.id, next); }
  function handleCheckout(){ setShowModal(true); }
  function confirmPayment(){ clearCart(); setShowModal(false); window.alert('Pago simulado realizado. Gracias por su compra.'); }

  if(!cart || cart.length === 0){
    return (
      <div className="min-h-screen p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600">Agrega productos desde la tienda para comenzar.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">Carrito de compras</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-5">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border p-5 rounded-xl bg-white shadow hover:shadow-lg transition-all duration-200">
              <img src={item.img} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded-lg shadow" />

              <div className="flex-1 w-full">
                <div className="flex justify-between items-start sm:items-center">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <span className="text-sm text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded">${(Number(item.price) || 0).toLocaleString()}</span>
                </div>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                    <button onClick={()=> decrease(item)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition">-</button>
                    <div className="px-4 font-medium">{item.qty}</div>
                    <button onClick={()=> increase(item)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition">+</button>
                  </div>

                  <button onClick={()=> removeFromCart(item.id)} className="text-sm text-red-600 hover:text-red-700 font-medium transition">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-white border p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
          <h4 className="text-xl font-bold mb-4 text-gray-800">Resumen del pedido</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Impuestos ({Math.round(TAX_RATE*100)}%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button onClick={handleCheckout} className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition font-medium shadow">
              Finalizar compra
            </button>
            <button onClick={()=> clearCart()} className="w-full border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Vaciar carrito
            </button>
          </div>
        </aside>
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] sm:w-96 p-6 rounded-xl shadow-xl animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Confirmar compra</h3>
            <p className="text-sm text-gray-700">Total a pagar: <strong>${total.toFixed(2)}</strong></p>
            <p className="text-sm text-gray-600 mt-2">Este es un pago simulado para propósitos de la práctica.</p>

            <div className="mt-6 flex gap-3 justify-end">
              <button onClick={()=> setShowModal(false)} className="px-3 py-2 border rounded-lg hover:bg-gray-100 transition">Cancelar</button>
              <button onClick={confirmPayment} className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow">
                Confirmar pago
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
