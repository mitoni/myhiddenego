import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="min-h-48 bg-[#1d1d1b] text-sm">
      <div className="pt-16 pb-8 grid grid-rows-3 sm:grid-rows-1 grid-cols-1 sm:grid-cols-3">
        <div className="flex gap-4 items-center justify-center sm:justify-start">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaTiktok />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/">
            <Image
              className="p-4"
              src="/imgs/logo_mhe.svg"
              alt="logo my hidden ego"
              width={160}
              height={160}
            />
          </a>
        </div>
        <div className="flex justify-center sm:justify-end items-center">
          <div className="flex flex-col items-start">
            <a href="/">Home</a>
            <a href="/art-therapy">Art Therapy</a>
            <a href="/about-us">About Us</a>
            <a href="/contacts">Contacts</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
