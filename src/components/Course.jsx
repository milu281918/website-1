import React from "react";
import './Content.css'
function Course() {

    return (
      <>
      <div className="card">
        <div className="row">
        <div className="course-text">
                        <h3 style={{color:'white'}}>Each Course of the program companies </h3>
                        <h3 style={{color:'white'}} >Tech Skills</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure hic, ex et excepturi
                            ipsam quidem incidunt asperiores iste quae!Minus iure hic, ex et excepturi ipsam quidem
                            incidunt asperiores iste quae!</h4>
                    </div>

                    <div className="button1">
                        <button className="btn-primary" >Learn More</button>
                    </div>
        </div>
        <div className="row">
        <div className="img12">

        </div>

            <h4 style={{color:" rgb(95, 95, 95)"}}>Image form <span style={{color: 'rgb(2, 189, 130)'}}>Freepik</span></h4>
        </div>
        <div className="row">
            
        <div className="text-card">
                        <h3 style= {{color: "rgb(2, 189, 130)"}}>65%</h3>
                        <h4 style={{color: "rgb(44, 44, 44)"}}>Sample Headline</h4>
                        <h4 style={{color: "rgb(95, 95, 95)"}}>Sample text.Click to select the text Element</h4>
                    </div>
                    <div className="text-card">
                    <h3 style= {{color: "rgb(2, 189, 130)"}}>20%</h3>
                        <h4 style={{color: "rgb(44, 44, 44)"}}>Sample Headline</h4>
                        <h4 style={{color: "rgb(95, 95, 95)"}}>Sample text.Click to select the text Element</h4>
                    </div>
        </div>
      </div>
      
      </>
    );
  }
  
  export default Course;