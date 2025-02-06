import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://www.msp-yacht.de/wp-content/uploads/2024/04/Stuthor.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://www.msp-yacht.de/wp-content/uploads/2025/01/vision46-1-1920x780.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://www.msp-yacht.de/wp-content/uploads/2021/09/OCEAN-65-HT-NEW-42-1920x780.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>
      <div className="bg-blue-900 w-full h-22 lg:h-12">
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
          <h4 className="text-white mt-1 text-sm lg:text-base">
            Phone: +000000000
          </h4>
          <h4 className="text-white mt-1 text-sm lg:text-base">
            Mobile: +000000000000
          </h4>
          <h4 className="text-white mt-1 text-sm lg:text-base">
            Mail: info@msp-yacht.de
          </h4>
        </div>
      </div>
      <div className="flex flex-col mt-20 justify-center items-center px-4 lg:px-0">
        <img
          className="img-fluid w-full lg:w-1/2"
          src="https://www.msp-yacht.de/wp-content/uploads/2024/11/boat-1867124_1920-1024x683.jpg"
          alt=""
        />
        <h1 className="text-blue-950 font-bold mt-3 text-2xl lg:text-4xl text-center">
          Michael Schmidt & Partner Yachtmakler
        </h1>
        <h4 className="mt-3 text-blue-950 text-base lg:text-lg font-bold text-center">
          Seit 1. August 1982 der internationale Yachtmakler Ihrer Wahl
        </h4>
        <p className="mt-3 text-center">
          Die Grundlage unseres Erfolges seit dem 1.08.1982 ist es stets, den
          vielen Interessenten ein ihren persönlichen Wünschen
          <br />
          <span className="block text-center">
            entsprechende Yacht zu vermitteln.
          </span>
        </p>
        <p className="mt-1 text-center">
          Wir sehen unsere Aufgabe nicht allein im Handel mit Yachten, sondern
          in der Vermittlung von Freude am Wassersport und Ihrer
          <br />
          <span className="block text-center">
            Zufriedenheit mit einer Yacht.
          </span>
        </p>
        <p className="mt-1 text-center">
          Wir garantieren Ihnen einen einzigartigen Service, denn wir sind nicht
          nur kompetente Gesprächspartner, sondern haben auch ein
          <br />
          <span className="block text-center">
            Gespür dafür, was Sie unter Ihrer Wunschyacht verstehen.
          </span>
        </p>
      </div>
    </>
  );
};

export default Home;
