import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
      <footer className='bg-custom-blue p-14 mx-auto' >
        <div className="flex gap-24 container w-full">
          <div className="p-8 flex gap-4">
            <div className="icon  ">
              <FontAwesomeIcon icon={faLayerGroup} size="2xl" style={{ color: "#5a8f7b" }} />
            </div>
            <div className="text-custom-white  leading-6	text-2xl  text-white">
              <h1 className='font-custom-heading text-[20px] xs:text-[10px] '>Book Information ?</h1>
              <p className='text-[16px] leading-8 font-custom-sub-heading-para'>Please Send us an email at sanyam.sharma.7203@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
          <div className="icon">
          <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" style={{color: "#5a8f7b"}} />
          </div>
          <div className="text-custom-white leading-6	text-2xl font-custom-heading text-white">
            <h1 className='font-custom-heading md:text-[20px] xs:text-[10px]' >Need Help?</h1>
            <p className='leading-8 font-custom-sub-heading-para md:text-[16px] xs:text-[10px]'>Please call us at +91 9876543210</p>
          </div>
          </div>
          


        </div>
        <hr />
        <div className=' pt-5 '>
          <div >
            <p className='text-white text-xl custom-sub-heading-para text-center'> ©  2024 All rights reserved. Made with 🤍</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer