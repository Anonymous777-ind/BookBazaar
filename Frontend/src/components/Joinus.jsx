import React from 'react'
import coverImage from '../assets/uploads/cover1.jpg'; // Import image using require or ES6 import

function Joinus() {
  return (
   <section>
    <div className="inner">
        <div className="left-inner">
         <img src={coverImage} alt="Cover image" />
        </div>
        <div className="right-inner">

        </div>
    </div>
   </section>
  )
}

export default Joinus