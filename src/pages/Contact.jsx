import React from 'react';
import contact from '../assets/contact.png';

const Contact = () => {
  return (
    <>
      <div>
        <img src={contact} className='img-fluid w-full h-auto' alt="Contact" />
        <div className="bg-blue-900 w-full h-22 lg:h-12">
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
            <h4 className="text-white mt-1 text-sm lg:text-base text-center lg:text-left">
              Phone: +000000000
            </h4>
            <h4 className="text-white mt-1 text-sm lg:text-base text-center lg:text-left">
              Mobile: +000000000000
            </h4>
            <h4 className="text-white mt-1 text-sm lg:text-base text-center lg:text-left">
              Mail: info@msp-yacht.de
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5 px-4 lg:px-0">
        <h3 className="text-blue-700 font-bold text-center">
          KONTAKT
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-start mt-5 w-full lg:w-3/4 gap-5">
          <div className="flex flex-col items-center border border-black p-4 lg:p-8 w-full lg:h-64">
            <h4 className="text-blue-900 font-bold">BRIEF</h4>
            <p className='text-center lg:text-left'>
              MICHAEL SCHMIDT & PARTNER
            </p>
            <p>Yachthandels GmbH</p>
            <p>Osterbrooksweg 29</p>
            <p>22869 Schenefeld</p>
          </div>
          <div className="flex flex-col items-center border border-black p-4 lg:p-8 w-full lg:h-64">
            <h4 className="text-blue-900 font-bold">MAIL</h4>
            <p>info@msp-yacht.de</p>
          </div>
          <div className="flex flex-col items-center border border-black p-4 lg:p-8 w-full lg:h-64">
            <h4 className="text-blue-900 font-bold">TELEFON</h4>
            <p>+49 (0) 40 6073 1963</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 items-center w-full lg:w-3/6 px-4 lg:px-0 lg:ml-[180px]">
      {/* Text Section */}
      <div className="w-full text-left leading-tight">
        <p className="text-black">Wenn Sie Fragen haben, rufen Sie uns an</p>
        <p className="text-black">oder schicken Sie uns eine über das Kontaktformular gerne eine E-Mail.</p>
      </div>

      {/* Form Section */}
      <div className="w-full mt-4">
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Ihr Name (Pflichtfeld)
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Ihr Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Ihre E-Mail-Adresse (Pflichtfeld)
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ihre E-Mail-Adresse" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Betreff
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Betreff" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Ihre Nachricht
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Ihre Nachricht"></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="privacy" />
            <label className="ml-2 text-gray-700" htmlFor="privacy">Datenschutzerklärung zustimmen</label>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-3/4" type="button">
              Senden
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center mt-[80px]">

    <h3 className='text-blue-900 font-bold'>DER WEG ZU UNS</h3>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.654961147395!2d9.752808476633147!3d53.56392657235317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b182510a9a8347%3A0xa6d9ba2a25b5917d!2sElbstrand%20Wittenbergen!5e0!3m2!1sen!2sin!4v1738843128377!5m2!1sen!2sin" width={"100%"} height={"450"} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



    </>
  );
};

export default Contact;
