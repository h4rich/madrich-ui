"use client";

import React from "react";
import RenderCode from "./RenderCode";

const GlobalsCss = ({ css }: { css: string }) => {
  return (
    <div className="w-full max-w-4xl mt-4 sm:mt-6 font-grotesk">
      <h2 className="text-xl sm:text-2xl font-bold font-grotesk">
        globals.css{" "}
        <span className="text-sm font-semibold text-muted-neo">(required)</span>
      </h2>
      <div className="mt-4 sm:mt-6">
        <RenderCode data={css} />
      </div>
    </div>
  );
};

export default GlobalsCss;
