import React from 'react';
import "./vision.css"
import { MdOutlineTravelExplore } from "../../../node_modules/react-icons/md"

import bg from "../../images/success.jpg"

let bgObj = {
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }

const Vision = () => {
  return <div className='pb-10' style={bgObj}>      
      <div className="vision-hold p-10 m-10">
         <h2>Vision and Mission</h2>
      </div>
      <div className="vision-content my-10 px-20">
          <p className='p-2 m-0'><MdOutlineTravelExplore/>To explore innovative approaches to enhance and expand learning opportunities, through the integration of technology.</p>
          <p className='p-2 m-0'><MdOutlineTravelExplore/>To build a strong research and teaching environment that responds to the real-time challenges of the industry. of technology.</p>
 
          <p className='p-2 m-0'><MdOutlineTravelExplore/>To inculcate the blend of competence, aptitude of knowledge and investigate flair through devising an ambient environment for sustainable learning.</p>
          <p className='p-2 m-0'><MdOutlineTravelExplore/>To transform attitude, values, priorities by changing mindset and instill positive outlook for socially conscious intellectual development.</p>
          <p className='p-2 m-0'><MdOutlineTravelExplore/>Incubate, apply and spread innovative ideas to evolve the department as a Centre of excellence in thrust areas.</p>
      </div>
         </div>;
};

export default Vision;
