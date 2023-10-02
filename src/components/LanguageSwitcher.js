import iconRo from "../assets/images/icon-ro.png";
import iconEn from "../assets/images/icon-en.png";
import iconDe from "../assets/images/icon-de.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="xl:flex items-center flex flex-wrap gap-2 relative">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="font-medium rounded-lg text-sm px-5 text-center inline-flex items-center py-2 border-green-600 border-2 text-green-600"
          type="button"
          onClick={toggleDropdown}
        >
          <div className="flex items-center space-x-2">
            {i18n.language === "ro" && (
              <img
                className="rounded shadow-md mr-2 w-5"
                src={iconRo}
                alt="Romanian"
              />
            )}
            {i18n.language === "en" && (
              <img
                className="rounded shadow-md mr-2 w-5"
                src={iconEn}
                alt="English"
              />
            )}
            {i18n.language === "de" && (
              <img
                className="rounded shadow-md mr-2 w-5"
                src={iconDe}
                alt="German"
              />
            )}
            <span>{t(`languageName.${i18n.language}`)}</span>
          </div>
          <svg
            className={`w-2.5 h-2.5 ml-2.5 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            ></path>
          </svg>
          {/* Dropdown menu */}
          {isOpen && (
            <div
              id="dropdown"
              className="absolute top-12 left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    onClick={() => changeLanguage("ro")}
                    href="#"
                    className="block px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {t("languageName.ro")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => changeLanguage("en")}
                    href="#"
                    className="block px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {t("languageName.en")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => changeLanguage("de")}
                    href="#"
                    className="block px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {t("languageName.de")}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
