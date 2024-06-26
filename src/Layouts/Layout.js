// import des modules nécessaires
import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";

import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";

// fonction d'appel du Layout.
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

// export du Layout pour appel dans le router.
export default Layout;
