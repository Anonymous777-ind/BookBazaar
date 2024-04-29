import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
     <footer className='bg-custom-blue p-8 w-screen	'>
      <div className="footer-top-info w-full lg:flex md:flex gap-24 ">
      <div className="footer-left flex gap-4">
      <div className="icon  ">
              <FontAwesomeIcon icon={faLayerGroup} size="2xl" style={{ color: "#5a8f7b" }} />
            </div>
            <div className="text-custom-white  leading-6	text-2xl flex-col gap-6  text-white">
              <h1 className='font-custom-heading'>Book Information ?</h1>
              <p className='text-base leading-6 font-custom-sub-heading-para pt-2'>Please Send us an email at sanyam.sharma.7203@gmail.com</p>
            </div>
      </div>
      <div className="footer-right flex gap-4 ">
      <div className="icon">
          <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" style={{color: "#5a8f7b"}} />
          </div>
          <div className="text-custom-white   leading-6	text-2xl flex-col gap-6  text-white">
            <h1 className='font-custom-heading' >Need Help?</h1>
            <p className='text-base leading-6 font-custom-sub-heading-para pt-2'>Please call us at +91 9876543210</p>
          </div>
      </div>
      </div>

      <div className="footer-bottom-info">
      <hr />
        <div className=' pt-5 '>
          <div >
            <p className='text-white text-xl custom-sub-heading-para text-center'> ©  2024 All rights reserved. Made with 🤍</p>
          </div>
        </div>
      </div>
     </footer>

    </>

  )
}

export default Footer