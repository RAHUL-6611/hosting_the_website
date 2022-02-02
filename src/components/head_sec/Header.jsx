// import SearchField from "react-search-field";
import React from "react";
import "./header.css";
import { FaLocationArrow } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { BiWindowOpen } from "react-icons/bi";
// import { IoMdArrowDropright } from "react-icons/fa";
import logo from "../assets/logo.png";
import eie from "../../images/eie.png"
import SmallCarousel from "./small_carousel/smallCarousel";
import { IoMdArrowDropright } from "react-icons/io";
import arrow from "../assets/right-arrow.png"
 
// import NavbarComponent from "./NavbarComponent"
// import college from "../../images/about.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="top__line">
        <div className="options__topline">
          <span>
            Mail Portal
          </span>
          |
          <span>
            Examination Wing
          </span>
          |
          <span>
            Quick Links
          </span>
          |
          <span>
            Site Map
          </span>
          |
          <span>
            Alumni
          </span>
          |
          <span>
            Contact
          </span>
        </div>
      </div>
      <div className="logo_and_searchbar">
        <div className="logo_header">
          <img src={logo} alt="aaaaaaaaaaa" />
          <div>
            <h1> <span>
              P
              </span>
              UDUCHERRY 
              <span>
                  <br/>
              T
              </span>
              ECHNOLOGICAL
              <span>
                  <br/>
                U
              </span>
               NIVERSITY</h1>
            {/* <p>
              An Autonomous Institution of Govt. of Puducherry Erstwhile
              Pondicherry Engineering College
            </p> */}
          </div>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search Here.." />
          <BsSearch className="search_icon" />
        </div>
      </div>

      <div className="navbar_for_header">
        <ul>
          <li>
            Education
            <div className="display_none">
              <div className="go_to_section">
                <p>
                  Go to Education  <IoMdArrowDropright className="section_icon"/>
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                <div className="sdegrees">
                  <h6>Academic Programmes</h6>
                  <ul>
                    <li className="capitalise"><IoMdArrowDropright className="inline"/> Undergraduate</li>
                    <li><IoMdArrowDropright className="inline"/>Postgraduate</li>
                    <li><IoMdArrowDropright className="inline"/> Ph.D</li>
                  </ul>
                </div>

                </div>
                <div className="sdegrees">
                    <h6>Departments/Centers 
                      {/* <IoMdArrowDropright className="section_icon"/> */}
                    </h6>
                  <ul>
                    <li><IoMdArrowDropright className="inline"/>CSE</li>
                    <li><IoMdArrowDropright className="inline"/>EEE</li>
                    <li><IoMdArrowDropright className="inline"/>EIE</li>
                    <li><IoMdArrowDropright className="inline"/>Mech</li>
                    <li><IoMdArrowDropright className="inline"/>IT</li>
                  </ul>
                </div>
                <div className="sdegrees">
                    <h6>Curriculam &amp; Syllabus</h6>
                  <ul>
                    <li><IoMdArrowDropright className="inline"/>B.Tech</li>
                    <li><IoMdArrowDropright className="inline"/>M.Tech</li>
                    <li><IoMdArrowDropright className="inline"/>MCA</li>
                    <li><IoMdArrowDropright className="inline"/>MSc</li>
                  </ul>
                </div>
                <div className="sdegrees">
                    <h6>Academics Services</h6>
                  <ul>
                    <li><IoMdArrowDropright className="inline"/>Time Table</li>
                    <li><IoMdArrowDropright className="inline"/>Fees</li>
                    <li><IoMdArrowDropright className="inline"/>Scholarship</li>
                    <li><IoMdArrowDropright className="inline"/>Orientation</li>
                    <li><IoMdArrowDropright className="inline"/>Programmes</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            Research
            
            <div className="display_none research">
              <div className="go_to_section">
                <p>
                  Go to Research 
                  {/* <img src={arrow} alt="" className="the_arrow"/> */}
                   <IoMdArrowDropright className="section_icon"/>
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Research Facilities</h6>
                </div>
                <div className="sdegrees">
                    <h6>MoUs</h6>
                  {/* <ul>
                    <li>Section 1</li>
                    <li>Section 1</li>
                    <li>Section 1</li>
                  </ul> */}
                </div>
                  <div className="sdegrees">
                      <h6>IPRs</h6>
                  </div>
                  <div className="sdegrees">
                      <h6>Publications</h6>
                  </div>
               
              </div>
            </div>

          </li>
          <li>
            Innovation
            <div className="display_none innovation">
              <div className="go_to_section">
                <p>
                  Go to Innovation  <IoMdArrowDropright className="section_icon"/>
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Institute Entrepreneurship And Development Cell (IEDC)</h6>

                </div>
                <div className="sdegrees">
                    <h6>AIC-PECF </h6>
                </div>
                <div className="sdegrees">
                    <h6>Industrial Consultancy Services</h6>
                  {/* <ul>
                    <li>Section 1</li>
                    <li>Section 1</li>
                    <li>Section 1</li>
                  </ul> */}
                </div>
               
              </div>
            </div>

          </li>
          <li>
            Admissions
            <div className="display_none to_left">
              <div className="go_to_section">
                <p>
                  Go to Admissions  <IoMdArrowDropright className="section_icon"/>
                </p>
                <ImCross className="section_icon red" />
              </div>
                <div className="sdegrees">
                  <ul className="flex_here">
                    <li><IoMdArrowDropright className="inline"/>Undergraduate</li>
                    <li><IoMdArrowDropright className="inline"/>Postgraduate </li>
                    <li><IoMdArrowDropright className="inline"/>Ph.D</li>
                  </ul>
                </div>
              
            </div>
          </li>
          <li>
            About ptu
            <div className="display_none about_ptu to_left">
              <div className="go_to_section">
                <p>
                  Go to About PTU  <IoMdArrowDropright className="section_icon"/>
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Overview</h6>
                  <ul>
                    <li><IoMdArrowDropright className="inline"/>Visions</li>
                    <li><IoMdArrowDropright className="inline"/>Mission</li>
                    <li><IoMdArrowDropright className="inline"/>Administration</li>
                  </ul>
                    {/* <h6> &amp; </h6> */}
                    {/* <h6></h6> */}
                </div>

                  <div className="sdegrees">
                      <h6>Acts &amp; Statues</h6>
                  </div>
                  <div className="sdegrees">
                      <h6>Vital Statistics
                        • NIRF rankings
                      </h6>
                  </div>
               
                  <div className="sdegrees">
                      <h6>IQAC
                      </h6>
                  </div>
                  <div className="sdegrees">
                      <h6>Campus Life
                      </h6>
                      <ul>
                        <li><IoMdArrowDropright className="inline"/>Healthcare</li>
                        <li><IoMdArrowDropright className="inline"/>Hostels</li>
                        <li><IoMdArrowDropright className="inline"/>Sports</li>
                        <li><IoMdArrowDropright className="inline"/>Clubs</li>
                        <li><IoMdArrowDropright className="inline"/>Women's Forum</li>
                        <li><IoMdArrowDropright className="inline"/>Student Activities</li>
                        <li><IoMdArrowDropright className="inline"/>Campus Amenities</li>
                        <li><IoMdArrowDropright className="inline"/>Campus Publications</li>
                      </ul>
                  </div>
               
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="image_gallery">
        <div className="image_gallery_text">
          <h6>Welcome to</h6>
          <h1>
              PUDUCHERRY 
              <br/>
              TECHNOLOGICAL
              <br/>
               UNIVERSITY</h1>
          {/* <h1>ச்ேசரி ெதால்ட்பப் பல்கைலக்கழகம்</h1> */}
        </div>
                  <SmallCarousel/>
      </div>
      <div className="news_flash">
        <p>NEWS FLASH</p>
        <marquee>
          {/* Latest news from the University &nbsp; &nbsp; &nbsp; 📰 &nbsp; &nbsp;
          &nbsp; Latest news from the University */}
          Classes will be conducted in offline mode with effect from 4.2.2022 except for First year B.Tech
        </marquee>
        {/* <marquee>Latest news from the University</marquee> */}
      </div>
    </div>
  );
};

export default Header;
