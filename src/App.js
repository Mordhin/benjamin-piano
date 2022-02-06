import { useEffect } from "react";
import { Navbar } from "./components/Navbar.js";
import { Banner } from "./components/Banner.js";
import { Paragraphe } from "./components/Paragraphe.js";
import benji from "./assets/benji avatar.jpg";
import piano from "./assets/benji clavier.jpg";
import { Button } from "./components/Button.js";
import { CgChevronRightR } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { scrollSpy } from "react-scroll";
import { PricingCard } from "./components/PricingCard.js";
import { useTranslation } from "react-i18next";
import { Navlink } from "./components/Navlink.js";
import { Contact } from "./components/Contact.js";

const App = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Banner />
      <div
        id="presentation"
        className="container mx-auto mt-20 mb-20 flex flex-col items-center"
      >
        <Paragraphe title={t("title.who")} image={benji} className="mb-5">
          {t("who.part1")}
          <br />
          {t("who.part2")}
          <br />
          {t("who.part3")}
          <br />
          <br />
          {t("who.part4")}
        </Paragraphe>
        {/*<div className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100">
          {t("link.videos")} <CgChevronRightR className="ml-2" />
        </div>*/}
        <Paragraphe
          title={t("title.what")}
          image={piano}
          right
          className="mt-20 mb-5"
        >
          {t("what.part1")}
          <br />
          {t("what.part2")}
          <br />
          {t("what.part3")}
          <br />
          {t("what.part4")}
          <br />
          {t("what.part5")}
          <br />
          <br />
          {t("what.part6")}
        </Paragraphe>
        <Navlink
          to="pricing"
          className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100"
        >
          {t("link.prices")} <CgChevronRightR className="ml-2" />
        </Navlink>
      </div>
      <div
        id="pricing"
        className="container mx-auto flex flex-col items-center"
      >
        <h2 className={`text-2xl font-bold mt-4 mb-4 w-full`}>
          {t("title.pricing")}
        </h2>
        <PricingCard
          title={t("pricing.title.one")}
          price1="22€"
          price2="25€"
          price3="30€"
          className="mb-20"
        />
        <PricingCard
          title={t("pricing.title.half")}
          price1="15€"
          price2="18€"
          price3="23€"
          className="mb-10"
        />
        <div className="w-full">*{t("pricing.moncada")}</div>
      </div>
      <div
        id="contact"
        className="container mx-auto mt-20 mb-20 flex flex-col items-center"
      >
        <h2 className={`text-2xl font-bold mt-4 mb-10 w-full`}>
          {t("contact.title")}
        </h2>
        <div className="w-full flex flex-col items-center">
          <h3 className="font-bold mb-4 flex items-center">
            <div className="mr-2">
              <FiMail />
            </div>
            <div>{t("contact.body")}</div>
          </h3>
          <Contact></Contact>
          <div className="text-italic text-gray-400 mt-8">
            {t("contact.discret")}
            <div className="text-center text-xl text-gray-500">
              benjamin.corion.note@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="mb-60"></div>
      <img
        src="https://hitwebcounter.com/counter/counter.php?page=7939554&style=0007&nbdigits=5&type=ip&initCount=0"
        title="Free Counter"
        Alt="web counter"
        border="0"
      />
    </>
  );
};

export default App;
