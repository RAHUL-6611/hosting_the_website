import React from 'react';

import img from "../../images/cse.jpg"


const About = () => {
  return <div>
    <div className="hw1 flex justify-evenly px-20 pt-10">
        <div>
           <div className="explore text-left">Explore the</div>
           <div className="dept-title text-left">CSE Department</div>
        </div>
        <div className="title_of-dept">
            <div className="numbers flex gap-24">
              <p>
                <h5 className="numberse_here">455+</h5>
                <h3 className="name_here">B.tech students</h3>
              </p>
              
              <p>
                <h5 className="numberse_here">455+</h5>
                <h3 className="name_here">M.tech students</h3>
              </p>
              
              <p>
                <h5 className="numberse_here">455+</h5>
                <h3 className="name_here">MCA students</h3>
              </p>
              
              <p>
                <h5 className="numberse_here">455+</h5>
                <h3 className="name_here">Phd students</h3>
              </p>

              <p>
                <h5 className="numberse_here">455+</h5>
                <h3 className="name_here">Faculty</h3>
              </p>
              
            </div>
    </div>

        </div>
        <div className="hw2 p-10 mx-20">
          <br />
          <h5 className="dep-h">About the Department</h5>
          <p className="dep-p">
          The Department aims at providing high quality training to students through the latest in computer technology. In order to maintain the standard of education, the department constantly upgrades the academic syllabi so as to keep the students well trained to deal with changing trends in the field of Computer Science and Engineering. The Department offers B.Tech. (CSE), M.Tech. (Data Science), M.Tech. (Information Security), MCA and Ph.D.(including QIP and NDF schemes) programme. The Department places emphasis on Component Technology, Computing, Data Sciences, Information Security, High Speed Networks, Wireless and Mobile Networks, Agile Programming Methodologies, Language Technologies, Software Architecture, Software metrics, and several other recent topics. The Choice Based Credit System is followed for PG program which enables the selection of subjects by students themselves and confers grades relative to the peer's performance. The curriculum of all courses are designed in such a way so as to enable students to carry out major and minor projects in leading industries/institutions, besides their regular classes and seminars. The students of the department have done projects in major companies like TCS, HCL, RAMCO, CTS, Nature Soft, NAL, ISRO, NLC, IGCAR etc. The Department regularly organizes a series of lectures by academicians and professionals of the highest repute, which lay stress on the latest innovative technologies in the field of Computer Science and Engineering and Information Technology.
          </p>
          <div className="d-btn-hold text-left">
             <button className="d-read px-5 py-2 text-white ">
              Download Brochure
             </button>
          </div>
        </div>

         </div>;
};

export default About;
