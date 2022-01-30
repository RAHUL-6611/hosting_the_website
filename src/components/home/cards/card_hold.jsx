import React from "react";
import Card from "./card";

import './card.css'; //import css file

export default function CardHold(){
    return(
        <div className="hold my-20 block justify-center align-center md:flex md:justify-evenly">
            <Card color="#80002da3"/>
            <Card color="#768000a3"/>
            <Card color="#008006a3"/>
            <Card color="#000880a3"/>
        </div>
    )
}