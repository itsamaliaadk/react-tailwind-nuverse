import { Link } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Prices from "../../pages/Prices";
import About from "../../pages/About";
// import Gambar from "../assets/react.svg"

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between p-5 ">
        <Link>
          {/* public gambar */}
          <img src="/logo-nu.svg" alt="logo" />
        </Link>

        <div className="flex items-center gap-6">
          <Link to={Prices}>Prices</Link>
          <Link to={About}>About</Link>
        </div>
      </div>
    </nav>
  );
}
