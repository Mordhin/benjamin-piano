import React from 'react'

export const Hamburger = ({trigger}) => {
  return (
    <div className="block w-5">
      <span className={`block absolute bg-white w-4 h-0.5 rounded transition transform duration-300 ${ !trigger ? "-rotate-45" : "-translate-y-1.5"}`}></span>
      <span className={`block absolute bg-white w-4 h-0.5 rounded transition transform duration-300 ${ !trigger ? "opacity-0" : ""}`}></span>
      <span className={`block absolute bg-white w-4 h-0.5 rounded transition transform duration-300 ${ !trigger ? "rotate-45" : "translate-y-1.5"}`}></span>
    </div>
  )
}
