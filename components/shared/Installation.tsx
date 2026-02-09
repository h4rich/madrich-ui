"use client";

import React from "react";
import { useState } from "react";
import RenderCode from "./RenderCode";

interface CLI {
  pnpm: string;
  npm: string;
  bun: string;
  yarn: string;
}

const Installation = ({ cli, code }: { cli: CLI; code: string }) => {
  const [activeMain, setActiveMain] = useState<"cli" | "manual">("cli");
  const [activeCli, setActiveCli] = useState<keyof CLI>("pnpm");

  return (
    <div className="w-full max-w-4xl mt-4 sm:mt-6 font-grotesk">
      <h2 className="text-xl sm:text-2xl font-bold font-grotesk">
        Installation
      </h2>
      <div className="border-2 shadow-neo mt-4 sm:mt-6 border-foreground bg-background">
        <div className="flex border-b-2 border-foreground">
          <button
            onClick={() => setActiveMain("cli")}
            className={`w-1/2 py-2 sm:py-3 text-sm sm:text-base font-bold border-r-2 border-foreground
          ${activeMain === "cli" ? "bg-hero" : "bg-background"}`}
          >
            CLI
          </button>
          <button
            onClick={() => setActiveMain("manual")}
            className={`w-1/2 py-2 sm:py-3 text-sm sm:text-base font-bold
          ${activeMain === "manual" ? "bg-hero" : "bg-background"}`}
          >
            Manual
          </button>
        </div>

        {activeMain === "cli" && (
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b-2 border-foreground w-full">
              {Object.keys(cli).map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveCli(tool as keyof CLI)}
                  className={`py-2 text-sm sm:text-base font-semibold border-r-2 border-b-2 sm:border-b-0 border-foreground last:border-r-0 sm:[&:nth-child(2)]:border-r-2
          ${activeCli === tool ? "bg-hero" : "bg-background"}`}
                >
                  {tool}
                </button>
              ))}
            </div>

            <RenderCode data={cli[activeCli]} />
          </div>
        )}

        {activeMain === "manual" && <RenderCode data={code} />}
      </div>
    </div>
  );
};

export default Installation;
