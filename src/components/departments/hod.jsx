import React from "react";
import './style.css'

import img from "../../images/ZayarazG.png";

export default function Hod(){
    return (
        <>
        <div className="holder">
        <h4 className="hod-msg">HOD's Message</h4>

{/* <div class="newToggle">
        <span class="about">About</span>
        <label class="switch">
           <input type="checkbox" />   
            <span class="slider round"></span>
        </label>
        <span class="message">Message</span>
    </div> */}

<div class="container">

<div class="profile">
    <div class="image"><img src={img} alt="" /></div>
    <div class="content">
        <p class="name">Dr. G. Zayaraz</p>
        <div>
            <span><i class="fas fa-phone-alt"></i></span>
            <span class="number">94439 58140</span>
        </div>
        <div>
            <span><i class="fas fa-envelope"></i></span>
            <span class="email"> hod.cse@pec.edu</span>
        </div>
    </div>
</div>
<div class="right-box">
    
    <div class="toggle-content">
       
        <div class="box">

            <div class="items">
                <div class="para para1">
                    <span class="num"> 10 Years</span>
                    <p class="paragraph">Teaching Experience</p>
                </div>
            </div>
            <div class="items">
                <div class="para">
                    <span class="num">10</span>
                    <p class="paragraph">Research Guidance</p>
                </div>
            </div>
            <div class="items">
                <div class="para">
                    <span class="num">10</span>
                    <p class="paragraph">Projects</p>
                </div>
            </div>
            <div class="items">
                <div class="para">
                    <span  class="num">10</span>
                    <p class="paragraph">Publication</p>
                </div>
            </div>

        </div>
        <div class="msg">

            The department aims at providing high quality education to students through the latest in computer
            technology to enable them to undertake careers in the Information Technology field, pursue advanced
            studies
            abroad and take up Entrepreneurship.The department offers B.Tech. (CSE), M.Tech. (Distributed
            Computing),
            M.Tech. (Information Security), MCA and Ph.D. programmes. In order to maintain the standard of
            education,
            the department constantly upgrades the academic syllabi so as to keep the students well trained to
            deal
            with
            the changing trends in the field of Computer Science and Engineering. The department places emphasis
            on
            Distributed and Parallel Computing, Information Security, Internet of Things, Embedded Systems,
            Natural
            Language Processing Technologies, Artificial Intelligence, Machine Learning, Data Mining and Data
            Analytics
            and several other recent topics.

            <br />
             With our vision and mission, we strive to impart quality education to its pupils,
            thereby
            enabling them to stand out as individuals competent in the domain.
        </div>
    </div>
</div>

</div>
        </div>
        </>
    )
}