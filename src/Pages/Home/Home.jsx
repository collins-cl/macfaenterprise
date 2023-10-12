import React from "react";
import "../Home/Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import cat2 from "../../assets/cat2.jpg";
import man1 from "../../assets/man1.jpg";
import Quality from "../../Components/Quality/Quality";
import Products from "../../Components/Products/Products";
import Services from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/FAQs/Faq";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Navbar />

        <div className="hero-contents">
          <Hero />
        </div>
      </div>

      <div className="about">
        <div className="left">
          <div className="head">About Company</div>

          <h2>your trusted electrical energy equipments supplier</h2>

          <div className="brief-info">
            Welcome to MacFa Nigeria Enterprise, your premier source AVr/KvA
            generators and transformer solutions that powers a sustainable
            future.
            <p>
              <span>Our commitment: </span> At MacFa, we are more than just a
              supplier, we are pioneers in the world of AVr transformer. Our
              mission is to deliver cutting edge transformer solutions and this
              sets us at an advantage from our competitors. Being the only
              verified source for the import of AVR transformers into Africa,
              our flexibility and ability to offer genuine products is worth
              working with us.
            </p>
          </div>
        </div>

        <div className="right-imgs">
          <div className="pic1">
            <motion.img
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              src={man1}
              width={300}
              alt="an engineer of macfa generator services"
            />

            <div className="date">
              since <span>2007</span>
            </div>
          </div>

          <div className="pic2">
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2 }}
              src={cat2}
              width={300}
              alt="a generator that macfa services offer"
            />
          </div>
        </div>
      </div>

      <Quality />

      <Services />

      <Products />

      <WhyUs />

      <Faq />

      <div className="wrap">
        Well, that's a wrap!. Feel free to reach out to us on all our social
        platforms, relating to issues you've faced or enquiries. We are ever
        ready to get back to you and offer our services.
        <p>
          <span> MacFa Nigeria Enterprise</span> got you covered for all
          electrical equipments and manual services collectively.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
