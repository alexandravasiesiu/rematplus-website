import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import background from "../assets/images/background-image.jpg";
import CookieBanner from "../components/CookieBanner";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import AboutRo from "../content/about/About.ro";
import AboutEn from "../content/about/About.en";
import AboutDe from "../content/about/About.de";
import EcologyRo from "../content/ecology/Ecology.ro";
import EcologyEn from "../content/ecology/Ecology.en";
import EcologyDe from "../content/ecology/Ecology.de";
import Video from "../components/Video";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
                      {t("index.heading.title")}
                    </h1>
                    <p className="mb-2 leading-relaxed text-yellow-50 text-xl text-center">
                      {t("index.heading.subtitle")}
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
                          {t("index.subheading1.title")}
                        </h4>
                        <p className="text-white">
                          {t("index.subheading1.subtitle")}
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
                          {t("index.subheading2.title")}
                        </h4>
                        <p className="text-white">
                          {t("index.subheading2.subtitle")}
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
                          {t("index.subheading3.title")}
                        </h4>
                        <p className="text-white">
                          {" "}
                          {t("index.subheading3.subtitle")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {i18next.language === "ro" && <AboutRo />}
        {i18next.language === "en" && <AboutEn />}
        {i18next.language === "de" && <AboutDe />}

        <Video />

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
                  {t("index.statistics.title")}
                </h3>
                <p className="mb-16 xl:mb-24 mx-auto text-lg font-medium max-w-4xl text-coolGray-500">
                  {t("index.statistics.subtitle")}
                </p>
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +20.000{" "}
                    </h2>
                    <p className="text-lg md:text-xl font-medium">
                      {t("index.statistics.paragraph1")}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold text-green-600">
                      +260
                    </h2>
                    <p className="text-lg md:text-xl font-medium">
                      {t("index.statistics.paragraph2")}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +65.000
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-coolGray-900">
                      {t("index.statistics.paragraph3")}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                    <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tighter text-green-600">
                      +1.000.000 L
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-coolGray-900">
                      {t("index.statistics.paragraph4")}
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

        {i18next.language === "ro" && <EcologyRo />}
        {i18next.language === "en" && <EcologyEn />}
        {i18next.language === "de" && <EcologyDe />}

        <section className="bg-white overflow-hidden py-10">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
                <div className="max-w-md mx-auto">
                  <h2 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                  {t("index.legislation.certifications.title")}
                  </h2>
                  <ul className="mb-8">
                    <li className="flex items-center mb-4">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <p className="text-lg font-heading text-coolGray-500">
                        {t("index.legislation.document1")}
                      </p>
                    </li>
                    <li className="flex items-center mb-4">
                      <img
                        className="mr-3"
                        src="flex-ui-assets/elements/cta/checkbox-green.svg"
                        alt=""
                      />
                      <p className="text-lg font-heading text-coolGray-500">
                        {t("index.legislation.document2")}
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

        <section className="bg-white overflow-hidden pb-10">
          <div className="container px-4 mx-auto">
          <div className="text-center">
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0 flex justify-center">
                    
                      <img
                        className='w-1/2 object-cover'
                        src='images\WhatsApp Image 2024-06-03 at 09.48.38.jpeg'
                        alt=''
                      />
                    
                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0 flex justify-center">

                    <img
                      className='w-1/2 object-cover'
                      src='images\WhatsApp Image 2024-06-03 at 09.48.38 (1).jpeg'
                      alt=''
                    />

                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0 flex justify-center">

                    <img
                      className='w-1/2 object-cover'
                      src='images\WhatsApp Image 2024-06-03 at 09.48.38 (2).jpeg'
                      alt=''
                    />

                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 flex justify-center">

                    <img
                      className='w-1/2 object-cover'
                      src='images\WhatsApp Image 2024-06-03 at 09.48.38 (3).jpeg'
                      alt=''
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
