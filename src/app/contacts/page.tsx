"use client";

import Form from "@/components/Form";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

export default function Contacts() {
  return (
    <main>
      <section className="absolute inset-0 z-10 pointer-events-none">
        <Image
          className="p-4"
          src="/imgs/logo_mhe_col.svg"
          alt="logo my hidden ego"
          width={240}
          height={240}
        />
      </section>

      <section className="mt-48">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2">
          <div
            className="col-start-1 col-end-3 row-start-1 row-end-3 bg-no-repeat bg-contain bg-right-bottom z-[-1]"
            style={{
              backgroundImage: "url(/imgs/Monica-Silva-Portrait-MHE17.jpg)",
            }}
          ></div>

          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-8 items-start bg-[#46b0fe] p-4 sm:p-16">
            <a
              href="mailto:stocazzo@gmail.com"
              className="inline-flex gap-2 items-center"
            >
              <FiMail />
              writeme@myhiddenego.com
            </a>

            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}
