import React from 'react';
import Button from './UI/Button';
import './HomeSection.css';


import mainillustration from '../images/illustration-intro.svg';


const Homsection = ( ) =>{

    return(
        <>

           <section className="home-container">
             
               <div className="home-mainheading">
                   <h1> Bring everyone together to build better products.</h1>
                   <p>Manage makes it simple for software teams to plan day-to-day 
                     tasks while keeping the larger team goals in view.</p>
                     <Button>Get Started</Button>
               </div>
               <div className="home-mainillutration">
                   <img src={mainillustration} alt="main illustartion" ></img>
               </div>
               
           </section>
        </>
    )

}

export default Homsection;