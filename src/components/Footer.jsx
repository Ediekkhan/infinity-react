import React from 'react';
// import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear(); 

  return (
   <div >
     <div class="row  px-5 justify-content-center  justify-content-between flex bg-black text-white pt-12 " >

          <div class="col-lg-2 text-decoration-none pt-5">
            <i class="fa-light fa-dumbbell fs-1"></i>
            <h4>About</h4>
            <a href=""><h6>History</h6></a>
            <a href=""> <h6>Fit Club in a nutshel</h6> </a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  Location</h6></a>
            <a href=""> <h6>  Management Team</h6></a>
            
          </div>

          <div class="col-lg-2 pt-5">
            <i class="fa-light fa-dumbbell fs-1"></i>
            <h4>Too Fit to Quit</h4>
            <a href=""><h6>History</h6></a>
            <a href=""> <h6>Fit Club in a nutshel</h6> </a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  Location</h6></a>
            <a href=""> <h6>  Management Team</h6></a>
            

          </div>

          <div class="col-lg-2 pt-5">
            <i class="fa-light fa-dumbbell fs-1"></i>
            <h4>Too Fit to Quit</h4>
            <a href=""><h6>History</h6></a>
            <a href=""> <h6>Fit Club in a nutshel</h6> </a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  What we do</h6></a>
            <a href=""> <h6>  Location</h6></a>
            <a href=""> <h6>  Management Team</h6></a>
          

          </div>

          


          <section class=" bg-dark second-section col-lg-4 align-items-center  mt-2 justify-content-center pt-4">

            <div class="news-letter text-light text-center pt-1 ">

                <h6>New WP themes are in production</h6>
                <p>Subscribe to Bold Themes newsletter to get a notification once a new WP theme is online. We promise not to spam!</p>

            </div>

            <form class="justify-content-center search-bar  py-3 px-5 ">
                <input class=" w-max form-control  form-control-1 wme-2  rounded-pill" type="search" placeholder="Your email address" aria-label="Search" />
               
                <button class="  ml-28 mt-4 btn btn-outline-light" type="submit">SUBSCRIBE</button>
            </form>


        </section>

      </div>

        <div className='  flex justify-center bg-black text-blue-600  w-auto p-2 '>
          Copyright © {currentYear}
        </div>
  </div>
  )
}

export default Footer;
