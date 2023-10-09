import React from "react";
import "../Hero/Hero.scss";
import HeroImage from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="wrapper">
        <div className="middle-contents">
          <div className="intro">GET MORE THAN A CLEAN ENERGY SOURCE</div>

          <div className="title">
            Empowering a Sustainable Future with, MacFa Nigeria Enterprise
          </div>

          <div className="c-t-a">See our products</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
