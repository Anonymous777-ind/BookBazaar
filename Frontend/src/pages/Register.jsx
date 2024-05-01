import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FaCircleUser, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom"
function Register() {
  const [formData, setFormData] = useState({});

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/login">
            <FaRegUser style={{ fontSize: "40px", margin: "10px auto" }} />
          </Link>
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-custom-heading">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autocomplete="name"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="phn"
                className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phn"
                  name="phn"
                  type="phn"
                  autocomplete="phn"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
                >
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div >
              <button
                type="submit"
                className="flex mt-6 w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-blue transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue font-custom-sub-heading-para"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500 font-custom-sub-heading-para">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className="font-semibold leading-6 text-custom-green hover:text-custom-blue font-custom-sub-heading-para"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
