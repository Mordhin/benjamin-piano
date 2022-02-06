import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Button } from "./Button.js";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
  const { t } = useTranslation();
  const [button, setButton] = useState("default");
  const sendEmail = (e) => {
    e.preventDefault();
    setButton("loading");

    emailjs
      .sendForm(
        "service_np06nle",
        "template_5d4q0l3",
        e.target,
        "user_eT7CYHwyaW9Kl3CllLqwP"
      )
      .then(
        (result) => {
          setButton("sent");
          console.log(result.text);
        },
        (error) => {
          setButton("default");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const displayButton = () => {
    switch (button) {
      case "default":
        return t("form.button.default");
        break;
      case "loading":
        return t("form.button.loading");
        break;
      case "sent":
        return t("form.button.sent");
        break;
      default:
        break;
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center max-w-md"
      onSubmit={sendEmail}
    >
      <input
        type="text"
        name="user_name"
        placeholder={t("form.name")}
        className="w-full p-4 bg-gray-100 mb-4"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder={t("form.mail")}
        className="w-full p-4 bg-gray-100 mb-4"
        required
      />
      <input
        type="text"
        name="user_phone"
        placeholder={t("form.phone")}
        className="w-full p-4 bg-gray-100 mb-4"
      />
      <input
        type="text"
        name="subject"
        placeholder={t("form.subject")}
        defaultValue={t("form.subject-placeholder")}
        className="w-full p-4 bg-gray-100 mb-4"
        required
      />
      <textarea
        name="message"
        placeholder={t("form.message")}
        className="w-full p-4 bg-gray-100 mb-8"
        required
      />
      <Button
        primary
        type={button === "default" ? "submit" : "button"}
        className="flex justify-center items-center"
      >
        <div className="mr-2">{displayButton()}</div>
        <div>
          <FiSend />
        </div>
      </Button>
    </form>
  );
};
