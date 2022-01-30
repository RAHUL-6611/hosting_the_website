import React from "react";

import CarouselHold from "../home/carousel_hold";
import CardHold from "../home/cards/card_hold";
// import AboutUs from "./About Us/aboutus";


export default function Home() {
    return (
        <div>
            {/* <AboutUs /> */}
           <CardHold />
           <CarouselHold />
        </div>
    )
}