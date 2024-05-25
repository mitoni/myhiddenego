import Image from "next/image";
import Link from "next/link";

export default function Logo(props: React.ComponentProps<"section">) {
  const { className, ...args } = props;
  return (
    <section className={`absolute top-0 left-0 z-10 ${className}`} {...args}>
      <Link href={"/"}>
        <div className="relative w-24 h-24 m-4">
          <Image src="/imgs/logo_mhe_col.svg" alt="logo my hidden ego" fill />
        </div>
      </Link>
    </section>
  );
}
