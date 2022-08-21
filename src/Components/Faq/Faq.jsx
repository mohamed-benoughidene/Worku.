
import { useState } from 'react';
 import 'animate.css';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Faq() {
  const [target, setTarget] = useState([])
   const faqContent = [
    {
      question:"How much price is for one year subscrption?",
      answer: "Lorem,sssqsq ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore deleniti libero."
    },
    {
      question:"Can I add more than one team members?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore deleniti libero."
    },{
      question:"Can I manage my payments?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore deleniti libero."
    },
    {
      question:"Can I integrate payment gateways to take payments?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore deleniti libero."
    },
    {
      question:"Is my data safe in this app?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore deleniti libero."
    }
   ]   
   function ShowAnswer(index){
    if(target === index){
setTarget([])
return
    }
setTarget(index)
   }
  return (
    <div id='faq'>
        <div className="container">
            <h1 className='faq-heading'>FAQ's</h1>
        <div className="accordions">
          {faqContent.map((item, index)=>{
            return(
              <div key={index} className='accordion'>
                <div className='question-container' onClick={()=>ShowAnswer(index)}>
<h1 key={index}  className={target === index ? "show" : ""}>{item.question}</h1>
{target === index ? (<IoIosArrowUp className='arrow'/>) : (<IoIosArrowDown className='arrow'/>)}
                </div>
<p  className={target === index ? "show" : "hidden"}>{item.answer}</p>
              </div>
            ) 
          })}
        </div>
        </div>
       
</div>
  
  )
}
