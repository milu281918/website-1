import './Card.css'
import React from "react";
import img1 from "../assets/logo-1.png";
import img2 from "../assets/logo-2.png";
import img3 from "../assets/logo-3.png";
import { FaArrowRight } from "react-icons/fa";
function Card() {

  return (
    <> 
     <div className="card">
        <div className="row">
            <div className="img1">
                <img src={img1} alt="" />
            </div>
            <div className="text-card">
                <h3>Visualize it</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius temporibus ullam, non eum dolorem.</h4>
            </div>
            <div ><FaArrowRight></FaArrowRight></div>
            
            </div>
        <div className="row">
            <div className="img1">
                <img src={img2} alt="" />
            </div>
            <div className="text-card">
                <h3>Visualize it</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius temporibus ullam, non eum dolorem.</h4>
            </div>
            <div><FaArrowRight></FaArrowRight></div>
            
            </div>
        <div className="row">
            <div className="img1">
                <img src={img3} alt="" />
            </div>
            <div className="text-card">
                <h3>Visualize it</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius temporibus ullam, non eum dolorem.</h4>
            </div>
            <div><FaArrowRight></FaArrowRight></div>
            
            </div>
     </div>
    </>
  );
}

export default Card
