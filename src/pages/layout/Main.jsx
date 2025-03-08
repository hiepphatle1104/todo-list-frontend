import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col container mx-auto">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
