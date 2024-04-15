import React from 'react'
import { FaHeartbeat } from "react-icons/fa";


function Why() {
  return (
    <div>
        <section class=" bg-black text-light py-5  text-center">

        <h5 className=' text-blue-700'>WHY CHOoSE US?</h5>
        <h3>PUSH YOUR LIMITS FORWARD</h3>


        <div class="row  px-5 justify-content-center ">

          <div class="col p-3">
            <div  className='   flex  p-2  border-spacing-8 rounded-full justify-center'>
                <FaHeartbeat color='blue' size={40} />        
            </div>
            <h5>Modern Equipment</h5>
            <p className=' text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>

          </div>

          <div class="col p-3">
            <div     className='   flex  p-2  border-spacing-8 rounded-full justify-center' >
                <FaHeartbeat color='blue' size={40} />
            </div>
            <h5>Healthy nutrition plan</h5>
            <p className=' text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>

          </div>

          <div class="col p-3">
            <div     className='   flex  p-2  border-spacing-8 rounded-full justify-center'>
                <FaHeartbeat color='blue' size={40} />
            </div>
            <h5>Proffesponal training plan</h5>
            <p className=' text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>

          

          </div>

          <div class="col p-3">
            <div     className='   flex  p-2  border-spacing-8 rounded-full justify-center'>
                <FaHeartbeat color='blue' size={40} />
            </div>
            <h5>Unique to your needs</h5>
            <p className=' text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>

          

          </div>

          </div>

          </section>
    </div>
  )
}

export default Why