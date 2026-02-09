import React from "react";

const Header = ({ title, excerpt }: { title: string; excerpt: string }) => {
  return (
    <div className="flex flex-col font-grotesk gap-3 sm:gap-4 w-full max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
      <p className="text-base sm:text-lg font-semibold">{excerpt}</p>
    </div>
  );
};

export default Header;
