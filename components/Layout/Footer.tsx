import Link from "next/link";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    name: "Components",
    href: "#",
  },
  {
    name: "Docs",
    href: "#",
  },
  {
    name: "Templates",
    href: "#",
  },
  {
    name: "Showcase",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="w-full font-grotesk border-t-4 border-foreground bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl bg-background font-bold cursor-pointer ring ring-foreground  p-1 px-2 shadow-neo">
                Madrich UI
              </h1>
            </Link>
            <p className="font-bold text-lg max-w-sm">
              The neo-brutalist UI library for developers who build bold.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex relative">
              <div className="w-30 h-30 border-3 border-background rounded-full hover:z-20 hover:scale-[1.1] transition-all duration-300 bg-white">
                <Image
                  src="/image/one.png"
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
              <div className="absolute left-25 w-30 h-30 border-3 border-background bg-white hover:scale-[1.1] transition-all duration-300 rounded-full z-10">
                <Image
                  src="/image/icon4.jpg"
                  alt="hero"
                  width={100}
                  height={100}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        {/* Right Side */}
        <div className="flex flex-col md:flex-row justify-end gap-12 md:gap-24">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase border-b-4 border-foreground pb-2 inline-block w-fit">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold hover:underline hover:text-hero transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase border-b-4 border-foreground pb-2 inline-block w-fit">
              Socials
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-white p-3 border-2 border-foreground shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="bg-white p-3 border-2 border-foreground shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <RiTwitterXLine className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-foreground bg-foreground p-4">
        <div className="max-w-[1400px] mx-auto flex justify-center items-center gap-4 text-background">
          <p className="font-bold text-sm uppercase tracking-wide">
            © {new Date().getFullYear()} Madrich UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
