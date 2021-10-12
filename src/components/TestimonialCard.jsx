import React from 'react';


import './TestimonialCard.css';



const TestimonialCard = ({key,name,img,content}) =>{
    return(
        <>
        
        <div className="client-card"> 
            
             <img src={img} className="client-image" />
             <h3 className="client-name">{name}</h3>
             <p className="client-word">{content}</p>
        </div>

        </>
    )
    
}

export default TestimonialCard;