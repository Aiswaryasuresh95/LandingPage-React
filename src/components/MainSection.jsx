import React from 'react'
import './MainSection.css';

import MainSectionList  from './MainSectionlist';



const MainSection =() => {

    const sectionData=[
        {
             tokennum:'01',
             heading: ' Track company-wide progress',
             content:' See how your day-to-day tasks fit into the wider vision. Go from  tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },
    
        {
            tokennum:'02',
            heading: 'Advanced built-in reports',
            content:'Set internal delivery estimates and track progress toward company  goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },
         
        {
            tokennum:'03',
            heading: ' Everything you need in one place',
            content:' Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
        },
    
    ];
    



    return (
        <section className="mainsection-wrapper">
            <div className="mainsection-about-heading">
                <h2>What’s different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without 
                   the complexity. Our software is tailor-made for modern digital 
                   product teams. </p>

            </div>

                <div className="mainsection-about-list">

                {sectionData.map((item)=>{
                    return(    
                        <MainSectionList key={item.tokennum} 
                        num={item.tokennum} 
                        heading={item.heading} 
                        content={item.content} />
                    )
                    
                })}
               </div> 
            
        </section>
    )
}


export default MainSection;