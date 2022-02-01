import React from "react";

import './newsPTU.css';

export default function NewsPTU()
{
    return(
        <div className="news-corner grid grid-cols-6 gap-4 my-20">
            <div className="news-part col-span-4">
                <div className="notice-head">
                    <h2>Notices and updates</h2>
                </div>
            </div>
            <div className="news-part col-span-2 mr-5">
                <div>
                    <div className="text-left up"><h2>Upcomming Events</h2></div>
                    <div className="events">
                       <Event />
                       <Event />
                       <Event />
                       <Event />
                       <Event />
                       <Event />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Event = () => {
    return (
        <div className="flex card-part">
              <div className="box-card">
                  <div className="date">
                     <h4>26 Jan</h4>
                  </div>
              </div>
              <div className="description">
                  <div>
                     <p>Commencement of UG classes</p>
                     <p>through online mode</p>
                  </div>
              </div>
        </div>
    )
}