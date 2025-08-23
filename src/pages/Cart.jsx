import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculer le nombre total d'articles
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center mb-8 text-gray-800">
        Votre Panier
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-medium text-gray-600 mb-4">
            Votre panier est vide
          </h2>
          <p className="text-gray-500 mb-8">
            Découvrez nos produits et ajoutez-les à votre panier
          </p>
          <Link
            to="/produits"
            className="inline-block bg-wood hover:bg-wood-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Voir nos produits
          </Link>
        </div>
      ) : (
        <>
          {/* Version desktop - tableau */}
          <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Produit
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Quantité
                  </th>
                  <th className="py-4 px-6 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-1"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-1"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Version mobile - cartes */}
          <div className="md:hidden space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-1"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
            <button
              onClick={clearCart}
              className="bg-red-100 text-red-700 hover:bg-red-200 font-medium py-2 px-4 rounded-lg transition"
            >
              Vider le panier
            </button>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/produits"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition text-center"
              >
                Continuer les achats
              </Link>
              <Link
                to="/demande-devis"
                className="bg-wood hover:bg-wood-dark text-white font-bold py-2 px-4 rounded-lg transition text-center"
              >
                Demander un devis ({totalItems} {totalItems > 1 ? "articles" : "article"})
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;