import React from "react";

import CarouselHold from "../home/carousel_hold";
import CardHold from "../home/cards/card_hold";
// import AboutUs from "./About Us/aboutus";
import StudentCount from "./student_Count/count";


export default function Home() {
    return (
        <div>
           <CardHold />
           {/* <AboutUs /> */}
           <StudentCount />
           <CarouselHold />
        </div>
    )
}