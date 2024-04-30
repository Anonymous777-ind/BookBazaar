import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <header className="w-screen h-28 border-2 border-black xs:px-2">
      <nav className="w-full mx-auto h-full container  border-2 border-red-600">
        <div><FontAwesomeIcon icon="fa-solid fa-bars" size="xl" style={{color: "#2f4858",}} /></div>
      </nav>
    </header>
  );
}

export default Header;
