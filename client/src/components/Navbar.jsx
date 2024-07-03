import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Navbar.scss";
import logo from "../assets/Voice_Wave_Logo2.png";
// import logo from "../assets/logo3.png";

function Navbar() {
  return (
    <div className="container">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
        {/* <span className='title'>Voice-Wave</span> */}
      </Link>
    </div>
  );
}

export default Navbar;
