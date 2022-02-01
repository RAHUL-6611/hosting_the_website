import React from "react";

import './CAMPUS_LIFE.css'

import img1 from '../../../images/civil.jpg'
import img2 from '../../../images/eie 2.jpg'
import img3 from '../../../images/ece.jpg'
import img4 from '../../../images/eee.jpg'
import img5 from '../../../images/ecedept.jpg'

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