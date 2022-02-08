import React, { useState } from 'react';

import facImg from "../../images/ZayarazG.png"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"
import img7 from "../../images/img7.jpg"
import img8 from "../../images/img8.jpg"

let facultyData = [
    {
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 0
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img1,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 5
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img2,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 455555
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img3,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 5545
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img4,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 4225
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img5,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 145
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img6,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 453
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img7,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 4524
    },
    
    
]

export default function Faculty(){

    let [state, setState] = useState(0)

    let name = facultyData[state].name  
    let qualify = facultyData[state].qualification  
    let Year = facultyData[state].Year
    let sub = facultyData[state].Subject  
    let msg = facultyData[state].messege 
    let number = facultyData[state].number 
    let image = facultyData[state].img

    return(
        <div className='faculty grid grid-cols-7 my-35'>
            <div className="big col-span-4 p-10 pl-20">
                <div className="fac-info flex">
                   <div className="big-img">
                      <img src={image} />
                   </div>  
                   <div className="big-cont my-20 mx-5">
                       <p>Name : {name}</p>   
                       <p>Qualification : {qualify}</p>   
                       <p>Years of Experience : {Year}</p>   
                       <p>Subject : {sub}</p>   
                    </div>       
                </div>
                <div className='py-10'>
                  <div className='fac-msg text-left'>{msg}</div>
                     <div className='text-left'>
                        <button className='btn-read'>Read more</button>
                     </div>
                </div>
            </div>
            <div className="small col-span-3 mx-10">
             {
                 facultyData.map( (e, index) =>{
                     return (
                         <div className="small-cards flex justify-left px-10 py-5" onClick={()=>{setState(index)}}>
                             <div className="parts1">
                                 <img  className="faculty-img" src={e.img} alt="" />
                             </div>
                             <div className="parts2 px-5">
                                 <h5 className='text-bold'>{e.name}</h5>
                                 <h6>{e.qualification}</h6>
                             </div>
                         </div>
                     )
                 })   
             }
            </div>
        </div>
    )
}