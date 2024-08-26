import React, { useState } from 'react';
import emailjs from 'emailjs-com'


export default function ContactForm() {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qg3czh8', 'T9FRBzihCfBNdbfee', e.target, 'T9FRBzihCfBNdbfee')
    .then((result) => {
      window.location.reload()
    }, (error) => {
      console.log(error.text);
    });
  }
  
  return (
    <div className="flex max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg" >
      
      <div className="flex-1 pl-6">

        <form onSubmit={sendEmail}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contactez-nous</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              nom
            </label>
            <input
              type="nom"
              id="nom"
              name="nom"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              N° de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                className="mr-2 leading-tight"
                required
              />
              <span className="text-sm text-gray-700">
                J'accepte que mes données soient traitées dans le cadre de ma demande de contact.
              </span>
            </label>
          </div>
          <button type="submit" value="send"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}