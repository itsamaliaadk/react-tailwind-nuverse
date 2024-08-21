import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Prices from "../../pages/Prices";
import About from "../../pages/About";

export default function Footer() {
  return (
    <section>
      <div className="container grid grid-cols-3 flex items-center justify-between">
        <div>
          <img src="/logo-nu.svg" alt="logo" />
        </div>

        <div className="flex items-center gap-6">
          <Link to={Prices}>Prices</Link>
          <Link to={About}>About</Link>
        </div>

        <div className="flex items-center gap-6">
          <img src="/fb.svg" alt="fb" />
          <img src="/tw.svg" alt="tw" />
        </div>
      </div>

      <div className="text-center">
        <p>Copyright © 2021 Amiso. All rights reserved.</p>
      </div>
    </section>
  );
}
