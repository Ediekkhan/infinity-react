import React from 'react'
import Carousel from '../components/Carousel'
import Why from '../components/Why'
import Workout from '../components/Workout'
import Appointment from '../components/Appointment'
import Subcription from '../components/Subcription'

function Home() {
  return (
    <div>
        <Carousel />
        <Why />  
        <Workout />
        < Appointment />
        <Subcription />

        {/* <a href="/#" className="text-blue-500 bg-black hover:text-blue-700">Visit our website</a> */}
        
    </div>
  )
}

export default Home