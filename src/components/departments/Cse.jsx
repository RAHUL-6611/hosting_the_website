import React from "react"
import './cse.css'
import DeptHeader from "./dept_head"
import { Routes, Route, Link } from "react-router-dom";
import About from "./About"
import Courses from "./Courses"
import Faculty from "./Faculty"
import DeptLandingPage from "./DeptLandingPage"
import Facilities from "./Facilities"
// <<<<<<< HEAD
import Notices from "./Notices"
// =======
import Research from "./research"
// import Notices from "../departments/notice"
// >>>>>>> c5730b8a49a608998323a46828d2d66c52e9228e
// import Footer from "../footer/Footer"

export default function Cse(){

    return (
        <> 
        <DeptHeader />
      
        <Routes>
            <Route path="/" element={<DeptLandingPage/>} />
        </Routes>
        <Routes>
            <Route path="/about" element={<About/>} />
        </Routes>
        <Routes>
            <Route path="/courses" element={<Courses/>} />
        </Routes>
        <Routes>
            <Route path="/faculty" element={<Faculty/>} />
        </Routes>
        <Routes>
            <Route path="/notices" element={<Notices />} />
        </Routes>
        <Routes>
            <Route path="/facilities" element={<Facilities />} />
        </Routes>
        <Routes>
            <Route path="/notices" element={<Notices/>} />
        </Routes>
        <Routes>
            <Route path="/research" element={<Research/>} />
        </Routes>
        {/* <Footer/> */}
        </>
    )
}