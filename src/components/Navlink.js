import React from 'react';
import {Link} from "react-scroll";

export const Navlink = ({to, className, children}) => {
  return (
    <Link to={to} className={`cursor-pointer transition-all duration-300 ${className}`} activeClass="font-bold" smooth={true} duration={1000} spy={true} offset={-100}>
      {children}
    </Link>
  )
}
