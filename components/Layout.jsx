import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="">

      <main className="max-w-[1400px] mx-auto w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
      
    </div>
  );
};

export default Layout;
