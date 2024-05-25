import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="min-h-48 bg-[#1d1d1b] text-sm">
      <div className="pt-16 pb-8 grid grid-rows-3 sm:grid-rows-1 grid-cols-1 sm:grid-cols-3">
        <div className="flex gap-4 items-center justify-center sm:justify-start">
          <a href="https://www.facebook.com/MHEPROJECTS" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.tiktok.com/@mhe.project" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://WWW.INSTAGRAM.COM/MHE_PROJECT" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/my-hidden-ego-project/"
            target="_blank"
          >
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
            <Link href="/">Home</Link>
            <Link href="/art-therapy">Art Therapy</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
