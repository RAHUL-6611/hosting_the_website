import React from 'react';
import fac1 from "../../images/appl1.jpg"
import fac2 from "../../images/appl2.jpg"
import fac3 from "../../images/dc2.jpg"
import fac4 from "../../images/dc1.jpg"
import fac6 from "../../images/hard1.jpg"
import fac5 from "../../images/hard2.jpg"
import fac8 from "../../images/info2.jpg"
import fac7 from "../../images/info1.jpg"
import fac9 from "../../images/micro1.jpg"
import fac10 from "../../images/prob1.jpg"
import fac11 from "../../images/prob2.jpg"
import fac12 from "../../images/rl1.jpg"
import fac13 from "../../images/sr1.png"


const Facilities = () => {
  return (
  <div className="flex w-full bg-grey flex-col px-20 pt-10 justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <div className="fac flex flex-row justify-around py-10 ">
        <img src={fac1} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>SRINIVASA RAMANUJAN COMPUTING CENTRE</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
     
      <div className="fac flex flex-row-reverse bg-gray-100 justify-around py-10">
        <img src={fac2} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>DISTRIBUTED COMPUTING LAB</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
      <div className="fac flex flex-row justify-around py-10">
        <img src={fac3} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>RESEARCH LABORATORY:</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
      <div className="fac flex flex-row-reverse bg-gray-100 justify-around py-10">
        <img src={fac4} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>SRINIVASA RAMANUJAN COMPUTING CENTRE</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
      <div className="fac flex flex-row justify-around py-10">
        <img src={fac5} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>HARDWARE AND TROUBLE SHOOTING LAB</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
      <div className="fac flex flex-row-reverse bg-gray-100 justify-around py-10">
        <img src={fac6} alt="" />
        <div className="details flex flex-col w-1/2 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3>APPLICATION LAB</h3>
          </div>
          <div className="details_of_fac text-left pt-5">
            Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
      
      </div>
    </div>

         
  )}

export default Facilities;
