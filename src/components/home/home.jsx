import React from "react";

import CarouselHold from "../home/carousel_hold";
import CardHold from "../home/cards/card_hold";
import AboutUs from "./About Us/aboutus";
import StudentCount from "./student_Count/count";
import NewsBlock from "./newsEvents/newsBlock";
import CampusLifeOne from "./campus_life/campus_life1";
import AboutComp from "./AboutPTU/about";
import NewsPTU from "./news/newsPTU";



export default function Home() {
    return (
        <div>
           {/* <CardHold /> */}
           <AboutComp />
           <NewsPTU />
           {/* <AboutUs /> */}
           {/* <NewsBlock /> */}
           <CarouselHold />
           <StudentCount />
           <CampusLifeOne />
        </div>
    )
}