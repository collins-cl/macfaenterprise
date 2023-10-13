import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import { IoLogoSlack, IoCart } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";
import { Link as ContactLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleQoute = () => {
    let number = +2348060015910;
    let message =
      "Hi, i would love to know the quote for your available products sir, kindly say which is available";

    let url = `https://wa.me/${number}?text=${encodeURI(message)}&app_absent=0`;

    window.open(url).focus();
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left-side">
          <div className="logo">
            <FaBars className="hamburger" onClick={() => setOpen(true)} />
            <div className="logo-itm">
              <IoLogoSlack className="icon" />
              <p>
                MacFa<span> Ng</span>
              </p>
            </div>
          </div>

          <div className={open ? "links-mobile" : "links-desktop"}>
            <div className="mobile-logo-itm">
              <IoLogoSlack className="icon" />
              <p>
                MacFa<span> Ng</span>
              </p>
            </div>
            <div className="links">
              <Link
                to="about"
                offset={-50}
                onClick={() => setOpen(false)}
                smooth={true}
              >
                About
              </Link>
              <Link
                to="services"
                offset={-50}
                onClick={() => setOpen(false)}
                smooth={true}
              >
                Services
              </Link>
              <Link
                to="products"
                offset={-50}
                onClick={() => setOpen(false)}
                smooth={true}
              >
                Products
              </Link>
              <Link
                to="faq"
                offset={-50}
                onClick={() => setOpen(false)}
                smooth={true}
              >
                FAQs
              </Link>
            </div>

            <LiaTimesSolid
              className="close-icon"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>

        <div className="cart-quote">
          {location.pathname === "/products" ? (
            <div className="cart">
              <IoCart className="icon" />
            </div>
          ) : null}

          <div className="get-quote">
            <ContactLink onClick={handleQoute}>Get A Quote</ContactLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
