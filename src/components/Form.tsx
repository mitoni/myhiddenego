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

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries(),
    );

    setStatus("loading");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setStatus("ok");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  const animations = {
    initial: { opacity: 0, translateX: "100%" },
    animate: { opacity: 1, translateX: "0%" },
    exit: { opacity: 0, translateX: "-100%" },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-[min-content_min-content] grid-rows-2 gap-4 w-full">
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
    </form>
  );
}
