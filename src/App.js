import { Navbar } from "./components/Navbar.js";
import { Banner } from "./components/Banner.js";
import { Paragraphe } from "./components/Paragraphe.js";
import benji from "./assets/benji avatar.jpg";
import piano from "./assets/benji clavier.jpg";
import { Button } from "./components/Button.js";
import {CgChevronRightR} from "react-icons/cg";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto mt-20 flex flex-col items-center">
        <Paragraphe title="Qui suis-je ?" image={benji} className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
        </Paragraphe>
        <div className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100">Mes vidéos <CgChevronRightR className="ml-2"/></div>
        <Paragraphe title="Ce que je propose" image={piano} right className="mt-20 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
        </Paragraphe>
        <div className="w-full cursor-pointer flex justify-end items-center text-primary-400 hover:text-primary-100">Mes tarifs <CgChevronRightR className="ml-2"/></div>
        <Button className="mt-10 mb-20" size="60" primary>Je réserve un cours</Button>
      </div>
    </>
  );
}

export default App;
