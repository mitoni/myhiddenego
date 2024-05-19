"use client";

import Form from "@/components/Form";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <main className="h-screen">
      <section className="absolute top-0 left-0 z-10">
        <Image
          className="p-4"
          src="/imgs/logo_mhe_col.svg"
          alt="logo my hidden ego"
          width={240}
          height={240}
        />
      </section>

      <section className="h-full">
        <div
          className="grid grid-cols-2 grid-rows-1 mt-48 h-full bg-no-repeat bg-right-top"
          style={{
            backgroundImage: "url(/imgs/Monica-Silva-Portrait-MHE17.jpg)",
          }}
        >
          <div className="flex flex-col gap-8 items-start h-64 bg-[#46b0fe] p-4 sm:p-16">
            <a
              href="mailto:stocazzo@gmail.com"
              className="inline-flex gap-2 items-center"
            >
              <MdAlternateEmail />
              writeme@myhiddenego.com
            </a>

            <Form />
          </div>

          <div></div>
        </div>
      </section>
    </main>
  );
}
