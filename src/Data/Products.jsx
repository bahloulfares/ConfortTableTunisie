//import React, { useState } from "react";
import "./Products.css";
import collectionImg from "../images/collections.webp";

//import collectionImg from "../images/collections.webp";

const productSections = [
  {
    title: 'Salons de thé',
    description: 'Découvrez nos salons de thé artisanaux, disponibles en 2 ou 4 places.',
    products: [
      {
        id: 1,
        name: 'Salon de thé (2 places)',
        description: 'Idéal pour les petits espaces.',
        image: 'https://www.meublekeskes.com/wp-content/uploads/2023/10/canape-2-places.jpg',
        colors: ['bg-red-500', 'bg-blue-500', 'bg-yellow-400'],
      },
      {
        id: 2,
        name: 'Salon de thé (4 places)',
        description: 'Parfait pour les familles.',
        image: 'https://i.pinimg.com/736x/b3/92/3f/b3923fb3187541cacfc2e381da7e5b54.jpg',
        colors: ['bg-green-500', 'bg-purple-500', 'bg-pink-400'],
      },
    ],
  },
  {
    title: 'Meubles d’entrée',
    description: 'Organisez votre entrée avec style.',
    products: [
      {
        id: 3,
        name: "Meuble d'entrée",
        description: 'Fonctionnel et élégant.',
        image: 'https://meubledeco.com.tn/wp-content/uploads/2025/03/04-MEUBLE-ENTREE-OPTIMA-1.jpg',
        colors: ['bg-gray-400', 'bg-yellow-300', 'bg-red-200'],
      },
    ],
  },
  {
    title: 'Tables basses',
    description: 'Ajoutez une touche moderne à votre salon.',
    products: [
      {
        id: 4,
        name: 'Table basse',
        description: 'En bois massif.',
        image: 'https://static.wixstatic.com/media/6b5974_e2956be0da484a07873b0b2e7a44b4d6~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6b5974_e2956be0da484a07873b0b2e7a44b4d6~mv2.jpg',
        colors: ['bg-yellow-600', 'bg-red-500', 'bg-green-500'],
      },
    ],
  },
  {
    title: 'Tables TV',
    description: 'Meubles TV élégants et pratiques.',
    products: [
      {
        id: 5,
        name: 'Table TV',
        description: 'Avec rangements.',
        image: 'https://www.cdiscount.com/pdt2/8/7/2/1/700x700/auc8682051072872/rw/yurupa-meuble-tv-table-tv-banc-tv-cabinet-de-tel.jpg',
        colors: ['bg-gray-800', 'bg-blue-600', 'bg-purple-400'],
      },
    ],
  },
  {
    title: 'Poufs',
    description: 'Confort et design réunis.',
    products: [
      {
        id: 6,
        name: 'Poof',
        description: 'Multifonctionnel et cosy.',
        image: 'https://ehome.tn/wp-content/uploads/2022/10/e40d56fb028820ac0e9eeac1f9f13b92.webp',
        colors: ['bg-pink-400', 'bg-purple-500', 'bg-yellow-300'],
      },
    ],
  },
  {
    title: 'Chambres de bébé',
    description: 'Des meubles confortables et sécurisés pour votre bébé.',
    products: [
      {
        id: 7,
        name: 'Chambre de bébé complète',
        description: 'Ensemble complet avec lit, commode et armoire.',
        image: 'https://baity.tn/11022-medium_default/chambre-a-coucher-pour-bebe-archipel-bois-mdf-stratifie-chene-et-blanc.jpg',
        colors: ['bg-blue-300', 'bg-pink-300', 'bg-yellow-200'],
      },
      {
        id: 8,
        name: 'Lit bébé',
        description: 'Lit individuel confortable et sécurisé.',
        image: 'https://m.media-amazon.com/images/I/712CnRMjTML._AC_SL1500_.jpg',
        colors: ['bg-white', 'bg-gray-200', 'bg-blue-100'],
      },
    ],
  },
  {
    title: 'Collections',
    description: 'Découvrez nos ensembles complets modernes et pratiques.',
    products: [
      {
        id: 9,
        name: 'Collection Salon Moderne',
        description: 'Inclut : Table basse + Table TV + Console miroir, design moderne et épuré.',
        image: collectionImg,
        colors: ['bg-gray-100', 'bg-blue-200', 'bg-green-200'],
      },
    ],
  },
];

// const Products = () => {

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Ouvrir la modale avec un produit
//   const openModal = (product) => {
//     setSelectedProduct(product);
//   };

//   // Fermer la modale
//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="py-24 bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-serif font-bold text-center mb-16 text-gray-800">
//           Nos Produits
//         </h1>

//         {productSections.map((section, index) => (
//           <section key={index} className="mb-20">
//             <div className="mb-8 text-center">
//               <h2 className="text-3xl font-semibold text-gray-700 mb-2">
//                 {section.title}
//               </h2>
//               <p className="text-gray-500">{section.description}</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {section.products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover"
//                     //className="collection-img"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//                     <p className="text-gray-600 mb-4">{product.description}</p>
//                     <button
//                       onClick={() => openModal(product)}
//                       className="bg-wood hover:bg-wood-dark text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 active:scale-95"
//                     >
//                       Voir détails
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}

//         {/* MODALE */}
// {selectedProduct && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//     onClick={closeModal}
//   >
//     <div
//       className="bg-white rounded-lg max-w-lg w-full sm:w-3/4 md:w-2/3 p-6 relative transform transition-transform duration-300 ease-out scale-100"
//       onClick={(e) => e.stopPropagation()}
//       style={{ animation: "fadeInScale 0.3s ease forwards" }}
//     >
//       <button
//         onClick={closeModal}
//         className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl font-bold"
//         aria-label="Fermer la modale"
//       >
//         &times;
//       </button>

//       <img
//         src={selectedProduct.image}
//         alt={selectedProduct.name}
//         //className="w-full h-48 sm:h-64 object-cover rounded"
//         className="collection-img"
//       />
//       <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
//       <p className="mt-2 text-gray-700">{selectedProduct.description}</p>

//       {/* <p className="mt-4 text-sm text-gray-500">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus vestibulum.
//       </p> */}

//       <button
//         onClick={closeModal}
//         className="mt-6 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
//       >
//         Fermer
//       </button>
//     </div>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

export default productSections;
