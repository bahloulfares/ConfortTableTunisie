import React from 'react';
import aboutImage from '../images/aboutPageImg.webp';

const About = () => {
  return (
    <div className="py-24 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-wood mb-4">À Propos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Votre partenaire complet dans la conception et fabrication de mobiliers sur mesure.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
<img
  src={aboutImage}
  alt="Production commerciale"
  className="w-full h-full object-cover"
/>


            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-serif font-bold text-wood mb-4">Notre Société</h2>
              <p className="text-gray-600 mb-4">
                Depuis notre création, nous prenons en charge tout le cycle de vie du produit : de la conception
                technique à la fabrication en passant par les tests qualité. Nous maîtrisons chaque étape
                du processus pour garantir des produits performants et durables.
              </p>
              <p className="text-gray-600 mb-4">
                Nous fabriquons une gamme complète de mobilier : salons de thé (2 ou 4 places), tables TV, tables basses,
                meubles d’entrée, poufs, etc. Notre expertise nous permet de répondre à vos besoins du prototype à la
                livraison finale.
              </p>
              <p className="text-gray-600">
                Grâce à notre infrastructure industrielle moderne, nous allions innovation technique et gestion rigoureuse
                pour vous fournir des solutions esthétiques, fonctionnelles et fiables.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-wood text-center mb-8">Notre Usine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1566894570877-c3a0332159af"
                alt="Production en usine"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1572207485376-c9b6d5eeae1c"
                alt="Chaîne de fabrication"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1598106755735-3057c8fb58ee"
                alt="Stock matériaux"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              Installée sur un site industriel moderne, notre usine est équipée de lignes de production automatisées
              et de zones de finition spécialisées pour chaque type de produit.
            </p>
            <p className="text-gray-600">
              Nous mettons l'accent sur l'efficacité, la répétabilité des process et le contrôle qualité à chaque étape,
              pour vous garantir un résultat homogène et conforme à vos attentes.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-wood text-center mb-8">Notre Approche</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88"
                  alt="Approche professionnelle"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Nous combinons design, technologie et rigueur industrielle. Chaque produit est conçu selon
                  des standards élevés pour la robustesse et la fonctionnalité.
                </p>
                <p className="text-gray-600 mb-4">
                  La gamme que nous proposons — salons de thé, tables TV, poufs, tables basses, meubles d'entrée —
                  est pensée pour répondre à tous les usages professionnels et particuliers, avec un focus sur
                  ergonomie, confort et qualité de fabrication.
                </p>
                <p className="text-gray-600">
                  Nous assurons également le service après-vente, le support technique et la logistique pour
                  une expérience complète et fluide de A à Z.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
