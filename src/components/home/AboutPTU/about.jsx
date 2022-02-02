import React from "react";

import './about.css';
import { BsArrowDownRightSquareFill } from '../../../../node_modules/react-icons/bs';

import imgs1 from '../../../images/mectro.jpg'
import imgs2 from '../../../images/home.jpg'

import imgs3 from '../../../images/eie 2.jpg'
import imgs4 from '../../../images/me.jpg'
import imgs5 from '../../../images/civil.jpg'

import imgs6 from '../../../images/Startup.jpg'
import imgs7 from '../../../images/grad.jpg'


let carddesc = [
    {
       title : "Research",
       img : imgs1, 
    },
    {
        title : "Startups",
        img : imgs6, 
     },
     {
        title : "Placements",
        img : imgs7, 
     }
]

export default function AboutComp()
{
    return <>
             <div className="aboutPart grid grid-cols-5 gap-4 my-20">
                 <div className="subParts">
                    {/* <div className="quick-li">
                       <h7 className="quick-link">Quick Links</h7>
                    </div> */}
                    <ol>
                        {
                            [imgs3, imgs4, imgs5].map(e=> {
                                return(
                                    <div>
                                        <li className="flex justify-around">
                                           <img src={e} alt="" />
                                         </li><hr/>
                                    </div>
                                )
                            })
                        }
                    </ol>
                 </div>
                 <div className="subParts col-span-3">
                     <div className="head-hold">
                        <h7 className="about-head">About PTU</h7>
                     </div>
                     <p className="about-text">Puducherry Technological University (Erstwhile Pondicherry Engineering College) is an Institution promoted and fully funded by the Government of Puducherry, India. It was established as an Engineering College in the year 1984 under the VII Five Year Plan. The college was upgraded to technological university with the approval of the UGC with effect from 5th September, 2020. The PTU was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President, Govt. of India on 13.09.2021. The institution is ranked 144 in Engineering Category by NIRF India Rankings 2021.</p>
                     <div className="about-img">
                       <img src={imgs2} alt="" />
                     </div>
                 </div>
                 <div className="subParts">
                    {
                        carddesc.map(e=> {
                            return <Card title={e.title} img={e.img} />
                        })
                    } 
                 </div>
             </div>
           </>
}

const Card = ({ title, img }) => {
    return (
        <div className="mb-10">
            <div className="card-msg">
            <div className="msg-head">
                <h3>{title}</h3>
            </div>
            <div className="sub-card">
                <div className="img-card">
                  <img src={img} alt="" />
                </div>
                
            </div>
        </div>
        </div>
    )
}