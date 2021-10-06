
import './Footer.css';
import logo from '../images/logo.svg';
import Button from "./UI/Button";

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
              <div className="logo--socialicons">
                  <img src={logo} alt="logo" ></img>
                  <ul className="icons">
                      <li className="icon--fb"><FaFacebookF style={{color:"black"}}/></li>
                      <li className="icon--yt"><FaYoutube style={{background:'white',color:'black'}}/></li>
                      <li className="icon--twt"><ImTwitter style={{height:'1.5rem',width:'1.5rem'}}/></li>
                      <li className="icon--pi"><FaPinterestP style={{color:'black',width:'1.5rem',height:'1.5rem'}}/></li>
                      <li className="icon--insta"><AiOutlineInstagram  style={{width:'2rem',height:'2rem'}}/></li>
                  </ul>
                </div>
               <div className="menu--one">   
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
                  
              </div>
              <div className="menu--two">
                  <li>Careers</li>
                  <li>Community</li>
                  <li>Privacy Policy</li>
              </div>

              <div className="contact--input">
                  <input type="text" placeholder=" Updates in your inbox…" />
                  <Button buttonsize="btn--small"> Go</Button>
              </div>
              <div className="copyright--section">
                  <p>Copyright 2020. All Rights Reserved</p> 
             </div>
                
          </div>
        
      </section>
    )
}

export default Footer;
