import React from 'react';
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear(); 

    // console.log(currentYear);
  return (
    <div className='copy'>
      Copyright © {currentYear}
    </div>
  )
}

export default Footer;
