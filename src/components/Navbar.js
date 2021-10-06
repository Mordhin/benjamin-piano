import React, {useState} from 'react'
import {Link, animateScroll} from "react-scroll";
import france from "../assets/france.png"
import uk from "../assets/united-kingdom.png"
import spain from "../assets/spain.png"
import { Navlink } from './Navlink';

export const Navbar = () => {
  //responsive - check rento hook
  const [scroll, setScroll] = useState(false);

  const checkScroll = () => {
    if (!scroll && window.pageYOffset > 1) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 1) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <div className={`navbar w-full h-10 px-3 flex justify-between items-center fixed transition-colors duration-300 ${ scroll ? "bg-secondary-700" : "bg-transparent"} text-white`}>
      <div className="w-max font-bold cursor-pointer" onClick={() => animateScroll.scrollToTop()}>Benjamin Corion<span className="text-primary-400">.</span></div>
      <div className="flex justify-between items-center">
        <Navlink to="presentation">Accueil</Navlink>
        <Navlink to="pricing">Tarifs</Navlink>
        <Navlink to="pricing">Musique</Navlink>
      </div>
      <ul className="w-28 flex justify-end">
        <li className="mr-3 w-5"><img src={france} alt="france" /></li>
        <li className="mr-3 w-5"><img src={uk} alt="uk" /></li>
        <li className="w-5"><img src={spain} alt="spain" /></li>
      </ul>
    </div>
  )
}
