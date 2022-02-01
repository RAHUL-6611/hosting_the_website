import React from 'react';

import { TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin, TiSocialInstagram, TiSocialFacebook } from "../../../node_modules/react-icons/ti"

import './footer.css'
import image from "../../images/PTU_Logo_black_white.png"
import location from "../../images/location.jpg"

export default function Footer()
{
    return (
    <>
    <footer class="footer-container block justify-center md:flex md:justify-evenly md:align-center">
        <div class="footer_box1 px-5">
          <img src={image} style={{"width" : "210px","height" : "130px", "border" : "none"}} />
        </div>
        
        <div class="footer_box2 px-10 mx-12">
          <img src={location} alt="location" />
          <p>Address : East coast Road , Pillaichavady ,Puducherry ,605041</p>
          <p>Phone no : 0413 265 5281</p>
        </div>
        <div class="footer_box block px-9">
           <h2 style={{"text-align" : "center"}}>Follow us on</h2>
             <div className='navs'>
              <a id = "nav2" href="#campus" >CAMPUS</a>
              <a id = "nav2" href="#academics">ACADEMICS</a>
              <a id = "nav2" href="#dept">Departments</a>
              <a id = "nav2" href="#cells">CELLS</a>
              <a id = "nav2" href="#clubs">CLUBS</a>
              <a id = "nav2" href="#chapters">CHAPTERS</a>     
              <a id = "nav2" href="#nirf">NIRF</a>
             </div>
        </div>
        <div class="footer_box3 px-5">
          <h2>Follow us on</h2>
            <div className='flex justify-evenly'> 
             <TiSocialTwitter style={{"fontSize" : "50px"}} />
             <TiSocialInstagram style={{"fontSize" : "49px"}}/>
             <TiSocialLinkedin style={{"fontSize" : "50px"}}/>
             <TiSocialYoutube style={{"fontSize" : "50px"}}/>
             <TiSocialFacebook style={{"fontSize" : "50px"}}/>
            </div>          
          <br />
        </div>
    </footer>
    
    <div className='last'>
      this website is created using react js
    </div>
    </>
    )
}