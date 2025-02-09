import React from "react";
import trade from "../assets/trade.png";

const Tradefairs = () => {
  return (
    <>
      <div>
        <img src={trade} alt="" />
        <div className="bg-blue-900 w-full h-22 lg:h-12">
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
  
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 justify-center items-center px-4 lg:px-0">
        <h3 className="text-blue-900 font-bold text-center">
          DIE NÄCHSTEN MESSEN AUF DENEN SIE UNS PERSÖNLICH TREFFEN KÖNNEN
        </h3>

        <a
          target="_blank"
          href="https://www.yachtfestival.de/"
          className="text-black mt-5 hover:text-blue-600 text-center"
        >
          Ancora Yachtfestival in Neustadt an der Ostsee, vom 23. – 25. Mai 2025
        </a>

        <img
          className="img-fluid mt-3"
          src="https://www.msp-yacht.de/wp-content/uploads/2024/11/Hamburg-Yachtfestival-2025_1-300x300.png"
          alt=""
        />

        <a
          href="https://www.yachtfestival.de/"
          target="_blank"
          className="text-black mt-5 hover:text-blue-600 text-center"
        >
          Hamburg Yachtfestival im Hamburger Yachthafen in Wedel, vom 05. – 07.
          September 2025
        </a>

        <img
          src="https://www.msp-yacht.de/wp-content/uploads/2024/12/Ancora-Yachtfestival-2025_1-300x300.png"
          className="img-fluid mt-3"
          alt=""
        />
      </div>
    </>
  );
};

export default Tradefairs;
