import React from "react";
import { useTranslation } from "react-i18next";
import { BsClockHistory } from "react-icons/bs";
import { GiTicket, GiWallet } from "react-icons/gi";

export const PricingCard = ({ title, price1, price2, className }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-secondary-400 text-white text-xl p-5 border border-secondary-400 border-b-0 flex justify-between items-center">
        {title}
        <BsClockHistory />
      </div>
      <div className="flex border border-t-0 	">
        <div className="border-r w-1/2 flex flex-col justify-center items-center p-5 relative overflow-hidden">
          <GiTicket className="ml-1 text-gray-100 text-9xl absolute -bottom-10 -left-10" />
          <div className="z-10">{t("pricing.unity")}</div>
          <div className="font-bold z-10">{price1}</div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-5 relative overflow-hidden">
          <GiWallet className="ml-1 text-gray-100 text-9xl absolute -bottom-10 -left-10" />
          <div className="z-10">{t("pricing.package.title")}</div>
          <div className="font-bold z-10">{price2}</div>
        </div>
      </div>
    </div>
  );
};
