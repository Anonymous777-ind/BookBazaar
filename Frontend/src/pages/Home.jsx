import React from 'react'
import Carousel from '../components/Carousel/Carousel'

import Joinus from '../components/Joinus/Joinus'
import BookGallery from '../components/Gallery/BookGallery'

function Home() {
  return (
    <>
        <Carousel/>
        <BookGallery/>
        <Joinus/>
    </>
  )
}

export default Home