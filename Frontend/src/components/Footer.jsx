import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-custom-blue p-14  	' >
      <div className="flex gap-44">
      <div className="text-custom-white p-8 ml-8 leading-6	text-2xl  text-white">
        <h1 className='font-custom-heading'>Book Information ?</h1>
        <p className='text-base leading-8 font-custom-sub-heading-para'>Please Send us an email at sanyam.sharma.7203@gmail.com</p>
        </div>
      <div className="text-custom-white p-8 ml-16 leading-6	text-2xl font-custom-heading text-white">
      <h1 className='font-custom-heading' >Need Help?</h1>
      <p className='text-base leading-8 font-custom-sub-heading-para '>Please call us at +91 9876543210</p>
      </div>


      </div> 
    <hr />
   <div className=''>
    <div className='text-white leading-8 mx-0'>
      {/* <img src="../public/logo.png" alt="" /> */}
      <h1>Book Bazzar</h1>
      </div>
    <div className='mr-0'>
      <p className='text-white text-xl custom-sub-heading-para text-center '> @ 2024 All rights reserved. Made with 🤍</p>
    </div>
   </div>
    </div>
   
    </>
    
  )
}

export default Footer