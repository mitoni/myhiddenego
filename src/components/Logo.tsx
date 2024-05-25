import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <section className="absolute top-0 left-0 z-10">
      <Link href={"/"}>
        <Image
          className="p-4"
          src="/imgs/logo_mhe_col.svg"
          alt="logo my hidden ego"
          width={240}
          height={240}
        />
      </Link>
    </section>
  );
}
