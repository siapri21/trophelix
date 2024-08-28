import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {
  // État pour stocker toutes les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // États pour gérer l'affichage et le type de toast (notification)
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");

  // Fonction pour mettre à jour l'état du formulaire lorsqu'un champ est modifié
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour réinitialiser le formulaire
  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // Fonction pour envoyer les données du formulaire
  const sendContact = () => {
    axios
      .get("http://localhost:5000/", {
        params: formData, // Envoie toutes les données du formulaire
      })
      .then(() => {
        // En cas de succès
        setToastType("success");
        setShowToast(true);
        resetForm(); // Réinitialise le formulaire après un envoi réussi
      })
      .catch(() => {
        // En cas d'erreur
        setToastType("danger");
        setShowToast(true);
      });
  };

  return (
    <div className="flex max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg" style={{ justifyContent: "center", alignItems: "center" }}>
      <div className="flex-1 pl-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contactez-nous</h2>
        
        {/* Champ Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Champ Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Champ Téléphone */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">N° de téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Champ Objet */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Objet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Champ Message */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"
            placeholder="Votre message"
            required
          ></textarea>
        </div>

        {/* Case à cocher pour le consentement */}
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" name="consent" className="mr-2 leading-tight" required />
            <span className="text-sm text-gray-700">
              J'accepte que mes données soient traitées dans le cadre de ma demande de contact.
            </span>
          </label>
        </div>

        {/* Bouton d'envoi */}
        <button
          onClick={sendContact}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Envoyer
        </button>
      </div>

      {/* Notification Toast */}
      <div className="fixed top-12 m-5 right-5 z-50">
        {showToast && (
          <div
            id={`toast-${toastType}`}
            className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
            role="alert"
          >
            <div
              className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${toastType === "success" ? "green" : "red"}-500 bg-${toastType === "success" ? "green" : "red"}-100 rounded-lg dark:bg-${toastType === "success" ? "green" : "red"}-800 dark:text-${toastType === "success" ? "green" : "red"}-200`}
            >
              {/* Icône de succès ou d'erreur */}
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              {/* Message du toast en fonction du type */}
              {toastType === "success"
                ? "Message envoyé avec succès."
                : "Erreur lors de l'envoi du message."}
            </div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => setShowToast(false)} // Ferme le toast
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}