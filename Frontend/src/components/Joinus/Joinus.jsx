import React from 'react';
import './Joinus.css'; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Joinus() {
    return (
        <section className='container mx-auto my-16  ' >
           <div className="rounded-md container mx-auto w-full sm:max-w-3xl lg:max-w-5xl flex flex-col  sm:flex-row justify-start  h-auto px-3 py-5 gap-10 subscribe-wrapper">
                <div className="image-wrapper ">
                    <div className="bgimg  xs:w-full"></div>
                </div>
                <div className="subscribe-content w-full">
                    <h1 className='font-custom-heading text-3xl font-bold text-custom-blue'>Join Our Community</h1>
                    <p className='text-custom-gray my-3 text-xl w-full font-semibold font-custom-sub-heading-para'>Sign up & get 10% of on your First Book</p>
                    <form action="">
                        <div className="input my-5 xs:flex-col xs:gap-3">
                            <input className=' text-custom-gray font-custom-sub-heading-para leading-normal' type="mail" placeholder='Your email' required />
                            <button className='btn text-white font-custom-sub-heading-para text-lg px-10 bg-custom-green xs:w-full  xs:rounded-lg xs:inline-block xs:text-lg xs:text-center xs:mx-auto ' type="submit">Subscribe</button>
                        </div>
                       
                    </form>
                    <ul className='social-icons'>
                        <li style={{ backgroundColor: '#5a8f7b' }}>
                            <button onClick={() => window.open("https://www.facebook.com", "_blank")}>
                            <FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#ffffff",}} />
                            </button>
                        </li>
                        <li style={{ backgroundColor: '#5a8f7b' }}>
                            <button onClick={() => window.open("https://www.twitter.com", "_blank")}>
                                <FontAwesomeIcon icon={faTwitter} size="xl" style={{ color: "#ffffff" }} />
                            </button>
                        </li>
                        <li style={{ backgroundColor: '#5a8f7b' }}>
                            <button onClick={() => window.open("https://www.instagram.com", "_blank")}>
                                <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#ffffff" }} />
                            </button>
                        </li>
                        <li style={{ backgroundColor: '#5a8f7b' }}>
                            <button onClick={() => window.open("https://www.linkedin.com", "_blank")}>
                                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: "#ffffff" }} />
                            </button>
                        </li>
                        <li style={{ backgroundColor: '#5a8f7b' }}>
                            <button onClick={() => window.open("https://www.youtube.com", "_blank")}>
                                <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ffffff" }} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Joinus;
