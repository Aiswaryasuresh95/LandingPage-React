import React from 'react';
import NavBar from '../NavBar';
import MainSection from '../MainSection';
import TestimonialSection from '../Testimonial';
import Footer from '../Footer';
import '../NavBar.css';


import Homsection from '../HomeSection';
import './Home.css';


const Home= () =>{
    return(
        <section className="home--wrapper">
           <NavBar /> 
          <Homsection />
          <MainSection/>
          <TestimonialSection />
          <Footer />
        </section>
    )
}


export default Home;