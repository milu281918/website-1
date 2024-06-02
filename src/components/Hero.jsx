import React from "react";
import img1 from "../assets/header-bg.png";
import './Hero.css'
function Hero() {

    return (
      <>
       <div className="banner">
        <div className="text-1">
                <h2 className="banner-text-large">
                    Happiness &
                    <h2 className="banner-text-large2">Meaningfulness Courses</h2>
                </h2>
                <div className="h4-banner-text-small">
                    <h4 className="banner-text-small" >
                        <i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et vel dicta rem illum
                            quia, praesentium nobis tempore deserunt ad architecto asperiores esse assumenda
                            officiis.</i>
                    </h4>
                </div>

            </div>
            <div className="button">
                <button className="btn-primary">Learn More</button>
            </div>
            <div class="text-1">
                <h4 className="banner-text-small"><i>Image from Freepik</i></h4>
            </div>
            </div>
      
      </>
    );
  }
  
  export default Hero;