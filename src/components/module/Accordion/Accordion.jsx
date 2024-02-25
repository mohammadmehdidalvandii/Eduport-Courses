import './Accordion.scss';
// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Accordion() {
        // logic Accordion 
        const [showAccordion ,setShowAccordion] = useState(false)
        const handlerShowAccordion = ()=>{
            setShowAccordion(!showAccordion)
        }
  return (
    <div className="accordion">
    <div className="accordion_titleIcon" onClick={handlerShowAccordion}>
        <span className="accordion_title">معرفی دوره</span>
        {showAccordion ?(
             <span className="accordion_icon">
             <FontAwesomeIcon icon={faArrowUp}/>
         </span>
        ):(
            <span className="accordion_icon">
            <FontAwesomeIcon icon={faArrowDown}/>
        </span>
        )}
    </div>
    {showAccordion && (
    <div className="accordion_content">
        this is content
    </div>
    )}
</div>
  )
}

export default Accordion