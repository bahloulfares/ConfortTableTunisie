import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const QuoteForm = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "L'email n'est pas valide";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (value.trim() !== "") setErrors((p) => ({ ...p, [name]: "" }));
  };

  // Adresse email de réception des demandes de devis
  const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/bahloulfares3@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // 1) Construire le payload pour FormSubmit
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("address", formData.address);
      fd.append("message", formData.message);

      // Liste lisible des produits
      const productsText = cartItems.map(item => 
        `${item.name} (Quantité: ${item.quantity})`
      ).join('\n');
      
      fd.append("products", productsText);
      fd.append("submitted_at", new Date().toISOString());

      // 2) Options FormSubmit utiles
      fd.append("_subject", `Nouvelle demande de devis - ${formData.name}`);
      fd.append("_replyto", formData.email);        // bouton "Répondre" → client
      fd.append("_template", "table");              // 'table' | 'box' | 'basic'
      fd.append("_captcha", "true");                // anti-bot
      fd.append("_honey", "");                      // honeypot (restera vide)
      
      // 3) Appel CORS côté client (AJAX)
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: fd,
      });

      if (!response.ok) throw new Error("Échec de l'envoi du formulaire");

      setIsSubmitting(false);
      setIsSubmitted(true);
      clearCart();

      // Redirection SPA douce
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-24 px-4 max-w-3xl mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h1>
        <p className="text-gray-600 mb-8">Nous avons bien reçu votre demande de devis. Nous vous contacterons très vite.</p>
        <p className="text-sm text-gray-500">Redirection vers l'accueil…</p>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center mb-8 text-gray-800">Demande de Devis</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Votre panier est vide. Veuillez ajouter des produits avant de demander un devis.</p>
          <button onClick={() => navigate("/produits")} className="px-6 py-3 bg-wood hover:bg-wood-dark text-white font-bold rounded-lg transition">
            Voir nos produits
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          {/* Produits sélectionnés (aperçu) */}
          <h2 className="text-xl font-semibold mb-4">Produits sélectionnés</h2>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-700">Quantité: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vos informations */}
          <h2 className="text-xl font-semibold mb-4">Vos informations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message ou précisions</label>
            <textarea
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
              className={`px-6 py-3 bg-wood hover:bg-wood-dark text-white font-bold rounded-lg transition ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
