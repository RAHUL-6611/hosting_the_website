import React from "react";
import Card from "./card";

import './card.css'; //import css file

import imgs1 from '../../../images/mectro.jpg'
import imgs3 from '../../../images/about.jpg'
import imgs2 from '../../../images/about.jpg'
import imgs4 from '../../../images/me.jpg'

export default function CardHold(){
    return(
        <div className="block holding_part py-20">
            <div className="hold my-20 block justify-center align-center md:flex md:justify-evenly">
                <Card color="#80002da3" img={imgs1} name="Researches"/>
                <Card color="#768000a3" img={imgs2} name="Academics"/>
                <Card color="#008006a3" img={imgs3} name="Innovations"/>
                <Card color="#000880a3" img={imgs4} name="Faculties"/>
            </div>
        </div>
    )
}