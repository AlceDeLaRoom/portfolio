//crée un composant Contact avec form demandant nom mail et message
import React from 'react';

function Contact() {
    async function onSubmit(event) {
        event.preventDefault()
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
        const result = await response.json()
        if (result.success) {
            console.log(result)
        }
    }

    const labelPropiete = "block ml-4 mb-2 text-sm text-teal-100"

    const inputPropiete = "w-full px-3 py-2 rounded-sm placeholder-gray-600 text-gray-950 bg-sky-100 text-sm focus:outline-none"

  return (
    <div id='contact' className="flex items-center mt-24 lg:pb-0 pb-12">  
        <div className="container mx-auto max-w-md mb-12">  
            <div className="text-center">
            <h2 className="my-6 text-5xl font-bold uppercase text-teal-100">
                Contact
            </h2>
            </div>
            <div className="sm:m-7">
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className={labelPropiete}>Nom</label>
                        <input type="text" name="name" id="name" placeholder="Alan Smithee" required className={inputPropiete + " h-12"} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className={labelPropiete}> Addresse E-mail</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required className={inputPropiete + " h-12"} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className={labelPropiete}>Numéro de Téléphone</label>
                        <input type="text" name="phone" id="phone" placeholder="04 22 52 10 10" className={inputPropiete + " h-12"} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className={labelPropiete}>Votre demande</label>
                        <textarea rows="5" name="message" id="message" placeholder="Votre message..." className={inputPropiete} />
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
  )
}

export default Contact