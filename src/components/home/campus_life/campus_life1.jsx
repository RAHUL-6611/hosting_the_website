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
            <p style={{"color" : "black" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tenetur facilis quibusdam ea doloribus hic, non rerum modi ut et temporibus, sit in soluta fugit facere, porro itaque inventore eligendi error accusantium sint dolores unde! Deleniti officia distinctio voluptates incidunt placeat excepturi, aliquid ipsa beatae similique cum quidem repellendus fugit sed obcaecati nesciunt non recusandae quas! Doloribus quae modi odio necessitatibus asperiores repellat odit aperiam assumenda, sapiente aut nobis est reprehenderit adipisci fugit esse? Distinctio dolor voluptatem reprehenderit maxime perferendis officia repudiandae eius fugit, dolorem, aperiam fuga vero, animi accusantium! Ratione cum exercitationem laborum quo ad ipsa, accusantium commodi perferendis.</p>
         </div>
        </>
    )
}