import React from "react"
import './cse.css'
import Hod from "./hod"

import DeptHeader from "./dept_head"
// import Faculty from "./faculty"
import { Routes, Route, Link } from "react-router-dom";
import About from "./About"
import Courses from "./Courses"
import Faculty from "./Faculty"
import DeptLandingPage from "./DeptLandingPage"
import Facilities from "./Facilities"
import Footer from "../footer/Footer"

export default function Cse(){

    return (
        <> 
        <DeptHeader />
        {/* <About/> */}
        {/* <Faculty/> */}
        {/* <Facilities/> */}
        <Routes>
            <Route path="/" element={<DeptLandingPage/>} />
        </Routes>
        <Routes>
            <Route path="/about" element={<About/>} />
        </Routes>
        <Routes>
            <Route path="/faculty" element={<Courses/>} />
        </Routes>
        <Routes>
            <Route path="/facilities" element={<Facilities/>} />
        </Routes>
        <Routes>
            <Route path="/course-and-curriculum" element={<Courses/>} />
        </Routes> 
        <Footer/>
        </>
    )
}