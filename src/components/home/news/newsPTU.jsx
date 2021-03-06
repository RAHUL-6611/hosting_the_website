import React from "react";


import './newsPTU.css';

let eventObj = [
    {
        topic: "Commencement of offline classes",
        message : "For undergraduate students it is scheduled to be offline classes begins ",
        date : "4",
        month : "Feb"
    },
    {
        topic: "Republic day",
        message : "Republic day was celebrated",
        date : "26",
        month : "Jan"
    },
    {
        topic: "New year",
        message : "Happy new year 2022",
        date : "1",
        month : "Jan"
    },
    {
        topic: "Commencement of online classes",
        message : "College will be remained closed upto feb 4 and classes will go online",
        date : "28",
        month : "Dec"
    }
]


let newsObj = [
    {
        topic: "CoE Announcement",
        byWhom: "Registar",
        message : "Classes will be conducted in offline mode with effect from 4.2.2022 except for First year B.Tech."
    },
    {
        topic: "Examination",
        byWhom: "Examination wing",
        message : "Due to the persistent pandemic situation in the UT, all examinations are postponed and the new dates will be announced on this website later."
    },
    {
        topic: "For the attention of the first year UG/PG students & Lateral Entry Students",
        byWhom: "Registar",
        message : "The Library & Information Centre seeks information from the students admitted in the academic year 2021-22 for providing photo ID cards on or before 31.1.2022"
    },
    {
        topic: "For the attention of the First year B.Tech. Students",
        byWhom: "Registar",
        message : "The UG/PG students with disabilities studying in PTU for the academic year 2021-22 are informed to submit personal data for the issue of Unique ID for persons with Disabilities (UDID) card by the DHTE, Govt. of Puducherry."
    },
    {
        topic: "AICTE-UBA",
        byWhom: "Registar",
        message : "The first semester online classes commenced on 6.1.2022. The students are instructed to identify the section in which they belong to at <<here>>. The Time Table for all the sections can be viewed/downloaded at <<here>>."
    },
    
]
export default function NewsPTU()
{
    return(
        <div className="news-corner grid grid-cols-6 gap-4 my-20 mx-10">
            <div className="news-part col-span-4">
                <div className="notice-head">
                    <div className="head-head">
                       <h2>Notices and Updates</h2>
                    </div>
                    <div className="update-part">
                        {
                            newsObj.map(e => {
                                return (<Updated topic={e.topic} byWhom={e.byWhom} message={e.message}/>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="news-part col-span-2 mr-5">
                <div>
                    <div className="text-left up"><h2>Upcoming Events</h2></div>
                    <div className="events">
                       {
                            eventObj.map(e => {
                                return (<Event topic={e.topic} message={e.message} date={e.date} month={e.month}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const Updated = ({ topic, byWhom, message }) => {
    return (
        <div className="update">
             
             <div className="content">
                 <h2>{topic}</h2>
                 <div className="newss">
                     <h3>{byWhom}</h3>
                     <br />
                     <p>{message}</p>
                 </div>
             </div>
             <hr />
        </div>
    )
}

const Event = ({ date, month, topic, message }) => {
    return (
        <div className="flex card-part">
              <div className="box-card">
                  <div className="date">
                     <h4 className="date-text">{date} <br /> {month}</h4>
                  </div>
              </div>
              <div className="description">
                  <div>
                     <p>{topic}</p>
                     <p>{message}</p>
                  </div>
              </div>
        </div>
    )
}