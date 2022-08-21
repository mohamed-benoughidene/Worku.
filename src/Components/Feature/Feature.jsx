import Dashboard from '../../images/Data Driven Dashboard Icon.svg';
import Time from "../../images/Assignment Tracking Icon.svg";
import MoneyReport from "../../images/Assignment Tracking Icon (1).svg";
export default function Feature() {
  return (
    <div id='Feature'>
        <div className='container'>
 <h1 className='heading-feature'>Create timelines, Track progress, assign work and talk with your clients inside one web app!</h1>
  {/* Just a random video from youtube*/}
        <iframe className='youtube-video'
        src="https://www.youtube.com/embed//J8bjw_15thg"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <div className="cards">
        <div className="card black">
            <img src={Time} alt="time line" className='feature-img'/>
            <h2 className='heading2-feature'>Create Timelines</h2>
            <p className='feature-paragraph gray'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.</p>
        </div>
         <div className="card">
            <img src={Dashboard} alt="Dashboard" className='feature-img'/>
            <h2 className='heading2-feature'>Track Progress</h2>
            <p className='feature-paragraph'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.</p>
        </div>
         <div className="card">
            <img src={MoneyReport} alt="report" className='feature-img'/>
            <h2 className='heading2-feature'>Deliver Efficiency</h2>
            <p className='feature-paragraph'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <a href="" className='btn'>I want to try !</a>
        </div>
       
    </div>
  )
}
