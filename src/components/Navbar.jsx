import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import du hook useCart

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart(); // Utilisation du hook pour obtenir le nombre d'articles

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Détecter le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-wood">
              Confort Table
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-wood transition-colors ${
                location.pathname === "/" ? "font-bold text-wood" : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className={`text-gray-700 hover:text-wood transition-colors ${
                location.pathname === "/produits" ? "font-bold text-wood" : ""
              }`}
            >
              Produits
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-wood transition-colors ${
                location.pathname === "/about" ? "font-bold text-wood" : ""
              }`}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-wood transition-colors ${
                location.pathname === "/contact" ? "font-bold text-wood" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              to="/panier"
              className={`text-gray-700 hover:text-wood transition-colors relative ${
                location.pathname === "/panier" ? "font-bold text-wood" : ""
              }`}
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-wood focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-wood transition-colors ${
                  location.pathname === "/" ? "font-bold text-wood" : ""
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/produits"
                className={`text-gray-700 hover:text-wood transition-colors ${
                  location.pathname === "/produits" ? "font-bold text-wood" : ""
                }`}
              >
                Produits
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-wood transition-colors ${
                  location.pathname === "/about" ? "font-bold text-wood" : ""
                }`}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-wood transition-colors ${
                  location.pathname === "/contact" ? "font-bold text-wood" : ""
                }`}
              >
                Contact
              </Link>
              <Link
                to="/panier"
                className={`text-gray-700 hover:text-wood transition-colors flex items-center ${
                  location.pathname === "/panier" ? "font-bold text-wood" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Panier
                {cartCount > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;