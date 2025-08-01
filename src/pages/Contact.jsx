import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#fdfaf6] text-gray-800 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-[#5a3825] mb-4">
            Contactez-Nous
          </h1>
          <p className="text-lg text-gray-600">
            Une question, une commande ? Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#f9f4f0] to-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-3 gap-12 text-center text-[#3b2f2f]">

            {/* Adresse */}
            <div className="flex flex-col items-center">
              <div className="bg-[#e6d3c5] p-4 rounded-full shadow-md mb-5">
                <i className="fas fa-map-marker-alt text-3xl text-[#5a3825]"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Notre Atelier</h3>
              <p className="text-base font-light">Rue Saltnia</p>
              <p className="text-base font-light">3067 Sfax, Tunisie</p>
            </div>

            {/* Horaires */}
            <div className="flex flex-col items-center">
              <div className="bg-[#e6d3c5] p-4 rounded-full shadow-md mb-5">
                <i className="fas fa-clock text-3xl text-[#5a3825]"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Horaires</h3>
              <p className="text-base font-light">Lundi – Vendredi : 08h00 – 17h00</p>
              <p className="text-base font-light">Samedi : 09h00 – 13h00</p>
              <p className="text-base font-light text-gray-400 italic">Dimanche : Fermé</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <div className="bg-[#e6d3c5] p-4 rounded-full shadow-md mb-5">
                <i className="fas fa-phone-alt text-3xl text-[#5a3825]"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Contact</h3>
              <p className="text-base font-light">+216 20 000 000</p>
              <p className="text-base font-light">contact@gmail.com</p>
            </div>

          </div>
        </div>



        {/* Réseaux sociaux */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-[#5a3825] mb-4">Suivez notre savoir-faire</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/profile.php?id=61576345524896"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition duration-200"
              aria-label="Page Facebook Confort Table Tunisie"
            >
              <i class="fab fa-facebook-f text-3xl"></i>
            </a>

            <a
              href="https://www.instagram.com/votrepage"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-200"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://wa.me/25000691"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:text-green-600 transition duration-200"
            >
              <i className="fab fa-whatsapp text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
