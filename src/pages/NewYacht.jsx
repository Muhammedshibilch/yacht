import React from 'react';
import newYachtImage from '../assets/new.png'; // It's good practice to give a descriptive variable name

const NewYacht = () => {
  return (
    <>
      <div>
        <img src={newYachtImage} alt="New Yacht" />
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
      </div>
      <div className='mt-5 flex flex-col justify-center items-center px-4 lg:px-0'>
  <h2 className='text-blue-900 font-bold text-2xl lg:text-3xl text-center'>NEUE YACHTEN</h2>
  <img className='img-fluid mt-1 w-full lg:w-1/2' src="https://www.msp-yacht.de/wp-content/uploads/elementor/thumbs/rope-950355_1920-qxmzgyj257yrrjix1fyew8de6ntmvwfulpf2g46zyg.jpg" alt="" />
  <h4 className="text-blue-700 mt-5 text-lg lg:text-xl text-center">
    SIE SUCHEN EINE NEUE SEGELYACHT ODER EIN NEUES MOTORBOOT?
  </h4>
  <p className="text-center mt-3">Dann sind Sie bei uns richtig. Auf unseren Seiten präsentieren wir Ihnen die neuen Modelle von:</p>
  <p className="text-center mt-3">
    Gerne unterbreiten wir Ihnen auch auf Anfrage für andere neue Yachten ein Angebot 
    <span className="block text-center">IHR MSP-TEAM</span>
  </p>

  <div className="mt-4 text-center">
    <h5 className="text-black font-bold">UMS</h5>
    <a target='_blank' href="https://www.yachtvillage.net/de/detail/UGB4eaqgtEyU4raXIcjZuA?description=ums-boats-ums-865-cab&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">UMS 865 CAB</p>
    </a>
    <a target='_blank' href="https://www.yachtvillage.net/de/detail/15c6386e-11b8-42d7-912b-0a597efa90ad">
      <p className="mt-1  text-blue-700">UMS 655 DC</p>
    </a>
  </div>

  <div className="mt-4 text-center">
    <h5 className="text-black font-bold">SENSATION</h5>
    <a target='_blank' href="https://yachtvillage.net/de/detail/mmDvHIbRvUKYazC5krN_aw?description=sensation-sxi230&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Sensation SXI230</p>
    </a>
  </div>

  <div className="mt-4 text-center">
    <h5 className="text-black font-bold">HAUSBOOTE</h5>
    <a target='_blank' href="https://yachtvillage.net/de/detail/hkjJGw8Li0GZZxYDdRrQMA?description=shogun-hausboot-1000-mobil&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Shogun Hausboot 1000 Mobil</p>
    </a>
    <a target='_blank' href="https://yachtvillage.net/de/detail/qnzOwup4-0ml0fFmATgZ2A?description=shogun-hausboot-1000-neu&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Shogun Hausboot 1000</p>
    </a>
    <a target='_blank' href="https://yachtvillage.net/de/detail/WqDYMiaZg0-jc3beo3HG_w?description=shogun-hausboot-1000-diy&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Shogun Hausboot 1000 DYI</p>
    </a>
    <a target='_blank' href="https://yachtvillage.net/de/detail/Gc1yaJfCQkqbOmOucbFKbw?description=aqua-house-hausboot-harmonia-310&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Harmonia 310</p>
    </a>
    <a target='_blank' href="https://yachtvillage.net/de/detail/QMY5ad1T3UKO8ath2JkNOw?description=aqua-house-hausboot-harmonia-340&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Harmonia 340</p>
    </a>
    <a target='_blank' href="https://yachtvillage.net/de/detail/xwHF3PrjJEq1_fwZbkQfVg?description=aqua-house-hausboot-harmonia-340l&detail=neue-motorboot">
      <p className="mt-1  text-blue-700">Harmonia 340I</p>
    </a>
  </div>

  <p className="text-center mt-3">
    Gerne unterbreiten wir Ihnen auch auf Anfrage für andere neue Yachten ein Angebot 
    <span className="block text-center">IHR MSP-TEAM</span>
  </p>
</div>


    </>
  );
};

export default NewYacht;
