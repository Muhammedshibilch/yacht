import React from 'react'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className="bg-white text-blue-900 py-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Left Side - Logo and Copyright */}
        <div className="text-center md:text-left w-full md:w-1/3">
          <img src="https://www.msp-yacht.de/wp-content/uploads/elementor/thumbs/image001-msp1-1-qxmcynree6x9wizghi5ihk2usi9iexbva2npmo0dt4.jpeg" alt="Logo" className="h-12 mb-2 mx-auto md:mx-0" />
          <p className="text-sm">© 2024 MICHAEL SCHMIDT & PARTNER</p>
          <p className="text-sm">Yachthandels GmbH</p>
        </div>

        {/* Center - Navigation and Social Icons */}
        <div className="text-center space-y-2 w-full md:w-1/3">
          <nav className="space-x-4 flex flex-col md:flex-row justify-center items-center">
            <a href="#" className="text-blue-900 hover:underline">START</a>
            <a href="#" className="text-blue-900 hover:underline">IMPRINT</a>
            <a href="#" className="text-blue-900 hover:underline">PRIVACY POLICY</a>
          </nav>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-green-500 text-2xl"><FaWhatsapp /></a>
            <a href="#" className="text-blue-700 text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-blue-900 text-2xl"><FaFacebook /></a>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="text-center md:text-right text-sm w-full md:w-1/3">
          <p className="font-bold">MICHAEL SCHMIDT & PARTNER</p>
          <p>Yachthandels GmbH</p>
          <p>Osterbrooksweg 29</p>
          <p>22869 Schenefeld</p>
          <p>Schleswig-Holstein</p>
          <p>Tel: +49 (0) 40 6073 1963</p>
          <p>Mobile: +49 (0) 174 162 6000</p>
          <p>Mail: <a href="mailto:info@msp-yacht.de" className="text-blue-900 hover:underline">info@msp-yacht.de</a></p>
        </div>
      </div>
    </footer>
    <hr />
    </>
  )
}

export default Footer
