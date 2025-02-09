import React from 'react'
import services from '../assets/services.png'

const Services = () => {
  return (
    <>
    <div>
      <img src={services} alt="" />
      <div className="bg-blue-900 w-full h-22 lg:h-12">
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
        </div>
      </div>
    </div>
    <div className=' mt-5 flex flex-col justify-center items-center'>
    <h4 className='text-blue-950 font-bold text-3xl'>UNSER SERVICE</h4>
    </div>
    <div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5">
  <div className="lg:w-1/3 flex justify-center items-center">
    <img src="https://www.msp-yacht.de/wp-content/uploads/2025/01/cruiser51-1024x734.jpg" className="img-fluid h-100 object-cover" alt="Cruiser 51" />
  </div>
  <div className="lg:w-1/3 flex flex-col justify-center mt-5 lg:mt-0">
    <h5 className="text-blue-800 font-bold">Unser Service als Makler für Sie als Verkäufer Ihrer Yacht:</h5>
    <p>Auf Basis eines Maklervertrages leisten wir Folgendes:</p>
    <ul className="list-disc">
      <li>Besichtigung Ihrer Yacht</li>
      <li>Ermittlung eines marktgerechten Verkaufspreises</li>
      <li>Erstellung einer umfangreichen Fotodokumentation, inklusive 360° Panorama-Aufnahmen</li>
      <li>Aufnahme des Layouts, der Kojenmaße und Stehhöhen</li>
      <li>Besichtigung mit den Interessenten</li>
      <li>Erstellung der Kaufverträge in Absprache mit Ihnen</li>
      <li>Persönliche Begleitung bei der Übergabe der Yacht</li>
    </ul>
    <p className="mt-3">Wir begleiten Sie vom ersten Anruf und dem Ausloten unseres Angebots bis zur Abwicklung der Vertragsfragen und der Übergabe Ihres Schiffs.</p>
  </div>
</div>
<hr className='w-75 mx-auto  border-black' style={{color: "black"}} />
<div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5">
  <div className="lg:w-1/3 flex justify-center items-center">
    <img src="https://www.msp-yacht.de/wp-content/uploads/2021/09/OCEAN-65-HT-NEW-46-1024x768.jpg" className="img-fluid h-100 object-cover" alt="Cruiser 51" />
  </div>
  <div className="lg:w-1/3 flex flex-col justify-center mt-5 lg:mt-0">
    <h5 className="text-blue-800 font-bold">
    Unser Service als Makler für Sie als Käufer einer Yacht:</h5>
    <p>Auf Basis Ihrer Suchanfrage – ob spezifisch oder unspezifisch – beraten wir Sie umfangreich zu allen Fragen rund um den Kauf einer Yacht.</p>
    <p>Die perfekte Yachtauswahl leicht gemacht mit <br />
    fundierter Beratung zu</p>
    <ul className="list-disc">
      <li>Typwahl</li>
      <li>Finanzierung</li>
      <li>Versicherung</li>
      <li>Registrierung</li>
      <li>Liegeplätze</li>
      <li>Transport</li>
      <li>Gutachten, u. v. m.</li>
    </ul>
    <p className="mt-3">Wir sind jederzeit bereit, Ihnen bei der Beantwortung der zahlreichen Fragen behilflich zu sein, denn durch unsere über 40-jährige Erfahrung kennen wir den Markt.</p>
  </div>
</div>
<div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5">
  <div className="flex lg:w-2/3 justify-center items-center">
  <p className='mt-5 text-black mb-3'>Das MSP-Team stellt sicher, dass vom ersten Kontakt bis hin zur Übergabe und allen folgenden Anfragen, wir Sie stets zeitnah und persönlich betreuen. Seit über 45 Jahren vor Ort und im direkten Kundenkontakt.</p>

  </div>
</div>

    </>
  )
}

export default Services
