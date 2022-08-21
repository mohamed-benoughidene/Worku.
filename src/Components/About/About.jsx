import ManageWork from "../../images/Manage all your work Icon.svg";
import ScaleIt from "../../images/Scale it to the moon Icon.svg";
import WhoWeAre from "../../images/Section 3_ Image.svg";


export default function About() {
  return (
    <div id='about'>
        <div className="container">
        
                <img className='about-img' src={WhoWeAre} alt="girl giving a report" />

    
         
            <div className="about-content">
                <h1 className='about-heading'>Grow faster than your compititors</h1>
                <p className='about-desc'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. </p>
                <div className="info-container">
 <div className="info">
                    <img src={ManageWork} className='about-info-img' alt="manage work" />
                    <div>
 <h3 className='about-info-heading'>Manage all your work</h3>
                    <p className='about-paragraph'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. </p>
                </div>
                    </div>
                   
                <div className="info">
                    <img src={ScaleIt} className='about-info-img' alt="bank" />
                    <div>
 <h3 className='about-info-heading'>Scale it to the moon</h3>
                    <p className='about-paragraph'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. </p>
                    </div>
                   
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
