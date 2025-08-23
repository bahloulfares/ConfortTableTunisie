import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import emailjs from '@emailjs/browser';

const QuoteForm = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // État pour les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // État pour les erreurs de validation
  const [errors, setErrors] = useState({});
  
  // État pour le statut de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Effacer l'erreur pour ce champ s'il est rempli
    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Valider le formulaire
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gérer la soumission du formulaire
  
  // Puis modifiez la fonction handleSubmit comme suit :
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Préparer les données des produits pour l'email
      const productsInfo = cartItems.map(item => 
        `${item.name} (Quantité: ${item.quantity})`
      ).join('\n');
      
      // Préparer le template pour EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        products: productsInfo
      };
      
      // Envoyer l'email via EmailJS
      // Remplacez ces valeurs par vos propres identifiants EmailJS
      emailjs.send(
        'service_hanty7c',  // Créez un service dans votre compte EmailJS
        'template_ckq3k6r', // Créez un template dans votre compte EmailJS
        templateParams,
        'zxYR_H6Ae3tuDb-d1'   // Votre clé publique EmailJS
      )
      .then((result) => {
        console.log('Email envoyé avec succès!', result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        clearCart();
        
        // Rediriger vers la page d'accueil après 3 secondes
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }, (error) => {
        console.log('Erreur lors de l\'envoi de l\'email:', error.text);
        setIsSubmitting(false);
        alert("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer.");
      });
    }
  };

  // Si le formulaire a été soumis avec succès
  if (isSubmitted) {
    return (
      <div className="py-24 px-4 max-w-3xl mx-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-green-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Demande envoyée avec succès !
        </h1>
        <p className="text-gray-600 mb-8">
          Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.
        </p>
        <p className="text-sm text-gray-500">
          Vous allez être redirigé vers la page d'accueil...
        </p>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center mb-8 text-gray-800">
        Demande de Devis
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            Votre panier est vide. Veuillez ajouter des produits avant de demander un devis.
          </p>
          <button
            onClick={() => navigate("/produits")}
            className="px-6 py-3 bg-wood hover:bg-wood-dark text-white font-bold rounded-lg transition duration-300"
          >
            Voir nos produits
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Produits sélectionnés</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm text-gray-700">Quantité: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Vos informations</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message ou précisions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
                  placeholder="Précisez vos besoins spécifiques, questions ou demandes particulières..."
                ></textarea>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-wood hover:bg-wood-dark text-white font-bold rounded-lg transition duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteForm;