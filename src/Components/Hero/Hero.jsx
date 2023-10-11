import React from "react";
import "../Hero/Hero.scss";
import HeroImage from "../../assets/heroimg.jpg";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="wrapper">
        <div className="middle-contents">
          <div className="intro">GET MORE THAN A CLEAN ENERGY SOURCE</div>

          <div className="title">
            Empowering a Sustainable Future with, MacFa Nigeria Enterprise
          </div>

          <div className="c-t-a">
            <Link to="products" smooth={true} offset={-50}>
              See our products
            </Link>
          </div>
        </div>

        <div className="bottom-contents">
          <div className="left">
            <div className="box1">PERFECTION IS CREATED, NOT MADE</div>

            <div className="box1">
              MACFA NIGERIA ENTERPRISE HAS BEEN RUNNING FOR 10 YEARS AND
              COUNTING
            </div>
          </div>

          <div className="right">
            <div className="socials">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="icon" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
