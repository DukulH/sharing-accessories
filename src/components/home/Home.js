import React from 'react'
import ControlledCarousel from '../carousel/ControlledCarousel'
import Header from '../header/Header'

export default function Home() {
  return (
    <div>
        <Header/>
        <div>
            <ControlledCarousel />
        </div>
    </div>
  )
}
