import { useEffect } from "react";
import { Navbar } from "./components/Navbar.js";
import { Banner } from "./components/Banner.js";
import { Paragraphe } from "./components/Paragraphe.js";
import benji from "./assets/benji avatar.jpg";
import piano from "./assets/benji clavier.jpg";
import { Button } from "./components/Button.js";
import { CgChevronRightR } from "react-icons/cg";
import { scrollSpy } from "react-scroll";
import { PricingCard } from "./components/PricingCard.js";
import { useTranslation } from "react-i18next";
import { Navlink } from "./components/Navlink.js";

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
        <Button className="mt-10 mb-20" size="60" primary>
          {t("booking")}
        </Button>
      </div>
      <div
        id="contact"
        className="container mx-auto mt-20 mb-20 flex flex-col items-center"
      >
        <h2 className={`text-2xl font-bold mt-4 mb-4 w-full`}>
          {t("title.contact")}
        </h2>
        Me contacter WEEEEEESSSSHHH
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default App;
