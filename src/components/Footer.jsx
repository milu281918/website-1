
import React from "react";
import './Card.css'
import { FaCheck } from "react-icons/fa6";
function Footer() {

    return (
      <>
<div className="start">
<h2 style={{color: "#ffffff"}}>Start using Our App for free</h2>
<div className="start-1">  
                <div className="box-1">              
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore quibusdam ea. Porro,
                        culpa sint iusto incidunt iure aspernatur.</h4>
                    <input placeholder="Enter your name" type="text"/>
                  
                        <button className="btn-primary" style={{color:"Black"}}>Submit</button>
                    
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
                <div className="box-2">

                <ul className="list"
                >
        <li> <FaCheck /> quo rerum placeat, quam</li>
        <li> <FaCheck />quo rerum placeat, quam</li>
        <li> <FaCheck />quo rerum placeat, quam</li>
     </ul>
   
                </div>
            </div>
</div>


  <div className="web">
    
    <h3 style={{margin:0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, error.</h3>
</div>
      </>
    );
  }
  
  export default Footer
