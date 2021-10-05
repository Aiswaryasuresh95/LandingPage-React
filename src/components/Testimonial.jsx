import React from 'react';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";


import TestimonialCard from './TestimonialCard';
import './Testimonial.css';


import img1 from '../images/avatar-ali.png';
import img2 from '../images/avatar-anisha.png';
import img3 from '../images/avatar-richard.png';
import img4 from '../images/avatar-shanai.png';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];



const TestimonialSection = () =>{

  const clientData = [
      {
          id:'1',
          clientImage:img2,
          clientName:'Anisha Li',
          clientWords:'“Manage has supercharged our team’s workflow. The ability to maintain  on larger milestones at all times keeps everyone motivated.”'

      },
      {
        id:'2',
        clientImage:img1,
        clientName:'Ali Bravo',
        clientWords:'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much  more focused.”'

    },
    {
        id:'3',
        clientImage:img3,
        clientName:'Richard Watts',
        clientWords:'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'

    },
    {
        id:'4',
        clientImage:img4,
        clientName:'Shanai Gough',
        clientWords:'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'

    },
   

]



    return(
        <div className="testimonial-container">
            <h2>What they’ve said</h2>
            
            <div className="testimonial-card">
              {/* <Carousel breakPoints={breakPoints}
              pagination={false}
              enableSwipe={true}
              showArrows={false}
            
              
            > */}
            {clientData.map((item) =>{ 
                return(
                    <TestimonialCard 
                     key={item.id}
                     name={item.clientName}
                     img={item.clientImage}
                     content={item.clientWords}
                    />
                )
            })}
             {/* </Carousel>  */}
            </div>
        
        </div>
    )
    }


    export default TestimonialSection;
