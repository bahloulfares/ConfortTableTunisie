import React, { createContext, useState, useEffect, useContext } from 'react';

// Création du contexte
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useCart = () => useContext(CartContext);

// Provider du contexte
export const CartProvider = ({ children }) => {
  // État pour stocker les produits du panier
  const [cartItems, setCartItems] = useState([]);
  
  // Charger les produits du panier depuis localStorage au chargement
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  
  // Sauvegarder les produits dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Ajouter un produit au panier
  const addToCart = (product) => {
    // Vérifier si le produit est déjà dans le panier
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Si le produit existe déjà, augmenter la quantité
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Sinon, ajouter le produit avec une quantité de 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  // Retirer un produit du panier
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  // Modifier la quantité d'un produit
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };
  
  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Calculer le nombre total d'articles dans le panier
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};