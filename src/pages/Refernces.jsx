import React from 'react'
import refrence from '../assets/refrences.png'
import logo from '../assets/logo.png'

const Refernces = () => {
  return (
    <>
    <div>
      <img src={refrence} alt="" />
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
    <div className='flex flex-col justify-center items-center px-4 lg:px-0'>
  <div className='flex flex-col items-center mt-5 border border-black w-full lg:w-3/4 h-auto lg:h-64'>
    <p className='mt-4'>⭐⭐⭐⭐⭐</p>
    <p className="text-black mt-2 text-center">
      Herzlichen Dank, liebes Schmidt & Partner Team. Für Ihre Geduld mit mir und der abschließenden Kauf-Unterstützung, der uns in schnellen
      <br />
      <span className="block text-center">
      Kreuzschlägen an Bord unseres Traumbootes gebracht hat.5 x Daumen hoch! Ihre Fam Edel.
      </span>
    </p>
    <div className="flex items-center mt-3">
      <img className='img-fluid' src={logo} alt="" />
      <div className="ml-2 text-center lg:text-left">
        <h5>K.E</h5>
        <p>5 Sterne</p>
      </div>
    </div>
  </div>



  <div className='flex flex-col items-center mt-5 border border-black w-full lg:w-3/4 h-auto lg:h-64'>
    <p className='mt-4'>⭐⭐⭐⭐⭐</p>
    <p className="text-black mt-2 text-center">
    Nicht nur tolle Kommunikatoren, auch fachlich kompetent. Wir haben unsere Segelyacht mit diesem Team verkauft. Vorab ist ein umfassendes, stimmiges Exposé mit professionellen Bildern erstellt worden. Das Angebot ist dann auf sehr vielen Bootskauf-Plattformen im Internet sichtbar. Im Verkaufsgespräch ist es absolut hilfreich, wenn der Makler bootstechnisch firm ist. Und wir haben die Begleitung nach dem Verkauf als sehr positiv erlebt. Sollten wir einmal wieder ein Boot zu verkaufen haben - sehr gern wieder mit Jan Spengler und Beate Spengler. Herzlichen Dank an die beiden!      <br />
     
    </p>
    <div className="flex items-center mt-3">
      <img className='img-fluid' src={logo} alt="" />
      <div className="ml-2 text-center lg:text-left">
        <h5>S.M</h5>
        <p>5 Sterne</p>
      </div>
    </div>
  </div>


  <div className='flex flex-col items-center mt-5 border border-black w-full lg:w-3/4 h-auto lg:h-64'>
    <p className='mt-4'>⭐⭐⭐⭐⭐</p>
    <p className="text-black mt-2 text-center">
    Kompetent, fachlich und menschlich top, unendlich geduldig, humorvoll, Top-Service - Ihr habt einen tollen Job gemacht, der jeden Cent Wert ist! Sehr empfehlenswert!    
  
    </p>
    <div className="flex items-center mt-3">
      <img className='img-fluid' src={logo} alt="" />
      <div className="ml-2 text-center lg:text-left">
        <h5>S.K</h5>
        <p>5 Sterne</p>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5 px-4 lg:px-8">
  <div className="flex flex-col lg:w-2/3 justify-center">
    <p className='mt-5 text-black mb-3'>
      Diskretion und Vertrauen stehen bei uns an erster Stelle. Wir bieten unseren Kunden einen außergewöhnlichen Grad an Vertraulichkeit und Diskretion. Diese beiden Eigenschaften sind für uns nicht nur wichtig, sondern bilden das Fundament unserer Zusammenarbeit mit unseren Kunden.
    </p>
    <p className="text-black mb-3">
      Wir setzen wir alles daran ihre Privatsphäre und ihre persönlichen Daten zu schützen. Wir zeigen auf unserer Website keine Referenzen oder Fallbeispiele mit Angabe von Daten unserer Kunden. Dies mag auf den ersten Blick ungewöhnlich erscheinen, doch es ist eine bewusste Entscheidung, die wir getroffen haben. Die Projekte, an denen wir gearbeitet haben, erfordern oft eine besonders diskrete Vorgehensweise, sei es aus Gründen des Datenschutzes oder aus anderen sensiblen Aspekten.
    </p>
    <p className="text-black mb-3" style={{float:"left"}}>
    Gerne stellen wir Ihnen Referenzen nach persönlicher Kontaktaufnahme zur Verfügung.
    </p>
  </div>
</div>








    </>
  )
}

export default Refernces