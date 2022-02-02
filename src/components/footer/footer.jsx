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
          <p>Address: East coast Road, Pillaichavady, Puducherry, 605 041</p>
          <p>Phone No: 0413 265 5281</p>
        </div>
        <div class="footer_box3 px-5">
          <h2>Follow us on</h2>
            <div className='flex justify-center'> 
             <TiSocialTwitter style={{"fontSize" : "45px"}} />&nbsp;&nbsp;
             <TiSocialInstagram style={{"fontSize" : "39px"}}/>&nbsp;&nbsp;
             <TiSocialLinkedin style={{"fontSize" : "45px"}}/>&nbsp;&nbsp;
             <TiSocialYoutube style={{"fontSize" : "45px"}}/>&nbsp;&nbsp;
             <TiSocialFacebook style={{"fontSize" : "45px"}}/>
            </div>          
          <br />
        </div>
    </footer>
    
    <div className='last'>
      Developed by PTU's Web Team.
    </div>
    </>
    )
}