import React from "react";
import "../Hero/Hero.scss";
import HeroImage from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="top">
          <div className="intro">Get more than a reliable power plant</div>

          <div className="main">
            Empowering a Sustainable Future with Green Energy Solutions
          </div>

          <div className="c-t-a">
            <Link>Explore Our Products</Link>
          </div>
        </div>

        <div className="bottom">
          <div className="sect-1">
            <p>PERFECTION IS CREATED, NOT MADE</p>
            <p> MacFa Nigeria Enterprise is the go-to solution you need</p>
          </div>
          
          <div className="socials">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
