import React from 'react'
import france from "../assets/france.png"
import uk from "../assets/united-kingdom.png"
import spain from "../assets/spain.png"

export const Navbar = () => {
  return (
    <div className="navbar w-full flex justify-between fixed bg-transparent text-white">
      <div className="w-28"></div>
      <ul className="flex justify-between py-2">
        <li className="mr-5">Accueil</li>
        <li className="mr-5">Tarifs</li>
        <li >Musique</li>
      </ul>
      <ul className="w-28 flex justify-end py-2">
        <li className="mr-3 w-5"><img src={france} alt="france" /></li>
        <li className="mr-3 w-5"><img src={uk} alt="uk" /></li>
        <li className="mr-3 w-5"><img src={spain} alt="spain" /></li>
      </ul>
    </div>
  )
}
