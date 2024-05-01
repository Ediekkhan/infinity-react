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

        
    </div>
  )
}

export default Home