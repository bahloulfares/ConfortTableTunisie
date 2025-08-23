import React from 'react';
import { Link } from 'react-router-dom';
import meubleImage from '../images/Logo.webp';

const Home = () => {
  return (
    <div>
      <section
        aria-label="Section d'accueil Confort Table Tunisie"
        className="relative w-full min-h-[80vh] md:min-h-screen bg-[#b6a895] flex items-center justify-center overflow-hidden"
      >
        {/* Image de fond en background CSS pour un affichage professionnel */}
        
        <div
          className="absolute inset-0 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${meubleImage})` }}
          aria-hidden="true"
        ></div>

        {/* Overlay dégradé doux pour contraste texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>

        {/* Contenu principal centré */}
        <div className="relative z-20 max-w-5xl px-6 text-center text-white">
          <br /><br /><br /><br /><br />
          {/* <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
            Confort Table Tunisie
          </h1> */}
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Des meubles faits main avec passion
          </p><br /><br />
          <Link
            to="/produits"
            className="inline-block bg-wood hover:bg-wood-light text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-wood/50"
          >
            Voir nos réalisations
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-wood">Notre savoir-faire</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Chaque meuble est unique, fabriqué avec des matériaux de qualité et un souci du détail incomparable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-wood text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité</h3>
              <p className="text-gray-600">Chaque pièce est fabriquée à la main selon des techniques traditionnelles transmises de génération en génération.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-wood text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Matériaux nobles</h3>
              <p className="text-gray-600">Nous sélectionnons uniquement les meilleurs bois massifs, issus de forêts gérées durablement.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-wood text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sur mesure</h3>
              <p className="text-gray-600">Nous créons des meubles personnalisés selon vos besoins, vos goûts et les dimensions de votre espace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-wood">Ce que disent nos clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"La salon de thé que j'ai commandée est magnifique, exactement comme je l'imaginais. Le bois est superbe et la finition impeccable."</p>
              <p className="font-bold">Marie Dupont</p>
            </div>

            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Un travail d'exception ! Les étagères sur mesure s'intègrent parfaitement dans mon salon et la qualité est remarquable."</p>
              <p className="font-bold">Pierre Martin</p>
            </div>

            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"J'ai fait fabriquer une commode pour ma chambre et je suis enchantée du résultat. Le service client est également impeccable."</p>
              <p className="font-bold">Sophie Leroy</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;