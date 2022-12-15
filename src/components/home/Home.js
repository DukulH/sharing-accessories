import React from 'react'
import ControlledCarousel from '../carousel/ControlledCarousel'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Home() {
  return (
    <div>
        <Header/>
        <div>
            <ControlledCarousel />
        </div>
        <Footer />
    </div>
  )
}
