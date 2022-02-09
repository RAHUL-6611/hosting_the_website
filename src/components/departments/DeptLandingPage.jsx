import React from 'react';
import Gallery from "./gallery"
import Testimonial from "./testimonial"
import NewsPTU from "../home/news/NewsPTU"
import HodCard from "./hod_card"
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import About from './About';
import Faculty from './Faculty';
import { Link } from "react-router-dom";
import Vision from './vision';
>>>>>>> c5730b8a49a608998323a46828d2d66c52e9228e

const DeptLandingPage = () => {
  return (<div>
      <Link to="/about">
<<<<<<< HEAD
       {/* <HodCard /> */}
=======
         <HodCard />
>>>>>>> c5730b8a49a608998323a46828d2d66c52e9228e
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
