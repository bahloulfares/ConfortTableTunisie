import React from 'react';

const About = () => {
  return (
    <div className="py-24 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-wood mb-4">À Propos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez l'histoire et la passion derrière nos créations.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581612129334-559ed6ce2ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Artisan menuisier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-serif font-bold text-wood mb-4">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2005 par Thomas Martin, notre entreprise est née d'une passion pour le travail du bois et l'artisanat traditionnel. Après avoir appris le métier auprès de son grand-père, Thomas a décidé de créer son propre atelier pour perpétuer ce savoir-faire ancestral tout en y apportant une touche contemporaine.
              </p>
              <p className="text-gray-600 mb-4">
                Aujourd'hui, notre équipe de trois artisans passionnés crée des meubles uniques, alliant techniques traditionnelles et design moderne. Chaque pièce qui sort de notre atelier raconte une histoire et porte en elle l'amour du travail bien fait.
              </p>
              <p className="text-gray-600">
                Nous sélectionnons avec soin nos matériaux, privilégiant les bois locaux et issus de forêts gérées durablement. Notre engagement pour l'environnement se reflète également dans nos méthodes de travail et nos finitions écologiques.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-wood text-center mb-8">Notre Atelier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1566894570877-c3a0332159af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Atelier" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1572207485376-c9b6d5eeae1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Outils" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1598106755735-3057c8fb58ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Matériaux" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              Notre atelier, situé en plein cœur de la campagne, est un espace où tradition et innovation se rencontrent. Équipé à la fois d'outils traditionnels et de machines modernes, il nous permet de réaliser des pièces d'exception tout en respectant les techniques ancestrales.
            </p>
            <p className="text-gray-600">
              C'est dans cet environnement inspirant que nous donnons vie à vos projets, transformant le bois brut en meubles élégants et fonctionnels qui traverseront les générations.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-wood text-center mb-8">Notre Philosophie</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Philosophie" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Notre philosophie repose sur trois piliers fondamentaux : la qualité, la durabilité et l'authenticité. Nous croyons que les meubles ne sont pas de simples objets, mais des compagnons de vie qui racontent une histoire et créent une atmosphère unique dans votre intérieur.
                </p>
                <p className="text-gray-600 mb-4">
                  Chaque pièce que nous créons est pensée pour durer et traverser les générations. Nous privilégions les assemblages traditionnels, plus solides et réparables, aux fixations modernes souvent éphémères.
                </p>
                <p className="text-gray-600">
                  Notre engagement envers l'environnement se traduit par une sélection rigoureuse de nos matériaux et l'utilisation de finitions naturelles et non toxiques. Nous croyons qu'il est possible de créer des meubles beaux et durables tout en respectant notre planète.
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