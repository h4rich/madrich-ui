"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.location.href = "/components/accordion";
  }, []);
  return <div>components</div>;
};

export default Page;
