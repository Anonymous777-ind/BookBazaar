import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function BookGallery() {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-bold tracking-tight text-custom-blue font-custom-heading">
            Bestseller
          </h2>
          <Link to="/categories" className="text-custom-blue hover: font-custom-sub-heading-para">View more &nbsp; <FontAwesomeIcon className="transform hover:translate-x-1 duration-200" icon={faArrowRightLong} style={{color: "#2f4858",}} /></Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
          <div className="group relative p-3 shadow-xl rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-auto">
              <img
                src="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-2xl text-gray-700">
                  <Link to="/overview" className="font-medium">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    The Alchemist
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
              <Link to="/cart"><button className="w-full bg-custom-green py-2 text-white rounded-md hover:bg-custom-blue">Add to cart</button></Link>
          </div>
          <div className="group relative p-3 shadow-xl rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-auto">
              <img
                src="https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-2xl text-gray-700">
                  <Link to="#" className="font-medium">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Atomic Habbits
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
              <Link to="/cart"><button className="w-full bg-custom-green py-2 text-white rounded-md hover:bg-custom-blue">Add to cart</button></Link>
          </div>
          <div className="group relative p-3 shadow-xl rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-auto">
              <img
                src="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-2xl text-gray-700">
                  <Link to="/cart" className="font-medium">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    The Alchemist
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
              <Link to="/cart"><button className="w-full bg-custom-green py-2 text-white rounded-md hover:bg-custom-blue">Add to cart</button></Link>
          </div>
          <div className="group relative p-3 shadow-xl rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-auto">
              <img
                src="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-2xl text-gray-700">
                  <Link to="#" className="font-medium">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    The Alchemist
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
              <Link to="/cart"><button className="w-full bg-custom-green py-2 text-white rounded-md hover:bg-custom-blue">Add to cart</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookGallery;
