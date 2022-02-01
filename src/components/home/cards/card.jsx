import React from "react";
import imag from '../../../images/civil.jpg'

export default function Card({ color, img, name }){
    return(
         <div className="card" style={{"background" : `url(${img})`, "backgroundSize" : "cover"}}>
            <div className="text" style={{"background" : `${color}`}}>
                 <div className="icons"></div>
                 <div className="title">{name}</div>
                 <div className="des">Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.</div>
                 <button>Explore</button>
            </div>
        </div>
    )
}