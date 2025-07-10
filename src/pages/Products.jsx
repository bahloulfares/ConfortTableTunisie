import React, { useState } from 'react';

// Données fictives pour les produits
const productData = [
  {
    id: 1,
    name: 'Table à manger rustique',
    category: 'Tables',
    description: 'Table à manger en chêne massif avec finition naturelle.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 2,
    name: 'Chaise scandinave',
    category: 'Chaises',
    description: 'Chaise en bois de hêtre avec assise en tissu beige.',
    image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 3,
    name: 'Étagère murale',
    category: 'Rangements',
    description: 'Étagère murale en noyer avec supports en métal noir.',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1339&q=80',
  },
  {
    id: 4,
    name: 'Bureau moderne',
    category: 'Tables',
    description: 'Bureau en bois de frêne avec tiroirs de rangement.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
  },
  {
    id: 5,
    name: 'Tabouret de bar',
    category: 'Chaises',
    description: 'Tabouret de bar en bois avec repose-pieds en métal.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: 6,
    name: 'Bibliothèque sur mesure',
    category: 'Rangements',
    description: 'Bibliothèque en chêne massif avec étagères ajustables.',
    image: 'https://images.unsplash.com/photo-1588279102080-a8333fd4dc10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  
  const categories = ['Tous', 'Tables', 'Chaises', 'Rangements'];
  
  const filteredProducts = activeCategory === 'Tous' 
    ? productData 
    : productData.filter(product => product.category === activeCategory);
  
  return (
    <div className="py-24 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-wood mb-4">Nos Réalisations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez notre collection de meubles artisanaux, fabriqués avec passion et savoir-faire.</p>
        </div>
        
        {/* Catégories */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full mb-2 ${activeCategory === category ? 'bg-wood text-white' : 'bg-white text-gray-700 hover:bg-wood-light hover:text-white'} transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Galerie de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="bg-wood-light text-wood text-xs px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 bg-wood hover:bg-wood-light text-white font-medium py-2 px-4 rounded transition duration-300">
                  Voir détails
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;