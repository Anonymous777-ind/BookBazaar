import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({});

  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center border-2 border-red-500">
      <div className="relative">
        <div className="block text-center">
          <FontAwesomeIcon
            icon={faUser}
            size="2xl"
            style={{ color: "#2f4858" }}
          />
          <h1 className="font-custom-heading text-custom-blue text-3xl font-semibold mt-3">
            Register
          </h1>
        </div>
        <form
          className="min-w-[310px] border-2 flex-col gap-4 border-gray-900 block mt-8"
          action=""
          method="POST"
        >
          <div>
            <input type="text" name="fullName" id="fullName" placeholder="fullname" className="w-full p-3 border-1 border-custom-blue rounded-lg"/>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="email" className="p-3 border-1 border-custom-blue rounded-lg"/>
          </div>
          <div>
            <input type="text" name="fullName" id="fullName" placeholder="fullname" className="p-3 border-1 border-custom-blue rounded-lg"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
