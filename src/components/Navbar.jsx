import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {

    return (
      <>
       <div className="nav">
        <div className="text">
        <h1 className="heading">LOGO</h1>
        </div>
        <div className="items">
        <GiHamburgerMenu></GiHamburgerMenu>
        </div>
       </div>
      </>
    )
  }
  
  export default Navbar