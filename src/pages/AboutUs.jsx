import React from 'react'
import about from '../assets/about.png'
import men1 from '../assets/men1.jpg'
import girl1 from '../assets/girl1.jpg'

const AboutUs = () => {
  return (
    <>
    <div>
      <img src={about} alt="" />
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
    <div className="flex mt-5 flex-col justify-center items-center">
      <h4 className='text-blue-900 font-bold'>ÜBER UNS</h4>
      <p className="text-blue-700"> FUR UNSEREN UNTERNEHMENSERFOLG STEHEN:</p>
      <p>• Seit 42 Jahren bestehendes Unternehmen (01.08.1982)</p>
      <p>• Unsere hervorragende Marktkenntnis mit der Fähigkeit Yachten schnell und korrekt zu vermitteln.</p>
      <p>• Unser Kundenstamm mit über 25.000 Interessenten und einem Angebot von ca. 300 Gebraucht-Yachten.</p>
      <p>• der stetige Fortschritt zu einem hochmodernen und gleichzeitig traditionsbewussten Unternehmen.</p>
      <p>„Die Nummer gegen Boote-Kummer“</p>
    </div>
    <hr className='w-75 mx-auto  border-black' style={{color: "black"}} />
    <div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5 px-4 lg:px-0">
  <div className="flex flex-col lg:w-1/3 justify-center items-center">
    <img src={men1} className="w-full lg:w-auto h-auto lg:h-64 object-cover" alt="" />
    <p className='mt-1'>Telefon: 000000000</p>
    <p>Mobil: +49 (0) 00000000</p>
    <p>Email:  <a href="">info@msp-yacht.de</a></p>
  </div>
  <div className="flex flex-col lg:w-1/3 justify-center mt-5 lg:mt-0">
    <h5 className="text-black font-bold">JAN SPENGLER</h5>
    <p>• Erfahrener Wassersportler</p>
    <p>• Zertifizierter Sachverständiger</p>
    <p>• Geschäftsführender Gesellschafter der Michael Schmidt & Partner Yachthandels Gmbh</p>
    <p>Als Segler von Kindesbeinen an hat Jan Spengler schon in der Lehrzeit nicht nur Schiffe im Yachtzentrum Hamburg verkauft und das Geschäft von der Pike auf gelernt, sondern auch echte Praxiskenntnisse aus unzähligen Überführungen gewonnen. 
      <br />Nach der Ausbildung war Jan Spengler ab Januar 1989 in der Firmengruppe Schmidt & Partner mit in dem Neubauprojekt Atlantic 40 in Gdansk, Polen beauftragt.  Hier wurde eine Klein-Serie von 12m Yachten erfolgreich gebaut, verkauft und betreut. Ab 1989 hat Jan Spengler – mit einigen Ausflügen in anderen Branchen seine Leidenschaft für Yachten zum Beruf gemacht. Der letzte Ausflug war 2008/2009 nach Dubai. Dort leitete er die Yachtproduktion einer ambitionierten Werft für hochkarätige Regattayachten.
      Seit Anfang 2010 wieder an Bord der MSP, seit 2012 alleiniger Gesellschafter und Geschäftsführer der MSP und für alle Fragen rund um Yachten Ihr Ansprechpartner.
    </p>
  </div>
</div>
<hr className='w-75 mx-auto  border-black' style={{color: "black"}} />
<div className="flex flex-col lg:flex-row mt-5 items-stretch lg:justify-center lg:gap-5 px-4 lg:px-0">
  <div className="flex flex-col lg:w-1/3 justify-center items-center">
    <img src={girl1} className="w-full lg:w-auto h-auto lg:h-64 object-cover" alt="" />
    <p className='mt-1'>Telefon: 000000000</p>
    <p>Email: <a href="">info@msp-yacht.de</a> </p>
  </div>
  <div className="flex flex-col lg:w-1/3 justify-center mt-5 lg:mt-0">
    <h5 className="text-black font-bold">BEATE SPENGLER</h5>
    <p>• Bankfachwirtin</p>
    <p>• Internationale Erfahrung im Finanzwesen</p>
    <p>• Langjährige Erfahrung im Bereich Yachten</p>
    <p>• Leidenschaftliche Wassersportlerin</p>
    <p>Beate Spengler bringt eine Kombination aus langjähriger Erfahrung im Bankwesen und einer tiefen Leidenschaft für den Yachtsport in ihre Arbeit mit ein. In ihrer früheren Karriere als Bankerin konnte sie sich ein umfassendes Fachwissen in den Bereichen Finanzen, Organisation und strategisches Management aneignen. Diese Expertise kann sie heute gezielt einsetzen, um reibungslose Abläufe im Unternehmen sicherzustellen.<br />Durch ihr umfassendes Wissen rund um Yachten versteht sie die Bedürfnisse und Wünsche der Kunden auf einer ganz besonderen Ebene. Diese Perspektive erlaubt es, Visionen der Kunden noch erfolgreicher umzusetzen. <br />Sie schätzt die Präzision und Struktur, die sowohl in der Finanzwelt als auch im Yachtsport unerlässlich sind. In ihrer Rolle vereint sie diese beiden Welten und sorgt dafür, dass die Firma stets effizient und zielgerichtet agiert – sowohl im Büro als auch direkt bei den Schiffen.
    </p>
  </div>
</div>


    </>
  )
}

export default AboutUs