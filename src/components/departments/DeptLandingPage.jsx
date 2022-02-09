import React from 'react';
import Gallery from "./gallery"
import Testimonial from "./testimonial"
import NewsPTU from "../home/news/NewsPTU"
import HodCard from "./hod_card"
import { Link } from "react-router-dom";

const DeptLandingPage = () => {
  return (<div>
      <Link to="/about">
       {/* <HodCard /> */}
      </Link>
      <NewsPTU/>
<div className="gallery_dept">
        <Gallery/>
        <Gallery/>
        <Gallery/>
        </div>
        <Testimonial />
  </div>);
};

export default DeptLandingPage;
