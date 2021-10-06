import React from 'react'

const Button = ({children}) => {
  return (
    <button class="w-64 text-base bg-primary-400 hover:bg-primary-100 text-white font-bold py-2 px-4 border-b-4 hover:border-b-0 border-primary-900 rounded">{children}</button>
  )
}

export default Button;
