import Button from "./UI/Button";
import './Footer.css';
import logo from '../images/logo.svg';

// import {RiFacebookBoxFill,RiInstagramFill,RiYoutubeFill,RiPinterestFill } from 'react-icons/ri';
// import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {ImTwitter} from 'react-icons/im';
import {FaPinterestP} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () =>{
    return(
      <section className="footer--wrapper">
          <div className="footer--sectionmain">   
              <h1>Simplify how your team works today.</h1>
              <Button type="text" buttonstyle='btn--light'>Get Started</Button>
          </div>
          <div className="footer--socialsmenu">
              <div>
                  <img src={logo} alt="logo" ></img>
                  <ul>
                      <li><FaFacebookF /></li>
                      <li><FaYoutube/></li>
                      <li><ImTwitter/></li>
                      <li><FaPinterestP/></li>
                      <li><AiOutlineInstagram /></li>
                  </ul>
                     

              </div>
              <div>
                  
              </div>
                
          </div>
        
      </section>
    )
}

export default Footer;

// Home
//   Pricing
//   Products
//   About Us
//   Careers
//   Community
//   Privacy Policy

//   Updates in your inbox…
//   Go

//   Copyright 2020. All Rights Reserved