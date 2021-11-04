import React, { useState,useEffect} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import Button from './UI/Button';

import logo from '../images/logo.svg';

const  NavBar =() => {
  
    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);
    const [scrolled,setScrolled]=useState(false)

    const handleMobileClick= () =>setClick(!click);

    const closeMobileMenu = ( ) => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    
    useEffect(() => {
      showButton();
    }, []);

window.addEventListener('resize',showButton);

const handleScroll=() => {
  const offset=window.scrollY;
  if(offset > 200 ){
    setScrolled(true);
  }
  else{
    setScrolled(false);
  }
}

useEffect(() => {
  window.addEventListener('scroll',handleScroll)
})
let navbarClasses=['navbar--'];
if(scrolled){
  navbarClasses.push('scrolled');
}





    return (
      

            <div className={navbarClasses.join(" ")}>
                <div className="navbar--container">
                    <Link to='/' className="navbar--logo">
                        <img src={logo}></img>
                    </Link>
              
                
              <div className={"mobile--menu" +`${click ? "active": ''}`}>
               <ul className="nav--menu">
                <li className="nav--item">
                   <Link to='/' className="nav--links" onClick={closeMobileMenu} >
                      Home
                   </Link> 
                </li>

                <li className="nav--item">
                    <Link to='/Pricing' className="nav--links" onClick={closeMobileMenu}>
                      Pricing
                    </Link> 
                </li>

                <li className="nav--item">
                    <Link to='/Product' className="nav--links" onClick={closeMobileMenu}>
                      Product
                    </Link> 
                </li>

                <li className="nav--item">
                   <Link to='/About-us' className='nav--links' onClick={closeMobileMenu}>
                     About Us
                   </Link>
                </li>

                <li className="nav--item">
                   <Link to='/Careers' className='nav--links' onClick={closeMobileMenu}>
                     Careers
                   </Link>
                </li>

                <li className="nav--item">
                   <Link to='/Community' className='nav--links' onClick={closeMobileMenu}>
                     Community
                   </Link>
                </li>
              </ul>
              </div>
             {button && <Button buttonstyle="btn--dark" buttonsize="btn--medium">Get started</Button> } 
            

             <div className="menu--icon" onClick={handleMobileClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
          
           </div>
        </div>
    )
}

export default NavBar;