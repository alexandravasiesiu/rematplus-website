import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import background from "../assets/images/background-image.jpg";
import CookieBanner from "../components/CookieBanner";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        {localStorage.getItem("cookie_consent") ? null : <CookieBanner />}
        <Navigation />

        <section>
          <div
            className="pt-24 bg-cover"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap items-center -mx-4 pt-32 pb-32 justify-end">
                <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                  <div className="max-w-md lg:max-w-none">
                    <h1 className="font-heading text-4xl lg:text-5xl text-white mb-6 text-center font-medium">
                      Inovație în Gestionarea Deșeurilor
                    </h1>
                    <p className="mb-2 leading-relaxed text-yellow-50 text-xl text-center">
                      Partenerul Tău de Încredere în Reciclarea și Gestionarea
                      Responsabilă a Deșeurilor pentru un Mediu Curat și Sănătos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative py-20">
              <div className="absolute top-0 left-0 w-full backdrop-blur backdrop-filter bg-gray-900 bg-opacity-50 h-full" />
              <div className="relative container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                    <div className="mx-auto flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10 mr-4">
                        <svg
                          className="h-8 w-8 text-red-500"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#7CC645"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="5 9 9 9 9 5" />
                          <line x1={3} y1={3} x2={9} y2={9} />
                          <polyline points="5 15 9 15 9 19" />
                          <line x1={3} y1={21} x2={9} y2={15} />
                          <polyline points="19 9 15 9 15 5" />
                          <line x1={15} y1={9} x2={21} y2={3} />
                          <polyline points="19 15 15 15 15 19" />
                          <line x1={15} y1={15} x2={21} y2={21} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-white mb-2 text-xl">
                          Redu
                        </h4>
                        <p className="text-white">
                          Încurajează reducerea consumului de resurse și a
                          producției de deșeuri prin achiziționarea rațională și
                          utilizarea conștientă a bunurilor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                    <div className="flex mx-auto">
                      <div className="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 mr-4 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10">
                        <svg
                          className="h-8 w-8 text-red-500"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#7CC645"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-white mb-2 text-xl">
                          Reutilizează
                        </h4>
                        <p className="text-white">
                          Promovează reutilizarea și refolosirea obiectelor și
                          materialelor pentru a prelungi viața acestora și
                          pentru a reduce cantitatea de deșeuri generate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-4">
                    <div className="flex mx-auto">
                      <div className="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 mr-4 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10">
                        <svg
                          className="h-8 w-8 text-red-500"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#7CC645"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                          <path
                            d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                            transform="rotate(120 12 13)"
                          />
                          <path
                            d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                            transform="rotate(240 12 13)"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-white mb-2 text-xl">
                          Reciclează
                        </h4>
                        <p className="text-white">
                          {" "}
                          Încurajează colectarea și procesarea materialelor
                          reciclabile pentru a le transforma în noi produse și
                          pentru a preveni acumularea de deșeuri în depozite sau
                          în natură.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 xl:pt-24 xl:pb-28 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-14">
                <div className="flex flex-wrap justify-between items-center"></div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
                <div className="w-full mb-10">
                  <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                    Despre noi
                  </h3>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#339D5F"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p className="mb-6 text-lg font-medium text-coolGray-500 leading-7 w-full">
                    Suntem o companie dedicată transformării deșeurilor în
                    resurse valorificabile și durabile. Încă din 2009, cu o
                    vastă experiență în gestionarea deșeurilor, ne-am angajat să
                    protejăm mediul înconjurător și să contribuim la crearea
                    unui viitor mai curat și mai sănătos.
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#339D5F"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500 w-full">
                    <b class="text-coolGray-900">Logistic,</b> realizăm
                    transporturile deșeurilor cu mijloace auto și personal
                    autorizat, cu respectarea reglementărilor legale în vigoare
                    privind transportul deșeurilor. Dispunem de o gamă variată
                    de autocamionete și autocamioane, dotate și echipate
                    corespunzător întocmai pentru a gestiona orice flux de deșeu
                    reciclabil este necesar a fi colectat. Acestea colectează în
                    containere de 16 mc sau 32 mc, sau chiar unde locatia
                    consideră necesar, prescontainer de 22 mc - acționat
                    electric.
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#339D5F"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p className="text-lg font-medium leading-7 text-coolGray-500 mb-5 w-full">
                    <b class="text-coolGray-900">Gama de deșeuri colectate</b>{" "}
                    este vastă, cuprinzând sectorul metalelor feroase și
                    neferoase, al echipamentelor electrice si electronice,
                    precum și deșeurile din carton/hârtie, lemn, plastic
                    (provenit din diverse surse, inclusiv polistiren) sau
                    sticlă. Pentru deșeurile care provin din ambalaje,
                    personalul nostru calificat oferă servicii de trasabilitate,
                    îndeplinind obligațiile către Fondul de Mediu.
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#339D5F"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p className="text-lg font-medium leading-7 text-coolGray-500 mb-5 w-full">
                    <b class="text-coolGray-900">Depozitarea și procesarea</b>{" "}
                    se realizează în spații special amenajate, autorizate în
                    acest sens, din ambele centre de colectare pe care le avem
                    în acest moment, respectându-se toate prevederile în acest
                    sens. Centru principal de colectare este in Sântimbru -
                    Alba, aflat la 3 KM de A10, cu o suprafată betonată de
                    30.000 mp neacoperită și o hală acoperită de 8.000 mp, iar
                    cel secundar în Ocna Mureș. Procesele noastre de reciclare
                    sunt eficiente și responsabile, contribuind la reducerea
                    cantității de deșeuri care ajung în depozitele de gunoi.
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#339D5F"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p className="text-lg font-medium leading-7 text-coolGray-500 w-full">
                    <b class="text-coolGray-900">Valorificarea finală,</b> cea
                    mai importantă etapă din circuitul unui deșeu, este transmis
                    direct catre reciclatori finali, unde reintră în producția
                    produsului finit.
                  </p>
                </div>
              </div>
              <div className="px-4 flex flex-wrap gap-5 lg:w-1/2 lg:justify-en justify-center">
                <img
                  src="images/WhatsApp-Image-2023-09-13-at-14-28-38.jpeg"
                  alt=""
                  className="rounded-lg shadow-md w-2/3 border-green-600 border-4"
                />
                <img
                  src="images/WhatsApp-Image-2023-09-13-at-14-28-38-1.jpeg"
                  alt=""
                  className="shadow-md rounded-lg w-2/3 border-4 border-green-600"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div className="wave-top w-full text-yellow-50">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
                fill="currentColor"
                className="bg-yellow-50"
              />
            </svg>
          </div>
          <section className="bg-yellow-50">
            <div className="container px-4 mx-auto">
              <div className="text-center">
                <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tighter">
                  Cuantificarea Impactului Nostru: Reciclarea în Cifre
                </h3>
                <p className="mb-16 xl:mb-24 mx-auto text-lg font-medium max-w-4xl text-coolGray-500">
                  Măsurăm impactul nostru prin reciclare și îți prezentăm
                  rezultatele noastre pentru un mediu mai curat și mai
                  sustenabil.
                </p>
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +20.000{" "}
                    </h2>
                    <p className="text-lg md:text-xl font-medium">
                      Tone de deșeuri reciclate/an
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold text-green-600">
                      +260
                    </h2>
                    <p className="text-lg md:text-xl font-medium">
                      Hectare de teren curat/an
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +65.000
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-coolGray-900">
                      Copaci salvați anual
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +1.000.000 L
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-coolGray-900">
                      apă rămasă curată și potabilă/an
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="wave-bottom w-full text-yellow-50">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-yellow-50"
            >
              <path
                d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <section className="wave-top wave-bottom">
          <div className="wave wave-top w-full text-green-600">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-yellow-50"
            >
              <path
                d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="bg-green-600">
            <div className="container px-4 mx-auto">
              <div className="mx-auto py-10">
                <div className="px-4 max-w-3xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white text-center mb-10">
                    Impactul deosebit al reciclarii, pentru mediu si societate
                  </h3>
                  <p className="mb-6 text-lg leading-8 text-yellow-50">
                    Într-o lume aflata în continuă schimbare, protejarea
                    mediului și gestionarea eficientă a resurselor devine din ce
                    în ce mai importantă. Reciclarea este o acțiune esențială pe
                    care fiecare dintre noi o poate lua pentru a contribui la un
                    viitor mai verde și mai sustenabil.
                  </p>
                  <p className="mb-6 text-lg leading-8 text-yellow-50">
                    Misiunea noastră este să vă ajutăm să reduceți amprenta de
                    carbon și să economisiți resurse naturale. Suntem în strânsă
                    colaborare cu toți partenerii noștri pentru a promova
                    practici de reciclare responsabile, menite creării unui
                    mediu sănătos și durabil pentru generațiile viitoare.
                  </p>
                  <div className="flex justify-center mb-6">
                    <img
                      src="images/WhatsApp-Image-2023-09-13-at-14-28-41-1.jpeg"
                      alt=""
                      className="rounded shadow-md w-2/3 border-4"
                    />
                  </div>
                  <p className="mb-5 text-lg leading-7 text-yellow-50">
                    Modalități ușoare, pe care fiecare dintre noi le poate face,
                    conștient și responsabil pentru a ne asigura că procedăm în
                    mod corect:
                  </p>
                  <ol className="list-decimal">
                    <li className="text-lg leading-7 text-yellow-50 mb-5">
                      <b class="text-yellow-200">
                        Separarea deșeurilor pe fracții:
                      </b>{" "}
                      Deși aparent poate fi considerat un gest dificil de
                      implementat, țineți cont de faptul că separarea deșeurilor
                      reduce cantitatea de deșeuri din gropile de gunoi,
                      economisind astfel spațiu. Poluarea aerului și a apei
                      poate fi redusă considerabil atunci când deșeurile
                      periculoase sunt separate și tratate separat.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50 mb-5">
                      <b class="text-yellow-200">
                        Alegerea produselor biodegradabile:
                      </b>{" "}
                      Deșeurile biodegradabile pot fi descompuse în mod natural.
                      De obicei, produsele sunt fabricate astfel încât să se
                      poată degrada atunci când sunt expuse la radiațiile
                      ultraviolete ale soarelui, enzime, bacterii, vânt sau apă.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50 mb-5">
                      <b class="text-yellow-200">Compostul:</b> Peste 60% din
                      gunoiul aruncat în gropile de gunoi este format în
                      principal din deșeuri organice care pot fi descompuse în
                      comunitate sau în case. Gunoiul produs în fiecare
                      gospodărie este format din deșeuri organice care pot fi
                      folosite pentru compostare. Compostarea transformă
                      deșeurile în nutrient foarte valoroși pentru sol.
                    </li>
                  </ol>
                  <p className="mb-5 text-lg leading-7 text-yellow-50">
                    Împreună, contribuind fiecare, având grijă de deșeul generat
                    de locuința proprie, putem să :
                  </p>
                  <ul className="list-disc">
                    <li className="text-lg leading-7 text-yellow-50">
                      Reducem deșeurile și protejăm habitatele naturale.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50">
                      Economisim resurse naturale și reducem emisiile de carbon.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50">
                      Contribuim la economisirea de energie și costuri.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50">
                      Stimulăm dezvoltarea economică și crearea de locuri de
                      muncă.
                    </li>
                    <li className="text-lg leading-7 text-yellow-50 mb-5">
                      Încurajăm responsabilitatea individuală și comunitară.
                    </li>
                  </ul>
                  <p className="text-lg leading-7 text-yellow-50">
                    Reciclarea este un gest simplu, dar puternic, pentru un
                    viitor mai verde.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wave wave-bottom w-full text-green-600">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </section>
        <section className="bg-white overflow-hidden py-10">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
                <div className="max-w-md mx-auto">
                  <h2 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                    Legislație
                  </h2>
                  <ul className="mb-8">
                    <li className="flex items-center mb-4">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <p className="text-lg font-heading text-coolGray-500">
                        Autorizația de Mediu, emisă de ANPM ALBA –
                        212/06.12.2010, cu valabilitate prin viză anuală
                      </p>
                    </li>
                    <li className="flex items-center mb-4">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <p className="text-lg font-heading text-coolGray-500">
                        Licențe comunitare de transport deșeuri
                      </p>
                    </li>
                    <li className="flex items-center mb-4">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <a
                        className="text-lg font-heading text-coolGray-500"
                        href="https://www.afm.ro/"
                      >
                        https://www.afm.ro/
                      </a>
                    </li>
                    <li className="flex items-center">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <a
                        className="text-lg font-heading text-coolGray-500"
                        href="https://anpm.ro/"
                      >
                        https://anpm.ro/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative max-w-max mx-auto">
                  <img
                    className="relative rounded-2xl lg:h-80 h-44"
                    src="images/grabage-truck.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}
