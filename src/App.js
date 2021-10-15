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

const App = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <div
        id="presentation"
        className="container mx-auto mt-20 mb-20 flex flex-col items-center"
      >
        <Paragraphe title="Qui suis-je ?" image={benji} className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraphe>
        <div className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100">
          Mes vidéos <CgChevronRightR className="ml-2" />
        </div>
        <Paragraphe
          title="Ce que je propose"
          image={piano}
          right
          className="mt-20 mb-5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraphe>
        <div className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100">
          Mes tarifs <CgChevronRightR className="ml-2" />
        </div>
      </div>
      <div
        id="pricing"
        className="container mx-auto flex flex-col items-center"
      >
        <h2 className={`text-2xl font-bold mt-4 mb-4 w-full`}>Mes tarifs</h2>
        <PricingCard
          title="Cours d'une heure"
          price1="25€"
          price2="20€"
          className="mb-20"
        />
        <PricingCard
          title="Cours d'une demie-heure"
          price1="15€"
          price2="13€"
          className="mb-10"
        />
        <div className="w-full">Forfait de 10 cours d'une heure : 200€</div>
        <div className="w-full">
          Forfait de 10 cours d'une demie-heure : 130€
        </div>
        <Button className="mt-10 mb-20" size="60" primary>
          Je réserve un cours
        </Button>
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default App;
