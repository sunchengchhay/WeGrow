import React from "react";
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero';
import Modal_Post from '../components/course/Modal_Post';
import Benefit from '../components/home/Benefits';
import Faq from '../components/home/Faq';
import Quote from '../components/home/Quote';
import Who from '../components/home/Whoarewe';
import WhyOrg from '../components/home/WhyOrganization';
import Why from '../components/home/WhySection';


const Home = () => {
  return (
    <>
        <Hero />
        <Who />
        <Why />
        <WhyOrg />
        <Benefit />
        <Quote/>
        <Faq />
        <Footer />
        <Modal_Post/>
    </>
  );
};

export default Home;
