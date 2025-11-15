'use client';
import { useEffect, useMemo, useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function CarritoPage(){
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const TAX_RATE = 0.12; // 12% impuestos (ajustable)

  // Cálculos
  const subtotal = useMemo(() => {
    return cart.reduce((s, p) => s + (Number(p.price) || 0) * (Number(p.qty) || 0), 0);
  }, [cart]);

  const taxes = useMemo(() => +(subtotal * TAX_RATE), [subtotal]);
  const total = useMemo(() => +(subtotal + taxes), [subtotal, taxes]);

  function increase(item){
    updateQty(item.id, (item.qty || 0) + 1);
  }

  function decrease(item){
    const next = (item.qty || 0) - 1;
    if(next <= 0) removeFromCart(item.id);
    else updateQty(item.id, next);
  }

  function handleCheckout(){
    // Mostrar modal/confirmación
    setShowModal(true);
  }

  function confirmPayment(){
    // Simulación de pago: limpiar carrito y mostrar alerta
    clearCart();
    setShowModal(false);
    window.alert('Pago simulado realizado. Gracias por su compra.');
  }

  if(!cart || cart.length === 0){
    return (
      <div className="min-h-screen p-8">
        <h2 className="text-xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600">Agrega productos desde la tienda para comenzar.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 md:p-12">
      <h2 className="text-2xl font-semibold mb-6">Carrito de compras</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de productos (columna principal) */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border p-4 rounded-lg">
              <img src={item.img} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded" />
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start sm:items-center">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-sm text-gray-700">${(Number(item.price) || 0).toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center border rounded overflow-hidden">
                    <button onClick={()=> decrease(item)} className="px-3 py-1 bg-gray-100">-</button>
                    <div className="px-4">{item.qty}</div>
                    <button onClick={()=> increase(item)} className="px-3 py-1 bg-gray-100">+</button>
                  </div>

                  <button onClick={()=> removeFromCart(item.id)} className="text-sm text-red-600">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen (columna derecha) */}
        <aside className="bg-white border p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-4">Resumen del pedido</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Impuestos ({Math.round(TAX_RATE*100)}%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button onClick={handleCheckout} className="w-full bg-black text-white px-4 py-2 rounded">Finalizar compra</button>
            <button onClick={()=> clearCart()} className="w-full border px-4 py-2 rounded">Vaciar carrito</button>
          </div>
        </aside>
      </div>

      {/* Modal simple */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] sm:w-96 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Confirmar compra</h3>
            <p className="text-sm text-gray-700">Total a pagar: <strong>${total.toFixed(2)}</strong></p>
            <p className="text-sm text-gray-600 mt-2">Este es un pago simulado para propósitos de la práctica.</p>

            <div className="mt-6 flex gap-3 justify-end">
              <button onClick={()=> setShowModal(false)} className="px-3 py-2 border rounded">Cancelar</button>
              <button onClick={confirmPayment} className="px-3 py-2 bg-green-600 text-white rounded">Confirmar pago</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
