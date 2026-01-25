import LeftSidebar from "@/components/Layout/LeftSidebar";
import RightSidebar from "@/components/Layout/RightSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex pt-18 h-screen w-full justify-between overflow-hidden">
      <LeftSidebar />
      {/* center div */}
      <article className="flex-1 h-full overflow-y-auto">{children}</article>
      <RightSidebar />
    </main>
  );
};

export default layout;
