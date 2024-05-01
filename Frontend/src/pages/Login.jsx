import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center md:mt-28 px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/login">
          <FaRegUser style={{fontSize: "40px", margin: "10px auto"}}/>
        </Link>
        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-custom-heading">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
            >
              Username or email address
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
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900 font-custom-sub-heading-para"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forgot"
                  className="font-semibold text-custom-green hover:text-custom-blue font-custom-sub-heading-para"
                >
                  Forgot password?
                </Link>
              </div>
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

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-blue transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue font-custom-sub-heading-para"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 font-custom-sub-heading-para">
          Don't have an account? &nbsp;
          <Link
            to="/register"
            className="font-semibold leading-6 text-custom-green hover:text-custom-blue font-custom-sub-heading-para"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
