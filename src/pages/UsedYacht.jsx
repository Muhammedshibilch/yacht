import React from 'react';
import Products from '../Components/Products';

const UsedYacht = () => {
  return (
    <>
      <div className="text-center">
        <h3 className='text-blue-900 font-bold mt-3'>GEBRAUCHTE YACHTEN</h3>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mt-5">
          <div className="lg:w-1/4 w-full">
            <h5 className="text-dark font-bold mt-3">Allgemeine Suche</h5>
            <input type="text" className="form-control mb-3" placeholder="Allgemeine Suche" />
            
            <label>Bootstyp</label>
            <select className="form-control mb-3">
              <option>-</option>
              <option>Motorboote</option>
              <option>Segelboote</option>
              <option>Schlauchboote</option>
              <option>Open</option>
              <option>Fly</option>
              <option>Fisherman</option>
            </select>
            
            <label>Werft</label>
            <select className="form-control mb-3">
              <option>-</option>
              <option>Agilis (2)</option>
              <option>Aarösund Baadebyggeri (1)</option>
              <option>Albin (1)</option>
              <option>Arcona (1)</option>
              <option>Bavaria (7)</option>
              <option>Bootswerft Heuer (1)</option>
              <option>Carver Boat (1)</option>
              <option>Celebrity Boats (1)</option>
            </select>
            
            <label>Modell</label>
            <input type="text" className="form-control mb-3" placeholder="Modell" />
            
            {['Länge', 'Breite', 'Tiefgang', 'Preis','Jahr','Gesamt Hp'].map((label) => (
              <div key={label} className="mb-3">
                <label>{label} ab</label>
                <div className="flex">
                  <select className="form-control mr-2">
                    <option>-</option>
                    {[...Array(10).keys()].map(i => <option key={i+1}>{i+1}mt</option>)}
                  </select>
                  <label>bis</label>
                  <select className="form-control ml-2">
                    <option>-</option>
                    {[...Array(10).keys()].map(i => <option key={i+1}>{i+1}mt</option>)}
                  </select>
                </div>
              </div>
            ))}
            <input type="checkbox" id='used' />
            <label className="ml-2 text-black font-bold" htmlFor="used">Nur Boote mit 360° Bildern </label> <br />
            <div className="flex justify-center items-center mt-2">
              <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Suchen
              </button>
            </div>
          </div>
          <div className="lg:w-3/4 w-full mt-5 lg:mt-0 lg:ms-5">
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsedYacht;
