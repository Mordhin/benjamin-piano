import React, { useState } from "react";
import { animateScroll } from "react-scroll";
import france from "../assets/france.png";
import uk from "../assets/united-kingdom.png";
import spain from "../assets/spain.png";
import { Navlink } from "./Navlink";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Hamburger } from "./Hamburger";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { width } = useWindowDimensions();
  const [scroll, setScroll] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { t, i18n } = useTranslation();

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const checkScroll = () => {
    if (!scroll && window.pageYOffset > 1) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 1) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll);

  const handleBg = () => {
    if (scroll) return "bg-secondary-700";
    if (!disabled) return "bg-secondary-700";
    return "bg-transparent";
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className={`navbar w-full h-10 px-3 flex justify-between items-center fixed transition-colors duration-300 ${handleBg()} text-white z-20`}
    >
      {width >= 640 && (
        <>
          <div
            className="w-max font-bold cursor-pointer"
            onClick={() => animateScroll.scrollToTop()}
          >
            Benjamin Corion<span className="text-primary-400">.</span>
          </div>
          <div className="flex justify-between items-center">
            <Navlink to="presentation" className="mx-3 w-20 text-center">
              {t("navbar.home")}
            </Navlink>
            <Navlink to="pricing" className="mx-3 w-20 text-center">
              {t("navbar.pricing")}
            </Navlink>
            <Navlink to="contact" className="mx-3 w-20 text-center">
              {t("navbar.contact")}
            </Navlink>
          </div>
          <ul className="w-28 flex justify-end">
            {/*
            <li className="mr-3 w-5">
              <img
                src={france}
                alt="france"
                onClick={() => changeLanguage("fr")}
                className="cursor-pointer"
              />
            </li>
            <li className="mr-3 w-5">
              <img
                src={uk}
                alt="uk"
                onClick={() => changeLanguage("en")}
                className="cursor-pointer"
              />
            </li>
            <li className="w-5">
              <img
                src={spain}
                alt="spain"
                onClick={() => changeLanguage("es")}
                className="cursor-pointer"
              />
            </li>
            */}
          </ul>
        </>
      )}
      {width < 640 && (
        <>
          <div
            className="w-max font-bold cursor-pointer"
            onClick={() => animateScroll.scrollToTop()}
          >
            Benjamin Corion<span className="text-primary-400">.</span>
          </div>
          <div className="cursor-pointer" onClick={() => toggleDisabled()}>
            <Hamburger trigger={disabled} />
          </div>
          <div
            className={`absolute right-0 top-10 w-max ${
              disabled ? "h-0" : "h-max"
            } transition-all duration-300 overflow-hidden`}
          >
            <div className="p-5 bg-secondary-600 rounded-b flex flex-col items-end border-l border-b border-secondary-700">
              <Navlink to="presentation" className="mb-2 text-right">
                {t("navbar.home")}
              </Navlink>
              <Navlink to="pricing" className="mb-2 text-right">
                {t("navbar.pricing")}
              </Navlink>
              <Navlink to="contact" className="mb-2 text-right">
                {t("navbar.contact")}
              </Navlink>
              {/*
              <div className="flex justify-around">
                <img
                  src={france}
                  alt="france"
                  className="mr-3 w-5 cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                />
                <img
                  src={uk}
                  alt="uk"
                  className="mr-3 w-5 cursor-pointer"
                  onClick={() => changeLanguage("en")}
                />
                <img
                  src={spain}
                  alt="spain"
                  onClick={() => changeLanguage("es")}
                  className="w-5 cursor-pointer"
                />
              </div>
              */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
