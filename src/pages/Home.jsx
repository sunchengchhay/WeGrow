import React from "react";
<<<<<<< HEAD
import Hero from '../components/Home/Hero';
import Benefit from '../components/home/Benefits';
import Faq from '../components/home/Faq';
import Quote from '../components/home/Quote';
import Who from '../components/home/Whoarewe';
import WhyOrg from '../components/home/WhyOrganization';
import Why from '../components/home/WhySection';

=======
import Benefit from "../components/home/Benefits";
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import Quote from "../components/home/Quote";
import Who from "../components/home/Whoarewe";
import WhyOrg from "../components/home/WhyOrganization";
import Why from "../components/home/WhySection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { useSelector } from "react-redux";
>>>>>>> origin/dana-merge

const Home = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
<<<<<<< HEAD
        <Hero />
        <Who />
        <Why />
        <WhyOrg />
        <Benefit />
        <Quote/>
        <Faq />
=======
      <Header />
      <Hero />
      <Who />
      <Why />
      <WhyOrg />
      <Benefit />
      <Quote />
      <Faq />
      <Footer />
>>>>>>> origin/dana-merge
    </>
  );
};

export default Home;
