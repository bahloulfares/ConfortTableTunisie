//import React from "react";
import "../Data/Products.css";
import { Link } from "react-router-dom";
import productSections from "../Data/Products";

const Products = () => {
  return (
    <div className="py-24 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-center mb-16 text-gray-800">
          Nos Produits
        </h1>

        {productSections.map((section, index) => (
          <section key={index} className="mb-20">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-semibold text-gray-700 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-500">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-wood hover:bg-wood-dark text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 active:scale-95"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Products;
