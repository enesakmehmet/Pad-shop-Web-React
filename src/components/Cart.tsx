import React from 'react';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Sepetiniz boş</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {state.items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b py-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600">{item.price.toFixed(2)} TL</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <FiMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <FiPlus />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="p-1 rounded hover:bg-gray-100 text-red-500 ml-4"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 text-right">
        <p className="font-medium">Toplam: {state.total.toFixed(2)} TL</p>
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
};

export default Cart; 