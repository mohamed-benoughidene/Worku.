import React from 'react'
import ClientImg from "../../images/Clients Image.svg"
export default function Testimonial() {
  return (
    <div id="testimonial">
        <div className="container">
  <h1 className='testimonial-heading'>
            <q className='testimonial-quote'>
                This app is amazing Now i’m able to manage all my freelancing and agency work under one place. it make my life easy.
            </q>
        </h1>
        <div className="clients">
            <img src={ClientImg} alt="person image"  className='client-img'/>
            <div className='client-info'>
            <h6 className='client-name'>ASHUTOSH MEHTA</h6>
            <p className='client-adjective'>Charted Accountant</p>

            </div>
        </div>
        </div>
      
    </div>
  )
}
