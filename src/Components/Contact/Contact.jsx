import React from 'react';
import Swal from 'sweetalert2'

import ContactImg from "../../images/Signup Image.svg";
export default function Contact() {
  
  function handleSubmit(e){
e.preventDefault()
Swal.fire(
  'Check Your Email For Confirmation!',
  '',
  'success'
)

}
  return (
    <div id='contact'>
<div className="container">
<div className="form">
<h1 className='contact-heading'>Signup for early access offer!</h1>
<p className='contact-paragraph'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim</p>
<form onSubmit={handleSubmit}>
<input type="text" placeholder='Ross Martin' required/>
<input type="email" placeholder='rossmartin@gmail.com' required/>
<button className='btn'>Submit</button>
</form>


</div>
<img src={ContactImg} alt="girl with a laptop in the desk" className='contact-img'/>
</div>

    </div>
  )
}
