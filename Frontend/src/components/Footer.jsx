import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className='bg-custom-blue pt-8 pb-8 w-screen 	'>
      <section className='w-full container mx-auto p-2'>
        <div className="footer-top-info w-full flex-row  justify-around pb-8 lg:flex sm:flex">
          <div className="footer-left flex gap-4">
            {/* book information icon */}
            <div className="icon  ">
              <FontAwesomeIcon icon={faLayerGroup} size="2xl" style={{ color: "#5a8f7b" }} />
            </div>
            {/* book information */}
            <div className="text-custom-white  	text-2xl flex-col gap-6  text-white">
              <h1 className='font-custom-heading'>Book Information ?</h1>
              <p className='text-base text-wrap font-custom-sub-heading-para pt-2 '>Please Send us an email at support.us@gmail.com</p>
            </div>
          </div>
          <div className="footer-right flex gap-4 ">
            {/* Need help icon */}
            <div className="icon">
              <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" style={{ color: "#5a8f7b" }} />
            </div>
            {/* Need Help */}
            <div className="text-custom-white  	text-2xl flex-col gap-6  text-white">
              <h1 className='font-custom-heading' >Need Help?</h1>
              <p className='text-base   font-custom-sub-heading-para pt-2'>Please call us at +91 9876543210</p>
            </div>
          </div>
        </div>
        {/* terms and condition section */}
        <div className="footer-bottom-info container mx-auto">
          {/* horizontal line */}
          <hr className='opacity-35' />
          <div className=' pt-5 '>
            <div >
              <p className='text-white text-xl custom-sub-heading-para text-center'> ©  2024 All rights reserved. Made with 🤍</p>
            </div>
          </div>
        </div>
      </section>

    </footer>



  )
}

export default Footer