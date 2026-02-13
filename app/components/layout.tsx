"use client";

import ComponentHeader from "@/components/Layout/ComponentHeader";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import React, { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <main className="flex h-screen w-full overflow-hidden bg-primary-bg">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - hidden on mobile, slides in when open */}
        <div
          className={`
          fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <LeftSidebar onClose={() => setSidebarOpen(false)} />
        </div>

        <div className="flex flex-col w-full min-w-0">
          <ComponentHeader
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            sidebarOpen={sidebarOpen}
          />
          {/* center div */}
          <article className="flex-1 h-full overflow-y-auto">
            {children}
          </article>
        </div>
      </main>
    </>
  );
};

export default layout;
