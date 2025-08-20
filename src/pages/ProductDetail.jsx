import React from "react";
import { useParams, Link } from "react-router-dom";
import productSections from "../Data/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  let selectedProduct = null;
  for (const section of productSections) {
    selectedProduct = section.products.find((p) => p.id === productId);
    if (selectedProduct) break;
  }

  if (!selectedProduct) {
    return <p className="text-center mt-20 text-xl text-red-600">Produit non trouvé ❌</p>;
  }

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Bouton retour */}
      {/* <Link
        to="/returnProduct"
  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
      >
        <span className="mr-2">←</span> 
      </Link>  <br /> <br /> */}

      <Link
  to="/produits"
  className="inline-flex items-center gap-2 px-4 py-2 text-gray-10000 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
>
  {/* Icône de quitter (flèche vers la gauche) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  
  Retour aux produits
</Link>
<br /><br />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Partie Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Partie détails */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          {/* Titre + catégorie */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
              {selectedProduct.name}
            </h1>
            {selectedProduct.category && (
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                {selectedProduct.category}
              </span>
            )}

            {/* Description */}
            <p className="text-gray-700 text-lg mb-6">{selectedProduct.description}</p>

            {/* Informations supplémentaires */}
            {/* {selectedProduct.price && (
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Prix : <span className="text-green-600">{selectedProduct.price} TND</span>
              </p>
            )} */}
            <div className="mt-6">
  <h3 className="text-lg font-medium mb-2">Couleurs disponibles :</h3>
  <div className="flex gap-3">
    {selectedProduct.colors?.map((colorClass, idx) => (
      <span
        key={idx}
        className={`w-8 h-8 rounded-full cursor-pointer border-2 border-gray-200 ${colorClass} hover:scale-110 transform transition`}
        title={`Couleur ${idx + 1}`}
      ></span>
    ))}
  </div>
</div>

          </div>

          {/* Bouton d'action */}
          {/* <div className="mt-6">
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              Ajouter au panier
            </button>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
