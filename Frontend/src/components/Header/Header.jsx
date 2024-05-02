// import { BsPersonCircle } from "react-icons/bs";
// import { GoSearch } from "react-icons/go";
// import "./Header.css";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { Link } from "react-router-dom";

// function Header() {
//   const [query, setQuery] = useState("");

//   const handleQuery = (e) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <header className="w-screen border-2 border-black p-3 xs:px-2">
//       <nav className="w-full flex gap-2 items-center justify-between mx-auto h-full container">
//         <div className="w-[40vw] sm:w-[12vw]">
//           <Link to="/">
//             <img src="../../public/logo.png" alt="" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center w-96 relative xs:hidden">
//           <form className="w-[100%] relative" action="" method="GET">
//             <input
//               className="w-[100%] border-2 rounded-full px-4 py-2 target:border-custom-blue"
//               type="text"
//               name="query"
//               id="query"
//               value={query}
//               placeholder="type to search"
//               onChange={handleQuery}
//             />
//             <a href="#query">
//               <GoSearch
//                 className="absolute top-3 right-3"
//                 style={{ color: "#2f4858", fontSize: "1.2rem" }}
//               />
//             </a>
//           </form>
//         </div>
//         <div className="flex items-center justify-between gap-4 sm:gap-6 ">
//           <a href="#">
//             <FontAwesomeIcon
//               icon={faHeart}
//               size="xl"
//               style={{ color: "#2f4858" }}
//             />
//           </a>
//           <a href="#">
//             <FontAwesomeIcon
//               size="xl"
//               icon={faCartShopping}
//               style={{ color: "#2f4858" }}
//             />
//           </a>
//           <a href="#">
//             <BsPersonCircle style={{ color: "#2f4858", fontSize: "2rem" }} />
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header className="relative h-16">
      <nav className="shadow-md top-0 fixed w-screen bg-white z-40">
        <div className="mx-auto container">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block w-28 xs:w-28"
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex sm:items-center sm:justify-center flex-1 ">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#2f4858" }}
                  />
                </div>
                <input
                  className="block font-custom-sub-heading-para w-full bg-transparent border border-custom-blue rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* Menu Items */}
            <div className="hidden lg:flex lg:items-center lg:justify-end space-x-4">
              {/* Home */}
              <Link
                to="/"
                className="text-custom-blue font-custom-sub-heading-para hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none"
              >
                Home
              </Link>
              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleCategories}
                  className="text-custom-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none"
                >
                  Categories
                </button>
                {/* Dropdown Menu */}
                {isCategoriesOpen && (
                  <div className="absolute border-[1px] border-opacity-20 border-custom-blue outline-none left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <div className="py-1">
                      <Link
                        to="/categories"
                        className="block font-custom-sub-heading-para px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Category 1
                      </Link>
                      <Link
                        to="#"
                        className="block font-custom-sub-heading-para px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Category 2
                      </Link>
                      <Link
                        to="#"
                        className="block font-custom-sub-heading-para px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Category 3
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* About Us */}
              <Link
                to="/aboutus"
                className="text-custom-blue font-custom-sub-heading-para hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none"
              >
                About Us
              </Link>
              {/* Contact Us */}
              <Link
                to="/contactus"
                className="text-custom-blue font-custom-sub-heading-para hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none"
              >
                Contact Us
              </Link>
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="text-gray-300 hover:scale-110  px-3 py-2 rounded-md text-md font-medium focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#2f4858" }}
                  size="lg"
                />
              </Link>
              {/* Profile Icon */}
              <Link
                href="/profile"
                className="text-gray-300 hover:scale-110 px-3 py-2 rounded-md text-md font-medium focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#2f4858" }}
                  size="lg"
                />
              </Link>
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={toggleMenu}
                className="text-custom-blue hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-[80vw] mx-auto border-4 absolute z-50 bg-white left-20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              {/* Categories */}
              <Link
                to="/categories"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Categories
              </Link>
              {/* About Us */}
              <Link
                to="/aboutus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              {/* Contact Us */}
              <Link
                to="/contactus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
              {/* Cart */}
              {/* Profile */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
