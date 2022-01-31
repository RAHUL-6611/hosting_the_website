import React from "react";

import { HiOutlineAcademicCap, HiAcademicCap } from '../../../../node_modules/react-icons/hi'

import './style.css'

export default function StudentCount()
{
    return (
        <div class="count-container">

        <h1>
            PTU by the Numbers
        </h1>
        <div class="box">
            {
                [1,2,3,4].map(()=>{
                    return(
                        <>
                        <div class="items" id="">
                            <div class="para">
                             <HiOutlineAcademicCap style={{"font-size" : "59px", "transform" : "translate(15px, 60px)"}}/>
                              <span>2105+</span>
                              <p>Undergraduate Students</p>
                            </div>
                        </div>
                        <div class="items" id="">
                            <div class="para">
                               <HiAcademicCap style={{"font-size" : "59px", "transform" : "translate(15px, 60px)"}}/>
                                <span>215+</span>
                                <p>Undergraduate Students</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>

    </div>
    )
}