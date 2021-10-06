import Button from "./components/Button.js";
import { Navbar } from "./components/Navbar.js";
import {BsChevronCompactDown} from "react-icons/bs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen bg-banner bg-black bg-blend-multiply bg-opacity-60 bg-center bg-cover px-10 text-white flex flex-col justify-between">
        <div></div>
        <div className="text-6xl leading-normal font-bold flex flex-col justify-center">
          <div>Hello !</div>
          <div>Je suis <span className="border-b-4 border-primary-400">Benjamin</span>,</div>
          <div className="mb-4">Pianiste et Professeur</div>
          <Button>Je réserve un cours</Button>
        </div>
        <div className="w-full flex justify-center mb-2 text-2xl"><BsChevronCompactDown /></div>
      </div>
    </>

  );
}

export default App;
