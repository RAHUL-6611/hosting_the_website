import React from "react";
import Carousel from "./carousel";

export default function CarouselHold(){
    return (
        <>
        <div className="div" id="">
           <h1 id="">Undergraduate programs</h1>
            <div>
               <Carousel />
            </div>
        </div>
        
        <div className="div" id="">
          <h1 id="">Postgraduate programs</h1>
            <div>
               <Carousel />
            </div>
        </div>
       </>
    )
}