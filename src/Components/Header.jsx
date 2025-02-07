import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col items-center py-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.msp-yacht.de/wp-content/uploads/2016/07/logo.png"
            alt="Michael Schmidt & Partner"
            className="h-12"
          />
        </div>
        <div>
          <h1 className="text-xl lg:text-3xl ms-4 font-semibold mt-3 text-blue-900">
            YACHT BROKER
          </h1>
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="#" className="text-green-500 text-xl">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-blue-700 text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-pink-500 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-600 text-xl">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="bg-blue-900 w-full flex justify-center py-3 lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`bg-blue-900  ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="container mx-auto  flex flex-col lg:flex-row justify-center space-y-3 lg:space-y-0 lg:space-x-6 py-3 text-sm">
          <Link to={"/"}>
            <li
              className={
                location.pathname === "/" ? "text-blue-300" : "text-white"
              }
            >
              HOME
            </li>
          </Link>
          <Link to={"/usedyacht"}>
            <li
              className={
                location.pathname === "/usedyacht"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              GEBRAUCHTE YACHTEN 
            </li>
          </Link>
          <Link to={"/newyacht"}>
            <li
              className={
                location.pathname === "/newyacht"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              NEUE YACHTEN 
            </li>
          </Link>
          <Link to={"/services"}>
            <li
              className={
                location.pathname === "/services"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              SERVICE
            </li>
          </Link>
          <Link to={"/tradefairs"}>
            <li
              className={
                location.pathname === "/tradefairs"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              MESSETERMINE 
            </li>
          </Link>
          <Link to={"/references"}>
            <li
              className={
                location.pathname === "/references"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              REFERENZEN
            </li>
          </Link>
          <Link to={"/aboutus"}>
            <li
              className={
                location.pathname === "/aboutus"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              ÜBER UNS
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={
                location.pathname === "/contact"
                  ? "text-blue-300"
                  : "text-white"
              }
            >
              KONTAKT
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
