import React from "react";

import './index.css';

export default function NewsBlock()
{
    return(
        <>
         <div className="newsContainer" style={{"background" : "white"}}>
         <h5 style={{"padding-top" : "2rem"}}>Highlights , Announcements ,Current Openings</h5>

      <div class="container" style={{"margin-top" : "50px"}}>
          <div class="row">
              <div class="col-md-4 pt-3">
                <div class="newsCard" >
                    <div class="newsCard-body">
                      <h5 class="newsCard-header-pills text-light bg-dark title">Latest News</h5>
                      <div class="scroll-bg">
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                      </div>
                    </div>
                  </div>
              </div>
              
              <div class="col-md-4 pt-3">
                <div class="newsCard">
                    <div class="newsCard-body">
                      <h5 class="newsCard-header-pills text-light bg-dark title">Events</h5>
                        <div class="scroll-bg">
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                          <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                        </div>         
                    </div>
                </div>
              </div>
          </div>
      </div>

      <h5 style={{"margin-top" : "5rem"}}>Current opeanings , Highlights ,Featured Research</h5>

      <div class="container-1" style={{"margin-top" : "50px"}}>

        {/* <!-- Flex box 1--> */}
        <div class="box-1" >
          <div class="newsCard">
            <div class="newsCard-body">
              <h5 class="newsCard-header-pills text-light bg-dark title">current opeanings</h5>
              <div class="scroll-bg">
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Flex box 2--> */}
        <div class="box-2">
          <div class="newsCard">
            <div class="newsCard-body">
              <h5 class="newsCard-header-pills text-light bg-dark title">Announcements</h5>
              <div class="scroll-bg">
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
              </div>              
            </div>
          </div>
        </div>

        {/* <!-- Flex box 3--> */}
        <div class="box-3">
          <div class="newsCard">
            <div class="newsCard-body">
              <h5 class="newsCard-header-pills text-light bg-dark title">Featured Research</h5>
              <div class="scroll-bg">
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
                  <li><a href="#">Some quick example text to build on the newsCard title and make up the bulk of the newsCard's content.</a></li>
               </div>              
            </div>
          </div>
        </div>

      </div>
         </div>
        </>
    )
}