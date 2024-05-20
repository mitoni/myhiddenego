"use client";

import Form from "@/components/Form";
import { FiMail } from "react-icons/fi";

export default function Contacts() {
  return (
    <main>
      <section className="mt-48">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2">
          <div
            className="col-start-1 col-end-3 row-start-2 sm:row-start-1 row-end-3 bg-no-repeat bg-contain bg-bottom sm:bg-right-bottom z-[-1]"
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

          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-8 items-start bg-[#fad70c] p-4 sm:p-16 z-[-1] translate-x-4 translate-y-8"></div>
        </div>
      </section>
    </main>
  );
}
