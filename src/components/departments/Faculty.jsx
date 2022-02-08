import React, { useState } from 'react';

import facImg from "../../images/ZayarazG.png"

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
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 5
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 455555
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 5545
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 4225
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 145
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 453
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 4524
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 435
    },{
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Internet of Things",
        messege: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto delectus quis reiciendis, provident, nostrum officiis harum, possimus facilis adipisci voluptatibus! Officiis placeat assumenda eius iste porro quia ratione labore?",
        number : 45
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

    return(
        <div className='faculty grid grid-cols-7 my-20 py-20'>
            <div className="big col-span-4">
                <div className="fac-info flex">
                   <div className="big-img">
                      <img src="" alt="" />
                   </div>  
                   <div className="big-cont">
                       <p>Name : {name}</p>   
                       <p>Num : {number}</p>   
                       <p>Qualification : {qualify}</p>   
                       <p>Years of Experience : {Year}</p>   
                       <p>Subject : {sub}</p>   
                    </div>       
                </div>
                <div className='fac-msg'>{msg}</div>
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
                                 <h6>{e.number}</h6>
                             </div>
                         </div>
                     )
                 })   
             }
            </div>
        </div>
    )
}