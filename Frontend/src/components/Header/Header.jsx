import { BsPersonCircle } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import "./Header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="w-screen border-2 border-black p-3 xs:px-2">
      <nav className="w-full flex gap-2 items-center justify-between mx-auto h-full container">
        <div className="w-[40vw] sm:w-[12vw]">
          <a href="#">
            <img src="../../public/logo.png" alt="" />
          </a>
        </div>
        <div className="flex items-center justify-center w-96 relative xs:hidden">
          <form className="w-[100%] relative" action="" method="GET">
            <input
              className="w-[100%] border-2 rounded-full px-4 py-2 target:border-custom-blue"
              type="text"
              name="query"
              id="query"
              value={query}
              placeholder="type to search"
              onChange={handleQuery}
            />
            <a href="#query">
              <GoSearch
                className="absolute top-3 right-3"
                style={{ color: "#2f4858", fontSize: "1.2rem" }}
              />
            </a>
          </form>
        </div>
        <div className="flex items-center justify-between gap-4 sm:gap-6 ">
          <a href="#">
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              style={{ color: "#2f4858" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="xl"
              icon={faCartShopping}
              style={{ color: "#2f4858" }}
            />
          </a>
          <a href="#">
            <BsPersonCircle style={{ color: "#2f4858", fontSize: "2rem" }} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
