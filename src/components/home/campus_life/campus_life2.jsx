import React from "react";

import './CAMPUS_LIFE1.css'

import img1 from './image-S456.jpg'
import img2 from './image-S457.jpg'
import img3 from './image-S458.jpg'
import img4 from './image-S459.jpg'
import img5 from './image-S470.jpg'

import vid from './5_6300889238535668990.mp4'

export default function CampupsLifeTwo()
{
    return (
    
        <div className="campusVedio">
            <div class="parent-campus2container">
             {/* <h2><i class="fas fa-video"></i> Let's have a Campus Tour</h2>
             <h2><i class="far fa-image"></i> See Our Gallery</h2>
             <a href="#">SEE ALL</a>
             <br/><br/>
             <br/><br/> */}
        <div class="campus2container">
          <div class="col1">
            <video id="video"src={vid} autoplay muted loop></video>
          </div>
          <div class="col2">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
          </div>
          <div class="col3">
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            <img src={img1} alt=""/>
          </div>
          <div class="col4">
            <img src={img2} alt=""/>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
          </div>
    </div>
    <br/>
     </div>
        </div>
          
    )
}