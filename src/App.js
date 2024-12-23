import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import bgImage from './assets/background.jpg';
import hunterImage from "./assets/hunter.png"; // Import the image
import rezonantaImage from "./assets/rezonanta.png";
import programeazateImage from "./assets/programeazate.jpg";
import eyeImage from "./assets/eye.jpg"; 
import nutritionImage from "./assets/nutrition.jpg"; 

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [showForm, setShowForm] = useState(false);
  const renderContent = () => {
    switch (currentSection) {
      case "home":
  return (
    <div
      className="p-4 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto"
      style={{
        marginTop: "100px", // Push down for large screens
      }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Consultații Terapeutice – Biorezonanță SCIO
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Dacă te confrunți cu stări de oboseală, dureri neexplicate, probleme digestive sau emoționale, află că organismul tău îți poate oferi toate răspunsurile. Suntem aici să te ajutăm să le descifrezi!
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Descoperă acum metoda modernă de investigare –{" "}
          <span className="font-semibold text-green-600">Quantic Body Scan</span>, o scanare non-invazivă a stării de sănătate realizată cu ajutorul tehnologiei bio-feedback SCIO. Aceasta permite analiza completă a organismului, oferind informații valoroase despre echilibrul tău fizic și emoțional.
        </p>

        <h3 className="text-3xl font-semibold text-primary mt-8 mb-4">
          Ce este SCIO și cum funcționează?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Folosind unde electromagnetice emise de celulele corpului, SCIO identifică dezechilibrele din organism, evaluând peste 40 de organe și sisteme. Analiza oferă o imagine completă, inclusiv:
        </p>
        <ul className="list-disc list-inside text-left mx-auto text-gray-700 text-lg mb-6 space-y-3">
          <li>Starea funcțională a organelor și sistemelor</li>
          <li>Carențe nutriționale și profil metabolic</li>
          <li>Alergii și intoleranțe alimentare</li>
          <li>Sensibilități și intoxicații (metale grele, paraziți, infecții)</li>
          <li>Probleme cardiovasculare, respiratorii și limfatice</li>
          <li>Evaluarea stării coloanei vertebrale și a profilului osos</li>
          <li>Profil hormonal, psihologic și emoțional</li>
          <li>Somatizarea emoțiilor în organele corpului</li>
          <li>Starea energetică a meridianelor și chakrelor</li>
        </ul>

        <h3 className="text-3xl font-semibold text-primary mt-8 mb-4">
          Beneficiile SCIO
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Prin această tehnică modernă, vei descoperi factorii de risc și tendințele de îmbolnăvire, oferindu-ți posibilitatea de a preveni problemele și de a sprijini procesul de însănătoșire. La final, fitoterapeutul nostru îți va oferi o schemă de terapie 100% naturală și personalizată.
        </p>

        <h3 className="text-3xl font-semibold text-primary mt-8 mb-4">
          Probleme Abordate
        </h3>
        <ul className="list-disc list-inside text-left mx-auto text-gray-700 text-lg mb-6 space-y-3">
          <li>Disfuncții gastrointestinale și cardiovasculare</li>
          <li>Probleme respiratorii, reumatice și dermatologice</li>
          <li>Alergii și intoleranțe alimentare</li>
          <li>Infecții și intoxicări cu metale grele</li>
          <li>Pierderi de memorie și boli degenerative</li>
          <li>Dereglări hormonale și metabolice</li>
          <li>Probleme emoționale și managementul stresului</li>
        </ul>

        <h3 className="text-3xl font-semibold text-primary mt-8 mb-4">
          Te așteptăm să descoperim împreună răspunsurile corpului tău!
        </h3>
      </div>

      {/* Video Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-primary mb-6">
          Ce spun medicii?
          </h3>
        <div className="space-y-6">
          {/* First Video */}
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-auto rounded-lg shadow-md"
              src="https://www.youtube.com/embed/Vu2LqYBXd6w"
              title="Ce spun medicii 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Second Video */}
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-auto rounded-lg shadow-md"
              src="https://www.youtube.com/embed/feYfYtzGNRs"
              title="Ce spun medicii 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Third Video */}
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-auto rounded-lg shadow-md"
              src="https://www.youtube.com/embed/DOx1NpYgTBo"
              title="Ce spun medicii 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );

  case "services":
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-10 space-y-10"
      style={{
        marginTop: "100px", // Align with other sections
      }}
    >
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Servicii Medicale Avansate
      </h2>

      {/* Quantic Body Scan */}
      <section>
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Quantic Body Scan: Descoperă Starea Ta de Sănătate
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Tehnologia SCIO, dezvoltată de fizicieni NASA, folosește unde electromagnetice pentru
          a analiza și identifica dezechilibrele din organismul tău. Aceasta este o scanare
          non-invazivă care evaluează peste 40 de organe, oferindu-ți o imagine completă asupra
          sănătății tale.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Starea organelor și a sistemelor de organe</li>
          <li>Carențe nutriționale și profil metabolic</li>
          <li>Alergii și intoleranțe alimentare</li>
          <li>Sensibilități și intoxicații din mediu</li>
          <li>Infecții virale și bacteriene</li>
          <li>Profil hormonal, psihologic și energetic</li>
        </ul>
      </section>

      {/* Pachet Scanare Completă */}
      <section>
        <h3 className="text-2xl font-semibold text-primary   mb-4">
          Pachet Scanare Completă
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Scanarea completă SCIO</li>
          <li>Harta de funcționare a organismului</li>
          <li>Schema de suplimentare personalizată (remedii naturale)</li>
          <li>Plan de nutriție personalizat</li>
          <li>Monitorizare 24/24h și consiliere dedicată</li>
          <li>Bonus: Terapie de echilibrare emoțională SCIO</li>
        </ul>
      </section>

      {/* Consultație Nutriție */}
      <section>
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Consultație Nutriție
        </h3>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Ai încercat să slăbești, dar nicio dietă „minune” nu te-a ajutat? Dacă ai slăbit,
              totuși, ai depus rapid kilogramele pierdute? Nu te descuraja, există soluții!
              Nutriționistul integrativ Getika Holistic Life te va ajuta să scapi rapid de
              excesul de greutate și să îți recapeți starea de bine fără diete radicale și fără
              înfometare.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Consultația de nutriție include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Calcularea indicilor somatometrici</li>
              <li>Determinarea masei grase prin impedanță bioelectrică</li>
              <li>Individualizarea profilului psihosomatic</li>
              <li>Întocmirea anchetei alimentare</li>
              <li>Recomandări alimentare personalizate</li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src={nutritionImage}
              alt="Consultație Nutriție"
              className="rounded-lg w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>


      {/* Consultație Fitoterapie */}
      <section>
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Consultație Fitoterapie
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Organismul tău este un sistem viu aflat într-o continuă schimbare. Remediile naturale pe bază de plante reprezintă o soluție bine tolerată pentru menținerea sănătății. Cu ajutorul specialiștilor noștri, vei învăța cum să folosești aceste remedii în siguranță și eficient, în funcție de nevoile tale.
        </p>
        <h4 className="text-2xl font-semibold text-primary mb-3">
          Pachetul cuprinde:
        </h4>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
          <li>Plan fitoterapeutic personalizat</li>
          <li>Monitorizare 24/24h prin WhatsApp</li>
          <li>Gestionarea crizei vindecării</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          <strong>Atenție:</strong> Acest tip de serviciu necesită prezentarea analizelor medicale recente, pe baza cărora fitoterapeutul nostru va stabili un plan de suplimentare natural.
        </p>
      </section>

      {/* Consultație Iridologie */}
      <section>
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Consultație Iridologie
        </h3>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Scanare cu ajutorul microscopului performant pentru a observa în iris
              degenaririle ce apar în corpul tău. Fiecare organ are pe harta irisului o
              anumită localizare ce poate dezvălui informații despre starea ta de sănătate.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Oferim acest serviciu în parteneriat cu specialiști în Medicina Alternativă de
              la Paracelsus Medizinischen Privatuniversität – Germania.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pachetul cuprinde:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Analizarea irisului cu ajutorul unui microscop performant</li>
              <li>Trimiterea fișelor în Germania</li>
              <li>
                Primirea răspunsului și a planului de tratament bazat pe soluții naturale
              </li>
              <li>
                La cerere: Se poate intra în videoconferință cu specialistul de la clinica
                din Germania.
              </li>
              <li>Consiliere specializată în urmarea planului de tratament</li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src={eyeImage}
              alt="Consultație Iridologie"
              className="rounded-lg w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>


      {/* Consiliere Aromaterapie */}
      <section>
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Consiliere Aromaterapie
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Știați că multe dintre uleiurile disponibile pe piață nu sunt de calitate terapeutică?  
          Utilizarea unor uleiuri care nu sunt 100% pure poate reprezenta un risc pentru sănătatea dumneavoastră, fie prin ingerare, fie prin aplicarea pe piele.  
          De asemenea, inhalarea uleiurilor prin ardere sau difuzare la cald poate genera substanțe nocive și chiar toxice.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          În cadrul sesiunilor noastre de consiliere în aromaterapie, utilizăm doar uleiuri esențiale de calitate superioară, garantat pure și sigure. Scopul nostru este să vă oferim soluții personalizate pentru relaxare, echilibrare și îmbunătățirea stării generale de sănătate, fără riscuri inutile.
        </p>
      </section>

      {/* Redirect Button */}
      <div className="text-center mt-10">
        <button
          className="bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          onClick={() => setCurrentSection("schedule")}
        >
          Programează-te
        </button>
      </div>
    </div>
  );

        
    case "treatments":
    return (
      <div className="p-6 bg-white rounded-lg max-w-6xl mx-auto mt-10 space-y-12">
        <h2 className="text-4xl font-bold text-primary text-center mb-8 mt-8">
          Tratamente Avansate
        </h2>

        {/* Metatron Hunter Section */}
        <section>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Metatron Hunter 4025 NLS 24D
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Metatron Hunter 4025 NLS este un aparat revoluționar de biorezonanță care
            oferă trei funcții principale:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>
              <strong>Analiză bioenergetică:</strong> Identifică starea de sănătate
              cu o acuratețe de 95%.
            </li>
            <li>
              <strong>Scanare bioenergetică:</strong> Analizează compatibilitatea
              produselor alimentare și remediilor pentru organism.
            </li>
            <li>
              <strong>Terapie bioenergetică:</strong> Utilizează pulsuri
              electromagnetice pentru a reechilibra corpul la nivel energetic.
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Acest aparat scanează aproximativ 1435 de organe și țesuturi la nivel
            celular, utilizând 15.500 de etaloane spectrale digitizate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Beneficiile includ: identificarea dinamicii modificărilor funcționale,
            analiza homeostazei bio-sistemului și determinarea cauzelor dezechilibrelor
            funcționale.
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src={hunterImage}
              alt="Metatron Hunter"
              className="rounded-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
              style={{ marginRight: "20px" }}
            />
          </div>
        </section>

        {/* Biorezonanță Magnetică Section */}
        <section>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Aparat Biorezonanță Magnetică
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Aparatul de biorezonanță magnetică este un instrument inovativ care
            analizează starea de sănătate prin intermediul a peste 39 de arii
            sintetizate. Testarea este rapidă, precisă și non-invazivă.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Funcții cardiovasculare și cerebrovasculare</li>
            <li>Funcția gastrointestinală</li>
            <li>Funcția hepatică și pancreatică</li>
            <li>Sistemul nervos și bolile osoase</li>
            <li>Densitatea minerală osoasă</li>
            <li>Glicemie, vitamine, aminoacizi și coenzime</li>
            <li>Sistemul endocrin și imunitar</li>
            <li>Metale grele și toxine</li>
            <li>Alergii și obezitate</li>
            <li>Pielea, ochii și colagenul</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Testarea durează un minut și oferă rapoarte precise despre starea generală
            de sănătate. Rezultatele pot fi salvate și trimise pe email, incluzând
            recomandări personalizate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Aparatul este simplu de utilizat, eficient și complet non-invaziv,
            permițând o analiză rapidă și comodă.
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src={rezonantaImage}
              alt="Rezonanta"
              className="rounded-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
              style={{ marginRight: "20px" }}
            />
          </div>
        </section>

        {/* Neurofeedback Section */}
        <section>
          <h3 className="text-3xl font-bold text-primary mb-6">
            Neurofeedback: Terapie Modernă pentru Creierul Tău
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Neurofeedback-ul este o terapie inovativă care folosește tehnologia de ultimă
            generație pentru a monitoriza și regla activitatea cerebrală. Această metodă
            non-invazivă este folosită pentru a optimiza funcționarea mentală și emoțională,
            fiind eficientă în gestionarea stresului, anxietății, depresiei, și a altor
            afecțiuni neurologice.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            În timpul unei sesiuni, creierul este conectat la senzori care înregistrează
            activitatea undelor cerebrale. Datele sunt analizate în timp real și sunt
            oferite feedback-uri sub formă de sunete sau imagini. Creierul utilizează
            aceste informații pentru a se auto-regla și a atinge un echilibru mai bun.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Cercetările demonstrează că neurofeedback-ul poate îmbunătăți concentrarea,
            reduce simptomele asociate cu ADHD, crește performanța cognitivă și poate
            ajuta în tratarea insomniei și a altor probleme legate de somn.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Prin consolidarea tiparelor pozitive de funcționare cerebrală, utilizatorii
            neurofeedback-ului experimentează beneficii durabile în sănătatea mentală și
            emoțională, precum și în performanța zilnică.
          </p>
        </section>

        {/* Redirect Button */}
        <div className="text-center mt-10">
          <button
            className="bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
            onClick={() => setCurrentSection("schedule")}
          >
            Programează-te
          </button>
        </div>
      </div>
    );

  
        case "contact":
          return (
              <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-10 space-y-12">
                  <h2 className="text-4xl font-bold text-primary text-center mb-8 mt-8">
                      Contactează-ne
                  </h2>
      
                  {/* Contact Details */}
                  <div className="space-y-6 text-center">
                      <p className="text-lg text-gray-700">
                          Suntem aici să te ajutăm! Pentru informații suplimentare sau
                          programări, folosește detaliile de mai jos pentru a lua legătura
                          cu noi.
                      </p>
      
                      <div className="text-gray-700 text-lg space-y-4">
                          <p>
                              <strong>Adresă:</strong>{" "}
                              Strada Sănătății, Nr. 10, Oraș, Județ
                          </p>
                          <p>
                              <strong>Telefon:</strong>{" "}
                              <a
                                  href="tel:+1234567890"
                                  className="text-green-600 hover:underline"
                              >
                                  +1234567890
                              </a>
                          </p>
                          <p>
                              <strong>Email:</strong>{" "}
                              <a
                                  href="mailto:contact@medicalagency.com"
                                  className="text-green-600 hover:underline"
                              >
                                  contact@medicalagency.com
                              </a>
                          </p>
                          <p>
                              <strong>Program:</strong> Luni - Vineri: 09:00 - 18:00,
                              Sâmbătă: 10:00 - 14:00
                          </p>
                      </div>
                  </div>
      
                  {/* Google Maps Section */}
                  <div className="mt-10">
                      <h3 className="text-2xl font-bold text-primary text-center mb-6">
                          Locația Noastră
                      </h3>
                      <div className="relative rounded-lg shadow-md overflow-hidden">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.078856962552!2d-122.4194154846818!3d37.774929279758634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cdddddd%3A0x1111111111111111!2sMedical+Agency!5e0!3m2!1sen!2sus!4v1234567890123"
                              width="100%"
                              height="400"
                              frameBorder="0"
                              allowFullScreen=""
                              loading="lazy"
                              title="Google Maps Location"
                              className="w-full h-80 md:h-96"
                          ></iframe>
                      </div>
                  </div>
      
                  {/* Embedded Google Form */}
                  <div className="text-center mt-10">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                          Programează o Consultație
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                          Completează formularul nostru online pentru a programa o consultație.
                      </p>
                      <div className="rounded-lg shadow-md overflow-hidden">
                          <iframe
                              src="https://docs.google.com/forms/d/e/1FAIpQLSfbxZxNpOAlkNo37IblRUGl9vZmIR3J9raOcufvBYhYw2N61A/viewform?embedded=true"
                              width="100%"
                              height="1030"
                              frameBorder="0"
                              marginHeight="0"
                              marginWidth="0"
                              title="Consultation Form"
                              className="rounded-lg"
                          >
                              Loading…
                          </iframe>
                      </div>
                  </div>
              </div>
          );
          case "about":
            return (
              <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-[100px] space-y-12">
                <h2 className="text-4xl font-bold text-primary text-center mb-8">
                  Despre Noi
                </h2>
        
                {/* Our Mission Section */}
                <section>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Misiunea Noastră
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Suntem dedicați promovării sănătății holistice, oferind tratamente
                    inovatoare, naturale și personalizate pentru fiecare pacient.
                    Echipa noastră combină tehnologii moderne, cum ar fi biorezonanța și
                    neurofeedback-ul, cu metode tradiționale de vindecare pentru a
                    atinge echilibrul dintre corp, minte și spirit.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mt-4">
                    Într-un mediu sigur și profesionist, sprijinim pacienții în călătoria lor
                    spre o sănătate optimă prin prevenție, tratamente personalizate și educație.
                  </p>
                </section>
        
                {/* Our Team Section */}
                <section>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Echipa Noastră
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Echipa noastră este formată din experți cu experiență în diverse
                    domenii, de la medicină holistică și nutriție până la terapie prin
                    biorezonanță și psihoterapie. Cu o abordare colaborativă,
                    ne asigurăm că fiecare pacient primește cele mai bune soluții
                    adaptate nevoilor sale.
                  </p>
                </section>
        
                {/* Why Choose Us Section */}
                <section>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    De Ce Să Alegi Agenția Noastră Medicală?
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                    <li>Abordare holistică și integrativă pentru sănătate.</li>
                    <li>Tehnologie avansată, precum SCIO și Metatron Hunter.</li>
                    <li>Tratamente 100% naturale, personalizate pentru fiecare pacient.</li>
                    <li>O echipă de specialiști cu o vastă experiență.</li>
                    <li>Un mediu profesionist și prietenos.</li>
                  </ul>
                </section>
        
                {/* Vision Section */}
                <section>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Viziunea Noastră
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ne dorim să fim un partener de încredere în procesul de vindecare al
                    fiecărui pacient, oferind soluții eficiente și sustenabile pentru
                    o sănătate de durată. Încurajăm prevenția și educația pentru a crea
                    o comunitate mai sănătoasă.
                  </p>
                </section>
        
                {/* Call-to-Action */}
                <div className="text-center mt-10">
                  <button
                    className="bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                    onClick={() => setCurrentSection("contact")}
                  >
                    Contactează-ne
                  </button>
                </div>
              </div>
            );
        
          case "schedule":
            return (
              <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-10 text-center space-y-6">
                {/* Title Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-[50px]">
                  Programează-te
                </h2>
          
                {/* Image Section with Animation */}
                <div className="relative flex justify-center mt-6">
                  <img
                    src={programeazateImage} // Correctly imported image reference
                    alt="Programează-te"
                    className="rounded-lg shadow-md transition-transform duration-700 ease-in-out transform hover:scale-105"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
          
                {/* Description Section */}
                <p className="text-base md:text-lg text-gray-700 mt-6">
                  Programează o consultație acum pentru a descoperi soluții personalizate pentru sănătatea ta.
                </p>
          
                {/* Button to Toggle Google Form */}
                <div>
                  <button
                    className="bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    onClick={() => setShowForm((prevState) => !prevState)}
                  >
                    {showForm ? "Ascunde Formularul" : "Completează Formularul"}
                  </button>
                </div>
          
                {/* Google Form Section */}
                {showForm && (
                  <div className="mt-6 animate-fadeIn">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfbxZxNpOAlkNo37IblRUGl9vZmIR3J9raOcufvBYhYw2N61A/viewform?embedded=true"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      className="rounded-lg shadow-md"
                      title="Consultation Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                )}
              </div>
            );
          

      default:
        return (
          <div className="flex flex-col items-center justify-center text-center p-8 min-h-[60vh]">
            <h2 className="text-5xl font-bold text-green-700">
              Welcome to our Medical Agency
            </h2>
            <p className="text-2xl text-gray-700 mt-6">
              Your health is our priority.
            </p>
          </div>
        );
    }
  };

  return (
    <div 
      className="App min-h-screen bg-cover bg-center bg-repeat" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain', // or 'auto', or specific sizes
        backgroundPosition: 'center'
      }}
      
    >
      <Header setCurrentSection={setCurrentSection} />
      <div>{renderContent()}</div>
      <Footer></Footer>
    </div>
    
  );
  
  
}


export default App;
