import React from 'react';
import './MainSectionlist.css';

const MainSectionList =({key,num,heading,content}) =>{
    return(
        <div key={key} style={{marginBottom:'2rem'}}>
            <div className="list-heading">
                <p>{num}</p>
                <h3>{heading}</h3>
            </div>
            <div className="list-content">
             <p> {content} </p>
            </div>
            
        </div>

    )
}


export default MainSectionList;