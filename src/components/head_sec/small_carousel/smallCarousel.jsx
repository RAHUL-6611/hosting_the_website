import React, { useState } from "react";

import './smallCarousel.css';

import img1 from "../../../images/chancellor.jpg"
import img2 from "../../../images/pro chancellor.jpg"
import img3 from "../../../images/vc dr s mohan.jpg"

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


export default function SmallCarousel()
{

    let [move, setMove] = useState(0);

    let moveLeft = () => {
       (move === -900) ? setMove(0) : setMove(e => e + (-450))
    }

    let moveRight = () => {
        (move === 0) ? setMove(-900) : setMove(e => e - (-450))
    }

    return (
        <div className="card-cont flex align-center">
           <div className="btn"> 
              <button onClick={()=>{moveLeft()}}><BsArrowLeftCircle /></button>
           </div>
            <div className="slide-hold">
            <div className="slide flex gap-4" style={{"transform" : `translate(${move}px)`}}>
                <CardParts img={img3} desig="Vice Chancellor" name="Dr.S Mohan" />
                <CardParts img={img1} desig="Chancellor" name="Dr. Tamilisai Soundararajan" />
                <CardParts img={img2} desig="Pro Chancellor" name="Shri. Ashok Kumar, IAS" />
            </div>
            </div>
            <div className="btn"> 
              <button onClick={()=>{moveRight()}}><BsArrowRightCircle /></button>
           </div>
        </div>
    )
}


const CardParts = ({ img, name, desig }) => {
    return (
        <div className="small-cont flex">
          <div className="parts">
              <img src={img} alt="" />
          </div>
          <div className="parts">
              <h4>{name}</h4>
              <h6>{desig}</h6>
              <p>The message from the honourable vice chancellor will be updated here</p>
          </div>
        </div>
    )
}