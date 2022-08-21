import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";


export default function NavBar() {
 
  // Getting window size
 const [width, setWidth]   = useState(()=> window.innerWidth);
const updateDimensions = () => {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

// responsive nav
const navBarContent = [

  {
    href:"#Feature",
    content:"features"
  },
  {
    href:"#contact",
    content:"contact"
  },
  {
    href:"#about",
    content:"Help"
  }
]

 const navRef = useRef();
  function showNav() {
    navRef.current.classList.toggle("toggle-nav");
  }
  // this function is to close the nave whenever the user clicks a link
function CloseNavOnClick(){
  if(width => 900){
     navRef.current.classList.toggle("toggle-nav");
  }
}
  return (
    <div id='navBar'>
      <div className="container">
        <a href="" className='logo'>Worku.</a>
        <nav ref={navRef} className="nav" >
          {
            navBarContent.map(({href, content, index})=>{
              return(
<a href={href} className='nav-link' key={index} onClick={CloseNavOnClick}>{content}</a>
              )
            })
          }
          <Link to="/login" className='btn' title='login'>Login</Link>
          <button className='nav-btn nav-close-btn' onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
          <FaBars />
        </button>
      </div>
      <Outlet />
    </div>
  )
}
