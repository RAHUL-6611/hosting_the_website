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
          The Department of Economics was established in 1986. Over the last thirty two years, the Department has carved out a niche in economics education map of India. The Department discharges three functions, namely teaching, research and extension. So far, it has produced a large number of post-graduates, as well as M.Phil. and Ph.D. scholars who are placed in some of the premier institutions in the country and elsewhere. The Department has also emerged as a popular centre for training officials from government and corporate sectors, especially in the area of econometrics.
          </p>
          <div className="d-btn-hold text-left">
             <button className="d-read px-5 py-2 text-white ">
               Read more
             </button>
          </div>
        </div>

         </div>;
};

export default About;
