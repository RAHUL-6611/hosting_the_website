// import SearchField from "react-search-field";
import React from "react";
import "./header.css";
import { FaLocationArrow } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { BiWindowOpen } from "react-icons/bi";
import logo from "../assets/logo.png";
import eie from "../../images/eie.png"
import SmallCarousel from "./small_carousel/smallCarousel";


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
            Departments and Centers
          </span>
          |
          <span>
            Quick Links
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
                  Go to Education <BiWindowOpen className="section_icon" />
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Academic Curriculam &amp; Syllabus</h6>
                <div>
                  {/* <img src={eie} alt="" /> */}
                  {/* <p>
                    Study programmes at PTU are research-based, analytical and
                    innovative
                  </p> */}
                </div>

                </div>
                <div className="sdegrees">
                    <h6>Departments/Centers </h6>
                  <ul>
                    {/* <li>Undergraduate (BEng and BSc)</li> */}
                    {/* <li>Graduate (MSc)</li> */}
                    {/* <li>PhD</li> */}
                  </ul>
                </div>
                <div className="sdegrees">
                    <h6>Curriculam &amp; Syllabus</h6>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 1</li>
                    <li>Section 1</li>
                  </ul>
                </div>
                <div className="sdegrees">
                    <h6>Academics Services</h6>
                  <ul>
                    <li>Time Table</li>
                    <li>Fees</li>
                    <li>Scholarship</li>
                    <li>Orientation</li>
                    <li>Programmes</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            Research
            
            <div className="display_none innovation">
              <div className="go_to_section">
                <p>
                  Go to Research <BiWindowOpen className="section_icon" />
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
                  Go to Research <BiWindowOpen className="section_icon" />
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Institute Entrepreneurship</h6>

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
            Collaborations
            <div className="display_none to_left">
              <div className="go_to_section">
                <p>
                  Go to Collaborations <BiWindowOpen className="section_icon" />
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div>

                <div>
                  <img src={eie} alt="" />
                  <p>
                    Study programmes at PTU are research-based, analytical and
                    innovative
                  </p>
                </div>
                </div>
                <div className="sdegrees">
                    <h3>Degrees </h3>
                  <ul>
                    <li>Undergraduate (BEng and BSc)</li>
                    <li>Graduate (MSc)</li>
                    <li>PhD</li>
                  </ul>
                </div>
                <div className="sdegrees">
                    <h3>Admissions</h3>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 1</li>
                    <li>Section 1</li>
                  </ul>
                </div>
                <div className="sdegrees">
                    <h3>Extra curricular</h3>
                  <ul>
                    <li>Games</li>
                    <li>Events</li>
                    <li>sports</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            About ptu
            <div className="display_none about_ptu to_left">
              <div className="go_to_section">
                <p>
                  Go to About PTU <BiWindowOpen className="section_icon" />
                </p>
                <ImCross className="section_icon red" />
              </div>
              <div className="section_four_column">
                <div className="sdegrees">
                  <h6>Overview</h6>
                    <h6>Visions &amp; Mission</h6>
                    <h6>Administration</h6>
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
                        <li>HealthCare</li>
                        <li>Hostels</li>
                        <li>Sports</li>
                        <li>Clubs</li>
                        <li>Women's forum</li>
                        <li>Student Activities</li>
                        <li>Campus Amenities-Bank,Stores</li>
                        <li>Campus publications</li>
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
          Latest news from the University &nbsp; &nbsp; &nbsp; 📰 &nbsp; &nbsp;
          &nbsp; Latest news from the University
        </marquee>
        {/* <marquee>Latest news from the University</marquee> */}
      </div>
    </div>
  );
};

export default Header;
