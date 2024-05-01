import React from 'react'
// import aayush from "../assets/uploads/aayush.JPG";

function Team() {
  return (
    <>
     <div className="bg-white py-4 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Book Bazaar</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Book Bazaar is more than just an online bookstore. It's a vibrant community where book lovers of all kinds can come together to discover, discuss, and celebrate their favorite stories. Whether you're a casual reader or a seasoned bibliophile, you'll find something to love at Book Bazaar.</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">At Book Bazaar, our mission is simple: to make the joy of reading accessible to everyone, everywhere. We believe that books have the power to inspire, educate, and connect us, and we're committed to sharing that power with readers around the world.</p>
         
          <div className="flex flex-wrap justify-center mt-12">
            <div className="max-w-xs mx-4 mb-8 bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                {/* <img src={aayush} alt="sanyam image" /> */}
                <h3 className="text-xl font-semibold text-gray-800">Sanyam Sharma</h3>
                <p className="mt-1 text-sm text-gray-600">Mern Stack Developer</p>
              </div>
            </div>
            <div className="max-w-xs mx-4 mb-8 bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Aayush Thakur</h3>
                <p className="mt-1 text-sm text-gray-600">Mern Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
    

  )
}

export default Team