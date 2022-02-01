// import SearchField from "react-search-field";
import React from 'react';
import "./header.css";
import { FaLocationArrow } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/logo.png"
// import NavbarComponent from "./NavbarComponent"
// import college from "../../images/about.jpg"

const Header = () => {
  return (<div className="header">
      {/* <marquee className="marquee">Pondicherry Technological University</marquee> */}
      <div className="top__line">
          <div className="options__topline">
              <span>Departments and Centres <FaLocationArrow />
              </span>
                |
              <span>Shortcuts <FaLocationArrow />
              </span>
              |
              <span>Contact <FaLocationArrow />
              </span>
          </div>
      </div>
      <div className="logo_and_searchbar">
            <div className="logo_header">
                <img src={logo} alt="aaaaaaaaaaa"/>
                <h1>Pondicherry Technological <br/> University</h1>
          </div>
          <div className="searchbar">
              <input type="text" placeholder="Search Here.."/>
              <BsSearch />
          </div>
      </div>
      <div className="navbar_for_header">
            <ul>
                <li>Education
                    <div className="display_none">
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>

                    </div>
                </li>

                <li>Research

                    <div className="display_none">
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>

                    </div>
                </li>
                <li>Innovation
                    <div className="display_none">
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>

                    </div>

                </li>
                <li>About PTU
                    <div className="display_none">
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>
                        <ul>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                            <li>Section 1</li>
                        </ul>

                    </div>

                </li>
            </ul>
      </div>
     <div className="image_gallery">
         {/* <img src={college} alt="" className="header__image"/> */}
         
         
         
     </div>
  </div>);
};

export default Header;
