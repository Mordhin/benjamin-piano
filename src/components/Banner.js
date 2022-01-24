import React from "react";
import { Button } from "./Button.js";
import { BsChevronCompactDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Navlink } from "./Navlink.js";

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="px-8 md:px-16 h-screen w-full bg-banner bg-black bg-blend-multiply bg-opacity-60 bg-center bg-cover text-white flex flex-col justify-between">
      <div></div>
      <div className="text-3xl sm:text-6xl leading-normal sm:leading-normal font-bold flex flex-col justify-center">
        <div>{t("banner.part1")}</div>
        <div>
          {t("banner.part2")}{" "}
          <span className="border-b-4 border-primary-400">Benjamin</span>,
        </div>
        <div className="mb-4">
          {t("banner.part3")}
          <span className="text-primary-400">.</span>
        </div>
        <Navlink
          to="contact"
          className=" w-60 text-base text-center bg-primary-400 hover:bg-primary-100 border-primary-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-0 rounded"
        >
          {t("booking")}
        </Navlink>
      </div>
      <div className="w-full flex justify-center mb-2 text-2xl">
        <BsChevronCompactDown />
      </div>
    </div>
  );
};
