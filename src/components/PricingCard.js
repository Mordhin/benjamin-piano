import React from "react";
import { useTranslation } from "react-i18next";
import { BsBicycle, BsClockHistory, BsHouseFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";

export const PricingCard = ({ title, price1, price2, price3, className }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full ${className}`}>
      <div className="grid md:grid-cols-3 grid-col-1">
        <div className="md:col-span-3 bg-secondary-400 text-white text-xl p-5 border border-secondary-400 border-b-0 flex justify-between items-center">
          {title}
          <BsClockHistory />
        </div>
        <div className="flex justify-center items-center border border-b-0 p-2 border-secondary-400 bg-secondary-300 text-white h-8">
          {t("pricing.home")}*
        </div>
        <div className="md:col-span-2 row-start-4 md:row-start-auto flex justify-center items-center border border-b-0 border-l-0 border-secondary-400 bg-secondary-300 text-white h-8">
          {t("pricing.away")}
        </div>
        <div className="flex justify-center items-center border relative overflow-hidden h-16">
          <BsHouseFill className="ml-1 text-gray-100 text-7xl absolute -bottom-5 -left-5" />
          <div className="font-bold z-10">{price1}</div>
        </div>
        <div className="flex justify-center items-center border border-l-1 md:border-l-0 border-r-1 md:border-r-0 relative overflow-hidden h-16">
          <div className="text-center ">
            <BsBicycle className="ml-1 text-gray-100 text-7xl absolute -bottom-5 -left-5" />
            <div className="z-10">1-10km</div>
            <div className="font-bold z-10">{price2}</div>
          </div>
        </div>
        <div className="flex justify-center items-center border border-t-0 md:border-t-1 relative overflow-hidden h-16">
          <div className="text-center">
            <FaCarSide className="ml-1 text-gray-100 text-7xl absolute -bottom-5 -left-5" />
            <div className="z-10"> {">"} 10km</div>
            <div className="font-bold z-10">{price3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
