import { useNavigate } from "react-router-dom";
import logo from "../assets/images/remat-plus-logo-transparent.png";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="wave-top w-full text-yellow-50">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-yellow-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap pt-24 pb-12 -mx-4">
            <div className="px-4 mb-16 lg:mb-0 md:w-1/2 w-full flex">
              <div className="pr-10 mb-16 lg:mb-0">
                <h3 className="mb-5 text-lg font-bold text-coolGray-900 ">
                {t('footer.menu')}
                </h3>
                <ul className="flex-col">
                  <li className="mb-4 flex">
                    <a
                      className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                      onClick={() => navigate("/gallery")}
                      href="#"
                    >
                      {t('menu.gallery')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-coolGray-500 hover:text-coolGray-900 font-medium"
                      // onClick={() => navigate("/blog")}
                      href="#"
                    >
                      {t('menu.articles')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-coolGray-500 hover:text-coolGray-900 font-medium"
                      // onClick={() => navigate("/services")}
                      href="#"
                    >
                      {t('menu.services')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-coolGray-500 hover:text-coolGray-900 font-medium"
                      onClick={() => navigate("/contact")}
                      href="#"
                    >
                      {t('menu.contact')}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 mb-16 lg:mb-0">
                <h3 className="mb-5 text-lg font-bold text-coolGray-900 flex">
                  {t('footer.contact')}
                </h3>
                <ul>
                  <li className="mb-4">
                    <p className="inline-block font-medium text-coolGray-500 flex">
                    {t('contact.phone')}: 0749/662.007{" "}
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="inline-block font-medium text-coolGray-500 flex">
                    {t('contact.phone')}: 0751/041.087
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="inline-block font-medium text-coolGray-500 flex">
                      E-mail: office@rematplus.ro
                    </p>
                  </li>
                  <li>
                    <p className="inline-block font-medium text-coolGray-500 flex">
                      {t('contact.address')}:
                    </p>
                  </li>
                  <span className="inline-block font-medium text-coolGray-500 flex mb-4">
                    Sântimbru, Șoseaua Națională, nr. 15, județul Alba
                  </span>
                </ul>
              </div>
            </div>
            <div className="px-4 mb-16 lg:mb-0 md:w-1/2 w-full flex md:justify-end justify-center">
              <a
                className="inline-block mb-4"
                onClick={() => navigate("/")}
                href="#"
              >
                <img className="h-10" src={logo} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-coolGray-400" />
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center py-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <p className="font-medium text-coolGray-900">
                {t('footer.rights')}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap md:justify-end -mx-5">
                <div class="sm:w-auto flex items-center font-medium">
                  <a class="text-coolGray-900" href="#" onClick={() => ( navigate('/privacypolicy') )}>
                    {t('footer.privacy')}
                  </a>
                </div>
                <div className="px-5 flex items-center">
                  <a
                    className="inline-block text-coolGray-900 hover:text-coolGray-800"
                    href="https://www.facebook.com/rematplus"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                    >
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
