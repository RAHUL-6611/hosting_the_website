import React from 'react';

import './index.css'
import image from "../../images/PTU_Logo-color.png"

export default function Footer()
{
    return (
    <>
    <footer class="footer-container">
        <div class="footer_box1">
          <img src={image} style={{"width" : "130px","height" : "130px", "border" : "none"}} />
          {/* <h2 style={{"padding" : "20px"}}>PTU</h2> */}
        </div>
        
        <div class="footer_box2">
          {/* <h2>Puducherry Technological University</h2> */}
          <p>Puducherry Technological University (Erstwhile Pondicherry Engineering College) is an Institution promoted and fully funded by the Government of Puducherry, India. It was established as an Engineering College in the year 1984 under the VII Five Year Plan. The college was upgraded to technological university with the approval of the UGC with effect from 5th September, 2020. The PTU was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President, Govt. of India on 13.09.2021. The institution is ranked 144 in Engineering Category by NIRF India Rankings 2021.</p>
          <p>Address : East coast Road , Pillaichavady ,Puducherry ,605041</p>
          <p>Phone no : 0413 265 5281</p>
        </div>
        <div class="footer_box">
          {/* <h2>Navigation Links</h2> */}
          {/* <nav>
            <ul>
              <li><a id = "nav2" href="#campus" >CAMPUS</a></li>
              <li><a id = "nav2" href="#academics">ACADEMICS</a></li>
              <li><a id = "nav2" href="#dept">Departments</a></li>
              <li><a id = "nav2" href="#cells">CELLS</a></li>
              <li><a id = "nav2" href="#clubs">CLUBS</a></li>
              <li><a id = "nav2" href="#chapters">CHAPTERS</a></li>          
              <li><a id = "nav2" href="#nirf">NIRF</a></li>
            </ul>
          </nav> */}
        </div>
        <div class="footer_box3">
          {/* <h2>Follow us on</h2> */}
          <p>We can add icons to make interactive like fb ,mail etc..</p>
          {/* <h2>NewsLetter</h2> */}
          <p>We can add related image to this</p>
        </div>
    </footer>
    </>
    )
}