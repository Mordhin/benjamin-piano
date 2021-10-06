import React from 'react'

export const Button = ({primary, size, children}) => {
  return (
    <button className={`w-${size} text-base ${primary ? "bg-primary-400 hover:bg-primary-100 border-primary-900" : "bg-gray-600 hover:bg-gray-500 border-gray-700" } text-white font-bold py-2 px-4 border-b-4 hover:border-b-0  rounded`}>{children}</button>
  )
}
