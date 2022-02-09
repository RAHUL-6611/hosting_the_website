import React from "react";

import CarouselHold from "./carousel_hold";
// import CardHold from "../home/cards/card_hold";
// import AboutUs from "./About Us/aboutus";
import StudentCount from "./student_Count/count";
// import NewsBlock from "./newsEvents/newsBlock";
import CampusLifeOne from "./campus_life/campus_life1";
import AboutComp from "./AboutPTU/about";
import NewsPTU from "./news/NewsPTU";
import Header from "../head_sec/Header";


export default function Home() {
    return (
        <div>
            <Header/>
           {/* <CardHold /> */}
           {/* <SmallCarousel /> */}
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