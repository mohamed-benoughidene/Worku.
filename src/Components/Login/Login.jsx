import React from 'react';
import { Outlet, Link } from "react-router-dom";
import beard from "../../images/undraw_happy_music_g6wc.svg";
export default function Login() {
  return (
    <div id='Login'>
      <div className="container">
         <Link to="/" className='logo'>Worku.</Link>
<img className='login-img' src={beard} alt=""/>
        <div className="login-form">
          <h1 className='login-form-header'>Welcome Back!</h1>
<input type="email" placeholder='BAnana@email.co'/>
<input type="password"  placeholder="shhh it's a secret"/>
<button className='btn'>login</button>
        </div>
      </div>
       <Outlet/>
    </div>
  )
}
