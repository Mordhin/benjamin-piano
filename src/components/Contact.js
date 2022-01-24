import React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./Button.js";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_np06nle",
        "template_5d4q0l3",
        e.target,
        "user_eT7CYHwyaW9Kl3CllLqwP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      className="w-full flex flex-col items-center max-w-md"
      onSubmit={sendEmail}
    >
      <input
        type="text"
        name="user_name"
        placeholder="Nom"
        className="w-full p-4 bg-gray-100 mb-4"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="w-full p-4 bg-gray-100 mb-4"
      />
      <input
        type="text"
        name="subject"
        placeholder="Sujet"
        defaultValue="Cours de piano"
        className="w-full p-4 bg-gray-100 mb-4"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-4 bg-gray-100 mb-8"
      />
      <Button
        primary
        type="submit"
        className="flex justify-center items-center"
      >
        <div className="mr-2">Envoyer</div>
        <div>
          <FiSend />
        </div>
      </Button>
    </form>
  );
};
