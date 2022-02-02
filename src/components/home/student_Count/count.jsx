import React from "react";

import { HiOutlineAcademicCap, HiAcademicCap } from '../../../../node_modules/react-icons/hi'
import { MdCastForEducation } from '../../../../node_modules/react-icons/md'

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
                ["undetgraduate students", "postgraduate students", "Phd students", "Research scholars", "teaching and non-teaching staffs ", "administrative faculties ", "Award won Projects", "inovations by students"].map((e)=>{
                    return(
                        <>
                        <div class="items" id="">
                            <div class="para">
                              <span className="flex justify-center"><i><HiAcademicCap/></i>&nbsp;2105+</span>
                              <div className="para-para"><p>{e}</p></div>
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