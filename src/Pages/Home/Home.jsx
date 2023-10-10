import React from "react";
import "../Home/Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import cat2 from "../../assets/cat2.jpg";
import man1 from "../../assets/man1.jpg";
import Quality from "../../Components/Quality/Quality";
import Products from "../../Components/Products/Products";
import Services from "../../Components/Services/Services";

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
            <img
              src={man1}
              width={300}
              alt="an engineer of macfa generator services"
            />

            <div className="date">
              since <span>2007</span>
            </div>
          </div>

          <div className="pic2">
            <img
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
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
      <p>scsc</p>
    </div>
  );
};

export default Home;
