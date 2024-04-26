import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <div className='bg-custom-blue p-14 w-full' >
        <div className="flex gap-44 ">
          <div className="ml-8 p-8 flex gap-4">
            <div className="icon  ">
              <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#5a8f7b" }} />
            </div>
            <div className="text-custom-white  leading-6	text-2xl  text-white">
              <h1 className='font-custom-heading'>Book Information ?</h1>
              <p className='text-base leading-8 font-custom-sub-heading-para'>Please Send us an email at sanyam.sharma.7203@gmail.com</p>
            </div>
          </div>

          <div className="text-custom-white p-8 ml-16 leading-6	text-2xl font-custom-heading text-white">
            <h1 className='font-custom-heading' >Need Help?</h1>
            <p className='text-base leading-8 font-custom-sub-heading-para '>Please call us at +91 9876543210</p>
          </div>


        </div>
        <hr />
        <div className=' pt-5 '>
          {/* <div className='text-white leading-8  w-32'>
      <img src="../public/logo.png" alt="" />
     
      </div> */}
          <div >
            <p className='text-white text-xl custom-sub-heading-para text-center'> @ 2024 All rights reserved. Made with 🤍</p>
          </div>
        </div>
      </div>

    </>

  )
}

export default Footer