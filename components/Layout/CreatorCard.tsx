import { CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CreatorCard = () => {
  return (
    <div className="w-56 h-30 relative flex justify-center items-center">
      <Link
        href="https://github.com/h4rich"
        target="_blank"
        className="group absolute left-0 size-30 border-3 border-[#F4F4F0] rounded-full hover:z-20 hover:scale-[1.05] transition-all duration-300 bg-white cursor-pointer"
      >
        <Image
          src="/image/harish.jpeg"
          alt="hero"
          width={250}
          height={250}
          quality={100}
          className="h-full w-full rounded-full object-cover object-center"
        />
        <div className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-30">
          <div className="bg-background border-2 border-foreground shadow-neo p-2 px-3 whitespace-nowrap absolute -top-38 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-semibold text-sm">Harish Suthar</h3>
            <Link
              href="https://github.com/h4rich"
              target="_blank"
              className="text-xs text-hero font-medium flex items-center gap-1 hover:underline"
            >
              <CodeXml className="size-3" /> github.com/h4rich
            </Link>
          </div>
          <div className="size-3 bg-background border-r-2 border-b-2 border-foreground rotate-45 absolute -top-31 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </Link>

      <Link
        href="https://github.com/m4dd0c"
        target="_blank"
        className="group size-30 absolute left-[45%] border-3 border-[#F4F4F0] bg-white hover:scale-[1.05] transition-all duration-300 rounded-full z-10 cursor-pointer"
      >
        <Image
          src="/image/manish.png"
          alt="hero"
          width={250}
          height={250}
          className="h-full w-full rounded-full object-cover object-center"
        />
        <div className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-30">
          <div className="bg-background border-2 border-foreground shadow-neo p-2 px-3 whitespace-nowrap absolute -top-38 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-semibold text-sm">Manish Suthar</h3>
            <Link
              href="https://github.com/m4dd0c"
              target="_blank"
              className="text-xs text-hero font-medium flex items-center gap-1 hover:underline"
            >
              <CodeXml className="size-3" /> github.com/m4dd0c
            </Link>
          </div>
          <div className="size-3 bg-background border-r-2 border-b-2 border-foreground rotate-45 absolute -top-31 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </Link>
    </div>
  );
};
