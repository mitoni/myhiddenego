"use client";

import { motion } from "framer-motion";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";

export default function Form() {
  const [status, setStatus] = React.useState<
    "ok" | "error" | "loading" | undefined
  >(undefined);

  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const displayMessage = React.useMemo(() => {
    switch (message?.toLowerCase()) {
      case "member exists":
        return "L'indirizzo email è già presente nella lista come membro esistente.";
      case "forgotten email not subscribed":
        return "L'email fornita non risulta iscritta alla lista specificata. Ciò può accadere quando si tenta di aggiornare o aggiungere dati per un utente non iscritto.";
      case "invalid resource":
      case "invalid email address":
        return "L’indirizzo email fornito non è valido o non è formattato correttamente.";
      case "Invalid Parameters":
        return "Uno o più parametri della richiesta non sono validi o mancano.";
      default:
        return message;
    }
  }, [message]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries(),
    );

    setStatus("loading");
    setMessage(undefined);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.status !== 200) {
        const body = await res.json();
        throw new Error(body.message);
      }
      setStatus("ok");
      setMessage("Sei ora iscritto alla newsletter!");
    } catch (error) {
      setStatus("error");
      setMessage((error as Error).message);
    }
  }

  const animations = {
    initial: { opacity: 0, translateX: "100%" },
    animate: { opacity: 1, translateX: "0%" },
    exit: { opacity: 0, translateX: "-100%" },
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-[min-content_auto] grid-rows-2 gap-4 w-full">
        <label htmlFor="form-name">Name</label>
        <input
          id="form-name"
          className="text-black bg-white/70"
          type="text"
          name="name"
          required
        />

        <label htmlFor="form-name">Email</label>
        <input
          id="form-email"
          className="text-black bg-white/70"
          type="email"
          name="email"
          required
        />
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="uppercase font-semibold mt-4 px-4 py-2 border border-[#f0298c] inline-flex items-center gap-2"
        >
          {status === "ok" ? (
            <motion.span {...animations}>
              <FaCheck />
            </motion.span>
          ) : null}
          {status === "error" ? (
            <motion.span {...animations}>
              <MdOutlineError />
            </motion.span>
          ) : null}
          {status === "loading" ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <AiOutlineLoading />
            </motion.span>
          ) : null}
          subscribe to the newsletter
        </button>
      </div>
      <div className="w-full py-2 text-sm overflow-visible h-12">
        {message ? displayMessage : null}
      </div>
    </form>
  );
}
