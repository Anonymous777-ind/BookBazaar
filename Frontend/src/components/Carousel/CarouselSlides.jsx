import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import hero from "../../assets/uploads/hero.png";
import hero2 from "../../assets/uploads/hero2.png";
import hero3 from "../../assets/uploads/hero3.png";



function CarouselSlides() {
  return (
    <div className='container mx-auto mt-4 border-2'>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item relative active ">
          <div className="row ">
            <div className="col-md-6">
              <div className="carousel-caption text-start absolute w-4/12 top-24 ">
                <h5 className='text-custom-blue  font-custom-heading'>LETS MAKE THE BEST INVESTMENTS</h5>
                <h3 className='text-custom-blue  font-custom-heading'>There Is No Friend As Loyal As A Book</h3>
                <p className='text-custom-green text-wrap font-custom-sub-heading-para'>"Books stand as unwavering companions, offering solace, wisdom, and escape. There is no loyal friend as faithful as a book."</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-image">
                <img src={hero} alt="..." className="d-block w-80 h-auto xs:w-full xs:opacity-35" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative">
          <div className="row">
            <div className="col-md-6">
              <div className="carousel-caption text-start absolute w-4/12 top-24">
              <h5 className='text-custom-blue  font-custom-heading'>LETS MAKE THE BEST INVESTMENTS</h5>
                <h3 className='text-custom-blue  font-custom-heading'>There Is No Friend As Loyal As A Book</h3>
                <p className='text-custom-green text-wrap font-custom-sub-heading-para'>"Books stand as unwavering companions, offering solace, wisdom, and escape. There is no loyal friend as faithful as a book."</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-image">
                <img src={hero2} alt="..." className="d-block w-80 h-auto xs:w-full xs:opacity-35" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative">
          <div className="row">
            <div className="col-md-6">
              <div className="carousel-caption text-start absolute w-4/12 top-24  ">
              <h5 className='text-custom-blue  font-custom-heading'>LETS MAKE THE BEST INVESTMENTS</h5>
                <h3 className='text-custom-blue font-custom-heading'>There Is No Friend As Loyal As A Book</h3>
                <p className='text-custom-green text-wrap font-custom-sub-heading-para'>"Books stand as unwavering companions, offering solace, wisdom, and escape. There is no loyal friend as faithful as a book."</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-image">
                <img src={hero3} alt="..." className="d-block w-80 h-auto xs:w-full xs:opacity-35" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev absolute z-40 p-icon bg-custom-green" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next absolute" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  
  )
}

export default CarouselSlides