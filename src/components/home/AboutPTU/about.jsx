import React from "react";

import './about.css';
import { BsArrowDownRightSquareFill } from '../../../../node_modules/react-icons/bs';

import imgs1 from '../../../images/ece 2.jpg'
import imgs2 from '../../../images/cse.jpg'

export default function AboutComp()
{
    return <>
             <div className="aboutPart grid grid-cols-5 gap-4 my-20">
                 <div className="subParts">
                    <div className="quick-li">
                       <h7 className="quick-link">Quick Links</h7>
                    </div>
                    <ol>
                        <li className="flex justify-around"><BsArrowDownRightSquareFill />Academics</li><hr/>
                        <li className="flex justify-around"><BsArrowDownRightSquareFill />Academics</li><hr/>
                        <li className="flex justify-around"><BsArrowDownRightSquareFill />Placements</li><hr/>
                        <li className="flex justify-around"><BsArrowDownRightSquareFill />Admissions</li><hr/>
                        <li className="flex justify-around"><BsArrowDownRightSquareFill />Researches</li><hr/>
                    </ol>
                 </div>
                 <div className="subParts col-span-3">
                     <div className="head-hold">
                        <h7 className="about-head">About PTU</h7>
                     </div>
                     <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi dicta numquam accusantium ad a quas ut tempora aliquid recusandae! Reiciendis molestias dolores odit magni perferendis necessitatibus rem. Officia, aut. Quibusdam mollitia cupiditate, molestiae aperiam, labore animi aspernatur et ipsa illum unde delectus enim natus quo minus quas quidem modi magni officiis debitis alias error, adipisci explicabo. Quam voluptas omnis sapiente, cumque dolores, reiciendis facilis minus iusto voluptatem temporibus delectus ratione. Libero itaque, ipsum aliquam distinctio ipsa sequi velit officia soluta eius saepe aspernatur culpa enim pariatur voluptatibus ad labore, eligendi sint placeat adipisci doloribus tenetur porro tempore sunt reprehenderit.</p>
                     <div className="about-img">
                       <img src={imgs2} alt="" />
                     </div>
                 </div>
                 <div className="subParts">
                    <Card /> 
                    <Card /> 
                    <Card /> 
                 </div>
             </div>
           </>
}

const Card = () => {
    return (
        <div className="card-msg">
            <div className="msg-head">
                <h3>Why to choose PTU ?</h3>
            </div>
            <img src={imgs1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eaque!</p>
            <p>Read more...</p>
        </div>
    )
}