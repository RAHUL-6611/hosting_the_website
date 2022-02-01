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
                ["undetgraduate students", "postgraduate students", "Phd students", "Research scholare", "teaching and non-teaching staffs ", "administrative faculties ", "Award won Projects", "inovations by students"].map((e)=>{
                    return(
                        <>
                        <div class="items" id="">
                            <div class="para">
                             <HiOutlineAcademicCap style={{"font-size" : "59px", "transform" : "translate(15px, 60px)"}}/>
                              <span>2105+</span>
                              <p>{e}</p>
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