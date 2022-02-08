import React from 'react';

import './cse.css';

import imgs from "../../images/en4.jpg"


export default function Testimonial()
{
    return (
        <div className="cse-dept">
             <div className="testii">
                <h4 className="title">Testimonials</h4>
             </div>
             <div className="mark-hold">
             <marquee loop="true" className="mark" >
                 <div className="testi-cards-hold">
                     {
                         [1,2,3,4,5,6,7,8,9,10,7,6,6,7].map(()=>{
                             return (
                            <div className="testi-card">
                                <div className="card-text">
                                    <p className="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="card-img flex align-center">
                                    <div className="img-pic">
                                        <div className="arrow"></div>
                                        <img src={imgs}  className="testi-img" alt="" />
                                    </div>
                                    <div className="img-text">
                                        <h5>Lorem ipsum</h5>
                                        <p>Lorem ipsum, dolor sit amet Ut, expedita.</p>
                                    </div>
                                </div>
                            </div>
                             )
                         })
                     }
                 </div>
             </marquee>
             </div>
             </div>
    )
}