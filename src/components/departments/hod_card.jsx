import React from "react";

// import { CardParts } from "../head_sec/small_carousel";
import img from '../../images/ZayarazG.png'

export default function HodCard (){
    return (
        <div className="card-cont flex align-center">
            <div className="small-cont hod-card flex">
          <div className="parts">
              <img src={img} alt="" />
          </div>
          <div className="parts">
              <h4 className="font-bold font-2xl">Dr. G. Zayaraz</h4>
              <h6>Hod cse department</h6>
              {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque a magnam nam tempora cum iusto
                  ?</p> */}
                  <button>
                      Read More
                  </button>
          </div>
        </div>
            </div>
    )
}