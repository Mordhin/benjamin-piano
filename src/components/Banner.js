import React from "react";
import { Button } from "./Button.js";
import { BsChevronCompactDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen w-full bg-banner bg-black bg-blend-multiply bg-opacity-60 bg-center bg-cover px-10 text-white flex flex-col justify-between">
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
        <Button size="60" primary>
          {t("booking")}
        </Button>
      </div>
      <div className="w-full flex justify-center mb-2 text-2xl">
        <BsChevronCompactDown />
      </div>
    </div>
  );
};
