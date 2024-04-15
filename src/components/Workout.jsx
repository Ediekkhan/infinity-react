import React from 'react'
import { GoChevronRight } from "react-icons/go";
import img1 from '../assets/img/aerobics.jpg'
import img2 from '../assets/img/barswat.jpg'
import img3 from '../assets/img/crunches.jpg'



const Workout = () => {
  return (
    <div class=" bg-gray-600 text-light py-5  text-center" >
      
        <h5 className=' text-blue-700 font-bold bg-black'>OUR CLASSES </h5>
        <h3>WHAT WE CAN OFFER</h3>

        <div class="row  px-5 justify-content-center ">

              <div class="col">
        
                <div className=' bg-black'>
                    <div   className='   flex  p-2  rounded-full justify-center' >
                        <img src={img1} alt="aerobis"  />   
                    </div>
                </div>

                <div className='flex justify-between bg-black'>
                    <div className=' text-start font-semibold px-2 pt-0' >
                      <p className=' font-semibold text-blue-700'>WEIGHT-LOSS </p> 
                      <p> AEROBICS</p>
                    </div>

                    <a href="/" className='px-3'> <GoChevronRight size={32} /></a>

                </div>

              </div> 

              <div class="col">
        
                <div className=' bg-black'>
                    <div   className='   flex  p-2  rounded-full justify-center' >
                        <img src={img2} alt="aerobis"  />   
                    </div>
                </div>

                
                <div className='flex justify-between bg-black'>
                    <div className=' text-start bg-black font-semibold px-2 pt-0' >
                      <p className=' font-semibold text-blue-700'>BODY-SHAPE </p> 
                      <p> SQUAT</p>
                    </div>

                    <a href="/" className='px-3'> <GoChevronRight size={32} /></a>

                </div>

              </div>

              <div class="col">
        
                <div className=' bg-black'>
                    <div   className='   flex  p-2  rounded-full justify-center' >
                        <img src={img3} alt="aerobis"  />   
                    </div>
                </div>

                

                <div className='flex justify-between bg-black'>
                  
                   <div className=' text-start bg-black font-semibold px-2 pt-0' >
                    <p className=' font-semibold text-blue-700'>STRENGHT</p> 
                    <p>WEIGHT-LIFTING</p>
                   </div>

                    <a href="/" className='px-3'> <GoChevronRight size={32} /></a>

                </div>

              </div>

              

</div>

    </div>
  )
}

export default Workout;
