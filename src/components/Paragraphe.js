import React from 'react'

export const Paragraphe = ({title, image, right, children, className}) => {
  return (
    <div className={className}>
      {image && (<img src={image} alt="image" className={`float-${right ? "right ml-2" : "left mr-2"} w-40 rounded`} />)}
      {title && (<h2 className={`text-2xl font-bold mb-4 ${right ? "text-right" : ""}`}>{title}</h2>)}
      <p className="text-justify">{children}</p>
    </div>
  )
}
