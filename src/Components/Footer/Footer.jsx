import React from "react";
import "../Footer/Footer.scss";
import { FaSlack } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="logo">
          <div className="img">
            <FaSlack className="icon" />{" "}
            <p>
              MacFa <span>Ng</span>
            </p>
          </div>

          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            magni magnam cum at? Voluptate nobis nostrum, unde quas distinctio
            quaerat?.
          </p>
        </div>

        <div className="company">
          <p>Company</p>

          <div className="links">
            <Link>About</Link>
            <Link>Product</Link>
            <Link>Misson</Link>
            <Link>FAQs</Link>
          </div>
        </div>

        <div className="conditions">
          <p>Further Links</p>

          <div className="f-links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Chat with CEO
            </a>
          </div>
        </div>

        <div className="get-in">
          <p>Get in touch</p>

          <div className="loc">
            <p>address</p>
            <a href="tel:+">number</a>
            <a href="mailto:">email</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright ©️ 2023 MacFa {"  "}| Developed by{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Coledev
        </a>
      </div>
    </div>
  );
};

export default Footer;
