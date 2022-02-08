import React from 'react';
import Gallery from "./gallery"
import Testimonial from "./testimonial"
import NewsPTU from "../home/news/NewsPTU"
import HodCard from "./hod_card"
import About from './About';
import Faculty from './Faculty';
import { Link } from "react-router-dom";
import Vision from './vision';

const DeptLandingPage = () => {
  return (<div>
      <Link to="/about">
         <HodCard />
      </Link>
      <About />
      <Vision />
      <NewsPTU/>
      <Faculty />
      <div className="gallery_dept">
        <Gallery/>
        <Gallery/>
        <Gallery/>
      </div>
        <Testimonial />
  </div>);
};

export default DeptLandingPage;
