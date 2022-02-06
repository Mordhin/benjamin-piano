import React from "react";

export const Paragraphe = ({ title, image, right, children, className }) => {
  return (
    <div className={`${className} `}>
      {image && (
        <img
          src={image}
          alt="benjamin"
          className={`sm:float-${
            right ? "right sm:ml-2" : "left sm:mr-2"
          } w-40 rounded`}
        />
      )}
      {title && (
        <h2
          className={`text-2xl font-bold mt-4 sm:mt-0 mb-4 ${
            right ? "sm:text-right" : ""
          }`}
        >
          {title}
        </h2>
      )}
      <p className="text-justify">{children}</p>
    </div>
  );
};
