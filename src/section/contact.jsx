//crée un composant Contact avec form demandant nom mail et message
import React from 'react';

function Contact() {
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cf60b6bd-0ca5-4758-8eb5-e7edfc0b8b55");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <div id='contact' className="flex items-center py-12">  
        <div className="container mx-auto max-w-md mb-12">  
            <div className="text-center">
            <h2 className="my-6 text-5xl font-bold uppercase text-teal-100">
                Contact
            </h2>
            </div>
            <div className="m-7">
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-teal-100">Nom</label>
                        <input type="text" name="name" id="name" placeholder="Alan Smithee" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-600 text-gray-950 bg-sky-100 text-sm focus:outline-none" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-teal-100"> Addresse E-mail</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-600 text-gray-950 bg-sky-100 text-sm focus:outline-none" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm text-teal-100">Numéro de Téléphone</label>
                        <input type="text" name="phone" id="phone" placeholder="04 22 52 10 10" className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-600 text-gray-950 bg-sky-100 text-sm focus:outline-none" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm text-teal-100">Votre demande</label>
                        <textarea rows="5" name="message" id="message" placeholder="Votre message..." className="w-full px-3 py-2 rounded-sm placeholder-gray-600 text-gray-950 bg-sky-100 text-sm focus:outline-none" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none">
                            Envoyer
                        </button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result"></p>
                </form>
            </div>
        </div>
    </div>
  );
}


export default Contact;