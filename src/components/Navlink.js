import React from 'react';
import {Link} from "react-scroll";

export const Navlink = ({to, children}) => {
  return (
    <Link to={to} className="mx-3 cursor-pointer transition-all duration-300 w-20 text-center" activeClass="font-bold" smooth={true} duration={1000} spy={true} offset={-100}>
      {children}
    </Link>
  )
}
