import React from "react";

import './CAMPUS_LIFE.css'

import img1 from './image-S456.jpg'
import img2 from './image-S457.jpg'
import img3 from './image-S458.jpg'
import img4 from './image-S459.jpg'
import img5 from './image-S470.jpg'

export default function CampusLifeOne()
{
    return(
        <>
          <div class="parent-container">
                <h1>Campus Life</h1>
                {/* <a href="#">About Life on Campus</a> */}
                <br />
          <div class="campus-container">
            <div class="col11">
              <img src={img1} alt="" />
            </div>
          <div class="col12">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
          </div>
          <div class="col13">
              <img src={img4} alt="" />
              <img src={img5} alt="" />
          </div>
           </div>
         </div>
        </>
    )
}