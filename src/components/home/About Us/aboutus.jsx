import React from "react";

import './styles.css'
import imgptu from "./ptuimg.jpg"
import imgvc from "./vc.png"

export default function AboutUs()
{
    return(
        <>
         <div className="aboutptu-card">
        <div className="abouthead1">        
            <h1 style={{"color:black, font-size:40px, font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>About</h1>
            <h2 style={{"color:#343eff, font-size:40px, font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}> PTU</h1>
        </div>
        <div className="content1">
            <h6></h6>
            <div className="clgimg">
                <img src={imgptu} alt="image is not available" width="300" height="auto" className="ptuimg" />
            </div>
            <p1> Puducherry Technological University is an Institution promoted and fully funded by the Government of Puducherry, India. It was established as an Engineering College in the year 1984 under the VII Five Year Plan. The college was upgraded to technological university with the approval of the UGC with effect from 5th September, 2020. The PTU was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President, Govt. of India on 13.09.2021. The institution is ranked 144 in Engineering Category by NIRF India Rankings 2021. </p3>
            <div className="button1">
                <button className="readmore-btn1" >Read more</button>
            </div>
        </div>
		<div className="ptu-social">
			<a href=""><i className="fab fa-facebook-f"i> </i> </a>
			<a href=""><i className="fab fa-twitter"i> </i> </a>
			<a href=""><i className="fab fa-linkedin"i> </i> </a>
			<a href=""><i className="fab fa-instagram"i> </i> </a> 
		</div>
	</div>
    
    <div className="aboutvc-card">
        <div className="abouthead2">
            <h3 style={{"color:black, font-size:40px, font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Vice</h1>
            <h4 style={{"color:rgb(195, 0, 255), font-size:40px, font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}> Chancellor</h1>
        </div>
        <div className="content2">
            <h6></h6>
            <div className="ptuvcimg">
                <img src={imgvc} alt="image is not available" width="300" height="auto" className="vcimg" />
            </div>
            <p2> Puducherry Technological University is an Institution promoted and fully funded by the Government of Puducherry, India. It was established as an Engineering College in the year 1984 under the VII Five Year Plan. The college was upgraded to technological university with the approval of the UGC with effect from 5th September, 2020. The PTU was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President, Govt. of India on 13.09.2021. The institution is ranked 144 in Engineering Category by NIRF India Rankings 2021. </p3>
            <div className="button2">
                <button className="readmore-btn2" >Read more</button>
            </div>
        </div>
    </div>
        </>
    )
}