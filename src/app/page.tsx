import { CirclePointer } from "@/components/useCirclePointer";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <CirclePointer />
      <section
        className="bg-center bg-cover bg-blend-multiply"
        style={{
          backgroundImage:
            "linear-gradient(#1d1d1bB3, #1d1d1bB3), url(/imgs/Monica-Silva-Rossella-MHE-Home.jpg)",
        }}
      >
        <div className="py-16 min-h-96 text-white">
          <p className="italic">
            “…it is the artist&apos;s gaze on the world that is fundamental both
            when he communicates beauty and joy to us, and when, much more
            often, he confronts us with pain and anguish. Because in art there
            is always some possibility of redemption. Or at least, I want to
            continue to believe it: not surprisingly, I speak of art as
            restoration.”
          </p>
          <p className="text-right">Stefano Ferrari (The Mirror of the Self)</p>
        </div>
      </section>

      <div className="absolute font-semibold text-7xl -translate-y-1/2 inline-flex items-center">
        <span className="h-4 w-16 mr-4 bg-[#46b0fe]" />
        <h2 className="text-[#46b0fe] uppercase">THE PROJECT</h2>
      </div>

      <section className="bg-[#1d1d1b] py-16 min-h-80 text-white flex flex-col justify-center">
        <div>
          <p>
            Welcome to MY HIDDEN EGO a transformative project conceived by
            Monica Silva, where the lens of photography becomes a portal to
            self-discovery and empowerment. At the heart of MHE lies a profound
            belief in the ability of art, specifically therapeutic photography,
            to illuminate the best within us, fostering a profound journey
            towards improved self-esteem and inner acceptance.
          </p>

          <div className="flex justify-end mt-8">
            <a
              href="/"
              className="uppercase font-semibold px-4 py-2 border border-[#f0298c]"
            >
              discover more
            </a>
          </div>
        </div>
      </section>

      <div className="absolute ml-20 font-semibold text-7xl -translate-y-1/4 inline-flex items-center">
        <h2 className="text-[#f0298c] uppercase">
          UNVEILING THE ESSENCE
          <br /> THROUGH MY HIDDEN EGO PROJECT
        </h2>
      </div>

      <section
        className="bg-center bg-cover bg-blend-multiply h-screen"
        style={{
          backgroundImage: "url(/imgs/Monica-Silva-Portrait-MHE02.jpg)",
        }}
      >
        <div></div>
      </section>

      <div className="absolute right-0 mr-20 font-semibold text-7xl -translate-y-1/4 inline-flex items-center text-right z-10">
        <h2 className="text-white uppercase">
          ARE YOU READY TO <br /> CHALLENGE YOURSELF?
        </h2>
      </div>

      <div className="relative w-full h-32">
        <div
          className="absolute bg-[#46b0fe]"
          style={{
            top: 0,
            right: 0,
            width: "80%",
            height: "150%",
            zIndex: 9,
          }}
        />
      </div>

      <div className="relative w-full h-48">
        <div
          className="absolute bg-[#f0298c] flex flex-col justify-end"
          style={{
            left: 0,
            right: 0,
            width: "80%",
            height: "150%",
            zIndex: 8,
          }}
        >
          <p className="text-[#e0dfcb] ml-20 mb-8 text-3xl uppercase">
            Don’t miss any updates to our project.
            <br /> Subscribe to the MHE PROJECT newsletter!
          </p>
        </div>
      </div>

      <div className="relative w-full h-48">
        <div
          className="absolute bg-[#fad70c] flex flex-col justify-end"
          style={{
            top: 0,
            right: 0,
            width: "80%",
            height: "120%",
            zIndex: 7,
          }}
        >
          <div className="mr-20 mb-16 flex justify-end">
            <a
              href="/"
              className="uppercase font-semibold px-4 py-2 text-white border border-[#f0298c]"
            >
              subscribe to the newsletter
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-[#1d1d1b] min-h-48 text-sm">
        <div className="pt-16 pb-8 text-white grid grid-rows-1 grid-cols-3">
          <div className="flex gap-4 items-center">
            <FaFacebook />
            <FaTiktok />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <div className="flex justify-center">
            <a href="/">
              <Image
                src="/imgs/logo_mhe.svg"
                alt="logo my hidden ego"
                width={160}
                height={160}
              />
            </a>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex flex-col items-start">
              <a href="/">Home</a>
              <a href="/">Art Therapy</a>
              <a href="/">About Us</a>
              <a href="/">Contacts</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
